import { getDataModel } from '../../components/DataTypes';
import { normalizeDateTime } from '../../components/DataTypes/date-time-helpers';

const expectMatchesKeys = (data: any, keys: any) =>
	expect(Object.keys(data).sort()).toEqual(keys.sort());

describe('DataTypes', () => {
	describe('.getDataModel()', () => {
		const dataModelKeys = ['operators', 'createFilter', 'decodeFilter'];

		it('should return null if provided with a falsey value as the schema parameter', () => {
			expect(getDataModel()).toBe(null);
			expect(getDataModel(0 as any)).toBe(null);
			expect(getDataModel(false as any)).toBe(null);
			expect(getDataModel(null as any)).toBe(null);
			expect(getDataModel('' as any)).toBe(null);
		});

		it('should return null for unknown types', () => {
			const schema = {
				type: 'foobar',
			} as any;

			expect(getDataModel(schema)).toBe(null);
		});

		it('should return a model for string types', () => {
			const schema = {
				type: 'string',
			} as any;

			expectMatchesKeys(getDataModel(schema), dataModelKeys);
		});

		it('should return a model for date-time formatted string types', () => {
			const schema = {
				type: 'string',
				format: 'date-time',
			} as any;

			expectMatchesKeys(getDataModel(schema), dataModelKeys);
		});

		it('should return a model for object types', () => {
			const schema = {
				type: 'object',
			} as any;

			expectMatchesKeys(getDataModel(schema), dataModelKeys);
		});

		it('should return a model for boolean types', () => {
			const schema = {
				type: 'boolean',
			} as any;

			expectMatchesKeys(getDataModel(schema), dataModelKeys);
		});

		it('should return a model for number types', () => {
			const schema = {
				type: 'number',
			} as any;
			expectMatchesKeys(getDataModel(schema), dataModelKeys);
		});
	});

	describe('normalizeDateTime', () => {
		it('rejects invalid date', () => {
			expect(normalizeDateTime('wrong time')).toEqual('Invalid date');
			expect(normalizeDateTime('')).toEqual('Invalid date');
		});

		it('formats the date correctly', () => {
			// Format expected timestamps to account for timezone changes
			const tzFormat = (stamp: string) => {
				return new Date(stamp).toISOString().replace(/\.000/, '');
			};
			expect(normalizeDateTime('2017-01-01T08:49:26Z')).toEqual(
				tzFormat('2017-01-01T08:49:26Z'),
			);
			expect(normalizeDateTime('2018-03-26T11:43')).toEqual(
				tzFormat('2018-03-26T11:43'),
			);
			expect(normalizeDateTime('Sun, 01 Jan 2017 08:49:26 +0000')).toEqual(
				tzFormat('2017-01-01T08:49:26Z'),
			);
		});
	});
});
