import * as React from 'react';
import { get, map } from 'lodash';
import { Widget, WidgetProps, getObjectPropertyNames } from './widget-util';
import { JsonTypes } from '../types';
import JsonSchemaRenderer from '../index';

const ObjectWidget: Widget = ({ value, schema, uiSchema }: WidgetProps) => {
	const propertyNames = getObjectPropertyNames({ value, schema, uiSchema });
	return (
		<React.Fragment>
			{map(propertyNames, (key: string) => {
				const subProps: WidgetProps = {
					value: get(value, key),
					schema: get(schema, ['properties', key]),
					uiSchema: get(uiSchema, key),
				};
				return <JsonSchemaRenderer key={key} nested {...subProps} />;
			})}
		</React.Fragment>
	);
};

ObjectWidget.supportedTypes = [JsonTypes.object];

export default ObjectWidget;