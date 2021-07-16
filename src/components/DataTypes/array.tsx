import { JSONSchema7 as JSONSchema } from 'json-schema';
import { randomString } from '../../utils';
import { getJsonDescription } from './utils';

export const operators = {
	contains: {
		getLabel: (_s: JSONSchema) => 'contains',
	},
	not_contains: {
		getLabel: (_s: JSONSchema) => 'does not contain',
	},
};

type OperatorSlug = keyof typeof operators;

interface StringFilter extends JSONSchema {
	title: OperatorSlug;
	properties?: {
		[k: string]: {
			not?: {
				contains: {
					const: string;
				};
			};
			contains?: {
				const: string;
			};
		};
	};
	anyOf?: Array<{
		properties?: {
			[k: string]: {
				not?: {
					contains: {
						const: string;
					};
				};
				contains?: {
					const: string;
				};
			};
		};
	}>;
}

export const decodeFilter = (
	filter: StringFilter,
): {
	field: string;
	operator: OperatorSlug;
	value: string;
} | null => {
	const operator = filter.title;
	let value: string;
	let field: string;

	if (filter.properties) {
		const keys = Object.keys(filter.properties);
		if (!keys.length) {
			return null;
		}

		field = keys[0];

		if (operator === 'contains') {
			value = filter.properties[field].contains!.const;
		} else {
			return null;
		}
	} else if (filter.anyOf) {
		if (filter.anyOf.length === 0 || !filter.anyOf[0].properties) {
			return null;
		}
		const keys = Object.keys(filter.anyOf[0].properties!);
		if (!keys.length) {
			return null;
		}

		field = keys[0];

		if (operator === 'not_contains') {
			value = filter.anyOf[0].properties![field].not!.contains.const;
		} else {
			return null;
		}
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
): JSONSchema => {
	const { title } = schema;
	const base: StringFilter = {
		$id: randomString(),
		title: operator,
		description: getJsonDescription(
			title || field,
			operators[operator].getLabel(schema),
			value,
		),
		type: 'object',
	};

	if (operator === 'contains') {
		return Object.assign(base, {
			properties: {
				[field]: {
					type: 'array',
					contains: {
						const: value,
					},
				},
			},
			required: [field],
		});
	}

	if (operator === 'not_contains') {
		return Object.assign(base, {
			anyOf: [
				{
					properties: {
						[field]: {
							type: 'array',
							not: {
								contains: {
									const: value,
								},
							},
						},
					},
				},
				{
					properties: {
						[field]: {
							type: 'null',
						},
					},
				},
			],
		});
	}

	return base;
};
