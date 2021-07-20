import React from 'react';
import { JSONSchema7 as JSONSchema } from 'json-schema';
import { PersistentFilters } from './PersistentFilters';
import { AutoUIContext, AutoUIBaseResource } from '../schemaOps';
import {
	FilterRenderMode,
	Filters as RenditionFilters,
} from '../../../components/Filters';
import { useHistory } from '../../../hooks/useHistory';
import { useAnalytics } from '../../../hooks/useAnalytics';
import { FULL_TEXT_SLUG } from '../../../components/Filters/SchemaSieve';

interface FiltersProps<T> {
	schema: JSONSchema;
	filters: JSONSchema[];
	autouiContext: AutoUIContext<T>;
	changeFilters: (filters: JSONSchema[]) => void;
	renderMode?: FilterRenderMode;
}

export const Filters = <T extends AutoUIBaseResource<T>>({
	schema,
	filters,
	changeFilters,
	autouiContext,
	renderMode,
}: FiltersProps<T>) => {
	const history = useHistory();
	const { analyticsClient } = useAnalytics();

	React.useEffect(() => {
		if (!analyticsClient || !filters?.length) {
			return;
		}
		const analyticsObj: {
			searchText: string;
			field: string[];
			operator: string[];
			value: string[];
		} = {
			searchText: '',
			field: [],
			operator: [],
			value: [],
		};

		filters.forEach((filter) => {
			if (filter.title === FULL_TEXT_SLUG) {
				// @ts-expect-error
				analyticsObj.searchText = filter.anyOf[0].description.replace(
					'Any field contains ',
					'',
				);
			} else {
				filter.anyOf?.forEach((item: JSONSchema) => {
					const filterObj: { name: string; operator: string; value: string } =
						item.description && JSON.parse(item.description);
					if (filterObj) {
						analyticsObj.field.push(filterObj.name);
						analyticsObj.operator.push(filterObj.operator);
						analyticsObj.value.push(filterObj.value);
					}
				});
			}
		});

		analyticsClient.track('Filters Action', analyticsObj);
	}, [filters]);

	return (
		<>
			{!!history ? (
				<PersistentFilters
					compact={[true, true, false, false]}
					viewsRestorationKey={`${autouiContext.resource}__views`}
					filtersRestorationKey={`${autouiContext.resource}__filters`}
					history={history}
					schema={schema}
					filters={filters}
					onFiltersUpdate={changeFilters}
					addFilterButtonProps={{ outline: true }}
					renderMode={renderMode ?? ['add', 'search', 'views']}
				/>
			) : (
				<RenditionFilters
					compact={[true, true, false, false]}
					schema={schema}
					filters={filters}
					onFiltersUpdate={changeFilters}
					addFilterButtonProps={{ outline: true }}
					renderMode={renderMode ?? ['add', 'search', 'views']}
				/>
			)}
		</>
	);
};
