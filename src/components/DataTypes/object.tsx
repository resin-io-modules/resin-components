import { JSONSchema7 as JSONSchema } from 'json-schema';
import find from 'lodash/find';
import findKey from 'lodash/findKey';
import mapValues from 'lodash/mapValues';
import pick from 'lodash/pick';
import { regexEscape } from '../../utils';
import { getJsonDescription } from './utils';

const getKeyLabel = (schema: JSONSchema) => {
	const s = find(schema.properties!, { description: 'key' })! as JSONSchema;
	return s && s.title ? s.title : 'key';
};

const getValueLabel = (schema: JSONSchema) => {
	const s = find(schema.properties!, { description: 'value' })! as JSONSchema;
	return s && s.title ? s.title : 'value';
};

export const operators = {
	is: {
		getLabel: (_s: JSONSchema) => 'is',
	},
	is_not: {
		getLabel: (_s: JSONSchema) => 'is not',
	},
	key_is: {
		getLabel: (s: JSONSchema) => `${getKeyLabel(s)} is`,
	},
	key_contains: {
		getLabel: (s: JSONSchema) => `${getKeyLabel(s)} contains`,
	},
	key_not_contains: {
		getLabel: (s: JSONSchema) => `${getKeyLabel(s)} does not contain`,
	},
	key_matches_re: {
		getLabel: (s: JSONSchema) => `${getKeyLabel(s)} matches RegEx`,
	},
	key_not_matches_re: {
		getLabel: (s: JSONSchema) => `${getKeyLabel(s)} does not match RegEx`,
	},
	value_is: {
		getLabel: (s: JSONSchema) => `${getValueLabel(s)} is`,
	},
	value_contains: {
		getLabel: (s: JSONSchema) => `${getValueLabel(s)} contains`,
	},
	value_not_contains: {
		getLabel: (s: JSONSchema) => `${getValueLabel(s)} does not contain`,
	},
	value_matches_re: {
		getLabel: (s: JSONSchema) => `${getValueLabel(s)} matches RegEx`,
	},
	value_not_matches_re: {
		getLabel: (s: JSONSchema) => `${getValueLabel(s)} does not match RegEx`,
	},
};

type OperatorSlug = keyof typeof operators;

const keySpecificOperators: OperatorSlug[] = [
	'key_is',
	'key_contains',
	'key_not_contains',
	'key_matches_re',
	'key_not_matches_re',
];

const valueSpecificOperators: OperatorSlug[] = [
	'value_is',
	'value_contains',
	'value_not_contains',
	'value_matches_re',
	'value_not_matches_re',
];

interface SubSchema {
	title: string;
	properties: {
		[key: string]: {
			const?: string;
			description?: string;
			pattern?: string;
		};
	};
}

interface ObjectFilter extends JSONSchema {
	title: OperatorSlug;
	properties?: {
		[k: string]: {
			contains?: SubSchema;
			not?: {
				contains: SubSchema;
			};
		};
	};
}

export const decodeFilter = (
	filter: ObjectFilter,
): {
	field: string;
	operator: OperatorSlug;
	value: {};
} | null => {
	const operator = filter.title;

	if (!filter.properties) {
		return null;
	}

	const keys = Object.keys(filter.properties);
	if (!keys.length) {
		return null;
	}
	let value: { [key: string]: string };

	const field = keys[0];

	if (operator === 'is') {
		value = mapValues(
			filter.properties[field].contains!.properties,
			(v) => v.const!,
		);
	} else if (operator === 'is_not') {
		value = mapValues(
			filter.properties[field].not!.contains.properties,
			(v) => v.const!,
		);
	} else if (operator === 'key_is' || operator === 'value_is') {
		value = mapValues(
			filter.properties[field].contains!.properties,
			(v) => v.const!,
		);
	} else if (operator === 'key_contains' || operator === 'value_contains') {
		value = mapValues(
			filter.properties[field].contains!.properties,
			(v) => v.description!,
		);
	} else if (
		operator === 'key_not_contains' ||
		operator === 'value_not_contains'
	) {
		value = mapValues(
			filter.properties[field].not!.contains.properties,
			(v) => v.description!,
		);
	} else if (operator === 'key_matches_re' || operator === 'value_matches_re') {
		value = mapValues(
			filter.properties[field].contains!.properties,
			(v) => v.pattern!,
		);
	} else if (
		operator === 'key_not_matches_re' ||
		operator === 'value_not_matches_re'
	) {
		value = mapValues(
			filter.properties[field].not!.contains.properties,
			(v) => v.pattern!,
		);
	} else {
		return null;
	}

	return {
		field,
		operator,
		value,
	};
};

