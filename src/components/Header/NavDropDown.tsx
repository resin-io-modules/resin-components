import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import Divider from '../Divider';
import Link from '../Link';
import Txt from '../Txt';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import asRendition from '../../asRendition';
import { DefaultProps } from '../../common-types';
import { invertBreakpoint } from '../../utils';

const Panel = styled(Box)`
	min-width: 169px;
	border-radius: 2px;
	box-shadow: -10px 9px 21px 0 rgba(152, 173, 227, 0.08);
	border: solid 1px #e8ebf2;
	background-color: #ffffff;
	margin-top: 12px;
`;

const PanelWrapper = styled(Box)`
	transform: translateX(-20px);
	position: absolute;
	z-index: 2;

	@media (max-width: ${(props) =>
			invertBreakpoint(props.theme.breakpoints[1])}px) {
		transform: none;
		position: relative;

		> div {
			margin: 0;
			width: 100%;
			border: none;
			box-shadow: none;
			padding: 0;
		}
	}
`;

const Item = styled(Box)`
	&:hover {
		background: white;
	}

	> div {
		margin: 0;
	}

	a {
		width: 100%;
	}

	@media (max-width: ${(props) =>
			invertBreakpoint(props.theme.breakpoints[1])}px) {
		padding: 0;

		a {
			padding-left: 16px;
		}
	}
`;

interface NavDropDownProps extends DefaultProps {
	title: string;
	showDividers?: boolean;
}

export const NavDropDown = (props: NavDropDownProps) => {
	const [dropDownOpen, setDropDownOpen] = React.useState(false);

	const showDropdown = (e: MouseEvent) => {
		e.preventDefault();
		setDropDownOpen(true);
	};

	const hideDropdown = (e: MouseEvent) => {
		e.preventDefault();
		setDropDownOpen(false);
	};

	const toggle = (e: MouseEvent) => {
		e.preventDefault();
		setDropDownOpen((open) => !open);
	};

	return (
		<Box onMouseLeave={hideDropdown}>
			<Link
				fontSize={0}
				href="#"
				color="text.main"
				onClick={toggle}
				onMouseOver={showDropdown}
				py={2}
				{...props}
			>
				<Txt.span bold mr={3} style={{ textDecoration: 'underline' }}>
					{props.title}
				</Txt.span>
				<FontAwesomeIcon
					icon={dropDownOpen ? faChevronUp : faChevronDown}
					size="xs"
				/>
			</Link>

			{dropDownOpen && (
				<PanelWrapper>
					<Panel px={2} py={2}>
						{React.Children.map(props.children, (child: any, i: number) => {
							return (
								<Box key={i}>
									{props.showDividers && i !== 0 && (
										<Divider my={0} mx={3} color="text.main" />
									)}
									<Item px={3} py={props.showDividers ? 2 : 1}>
										{child}
									</Item>
								</Box>
							);
						})}
					</Panel>
				</PanelWrapper>
			)}
		</Box>
	);
};

export default asRendition<React.FunctionComponent<NavDropDownProps>>(
	NavDropDown,
);
