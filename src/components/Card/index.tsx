import * as React from 'react';
import styled from 'styled-components';
import {
	ActionButtonDefinition,
	RenditionSystemProps,
} from '../../common-types';
import asRendition from '../../asRendition';
import { DismissableContainer } from '../../internal/DismissableContainer';
import { Flex, FlexProps } from '../Flex';
import { Heading } from '../Heading';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { Divider } from '../Divider';
import { ActionButtonGroup } from '../../internal/ActionButtonGroup';

const Wrapper = styled(DismissableContainer)<WrapperProps>`
	& {
		padding: ${(props) => (props.emphasized ? '32px 44px' : '24px')};
	}
`;

const BaseCard = ({
	header,
	children,
	emphasized,
	actions,
	...props
}: InternalCardProps) => {
	const isEmphasized = useBreakpoint(emphasized);

	const Header =
		header &&
		(typeof header === 'string' ? (
			<Flex
				mb={2}
				flex="0 0 auto"
				justifyContent="space-between"
				alignItems="center"
			>
				<Heading.h3>{header}</Heading.h3>
			</Flex>
		) : (
			header
		));

	const Body = children && (
		<Flex flex="1" flexDirection="column">
			{children}
		</Flex>
	);

	const Actions = actions && (
		<Flex flexDirection="column">
			<Divider mb={2} mt={3} type="dashed" />
			<Flex flexWrap="wrap" flex="0 0 auto" justifyContent="flex-end">
				<ActionButtonGroup actions={actions} />
			</Flex>
		</Flex>
	);

	return (
		<Wrapper emphasized={isEmphasized} {...props}>
			<Flex flexDirection="column" flex="1">
				{Header}
				{Body}
				{Actions}
			</Flex>
		</Wrapper>
	);
};

interface WrapperProps extends FlexProps {
	emphasized?: boolean | boolean[];
}

export interface InternalCardProps extends Omit<WrapperProps, 'title'> {
	/** The header of the card */
	header?: string | JSX.Element;
	/** Any content that is internally wrapped in a Box */
	children?: any;
	/** Buttons placed on the bottom of the card */
	actions?: ActionButtonDefinition[];
}

export type CardProps = InternalCardProps & RenditionSystemProps;

/**
 * Section containing content and actions on the same topic.
 *
 * [View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Card/Card.stories.tsx)
 */
export const Card = asRendition<React.FunctionComponent<CardProps>>(BaseCard);
