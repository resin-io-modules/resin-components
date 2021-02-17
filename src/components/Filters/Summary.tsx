import { faChartPie } from '@fortawesome/free-solid-svg-icons/faChartPie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSONSchema7 as JSONSchema } from 'json-schema';
import * as React from 'react';
import { FiltersView, ViewScope } from '.';
import { Box } from '../Box';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { Select } from '../Select';
import { Txt } from '../Txt';
import FilterDescription from './FilterDescription';

class FilterSummary extends React.Component<
	FilterSummaryProps,
	FilterSummaryState
> {
	constructor(props: FilterSummaryProps) {
		super(props);
		this.state = {
			name: '',
			showForm: false,
			id: '',
			scope: this.props.scopes ? this.props.scopes[0].slug : null,
		};
	}

	public save = (event?: React.FormEvent<HTMLFormElement>) => {
		if (event) {
			event.preventDefault();
		}

		const { name, scope } = this.state;

		if (!name) {
			return;
		}

		this.props.saveView(name, scope);

		this.setState({
			name: '',
			showForm: false,
			id: '',
		});
	};

	public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const name = e.target.value;
		this.setState({ name });
	}

	public render() {
		const { scopes } = this.props;
		return (
			<Box p={3} mt={3} width="100%" bg="quartenary.light">
				{this.state.showForm && (
					<Modal
						header="Save current view"
						actions={[
							{
								title: 'Save',
								onTriggerAction: this.save,
							},
							{
								title: 'Cancel',
								onTriggerAction: () => this.setState({ showForm: false }),
							},
						]}
					>
						<form onSubmit={this.save}>
							{!!scopes && scopes.length > 1 && (
								<Flex mb={4} alignItems="center">
									<Txt width={90}>Visible to:</Txt>
									<Select<ViewScope>
										ml={2}
										width="auto"
										options={scopes}
										valueKey="slug"
										labelKey="name"
										// TODO: Remove this logic and pass the primitive value when this is fixed: https://github.com/grommet/grommet/issues/3154
										value={scopes.find((x) => x.slug === this.state.scope)}
										onChange={({ option }) =>
											this.setState({
												scope: option.slug,
											})
										}
									/>
								</Flex>
							)}

							<Input
								width="100%"
								value={this.state.name}
								placeholder="Enter a name for the view"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									this.handleChange(e)
								}
								autoFocus
							/>
						</form>
					</Modal>
				)}
				<Flex mb={2} justifyContent="space-between">
					<Flex>
						<Txt mr={2}>
							<Txt.span bold>Filters</Txt.span> ({this.props.filters.length})
						</Txt>
						<Button plain primary onClick={this.props.clearAllFilters}>
							Clear all
						</Button>
					</Flex>
					<Button
						primary
						plain
						onClick={() => this.setState({ showForm: !this.state.showForm })}
						icon={<FontAwesomeIcon icon={faChartPie} />}
					>
						Save as view
					</Button>
				</Flex>
				<Flex flexWrap="wrap">
					{this.props.filters.map((filter, index) => {
						return (
							<FilterDescription
								key={filter.$id || index}
								filter={filter}
								onClick={() => this.props.edit(filter)}
								onClose={() => this.props.delete(filter)}
							/>
						);
					})}
				</Flex>
			</Box>
		);
	}
}

export interface FilterSummaryProps {
	edit: (rule: JSONSchema) => void;
	delete: (rule: JSONSchema) => void;
	saveView: (name: string, scope: string | null) => void;
	clearAllFilters: () => void;
	filters: JSONSchema[];
	views: FiltersView[];
	scopes?: ViewScope[];
	schema: JSONSchema;
}

export interface FilterSummaryState {
	name: string;
	showForm: boolean;
	id: string;
	scope: string | null;
}

export default FilterSummary;
