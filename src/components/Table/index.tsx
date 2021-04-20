import { faSort } from '@fortawesome/free-solid-svg-icons/faSort';
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import React from 'react';
import { Checkbox, CheckboxProps } from '../Checkbox';
import { CheckboxWrapper, TableColumn, TableRow } from './TableRow';
import sortBy from 'lodash/sortBy';
import isPlainObject from 'lodash/isPlainObject';
import isEqual from 'lodash/isEqual';
import { Pager } from '../Pager';
import styled from 'styled-components';
import { px } from '../../utils';
import { Button } from '../Button';

// TODO: fix typing
const highlightStyle = `
	background-color: ${(props: any) => props.theme.colors.info.light};
`;

const BaseTableWrapper = styled.div`
	overflow-x: auto;
	max-width: 100%;
`;

const SortIcon = styled(FontAwesomeIcon)<
	FontAwesomeIconProps & { isSelected: boolean }
>`
	color: ${(props) => (props.isSelected ? props.theme.colors.info.main : '')};
`;

// TODO: fix typing
const Base = styled.div<
	TableProps<any> & {
		hasCheckbox: boolean;
		hasRowClick: boolean;
		hasGetRowRef: boolean;
	}
>`
	display: table;
	width: 100%;
	border-spacing: 0;
	border-bottom: 1px solid ${(props) => props.theme.colors.quartenary.main};

	> [data-display='table-head'] {
		display: table-header-group;
		background-color: ${(props) => props.theme.colors.quartenary.semilight};

		> [data-display='table-row'] {
			display: table-row;

			> [data-display='table-cell'] {
				display: table-cell;
				border-bottom: 1px solid
					${(props) => props.theme.colors.quartenary.main};
				text-align: left;
				vertical-align: middle;
				padding: 10px 20px;
				font-size: ${(props) => px(props.theme.fontSizes[2])};
			}

			> [data-display='table-cell']:first-child {
				padding-left: ${(props) => (props.hasCheckbox ? '20px' : '40px')};
				${(props) => (props.hasCheckbox ? 'width: 60px' : '')};
			}

			> [data-display='table-cell']:last-child {
				padding-right: 40px;
			}
		}
	}

	> [data-display='table-body'] {
		display: table-row-group;

		> [data-display='table-row'] {
			display: table-row;
			text-decoration: none;
			color: ${(props) => props.theme.colors.secondary.main};
			font-size: ${(props) => px(props.theme.fontSizes[2])};

			> [data-display='table-cell'] {
				display: table-cell;
				text-align: left;
				vertical-align: middle;
				padding: 14px 20px;
				text-decoration: none;
				color: inherit;
			}

			> [data-display='table-cell']:first-child {
				padding-left: ${(props) => (props.hasCheckbox ? '20px' : '40px')};
				${(props) => (props.hasCheckbox ? 'width: 60px' : '')};
			}

			> [data-display='table-cell']:last-child {
				padding-right: 40px;
			}

			> a[data-display='table-cell'] {
				cursor: ${(props) =>
					props.hasRowClick || props.hasGetRowRef ? 'pointer' : 'auto'};
			}

			&:nth-of-type(even) {
				background-color: ${(props) => props.theme.colors.quartenary.light};
			}

			&:hover {
				text-decoration: none;
				${(props) =>
					props.hasRowClick || props.hasGetRowRef || props.hasCheckbox
						? highlightStyle
						: ''};
			}

			&[data-highlight='true'] {
				${highlightStyle} > [data-display="table-cell"]:first-child {
					box-shadow: inset 3px 0px 0 ${(props) => props.theme.colors.info.main};
				}
			}
		}
	}
`;

export interface TableSortOptions<T> {
	reverse: boolean;
	field: keyof T | null;
}

