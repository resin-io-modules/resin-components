import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSONSchema7 as JSONSchema } from 'json-schema';
import map from 'lodash/map';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Box } from '../Box';
import { getDataModel } from '../DataTypes';
import { Flex } from '../Flex';
import { Modal } from '../Modal';
import { Select } from '../Select';
import { Txt } from '../Txt';
import * as SchemaSieve from './SchemaSieve';

export interface FilterModalProps {
	addFilter: (filters: EditModel[]) => void;
	onClose: () => void;
	schema: JSONSchema;
	edit: EditModel[];
}

export interface FilterInputProps {
	schema: JSONSchema;
	value: any;
	operator: string;
	onUpdate: (value: any) => void;
}

export interface EditModel {
	field: string;
	operator: string;
	value: string | number | { [k: string]: string };
}

const FilterInput = (props: FilterInputProps) => {
	const model = getDataModel(props.schema);

	if (!model) {
		return null;
	}

	const Edit = model.Edit as React.FC<any>;
	// TODO: change this logic as it will not work in future versions
	// WARNING: Cannot update a component from inside the function body of a different component
	return (
		<Edit
			schema={props.schema}
			value={props.value}
			operator={props.operator}
			onUpdate={props.onUpdate}
			slim
		/>
	);
};

const RelativeBox = styled(Box)`
	position: relative;
`;

const DeleteButton = styled(Button)`
	color: rgba(0, 0, 0, 0.4);
	position: absolute;
	bottom: 7px;
	right: -35px;
`;

export const FilterModal = ({
	addFilter,
	onClose,
	schema,
	edit,
}: FilterModalProps) => {
	const [filters, setFilters] = useState(edit);

	const setEditField = (field: string, index: number) => {
		const currentEdit = filters.map((filter, i) =>
			i === index ? SchemaSieve.getCleanEditModel(schema, field) : filter,
		);
		setFilters(currentEdit);
	};

	const setEditOperator = (operator: string, index: number) => {
		const currentEdit = filters.map((filter, i) =>
			i === index ? { ...filter, operator } : filter,
		);
		setFilters(currentEdit);
	};

	const setEditValue = (value: string, index: number) => {
		const currentEdit = filters.map((filter, i) =>
			i === index ? { ...filter, value } : filter,
		);
		setFilters(currentEdit);
	};

	const removeCompound = (index: number) => {
		const currentEdit = filters.reduce(
			(acc, cur, i) => (i === index ? acc : [...acc, cur]),
			[],
		);
		setFilters(currentEdit);
	};
	return (
		<Modal
			header="Filter by"
			actions={[
				{
					title: 'Save',
					onTriggerAction: () => addFilter(filters),
				},
				{
					title: 'Cancel',
					onTriggerAction: onClose,
				},
			]}
		>
			{filters.map(({ field, operator, value }, index) => {
				const operators = SchemaSieve.getOperators(schema, field);
				return (
					<RelativeBox key={index}>
						{index > 0 && <Txt my={2}>OR</Txt>}
						<Flex>
							<Box flex={1}>
								<Select<{ field: string; title: string }>
									options={map(schema.properties, (s: JSONSchema, field) => ({
										field,
										title: s.title || field,
									}))}
									valueKey="field"
									labelKey="title"
									// TODO: Remove this logic and pass the primitive value when this is fixed https://github.com/grommet/grommet/issues/3154
									value={
										schema.properties
											? {
													field,
													title:
														(schema.properties[field] as JSONSchema).title ||
														field,
											  }
											: { field }
									}
									onChange={({ option }) => setEditField(option.field, index)}
								/>
							</Box>
							{operators.length === 1 && (
								<Txt py={2} px={3} align="center">
									{operators[0].label}
								</Txt>
							)}
							{operators.length > 1 && (
								<Box flex={1} mx={1}>
									<Select<{ slug: string; label: any }>
										options={operators}
										valueKey="slug"
										labelKey="label"
										// TODO: Remove this logic and pass the primitive value when this is fixed: https://github.com/grommet/grommet/issues/3154
										value={operators.find((x) => x.slug === operator)}
										onChange={({ option }) =>
											setEditOperator(option.slug, index)
										}
									/>
								</Box>
							)}
							<Box flex={1}>
								<FilterInput
									operator={operator}
									value={value}
									schema={schema.properties![field] as JSONSchema}
									onUpdate={(v: any) => setEditValue(v, index)}
								/>
							</Box>
						</Flex>
						{index > 0 && (
							<DeleteButton
								plain
								fontSize={1}
								p={1}
								onClick={() => removeCompound(index)}
							>
								<FontAwesomeIcon icon={faTimes} />
							</DeleteButton>
						)}
					</RelativeBox>
				);
			})}
			<Button
				mb={2}
				mt={4}
				primary
				underline
				onClick={() =>
					setFilters(filters.concat(SchemaSieve.getCleanEditModel(schema)))
				}
			>
				Add alternative
			</Button>
		</Modal>
	);
};
