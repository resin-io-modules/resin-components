import values from 'lodash/values';
import ArrayWidget from './ArrayWidget';
import AvatarWidget from './AvatarWidget';
import BadgeWidget from './BadgeWidget';
import ButtonGroupWidget from './ButtonGroupWidget';
import ButtonWidget from './ButtonWidget';
import CheckboxWidget from './CheckboxWidget';
import ColorWidget from './ColorWidget';
import DropDownButtonWidget from './DropDownButtonWidget';
import HeadingWidget from './HeadingWidget';
import HighlightedNameWidget from './HighlightedNameWidget';
import ImgWidget from './ImgWidget';
import LinkWidget from './LinkWidget';
import ListWidget from './ListWidget';
import MarkdownWidget from './MarkdownWidget';
import MermaidWidget from './MermaidWidget';
import ObjectWidget from './ObjectWidget';
import TagWidget from './TagWidget';
import TxtWidget from './TxtWidget';
import { JsonTypes } from '../types';
import { Widget, withOptionProps } from './widget-util';
export { WidgetWrapperUiOptions } from './ui-options';
export { getObjectPropertyNames } from './widget-util';
export { default as WidgetMeta } from './WidgetMeta';

type WidgetLookup = {
	[key: string]: Widget;
};

type Widgets = {
	[key: string]: WidgetLookup;
};

const widgets: Widgets = {};

values(JsonTypes).reduce((acc, jsonType) => {
	acc[jsonType] = {};
	return acc;
}, widgets);

const allWidgets: WidgetLookup = {};

[
	ArrayWidget,
	AvatarWidget,
	BadgeWidget,
	ButtonGroupWidget,
	ButtonWidget,
	CheckboxWidget,
	ColorWidget,
	DropDownButtonWidget,
	HeadingWidget,
	HighlightedNameWidget,
	ImgWidget,
	LinkWidget,
	ListWidget,
	MarkdownWidget,
	MermaidWidget,
	ObjectWidget,
	TagWidget,
	TxtWidget,
].reduce((acc, widget) => {
	const wrappedWidget = widget.uiOptions
		? withOptionProps(widget.uiOptions)(widget)
		: widget;
	acc[widget.displayName] = wrappedWidget;
	if (widget.supportedTypes) {
		widget.supportedTypes.forEach((jsonType) => {
			widgets[jsonType][widget.displayName] = wrappedWidget;
		});
	}
	return acc;
}, allWidgets);

widgets.object.default = allWidgets[ObjectWidget.displayName];
widgets.string.default = allWidgets[TxtWidget.displayName];
widgets.null.default = allWidgets[TxtWidget.displayName];
widgets.integer.default = allWidgets[TxtWidget.displayName];
widgets.number.default = allWidgets[TxtWidget.displayName];
widgets.boolean.default = allWidgets[TxtWidget.displayName];
widgets.array.default = allWidgets[ArrayWidget.displayName];
widgets.default = {
	default: allWidgets[TxtWidget.displayName],
};

export const formatWidgetMap: {
	[key: string]: Widget;
} = {
	markdown: allWidgets[MarkdownWidget.displayName],
	mermaid: allWidgets[MermaidWidget.displayName],
	email: allWidgets[LinkWidget.displayName],
	uri: allWidgets[LinkWidget.displayName],
	color: allWidgets[ColorWidget.displayName],
};

export default widgets;
