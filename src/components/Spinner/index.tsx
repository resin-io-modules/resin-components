import pick from 'lodash/pick';
import * as React from 'react';
import styled from 'styled-components';

import { rotate360 } from '../../animations';
import { px } from '../../utils';
import { Box, BoxProps } from '../Box';
import { Flex } from '../Flex';
import { Txt } from '../Txt';

const CircleLoader = styled.div<Pick<SpinnerProps, 'emphasized'>>`
	background: transparent !important;
	width: ${(props) => px(props.emphasized ? 40 : 20)};
	height: ${(props) => px(props.emphasized ? 40 : 20)};
	border: ${(props) => px(props.emphasized ? 6 : 4)} solid;
	color: ${(props) => props.theme.colors.tertiary.main};
	border-radius: 100%;
	border-bottom-color: transparent;
	display: inline-block;
	animation: ${rotate360} 1s 0s infinite linear;
	animation-fill-mode: both;
`;

const Container = styled(Box)`
	position: relative;
`;

const SpinnerContainer = styled(Flex)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

const ChildrenContainer = styled(Box)<Pick<SpinnerProps, 'show'>>`
	opacity: ${(props) => (props.show ? 0.4 : 1)};
	transition: opacity 250ms;
`;

const Base = ({
	label,
	emphasized,
	...otherProps
}: Omit<SpinnerProps, 'show'>) => {
	return (
		<Flex
			flexDirection={emphasized ? 'column' : 'row'}
			justifyContent="center"
			alignItems="center"
			width="fit-content"
			{...otherProps}
		>
			<CircleLoader emphasized={emphasized} />
			{label && (
				<Txt color="text.light" ml={emphasized ? 0 : 2} mt={emphasized ? 2 : 0}>
					{label}
				</Txt>
			)}
		</Flex>
	);
};

const childrenWiredPropNames = [
	'display',
	'alignContent',
	'alignItems',
	'alignSelf',
	'flex',
	'flexBasis',
	'flexDirection',
	'flexWrap',
	'justifyContent',
	'justifyItems',
	'justifySelf',
];

export interface SpinnerProps extends BoxProps {
	/** If passed, it will control whether the spinner is shown or not */
	show?: boolean;
	/** If true, it will render a large spinner */
	emphasized?: boolean;
	/** A label that will be rendered next to the spinner. Renders on right-hand side for standard spinner, and below spinner for emphasized */
	label?: string | React.ReactNode;
}

/** [View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Spinner/Spinner.stories.tsx) */
export const Spinner = ({
	show = true,
	emphasized,
	label,
	children,
	...otherProps
}: SpinnerProps) => {
	if (!children) {
		if (!show) {
			return null;
		}

		return <Base label={label} emphasized={emphasized} {...otherProps} />;
	}

	const childrenWiredProps = pick(otherProps, childrenWiredPropNames);
	return (
		<Container {...otherProps}>
			<ChildrenContainer show={show} {...childrenWiredProps}>
				{children}
			</ChildrenContainer>

			{show && (
				<SpinnerContainer justifyContent="center" alignItems="center">
					<Base label={label} emphasized={emphasized} />
				</SpinnerContainer>
			)}
		</Container>
	);
};
