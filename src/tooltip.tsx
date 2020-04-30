import isString from 'lodash/isString';
import merge from 'lodash/merge';
import * as React from 'react';
import { TooltipPlacement } from './common-types';
import RCTooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
// The time in ms to show a tooltip after being triggered by a click event
const CLICK_TIMEOUT = 1000;

interface TooltipComponentProps {
	tooltip:
		| string
		| {
				text: string;
				trigger?: 'hover' | 'click';
				placement?: TooltipPlacement;
				containerStyle?: React.CSSProperties;
				innerStyle?: React.CSSProperties;
				arrowStyle?: React.CSSProperties;
		  };
	children: React.ReactElement;
}

export const Tooltip = (props: TooltipComponentProps) => {
	const [isVisible, setVisible] = React.useState(false);
	let trigger = 'hover';
	let tooltipText: string;
	let placement;
	let containerStyle;
	let innerStyle;
	let arrowStyle;

	if (isString(props.tooltip)) {
		tooltipText = props.tooltip;
	} else {
		tooltipText = props.tooltip.text;
		placement = props.tooltip.placement;
		containerStyle = props.tooltip.containerStyle;
		innerStyle = props.tooltip.innerStyle;
		arrowStyle = props.tooltip.arrowStyle;

		if (props.tooltip.trigger) {
			trigger = props.tooltip.trigger;
		}
	}

	React.useEffect(() => {
		let timeout: number;
		if (trigger === 'click' && isVisible) {
			timeout = window.setTimeout(() => {
				setVisible(false);
			}, CLICK_TIMEOUT);
		}
		return () => clearTimeout(timeout);
	}, [isVisible]);

	let overlay: string | JSX.Element = tooltipText;

	if (innerStyle) {
		overlay = <div style={innerStyle}>{tooltipText}</div>;
	}

	return (
		<RCTooltip
			visible={isVisible}
			onVisibleChange={visible => setVisible(visible)}
			placement={placement}
			trigger={trigger}
			overlayStyle={merge(
				{ visibility: isVisible ? 'visible' : 'hidden' },
				containerStyle,
			)}
			arrowContent={
				<span className="rc-tooltip-arrow-inner" style={arrowStyle} />
			}
			overlay={overlay}
		>
			{props.children}
		</RCTooltip>
	);
};
