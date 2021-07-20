import { JSONSchema7 as JSONSchema } from 'json-schema';
import { randomString, regexEscape } from '../../utils';
import { FULL_TEXT_SLUG } from '../Filters/SchemaSieve';
import { getJsonDescription } from './utils';

export const operators = {
	is: {
		getLabel: (_s: JSONSchema) => 'is',
	},
	contains: {
		getLabel: (_s: JSONSchema) => 'contains',
	},
	full_text_search: {
		getLabel: (_s: JSONSchema) => 'full text search',
	},
	not_contains: {
		getLabel: (_s: JSONSchema) => 'does not contain',
	},
	matches_re: {
		getLabel: (_s: JSONSchema) => 'matches RegEx',
	},
	not_matches_re: {
		getLabel: (_s: JSONSchema) => 'does not match RegEx',
	},
};

type OperatorSlug = keyof typeof operators;

interface StringFilter extends JSONSchema {
	title: OperatorSlug;
	properties?: {
		[k: string]: {
			const?: string;
			pattern?: string;
			description?: string;
			not?: {
				pattern: string;
			};
		};
	};
	anyOf?: Array<{
		properties?: {
			[k: string]: {
				const?: string;
				pattern?: string;
				description?: string;
				not?: {
					pattern: string;
				};
				regexp?: {
					pattern: string;
					flags: string;
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

		if (operator === 'is') {
			value = filter.properties[field].const!;
		} else if (operator === 'contains') {
			value = filter.properties[field].description!;
		} else if (operator === 'matches_re') {
			value = filter.properties[field].pattern!;
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
			value = filter.anyOf[0].properties![field].description!;
		} else if (operator === 'not_matches_re') {
			value = filter.anyOf[0].properties![field].not!.pattern;
		} else if (operator === FULL_TEXT_SLUG) {
			return {
				field: 'any',
				operator,
				value: filter.anyOf[0].properties[keys[0]].regexp!.pattern!,
			};
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

	if (operator === 'is') {
		return Object.assign(base, {
			properties: {
				[field]: {
					title,
					const: value,
				},
			},
			required: [field],
		});
	}

	if (operator === 'contains') {
		return Object.assign(base, {
			properties: {
				[field]: {
					type: 'string',
					description: value,
					pattern: regexEscape(value),
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
							type: 'string',
							description: value,
							not: {
								pattern: regexEscape(value),
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

	if (operator === 'matches_re') {
		return Object.assign(base, {
			properties: {
				[field]: {
					type: 'string',
					pattern: value,
				},
			},
			required: [field],
		});
	}

	if (operator === 'not_matches_re') {
		return Object.assign(base, {
			anyOf: [
				{
					properties: {
						[field]: {
							type: 'string',
							not: {
								pattern: value,
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
