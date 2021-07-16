import { JSONSchema7 as JSONSchema } from 'json-schema';
import { randomString } from '../../utils';
import { FilterSignature } from '../Filters';
import { getJsonDescription } from './utils';

export const operators = {
	is: {
		getLabel: (_s: JSONSchema) => 'is',
	},
};

type OperatorSlug = keyof typeof operators;

interface BooleanFilter extends JSONSchema {
	title: OperatorSlug;
	properties?: {
		[k: string]: { const: boolean };
	};
}

export const decodeFilter = (filter: BooleanFilter): FilterSignature | null => {
	if (!filter.properties) {
		return null;
	}

	const keys = Object.keys(filter.properties);
	if (!keys.length) {
		return null;
	}

	const field = keys[0];
	const operator = filter.title;
	let value: boolean;

	if (operator === 'is') {
		value = filter.properties[field].const;
	} else {
		return null;
	}
	return {
		field,
		operator,
		value,
	};
};

export const createFilter = (
	field: string,
	operator: OperatorSlug,
	value: any,
	schema: JSONSchema,
): BooleanFilter => {
	const { title } = schema;
	const base: BooleanFilter = {
		$id: randomString(),
		title: operator,
		description: getJsonDescription(
			title || field,
			operators[operator].getLabel(schema),
			value,
		),
		type: 'object',
	};

	if (operator === 'is') {
		return Object.assign(base, {
			properties: {
				[field]: {
					const: value,
				},
			},
			required: [field],
		});
	}
	return base;
};
