import { Dictionary, groupBy, ValueIteratee } from 'lodash';
import * as React from 'react';
export * from './colorUtils';
export * from './schemaUtils';
export * from './styledUtils';

const matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

export const hashCode = function (text: string, max: number): number {
	let hash = 0;
	for (let index = 0; index < text.length; index++) {
		// tslint:disable-next-line no-bitwise
		hash = text.charCodeAt(index) + ((hash << 5) - hash);
	}

	// tslint:disable-next-line no-bitwise
	return (hash >> (text.length * 8)) & max;
};

export const randomString = (length = 16) => {
	let text = '';
	const possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};

export const regexEscape = (str: string) =>
	str.replace(matchOperatorsRe, '\\$&');

export const withConditional = <TProps extends {}>(
	hoc: (Base: React.ForwardRefExoticComponent<TProps>) => any,
	fn: (props: TProps) => boolean,
) => {
	return (Base: React.ForwardRefExoticComponent<TProps>) => {
		const Wrapped = hoc(Base);

		return React.forwardRef<any, TProps>((props, ref) => {
			const Component = fn(props) ? Wrapped : Base;
			return React.createElement(Component, { ...props, ref });
		});
	};
};

export const sortedGroupBy = <T>(
	collection: T[] | null | undefined,
	iteratee: ValueIteratee<T>,
	orderedKeys: string[],
): Dictionary<T[]> => {
	const groupedItems = groupBy(collection, iteratee);

	const sortedGroupedItems: typeof groupedItems = Object.create(null);
	for (const key of orderedKeys) {
		if (groupedItems[key]) {
			sortedGroupedItems[key] = groupedItems[key];
		}
	}
	return sortedGroupedItems;
};
