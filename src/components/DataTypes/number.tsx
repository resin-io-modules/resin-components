import { JSONSchema7 as JSONSchema } from 'json-schema';
import { randomString } from '../../utils';
import { getJsonDescription } from './utils';

export const operators = {
	is: {
		getLabel: (_s: JSONSchema) => 'is',
	},
	is_more_than: {
		getLabel: (_s: JSONSchema) => 'is more than',
	},
	is_less_than: {
		getLabel: (_s: JSONSchema) => 'is less than',
	},
};

type OperatorSlug = keyof typeof operators;

interface NumberFilter extends JSONSchema {
	title: OperatorSlug;
	properties?: {
		[k: string]: {
			type: 'number';
			const?: number;
			exclusiveMinimum?: number;
			exclusiveMaximum?: number;
		};
	};
}

export const decodeFilter = (
	filter: NumberFilter,
): {
	field: string;
	operator: OperatorSlug;
	value: number;
} | null => {
	const operator = filter.title;

	if (!filter.properties) {
		return null;
	}

	const keys = Object.keys(filter.properties);
	if (!keys.length) {
		return null;
	}
	let value: number;

	const field = keys[0];

	if (operator === 'is') {
		value = filter.properties[field].const!;
	} else if (operator === 'is_more_than') {
		value = filter.properties[field].exclusiveMinimum!;
	} else if (operator === 'is_less_than') {
		value = filter.properties[field].exclusiveMaximum!;
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
): NumberFilter => {
	const { title } = schema;
	const base: NumberFilter = {
		$id: randomString(),
		title: operator,
		description: getJsonDescription(
			title || field,
			operators[operator].getLabel(schema),
			value,
		),
		type: 'object',
		required: [field],
	};

	if (operator === 'is') {
		return Object.assign(base, {
			properties: {
				[field]: {
					type: 'number',
					const: value,
				},
			},
			required: [field],
		});
	}

	if (operator === 'is_more_than') {
		return Object.assign(base, {
			properties: {
				[field]: {
					type: 'number',
					exclusiveMinimum: value,
				},
			},
			required: [field],
		});
	}

	if (operator === 'is_less_than') {
		return Object.assign(base, {
			properties: {
				[field]: {
					type: 'number',
					exclusiveMaximum: value,
				},
			},
		});
	}

	return base;
};
