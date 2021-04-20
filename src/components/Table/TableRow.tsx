import get from 'lodash/get';
import map from 'lodash/map';
import * as React from 'react';
import styled from 'styled-components';
import { Checkbox, CheckboxProps } from '../Checkbox';

/*
 * Get the value specified by the `field` value
 * If a `render` function is available, use it to get the display value.
 */
const renderField = <T extends {}>(row: T, column: TableColumn<T>): any => {
	const value = get(row, column.field);
	if (column.render) {
		return column.render(value, row);
	}
	return value == null ? '' : value;
};

export const CheckboxWrapper = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

export type TableSortFunction<T> = (a: T, b: T) => number;

export interface TableColumn<T> {
	cellAttributes?:
		| React.AnchorHTMLAttributes<HTMLAnchorElement>
		| ((value: any, row: T) => React.AnchorHTMLAttributes<HTMLAnchorElement>);
	field: keyof T;
	key?: string;
	icon?: string;
	label?: string | JSX.Element;
	render?: (
		value: any,
		row: T,
	) => string | number | JSX.Element | null | undefined;
	sortable?: boolean | TableSortFunction<T>;
}

export interface TableRowProps<T> {
	className?: string;
	isChecked: boolean;
	isHighlighted: boolean;
	isDisabled: boolean;
	keyAttribute: string | number;
	onRowClick: (item: T, event: React.MouseEvent<HTMLAnchorElement>) => void;
	toggleChecked: (item: T) => void;
	showCheck: boolean;
	columns: Array<TableColumn<T>>;
	href?: string;
	data: T;
	attributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
	checkboxAttributes?: CheckboxProps;
}

export class TableRow<T> extends React.PureComponent<TableRowProps<T>, {}> {
	public render() {
		const {
			attributes,
			checkboxAttributes,
			columns,
			className,
			data,
			href,
			keyAttribute,
			isChecked,
			isHighlighted,
			isDisabled,
			showCheck,
		} = this.props;
		return (
			<div
				data-display="table-row"
				data-highlight={isChecked || isHighlighted}
				className={className}
			>
				{showCheck && (
					<CheckboxWrapper data-display="table-cell">
						<Checkbox
							checked={isChecked}
							disabled={isDisabled}
							data-key={keyAttribute}
							onChange={() => this.props.toggleChecked(data)}
							{...checkboxAttributes}
						/>
					</CheckboxWrapper>
				)}
				{map(columns, (column) => {
					const cellAttributes =
						typeof column.cellAttributes === 'function'
							? column.cellAttributes(data, get(data, column.field))
							: column.cellAttributes || {};
					return (
						<a
							{...attributes}
							href={href}
							data-display="table-cell"
							data-key={keyAttribute}
							onClick={(event) => this.props.onRowClick(data, event)}
							{...cellAttributes}
							key={column.key || (column.field as string)}
						>
							{renderField(data, column)}
						</a>
					);
				})}
			</div>
		);
	}
}
