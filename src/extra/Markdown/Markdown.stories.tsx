import defaults from 'lodash/defaults';
import cloneDeep from 'lodash/cloneDeep';
import * as React from 'react';
import { Meta } from '@storybook/react';
import { createTemplate, createStory } from '../../stories/utils';
import { Card, Table } from '../..';
import { Markdown, MarkdownProps, defaultSanitizerOptions } from '.';
import source, {
	customizationSamples,
	decoratorSample,
} from '../../stories/assets/markdownSample';

const generateTableData = () => {
	return customizationSamples.map(({ markdown, sanitizerOptions }: any) => {
		const customSanitizerOptions = defaults(
			cloneDeep(sanitizerOptions || {}),
			defaultSanitizerOptions,
		);
		return {
			'Specific Sanitizer Options': (
				<pre>{JSON.stringify(sanitizerOptions, null, 2)}</pre>
			),
			Original: (
				<Card>
					<Markdown>{markdown}</Markdown>
				</Card>
			),
			Customized: (
				<Card>
					<Markdown sanitizerOptions={customSanitizerOptions}>
						{markdown}
					</Markdown>
				</Card>
			),
		};
	});
};

export default {
	title: 'Extra/Markdown',
	component: Markdown,
} as Meta;

const Template = createTemplate<MarkdownProps>(Markdown);
export const Default = createStory<MarkdownProps>(Template, {
	children: source,
});

export const Customized = createStory<MarkdownProps>(Template, {});
const cellAttributes = { style: { verticalAlign: 'top' } };
Customized.decorators = [
	() => (
		<Table
			columns={[
				{ field: 'Specific Sanitizer Options', cellAttributes },
				{ field: 'Original', cellAttributes },
				{ field: 'Customized', cellAttributes },
			]}
			data={generateTableData()}
		/>
	),
];

export const WithDecorators = createStory<MarkdownProps>(Template, {
	decorators: [
		{
			match: new RegExp(
				`(\\s|^)((@{1,2}|#|!{1,2})[a-z\\d-_\\/]+(\\.[a-z\\d-_\\/]+)*)(\\s|$)`,
				'gmi',
			),
			captureGroupIndex: 2,
			component: 'span',
			properties: {
				style: {
					color: 'green',
				},
			},
		},
	],
	children: decoratorSample,
});