/**
 * A component used to generate a styled table.
 *
 * ## Columns
 *
 * The `columns` property defines what columns the table should display, how they
 * are rendered and whether or not the column is sortable.
 *
 * The `columns` property should be an array of objects with the following properties:
 *
 * | Name          | Type      | Required | Description                                          |
 * | ------------- | --------- | -------- | ---------------------------------------------------- |
 * | field         | `keyof T`  | ✓ | The name of the field this column should render, this should correspond to a key on the objects passed to the `data` property of the `Table` component |
 * | key | `string` | - | Custom key for React to use instead of the field name above |
 * | cellAttributes | <code>object &#124; (value: any, row: T) => object</code> | - | Attributes that are passed to each cell in this column. This can also be a function, which will be called with the value of the `field` provided and the row data (`T`) |
 * | label | <code>string &#124; JSX.Element</code> | - | A string or JSX element that will be used to display the name of the column. If this property is not provided, the `field` property will be used instead |
 * | render | <code>(value: any, row: T) => string &#124; number &#124; number &#124; JSX.Element &#124; null</code> | - | Use a custom render function to display the value in each column cell. This function will be called with the value of the `field` provided and the row data (`T`) |
 * | sortable | <code>boolean &#124; (a: T, b: T) => number</code> | - | If true, the column will be sortable using an alphanumeric sort, alternatively a function can be provided allowing finer grained control over sorting |
 *
 * ## Notes
 *
 * For performance reasons table rows are only re-rendered if the row properties
 * have changed. For this reason, rows **will not** re-render if their properties
 * are mutated: you should clone the item instead, for example:
 *
 * ```js
 * update (index) {
 *   const newData = this.state.data
 *   const element = newData[index]
 *   newData[index] = Object.assign({}, element, { active: !element.active })
 *   this.setState({ data: newData })
 * }
 * ```
 *
 * See the **Updating data in a table** story for an example of how this can be
 * done using a high order component.
 *
 * Additionally, because of this rendering behaviour the `render()` functions in
 * the `Table` component's `columns` property should only use values provided to
 * the render function.
 * When `render()` functions are provided, they must act like pure functions with
 * respect to their props. They should only rely on their arguments to generate
 * their output and not use any context variables. If you are using a context
 * variable in your `render()` function, then changes to that variable will not
 * cause a re-render of the component and will not be reflected on the table.
 *
 *
 * [View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Table/Table.stories.tsx)
 */

export interface TableProps<T> {
	/** An array of column objects, as described above */
	columns: Array<TableColumn<T>>;
	/** An array of objects that will be displayed in the table */
	data?: T[] | null;
	/** If provided, it will make the checked rows a controlled aspect of the table */
	checkedItems?: T[];
	/** If provided, each row in the table will be a clickable link, this function is used to create the link href */
	getRowHref?: (row: T) => string;
	/** If provided, each row will begin with a checkbox. This function is called with every checked row every time a checkbox is toggled on or off. This property requires that you have provided a `rowKey` property */
	onCheck?: (checkedItems: T[]) => void;
	/** A function that is called when a row is clicked. This property requires that you have provided a `rowKey` property */
	onRowClick?: (row: T, event: React.MouseEvent<HTMLAnchorElement>) => void;
	/** A function that is called when a column is sorted */
	onSort?: (sort: TableSortOptions<T>) => void;
	/** A function that is called when the page is incremented, decremented and reset */
	onPageChange?: (page: number) => void;
	/** sort options to be used both as a default sort, and on subsequent renders if the passed sort changes */
	sort?: TableSortOptions<T>; // DO WE REALLY NEED IT ?
	/** Attributes to pass to the anchor element used in a row */
	rowAnchorAttributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
	/** Attributes to pass to the checkbox element used in a row */
	rowCheckboxAttributes?: CheckboxProps;
	/** A field on a row that contains a unique identifier, can help speed up render performance and is required for the onCheck property */
	rowKey?: keyof T;
	/** JSX element(s) to display at the top of the table body */
	tbodyPrefix?: JSX.Element | JSX.Element[];
	/** Highlights one or more rows. This property requires that you have provided a rowKey property: the row with a `rowKey` property that matches one of these values is highlighted. */
	highlightedRows?: any;
	/** Disable one or more rows. This property requires that you have provided a rowKey property: the row with a `rowKey` property that matches one of these values is disabled. */
	disabledRows?: Array<T[keyof T]>;
	/** If provided each row will have classes based on some conditions. Should return a className string */
	getRowClass?: (row: T) => string[];
	/** If true, a pager will be used when displaying items. */
	usePager?: boolean;
	/** The number of items to be shown per page. Only used if `usePager` is true. Defaults to 50. */
	itemsPerPage?: number;
	/** Sets whether the pager is displayed at the top of the table, the bottom of the table or in both positions. Only used if `usePager` is true. Defaults to `top`. */
	pagerPosition?: 'top' | 'bottom' | 'both';
}

