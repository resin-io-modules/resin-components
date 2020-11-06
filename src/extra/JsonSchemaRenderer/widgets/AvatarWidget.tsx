import * as React from 'react';
import { UiOption } from './ui-options';
import { Widget, WidgetProps } from './widget-util';
import { JsonTypes } from '../types';
import { Avatar } from '../../../';

const AvatarWidget: Widget = ({
	value,
	schema,
	uiSchema,
	...props
}: WidgetProps) => {
	return <Avatar {...props} src={value.toString()} />;
};

AvatarWidget.uiOptions = {
	firstName: UiOption.string,
	lastName: UiOption.string,
	emphasized: UiOption.boolean,
};

AvatarWidget.displayName = 'Avatar';

AvatarWidget.supportedTypes = [JsonTypes.string];

export default AvatarWidget;
