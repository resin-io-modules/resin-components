import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoxProps } from 'grommet';
import React from 'react';
import styled, { css } from 'styled-components';
import { invertBreakpoint } from '../../utils';
import { Box } from '../Box';
import Button from '../Button';
import Container from '../Container';
import Fixed from '../Fixed';
import { Flex } from '../Flex';
import Img from '../Img';
import Link from '../Link';
import Txt from '../Txt';
import { NavDropDown } from './NavDropDown';

const NavigationItem = styled(Box)`
	margin: 0;

	a {
		margin: 0 !important;
		color: ${(props) => props.theme.colors.text.main};
		display: block !important;
		padding-top: 12px !important;
		padding-bottom: 10px !important;
		font-size: initial;

		&:hover:before {
			border: none;
		}
	}

	svg {
		float: right;
		transform: translateY(4px);

		path {
			fill: ${(props) => props.theme.colors.text.main};
		}
	}
`;
interface HeaderProps extends BoxProps {
	logo?: string;
	logoAltText?: string;
	rootRoute?: string;
	routes: Route[];
	actions?: React.ReactElement;
}

interface Route {
	title: string;
	showDividers?: boolean;
	path?: string;
	blank?: boolean;
	routes: Route[];
}
const getNavigationRoutes = (routes: Route[]) => {
	return routes.map((route, index) => {
		if (route['routes']) {
			return (
				<NavigationItem pl={[0, 0, 3, 3]} key={index} mx={15}>
					<NavDropDown title={route.title} showDividers={route.showDividers}>
						{getNavigationRoutes(route.routes)}
					</NavDropDown>
				</NavigationItem>
			);
		}

		return (
			<NavigationItem pl={[0, 0, 3, 3]} key={index} mx={[2, 2, 15]}>
				<Link
					blank={route.blank || false}
					href={route.path}
					style={{
						padding: '3px 0 3px',
						display: 'auto',
					}}
					color="text.main"
					fontSize={13}
				>
					<Txt.span bold>{route.title}</Txt.span>
				</Link>
			</NavigationItem>
		);
	});
};

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	background: white;
	z-index: 5;

	+ div:first-of-type {
		margin-top: 80px;
	}

	@media (max-width: ${(props) =>
			invertBreakpoint(props.theme.breakpoints[1])}px) {
		position: fixed;
		background: white;
		box-shadow: 0px 0px 21px 5px rgba(152, 173, 227, 0.2);
	}
`;

const Actions = styled(Box)`
	justify-content: flex-end;
	align-items: center;
`;

const MobileActions = styled(Flex)`
	display: none;
	min-height: 84px;

	@media (max-width: ${(props) =>
			invertBreakpoint(props.theme.breakpoints[1])}px) {
		display: flex;
	}
`;

const NavigationItems = styled(Flex)<{ menuOpen?: boolean }>`
	@media (max-width: ${(props) =>
			invertBreakpoint(props.theme.breakpoints[1])}px) {
		position: fixed;
		background: white;
		top: 0;
		right: 0;
		width: 300px;
		bottom: 0;
		justify-content: flex-start;
		transform: translateX(100%);
		transition: transform 200ms ease-in-out;
		padding: 16px;
		overflow: auto;
		flex-wrap: nowrap;

		${(props) =>
			props.menuOpen
				? css`
						position: fixed;
						transform: translateX(0%);
				  `
				: ''}
	}
`;

export const Navbar = styled(Flex)`
	min-height: 80px;
	position: relative;
	flex-direction: column;
	justify-content: center;

	@media (max-width: ${(props) =>
			invertBreakpoint(props.theme.breakpoints[1])}px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		min-height: auto;
		padding-top: 16px;
		padding-bottom: 16px;
	}
`;

export const Header = (props: HeaderProps) => {
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	const closeMenu = () => {
		setMobileMenuOpen(false);
	};
	const openMenu = () => {
		setMobileMenuOpen(true);
	};
	return (
		<Wrapper>
			<Container px={[3, 3, 3, 0]}>
				<Navbar>
					<Flex justifyContent="space-between" alignItems="center" width="100%">
						<Flex alignItems="center">
							<Link href={props.rootRoute} style={{ lineHeight: 1 }}>
								<Img alt={props.logoAltText} src={props.logo} height="42" />
							</Link>
						</Flex>
						{mobileMenuOpen && (
							<Fixed
								top
								left
								bottom
								display={['block', 'block', 'none', 'none']}
								right
								bg="rgba(0, 0, 0, 0.25)"
								onClick={closeMenu}
							/>
						)}
						<Flex>
							<NavigationItems
								menuOpen={mobileMenuOpen}
								flexDirection={['column', 'column', 'row', 'row']}
								flexWrap="wrap"
								alignItems={['flex-start', 'flex-start', 'center', 'center']}
							>
								{mobileMenuOpen && (
									<Flex
										display={['block', 'block', 'none', 'none']}
										justifyContent="flex-end"
									>
										<Button
											plain
											underline={false}
											p="5px"
											mt="-8px"
											mr="-5px"
											style={{ opacity: 0.5 }}
											icon={<FontAwesomeIcon icon={faTimes} />}
											onClick={closeMenu}
										/>
									</Flex>
								)}
								{getNavigationRoutes(props.routes)}

								{props.actions && (
									<MobileActions
										mt="auto"
										pt={5}
										alignItems="center"
										justifyContent="center"
									>
										{props.actions}
									</MobileActions>
								)}
							</NavigationItems>
							{props.actions && (
								<Actions display={['none', 'none', 'flex', 'flex']} ml={3}>
									{props.actions}
								</Actions>
							)}
						</Flex>
						<Button
							display={['block', 'block', 'none', 'none']}
							style={{ fontSize: 20 }}
							icon={<FontAwesomeIcon icon={faBars} />}
							plain
							onClick={openMenu}
						/>
					</Flex>
				</Navbar>
			</Container>
		</Wrapper>
	);
};

export default Header;
