import {
	ColorProps,
	DisplayProps,
	FontSizeProps,
	HeightProps,
	MaxHeightProps,
	MaxWidthProps,
	MinHeightProps,
	MinWidthProps,
	SpaceProps,
	WidthProps,
} from 'styled-system';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export { Theme } from './theme';

export interface StyledSystemProps
	extends SpaceProps,
		FontSizeProps,
		ColorProps,
		WidthProps,
		MinWidthProps,
		MaxWidthProps,
		HeightProps,
		MinHeightProps,
		MaxHeightProps,
		DisplayProps {}

export type ResponsiveStyle = string | number | Array<string | number>;

export type PineDataType =
	| 'Boolean'
	| 'Case Insensitive Text'
	| 'Date Time'
	| 'Date'
	| 'Enum'
	| 'Integer'
	| 'Real'
	| 'Short Text'
	| 'Text'
	| 'Time'
	| 'Semver Range'
	| 'Semver';

export interface SchemaEntry {
	type: PineDataType;
	values?: string[];
	label?: string;
}

export interface Schema {
	[key: string]: SchemaEntry;
}

export interface FilterRule {
	availableOperators: Array<{ value: string; label: string }>;
	id: string;
	label: string;
	name: string;
	operator: string;
	type: string;
	value: any;
}

export interface SingleFilterView {
	id: string;
	name: string;
	scopeKey: string;
	rules: FilterRule[];
}

export interface FilterViewScope {
	key: string;
	scopeLabel?: string;
	title?: string;
	data: SingleFilterView[];
}

export interface Coloring {
	/** If true, use the `primary` theme color. [View colors source code definition](https://github.com/balena-io-modules/rendition/blob/master/src/theme.ts#L21) */
	primary?: boolean;
	/** If true, use the `secondary` theme color. [View colors source code definition](https://github.com/balena-io-modules/rendition/blob/master/src/theme.ts#L21) */
	secondary?: boolean;
	/** If true, use the `tertiary` theme color. [View colors source code definition](https://github.com/balena-io-modules/rendition/blob/master/src/theme.ts#L21) */
	tertiary?: boolean;
	/** If true, use the `quartenary` theme color. [View colors source code definition](https://github.com/balena-io-modules/rendition/blob/master/src/theme.ts#L21) */
	quartenary?: boolean;
	/** If true, use the `danger` theme color. [View colors source code definition](https://github.com/balena-io-modules/rendition/blob/master/src/theme.ts#L21) */
	danger?: boolean;
	/** If true, use the `warning` theme color. [View colors source code definition](https://github.com/balena-io-modules/rendition/blob/master/src/theme.ts#L21) */
	warning?: boolean;
	/** If true, use the `success` theme color. [View colors source code definition](https://github.com/balena-io-modules/rendition/blob/master/src/theme.ts#L21) */
	success?: boolean;
	/** If true, use the `info` theme color. [View colors source code definition](https://github.com/balena-io-modules/rendition/blob/master/src/theme.ts#L21) */
	info?: boolean;
}

export interface ThemeColorSet {
	main: string;
	light: string;
	dark: string;
}

export interface WithSemilight {
	semilight: string;
}

export type ColorShade = keyof ThemeColorSet;

export interface Shading {
	shade?: ColorShade;
}

export interface Sizing {
	/** If true, increase element size */
	emphasized?: boolean;
}

export type RenditionSystemProps = StyledSystemProps & Tooltip;

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
	text: string;
	trigger?: 'click' | 'hover';
	placement?: TooltipPlacement;
	containerStyle?: React.CSSProperties;
	innerStyle?: React.CSSProperties;
	arrowStyle?: React.CSSProperties;
}

export interface Tooltip {
	tooltip?: string | TooltipProps;
}

export const orderedActionTypes: string[] = ['none', 'primary', 'danger'];
export interface ActionButtonDefinition {
	title: string;
	onTriggerAction: (...args: any) => void;
	type?: typeof orderedActionTypes[number];
	disabled?: string | boolean;
}
