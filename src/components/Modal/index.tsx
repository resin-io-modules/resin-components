import { Layer } from 'grommet';
import * as React from 'react';
import styled, { createGlobalStyle, withTheme } from 'styled-components';
import { ActionButtonGroup } from '../../internal/ActionButtonGroup';
import {
	ResponsiveStyle,
	Theme,
	ActionButtonDefinition,
} from '../../common-types';
import { px } from '../../utils';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { Heading } from '../Heading';

const bodyNoOverflowClass = `rendition-modal-open`;

// tslint:disable-next-line no-unused-expression
const GlobalStyle = createGlobalStyle`
	.${bodyNoOverflowClass} {
		overflow: hidden;
	}
`;

const DEFAULT_MODAL_WIDTH = 700;

const ModalSizer = styled(Box)`
	overflow-y: auto;
`;

class BaseModal extends React.Component<ThemedModalProps, any> {
	public static mountedCount = 0;

	public ownIndex = 0;

	constructor(props: ThemedModalProps) {
		super(props);
	}

	public componentDidMount() {
		if (!BaseModal.mountedCount) {
			document.body.classList.add(bodyNoOverflowClass);
		}

		window.addEventListener('keydown', this.handleKeyDown);
		BaseModal.mountedCount++;
		this.ownIndex = BaseModal.mountedCount;
	}

	public componentWillUnmount() {
		BaseModal.mountedCount--;
		if (!BaseModal.mountedCount) {
			document.body.classList.remove(bodyNoOverflowClass);
		}
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	public handleKeyDown = (e: KeyboardEvent) => {
		// Only trigger on top-most modal if there are multiple nested modals.
		if (BaseModal.mountedCount !== this.ownIndex) {
			return;
		}

		if (!e.defaultPrevented && e.which === 13) {
			e.preventDefault();
			e.stopPropagation();
			const firstPrimaryAction = this.props.actions?.find(
				(action) => action.type === 'primary',
			);
			if (firstPrimaryAction?.disabled) {
				return;
			}
			// Enter key
			if (e.which === 13) {
				firstPrimaryAction?.onTriggerAction();
			}
		}
	};

	public stopPropagation = (e: Event | React.MouseEvent<any>) =>
		e.stopPropagation();

	public popModal = () => {
		if (BaseModal.mountedCount !== this.ownIndex) {
			return;
		}
		const cancelButton = this.props.actions?.find(
			(action) => action.type === 'none' || !action.type,
		);
		if (cancelButton?.disabled) {
			return;
		}
		cancelButton?.onTriggerAction();
	};

	public render() {
		const { width, theme, ...props } = this.props;

		return (
			<Layer
				onEsc={this.popModal}
				onClickOutside={this.popModal}
				responsive={false}
				position={props.position || 'center'}
				margin="small"
				animate={false}
				style={{
					marginTop: props.position === 'top' ? theme.header.height : undefined,
				}}
			>
				<GlobalStyle />
				<ModalSizer
					width={width || DEFAULT_MODAL_WIDTH}
					maxWidth="100%"
					onClick={this.stopPropagation}
					style={props.style}
					id={props.id}
					className={props.className}
				>
					<Box p={[px(theme.space[3]), '40px 50px 30px']}>
						{props.header && typeof props.header === 'string' ? (
							<Heading.h3 mb={4}>{props.header}</Heading.h3>
						) : (
							props.header
						)}
						{props.children}
						<Flex mt={5} alignItems="center" justifyContent="flex-end">
							<ActionButtonGroup actions={this.props.actions} />
						</Flex>
					</Box>
				</ModalSizer>
			</Layer>
		);
	}
}

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
	/** A string or JSX element to display at the top of the modal */
	header?: string | JSX.Element;
	width?: ResponsiveStyle;
	/** Start the modal from the center (default) or top */
	position?: 'center' | 'top';
	/** A string or JSX element to display underneath the modal's `title`, only displayed if the `titleElement` property is not used and a `title` property is provided */
	titleDetails?: string | JSX.Element;
	/** A string or JSX element to display in the primary modal button, defaults to 'OK' */
	actions?: ActionButtonDefinition[];
}

export interface ThemedModalProps extends ModalProps {
	theme: Theme;
}

/**
 * Displays a centrally position modal overlay. Children passed to this component are rendered inside the modal.
 *
 * [View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Modal/Modal.stories.tsx)
 */
export const Modal = withTheme(
	BaseModal,
) as React.FunctionComponent<ModalProps>;
