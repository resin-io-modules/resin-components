import { JSONSchema7 as JSONSchema } from 'json-schema';
import { randomString } from '../../utils';
import { normalizeDateTime } from './date-time-helpers';
import { getJsonDescription } from './utils';

export const operators = {
	is: {
		getLabel: (_s: JSONSchema) => 'is',
	},
	is_before: {
		getLabel: (_s: JSONSchema) => 'is before',
	},
	is_after: {
		getLabel: (_s: JSONSchema) => 'is after',
	},
};

type OperatorSlug = keyof typeof operators;

interface DateTimeFilter extends JSONSchema {
	title: OperatorSlug;
	properties?: {
		[k: string]: {
			type: 'string';
			format: 'date-time';
			const: string;
			formatMaximum?: string;
			formatMinimum?: string;
		};
	};
}

export const decodeFilter = (
	filter: DateTimeFilter,
): {
	field: string;
	operator: OperatorSlug;
	value: string;
} | null => {
	if (!filter.properties) {
		return null;
	}

	const keys = Object.keys(filter.properties);
	if (!keys.length) {
		return null;
	}

	const field = keys[0];
	const operator = filter.title;
	let value: string;

	if (operator === 'is') {
		value = filter.properties[field].const!;
	} else if (operator === 'is_before') {
		value = filter.properties[field].formatMaximum!;
	} else if (operator === 'is_after') {
		value = filter.properties[field].formatMinimum!;
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
): DateTimeFilter => {
	const { title } = schema;
	const base: DateTimeFilter = {
		$id: randomString(),
		title: operator,
		description: getJsonDescription(
			title || field,
			operators[operator].getLabel(schema),
			value,
		),
		type: 'object',
	};

	const normalizedValue = normalizeDateTime(value);

	if (operator === 'is') {
		return Object.assign(base, {
			properties: {
				[field]: {
					type: 'string',
					format: 'date-time',
					const: normalizedValue,
				},
			},
			required: [field],
		});
	}

	if (operator === 'is_before') {
		return Object.assign(base, {
			properties: {
				[field]: {
					type: 'string',
					format: 'date-time',
					formatMaximum: normalizedValue,
				},
			},
			required: [field],
		});
	}

	if (operator === 'is_after') {
		return Object.assign(base, {
			properties: {
				[field]: {
					type: 'string',
					format: 'date-time',
					formatMinimum: normalizedValue,
				},
			},
			required: [field],
		});
	}

	return base;
};
