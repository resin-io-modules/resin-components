import difference from 'lodash/difference';
import omit from 'lodash/omit';
import { arrayOf, number, oneOfType, string } from 'prop-types';
import * as React from 'react';
import { compose, getDisplayName } from 'recompose';
import styled, { withTheme } from 'styled-components';
import {
	color,
	display,
	fontSize,
	height,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	space,
	width,
} from 'styled-system';
import { StyledSystemProps } from './common-types';
import { Tooltip } from './tooltip';

const prop = oneOfType([number, string, arrayOf(oneOfType([number, string]))]);

const propTypes = {
	width: prop,
	minWidth: prop,
	maxWidth: prop,
	height: prop,
	minHeight: prop,
	maxHeight: prop,
	display: prop,
	fontSize: prop,
	color: prop,
	bg: prop,
	backgroundColor: prop,
	m: prop,
	mt: prop,
	mr: prop,
	mb: prop,
	ml: prop,
	mx: prop,
	my: prop,
	p: prop,
	pt: prop,
	pr: prop,
	pb: prop,
	pl: prop,
	px: prop,
	py: prop,
};

const styledSystemProps = Object.keys(propTypes);

const filterStyledSystemProps = (passthroughProps: string[]) => (
	Base: React.ComponentType,
) => {
	return React.forwardRef((props: any, ref: any) => {
		const nextProps = omit(
			props,
			difference(styledSystemProps, passthroughProps),
		);
		return <Base {...nextProps} ref={ref} />;
	});
};

export const withStyledSystem = (child: React.ComponentType) => {
	const Base = styled(child)<StyledSystemProps>`
		${space}
    ${width}
    ${minWidth}
    ${maxWidth}
    ${height}
    ${minHeight}
    ${maxHeight}
    ${display}
		${fontSize}
		${color}
	`;

	Base.displayName = getDisplayName(child);

	// The styled component messes up with the propTypes typings. We don't really need typesafety here anyway, so it is safe to just ignore it.
	// @ts-ignore
	Base.propTypes = propTypes;

	return React.forwardRef((props: any, ref: any) => {
		return <Base {...props} ref={ref} />;
	});
};

export const withTooltip = (Base: React.ComponentType) => {
	return React.forwardRef(({ tooltip, ...restProps }: any, ref: any) => {
		if (tooltip) {
			return (
				<Tooltip tooltip={tooltip}>
					<Base {...restProps} ref={ref} />
				</Tooltip>
			);
		}
		return <Base {...restProps} ref={ref} />;
	});
};

export default function asRendition<T>(
	component: React.ComponentType,
	additionalEnhancers: Array<
		(Base: React.ComponentType) => React.ComponentType
	> = [],
	passthroughProps: string[] = [],
) {
	return (compose(
		withTheme,
		...(additionalEnhancers || []),
		withTooltip,
		withStyledSystem,
		filterStyledSystemProps(passthroughProps),
	)(component) as unknown) as T;
}