const format = (schema: JSONSchema, object: { [k: string]: string }) => {
	const keyField = findKey(schema.properties!, { description: 'key' })!;
	const valueField = findKey(schema.properties!, { description: 'value' })!;
	const key = object[keyField];
	const value = object[valueField];
	return key && value ? `${key} : ${value}` : key || value;
};

function getValueForOperation(
	operator: OperatorSlug,
	schema: JSONSchema,
	value: string | object,
) {
	if (keySpecificOperators.includes(operator)) {
		const schemaKey = findKey(schema.properties!, { description: 'key' })!;
		return pick(value, schemaKey);
	}
	if (valueSpecificOperators.includes(operator)) {
		const schemaValue = findKey(schema.properties!, { description: 'value' })!;
		return pick(value, schemaValue);
	}
	return value;
}

export const createFilter = (
	field: string,
	operator: OperatorSlug,
	value: any,
	schema: JSONSchema,
): JSONSchema => {
	const { title } = schema;

	value = getValueForOperation(operator, schema, value);

	const base: ObjectFilter = {
		title: operator,
		description: getJsonDescription(
			title || field,
			operators[operator].getLabel(schema),
			format(schema, value),
		),
		type: 'object',
	};

	if (operator === 'is') {
		return Object.assign(base, {
			properties: {
				[field]: {
					contains: {
						title,
						properties: mapValues(value, (v) => ({ const: v })),
					},
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
						contains: {
							title,
							properties: mapValues(value, (v) => ({ const: v })),
						},
					},
				},
			},
		});
	}

	if (operator === 'key_is' || operator === 'value_is') {
		return Object.assign(base, {
			properties: {
				[field]: {
					contains: {
						title,
						properties: mapValues(value, (v) => ({ const: v })),
					},
				},
			},
			required: [field],
		});
	}

	if (operator === 'key_contains' || operator === 'value_contains') {
		return Object.assign(base, {
			properties: {
				[field]: {
					contains: {
						title,
						properties: mapValues(value, (v) => ({
							type: 'string',
							description: v,
							pattern: regexEscape(v),
						})),
					},
				},
			},
			required: [field],
		});
	}

	if (operator === 'key_not_contains' || operator === 'value_not_contains') {
		return Object.assign(base, {
			properties: {
				[field]: {
					not: {
						contains: {
							title,
							properties: mapValues(value, (v) => ({
								type: 'string',
								description: v,
								pattern: regexEscape(v),
							})),
						},
					},
				},
			},
		});
	}

	if (operator === 'key_matches_re' || operator === 'value_matches_re') {
		return Object.assign(base, {
			properties: {
				[field]: {
					contains: {
						title,
						properties: mapValues(value, (v) => ({
							type: 'string',
							pattern: v,
						})),
					},
				},
			},
			required: [field],
		});
	}

	if (
		operator === 'key_not_matches_re' ||
		operator === 'value_not_matches_re'
	) {
		return Object.assign(base, {
			properties: {
				[field]: {
					not: {
						contains: {
							title,
							properties: mapValues(value, (v) => ({
								type: 'string',
								pattern: v,
							})),
						},
					},
				},
			},
		});
	}

	return base;
};
