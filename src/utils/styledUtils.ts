import { css } from 'styled-components';
import { Theme, ThemedDefaultProps } from '~/common-types';

export const normal = (props: ThemedDefaultProps) => props.theme?.weights?.[0];
export const bold = (props: ThemedDefaultProps) => props.theme?.weights?.[1];

export const px = (n: any) => (typeof n === 'number' ? n + 'px' : n);

export const monospace = (props: { monospace?: boolean; theme: Theme }) =>
	props.monospace
		? css`
				font-family: ${props.theme.monospace};
		  `
		: null;

export const emphasized = (props: { emphasized?: boolean; theme: Theme }) =>
	css`
		height: ${px(
			props.emphasized ? props.theme.space[5] : props.theme.space[4],
		)};
	`;

export const invertBreakpoint = (breakpoint: number) => {
	return breakpoint - 0.01;
};

export const windowGlobal = typeof window !== 'undefined' && window;

// Calculates the current window width in ems and returns it as a float
export const getWindowWidth = () => {
	if (!windowGlobal) {
		return 0;
	}

	return windowGlobal.innerWidth;
};
