import * as React from 'react';
import { Flex, Button } from '../..';
import { Meta } from '@storybook/react';
import { createTemplate, createStory } from '../../stories/utils';
import { Card, CardProps } from './';
import { Heading } from '../Heading';

export default {
	title: 'Core/Card',
	component: Card,
	decorators: [
		(Story) => (
			<div style={{ width: 400, height: 400 }}>
				<Story />
			</div>
		),
	],
} as Meta;

const Template = createTemplate<CardProps>(Card);

export const Default = createStory<CardProps>(Template, {
	children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
  scelerisque euismod risus at gravida. Pellentesque a nunc semper,
  ultrices lacus nec, mattis mauris`,
});

export const Small = createStory<CardProps>(Template, {
	children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
  scelerisque euismod risus at gravida. Pellentesque a nunc semper,
  ultrices lacus nec, mattis mauris`,
	emphasized: [true, false, true, true],
});

export const WithHeader = createStory<CardProps>(Template, {
	header: 'Card with title',
	children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
  scelerisque euismod risus at gravida. Pellentesque a nunc semper,
  ultrices lacus nec, mattis mauris`,
});

export const Emphasized = createStory<CardProps>(Template, {
	header: 'Card with title',
	emphasized: true,
	children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
  scelerisque euismod risus at gravida. Pellentesque a nunc semper,
  ultrices lacus nec, mattis mauris`,
});

export const WithActionHeader = createStory<CardProps>(Template, {
	header: (
		<Flex>
			<Heading.h3>Card With action title</Heading.h3>
			<Button
				ml={2}
				plain
				primary
				onClick={() => window.alert('Action with Button')}
			>
				Update
			</Button>
		</Flex>
	),
	children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
  scelerisque euismod risus at gravida. Pellentesque a nunc semper,
  ultrices lacus nec, mattis mauris`,
});

export const WithActions = createStory<CardProps>(Template, {
	minHeight: '300px',
	width: '600px',
	header: 'Card with Actions',
	children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
  scelerisque euismod risus at gravida. Pellentesque a nunc semper,
  ultrices lacus nec, mattis mauris `,
	actions: [
		{
			title: 'Normal action',
			type: 'primary',
			onTriggerAction: () => window.alert('Normal action'),
		},
		{
			title: 'Danger action',
			type: 'danger',
			onTriggerAction: () => window.alert('Danger action'),
		},
	],
});
