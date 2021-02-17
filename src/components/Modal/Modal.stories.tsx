import React from 'react';
import { Meta } from '@storybook/react';
import { createTemplate, createStory } from '../../stories/utils';
import { Box, Button, Heading } from '../../';
import { Modal, ModalProps } from '.';

import PokeDex from '../../stories/assets/pokedex';

const NestedModalDemo = (props: Partial<ModalProps>) => {
	const [show1, setShow1] = React.useState(false);
	const [show2, setShow2] = React.useState(false);

	return (
		<Box>
			<Button primary onClick={() => setShow1(true)}>
				Open Modal
			</Button>
			{show1 && (
				<Modal
					header="First Modal"
					{...props}
					actions={[
						{
							title: 'Close',
							onTriggerAction: () => setShow1(false),
						},
						{
							title: 'Open another modal',
							type: 'primary',
							onTriggerAction: () => setShow2(true),
						},
					]}
				>
					{show2 && (
						<Modal
							header="Second Modal"
							{...props}
							actions={[
								{
									title: 'Close',
									onTriggerAction: () => setShow2(false),
								},
							]}
						/>
					)}
				</Modal>
			)}
		</Box>
	);
};

const ModalDemo = ({ actions, ...otherProps }: Partial<ModalProps>) => {
	const [show1, setShow1] = React.useState(false);

	return (
		<Box>
			<Button primary onClick={() => setShow1(true)}>
				Open Modal
			</Button>
			{show1 && (
				<Modal
					header="First Modal"
					{...otherProps}
					actions={
						!!actions
							? actions
							: [
									{
										title: 'Close',
										onTriggerAction: () => setShow1(false),
									},
							  ]
					}
				></Modal>
			)}
		</Box>
	);
};

export default {
	title: 'Core/Modal',
	component: Modal,
} as Meta;

const NestedTemplate = createTemplate<ModalProps>(NestedModalDemo);
const Template = createTemplate<ModalProps>(ModalDemo);

export const Default = createStory<ModalProps>(Template, {
	header: 'Modal title',
	children: (
		<>
			<p>Lorem ipsum dolor sit amet</p>
		</>
	),
});

export const WithCustomWidth = createStory<ModalProps>(Template, {
	header: 'Modal title',
	width: ['auto', 500, 1000],
	children: (
		<>
			<p>Lorem ipsum dolor sit amet</p>
		</>
	),
});

export const WithMultielementTitle = createStory<ModalProps>(Template, {
	header: (
		<React.Fragment>
			<Heading.h3>Heading</Heading.h3>
			<Button mt={3} primary>
				A button
			</Button>
		</React.Fragment>
	),
	children: (
		<>
			<p>Lorem ipsum dolor sit amet</p>
		</>
	),
});

export const WithoutActions = createStory<ModalProps>(Template, {
	title: 'Modal title',
	actions: [],
	children: (
		<>
			<p>Lorem ipsum dolor sit amet</p>
		</>
	),
});

export const WithActionButtons = createStory<ModalProps>(Template, {
	title: 'Modal title',
	actions: [
		{
			title: 'Cancel',
			type: 'none',
			disabled: true,
		},
		{
			title: 'OK',
			type: 'primary',
			disabled: true,
		},
		{
			type: 'danger',
			title: 'Abort',
		},
	],
	children: (
		<>
			<p>Lorem ipsum dolor sit amet</p>
		</>
	),
});

export const WithOverflowingContent = createStory<ModalProps>(Template, {
	title: 'Modal title',
	children: (
		<>
			{PokeDex.map((x, i) => (
				<p key={i}>{x.Description}</p>
			))}
		</>
	),
});

export const WithTooltip = createStory<ModalProps>(Template, {
	title: 'Modal title',
	children: (
		<>
			<Heading.h5 tooltip={{ text: 'Good job!', trigger: 'hover' }}>
				Hover me and a tooltip will be displayed.
			</Heading.h5>
		</>
	),
});

export const Nested = createStory<ModalProps>(NestedTemplate, {
	title: 'Modal title',
	children: (
		<>
			<NestedModalDemo />
		</>
	),
});
