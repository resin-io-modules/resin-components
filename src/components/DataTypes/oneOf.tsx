import { JSONSchema7 as JSONSchema } from 'json-schema';
import { randomString } from '../../utils';
import { getJsonDescription } from './utils';

const getCaption = (value: any, schema: JSONSchema) => {
	const item = schema.oneOf!.find(
		(item) => item && (item as JSONSchema).const === value,
	);
	return item ? (item as JSONSchema).title : '';
};

export const operators = {
	is: {
		getLabel: (_s: JSONSchema) => 'is',
	},
	is_not: {
		getLabel: (_s: JSONSchema) => 'is not',
	},
};

type OperatorSlug = keyof typeof operators;

interface OneOfFilter extends JSONSchema {
	title: OperatorSlug;
	properties?: {
		[k: string]: {
			const?: any;
			not?: {
				const?: any;
			};
		};
	};
}

interface DecodeFilterResult {
	field: string;
	operator: OperatorSlug;
	value: any;
}

export const decodeFilter = (
	filter: OneOfFilter,
): DecodeFilterResult | null => {
	const operator = filter.title;
	if (!filter.properties) {
		return null;
	}

	const keys = Object.keys(filter.properties);
	if (!keys.length) {
		return null;
	}
	let value: string;

	const field = keys[0];

	if (operator === 'is') {
		value = filter.properties[field].const;
	} else if (operator === 'is_not') {
		value = filter.properties[field].not!.const;
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
): OneOfFilter => {
	const { title } = schema;
	const base: OneOfFilter = {
		$id: randomString(),
		title: operator,
		description: getJsonDescription(
			title || field,
			operators[operator].getLabel(schema),
			getCaption(value, schema) || '',
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

	if (operator === 'is_not') {
		return Object.assign(base, {
			properties: {
				[field]: {
					not: {
						const: value,
					},
				},
			},
		});
	}

	return base;
};
