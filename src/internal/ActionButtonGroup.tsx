import * as React from 'react';
import { Button } from '../components/Button';
import { ActionButtonDefinition, orderedActionTypes } from '../common-types';
import { sortedGroupBy } from '../utils';

export interface ActionButtonGroupProps {
	actions: ActionButtonDefinition[] | undefined;
}

export const ActionButtonGroup = ({ actions }: ActionButtonGroupProps) => {
	const groupedActionEntries = React.useMemo(() => {
		const groupedActions = sortedGroupBy(
			actions,
			(action) => action.type ?? orderedActionTypes[0],
			orderedActionTypes,
		);
		return Object.entries(groupedActions);
	}, [actions]);

	const actionEntries = groupedActionEntries
		.map(([group, actionsGroup], index) => [
			actionsGroup.map(({ title, type, onTriggerAction, disabled }) => (
				<Button
					key={group + index}
					{...(!!type && type !== orderedActionTypes[0] && { [type]: true })}
					disabled={!!disabled}
					tooltip={typeof disabled === 'string' ? disabled : undefined}
					onClick={onTriggerAction}
					ml={2}
					mt={1}
				>
					{title}
				</Button>
			)),
		])
		.filter((action) => !!action);

	if (!actionEntries.length) {
		return null;
	}

	return <>{actionEntries}</>;
};