export const Table = <T extends any>({
	columns,
	data,
	checkedItems,
	getRowHref,
	onCheck,
	onRowClick,
	onSort,
	onPageChange,
	sort,
	rowAnchorAttributes,
	rowCheckboxAttributes,
	rowKey,
	tbodyPrefix,
	highlightedRows,
	disabledRows,
	getRowClass,
	usePager,
	itemsPerPage,
	pagerPosition,
	...otherProps
}: TableProps<T>) => {
	const [sortField, setSortFiled] = React.useState<keyof T | null>(null);
	const [sortReverse, setSortReverse] = React.useState(false);
	const [page, setPage] = React.useState(0);
	const [internalCheckedItems, setInternalCheckedItems] = React.useState<
		T[] | undefined
	>();
	const [allChecked, setAllChecked] = React.useState(false);

	React.useEffect(() => {
		setInternalCheckedItems(checkedItems);
	}, [checkedItems]);

	React.useEffect(() => {
		const totalItems = data?.length ?? 0;
		if (page !== 0 && totalItems <= page * (itemsPerPage ?? 50)) {
			setPage(0);
		}
	}, [data, itemsPerPage]);

	React.useEffect(() => {
		if (!onCheck) {
			return;
		}
		if (!isEqual(internalCheckedItems, checkedItems)) {
			onCheck(internalCheckedItems || []);
		}
	}, [internalCheckedItems]);

	React.useEffect(() => {
		if (!onPageChange) {
			return;
		}
		onPageChange(page);
	}, [page]);

	const sortData = (data: T[]): T[] => {
		if (!sortField) {
			return data;
		}

		const column = columns.find((column) => column.field === sortField);

		if (!column) {
			return data;
		}

		const sortedData =
			typeof column.sortable === 'function'
				? data.sort(column.sortable)
				: sortBy<T>(data.slice(), (item) => {
						const sortableValue = item[sort?.field as keyof T];
						return isPlainObject(sortableValue)
							? (sortableValue as any).value
							: sortableValue;
				  });

		if (!sortReverse) {
			return sortedData;
		}

		return sortedData.reverse();
	};

	const sortedPagedData = React.useMemo(() => {
		if (!usePager) {
			return sortData(data || []);
		}

		const elementsPerPage = itemsPerPage ?? 50;
		const totalItems = data?.length ?? 0;
		const lowerBound = page * elementsPerPage;
		const upperBound = Math.min((page + 1) * elementsPerPage, totalItems);
		return sortData(data || []).slice(lowerBound, upperBound);
	}, [data, usePager, itemsPerPage, page]);

	const isChecked = (item: T) => {
		if (!rowKey) {
			return false;
		}
		return (
			internalCheckedItems?.some(
				(checked) => checked[rowKey] === item[rowKey],
			) ?? false
		);
	};

	const isHighlighted = (item: T) => {
		if (!highlightedRows?.length) {
			return false;
		}
		if (!rowKey) {
			return false;
		}

		return highlightedRows.includes(item[rowKey]);
	};

	const isDisabled = (item: T) => {
		if (!disabledRows?.length) {
			return false;
		}
		if (!rowKey) {
			return false;
		}

		return disabledRows.includes(item[rowKey]);
	};

	const toggleAllChecked = () => {
		const filteredDisabled = sortedPagedData.filter((row) => !isDisabled(row));
		if (internalCheckedItems?.length === filteredDisabled.length) {
			setInternalCheckedItems([]);
		} else {
			setInternalCheckedItems(filteredDisabled);
		}
		setAllChecked(!allChecked);
	};

	const toggleChecked = React.useCallback(
		(item: T) => {
			if (!rowKey) {
				return;
			}
			if (!isChecked(item)) {
				setInternalCheckedItems(internalCheckedItems?.concat(item));
				return;
			}
			const checkedItems = internalCheckedItems?.filter(
				(checked) => checked[rowKey] !== item[rowKey],
			);
			setInternalCheckedItems(checkedItems);
		},
		[internalCheckedItems, rowKey],
	);

	const toggleSort = React.useCallback(
		(field: keyof T) => () => {
			setSortReverse(sortField === field ? !sortReverse : false);
			setSortFiled(field);
		},
		[sortField, sortReverse],
	);

	const rowClick = React.useCallback(
		(row: T, event: React.MouseEvent<HTMLAnchorElement>) => {
			if (!onRowClick) {
				return;
			}

			onRowClick(row, event);
		},
		[onRowClick],
	);

	return (
		<>
			{usePager &&
				(!pagerPosition ||
					pagerPosition === 'top' ||
					pagerPosition === 'both') && (
					<Pager
						totalItems={data?.length ?? 0}
						itemsPerPage={itemsPerPage ?? 50}
						page={page}
						nextPage={React.useCallback(() => setPage(page + 1), [page])}
						prevPage={React.useCallback(() => setPage(page - 1), [page])}
						mb={2}
					/>
				)}
			<BaseTableWrapper>
				<Base<any>
					{...otherProps}
					hasRowClick={!!onRowClick}
					hasGetRowRef={!!getRowHref}
					hasCheckbox={!!onCheck}
				>
					<div data-display="table-head">
						<div data-display="table-row">
							{onCheck && (
								<CheckboxWrapper data-display="table-cell">
									<Checkbox checked={allChecked} onChange={toggleAllChecked} />
								</CheckboxWrapper>
							)}
							{columns.map((item) => {
								if (item.sortable) {
									return (
										<div
											data-display="table-cell"
											key={item.key || (item.field as string)}
										>
											<Button
												display="block"
												data-field={item.field}
												plain
												primary={sort?.field === item.field}
												onClick={toggleSort(item.field)}
											>
												{item.label || item.field}
												&nbsp;
												<SortIcon
													icon={faSort}
													isSelected={sort?.field === item.field}
												/>
											</Button>
										</div>
									);
								}
								return (
									<div
										data-display="table-cell"
										key={item.key || (item.field as string)}
									>
										{item.label || item.field}
									</div>
								);
							})}
						</div>
					</div>
					<div data-display="table-body">
						{tbodyPrefix}
						{sortedPagedData.map((row, i) => {
							const classNamesList =
								typeof getRowClass === 'function' ? getRowClass(row) : [];
							const className = Array.isArray(classNamesList)
								? classNamesList.join(' ')
								: '';
							const key = rowKey ? (row[rowKey] as any) : i;
							return (
								<TableRow<T>
									isChecked={isChecked(row)}
									isHighlighted={isHighlighted(row)}
									isDisabled={isDisabled(row)}
									key={key}
									keyAttribute={key}
									href={!!getRowHref ? getRowHref(row) : undefined}
									data={row}
									showCheck={!!onCheck}
									columns={columns}
									attributes={rowAnchorAttributes}
									checkboxAttributes={rowCheckboxAttributes}
									toggleChecked={toggleChecked}
									onRowClick={rowClick}
									className={className}
								/>
							);
						})}
					</div>
				</Base>
			</BaseTableWrapper>
			{usePager &&
				(!pagerPosition ||
					pagerPosition === 'bottom' ||
					pagerPosition === 'both') && (
					<Pager
						totalItems={data?.length ?? 0}
						itemsPerPage={itemsPerPage ?? 50}
						page={page}
						nextPage={React.useCallback(() => setPage(page + 1), [page])}
						prevPage={React.useCallback(() => setPage(page - 1), [page])}
						mt={2}
					/>
				)}
		</>
	);
};

export { TableRow, TableColumn };
