import template from 'lodash/template';
import { TranslationContext } from '../contexts/TranslationContext';
import React from 'react';

export type TFunction = (str: string, options?: any) => string;

const translationMap = {
	// TagManagement
	'labels.tags': 'Tags',
	'labels.shared': 'Shared',
	'labels.tag_name': 'Tag name',
	'labels.value': 'Value',
	'labels.tag_value': 'Tag value',

	'actions.ok': 'OK',
	'actions.add_tag': 'Add tag',
	'actions.continue': 'Continue',
	'actions.undo_add': 'Undo add',
	'actions.undo_edit': 'Undo edit',
	'actions.undo_delete': 'Undo delete',
	'actions.apply_item_type_count': 'Apply',
	'actions.apply_item_type_count_plural': 'Apply to {{count}} {{itemType}}',

	'actions_messages.confirmation': 'Are you sure?',

	'actions_confirmations.confirm_to_proceed': 'Do you want to proceed?',

	'no_data.no_name_set': 'No name set',

	'warnings.this_would_overwrite_tags':
		'Adding this would overwrite tags on {{itemType}}',
	'warnings.tag_name_group_exists_and_will_be_overwritten':
		'A tag name group exists on {{count}} other {{itemType}} and will be overwritten.',
	'warnings.tag_name_group_exists_and_will_be_overwritten_plural':
		'A tag name group exists on {{count}} other {{itemType}}s and will be overwritten.',
	'warnings.fill_wifi_credentials':
		'Please fill in the wifi credentials or select "Ethernet only" in the "Network Connection" section',
	'warnings.image_deployed_to_docker':
		'This image is deployed to docker so you can only download its config',

	'errors.no_tags_for_selected_itemtype':
		'The selected {{itemType}} has no tags',
	'errors.no_tags_for_selected_itemtype_plural':
		'The selected {{itemType}}s have no tags in common',

	'fields_errors.tag_name_cannot_be_empty': "The tag name can't be empty.",
	'fields_errors.tag_names_cannot_contain_whitespace':
		'Tag names cannot contain whitespace',
	'fields_errors.some_tag_keys_are_reserved':
		'Tag names beginning with {{namespace}} are reserved',
	'fields_errors.tag_with_same_name_exists':
		'A tag with the same name already exists',

	// DownloadImageModal
	'placeholders.select_device_type': 'Select device type',
	'placeholders.select_os_type_status': 'Select OS type',
	'placeholders.choose_device_type': 'Choose a device type...',
	'placeholders.select_os_type': 'Select OS type...',
	'placeholders.select_version': 'Select version',
	'placeholders.select_edition': 'Select edition',

	'labels.instructions': 'Instructions',

	'info.production_and_enterprise_plan_only':
		'production and enterprise plan only',
	'info.no_esr_versions_are_available_for_device_type':
		'No ESR versions are available for this device type yet. Check the documentation for device types that already have ESR versions.',
	'info.recommended_for_new_users': 'Recommended for first time users',

	'actions.add_new_device': 'Add new device',
	'actions.use_from_to_configure_and_download':
		'Use the form on the left to configure and download balenaOS for your new device.',
	'actions_messages.appearance_device_explanation':
		'Your device should appear in your application dashboard within a few minutes. Have fun!',
	'actions.download_configuration_file': 'Download configuration file',
	'actions.download_balenaos': 'Download balenaOS',
	'actions.download_configuration_file_only':
		'Download configuration file only',

	'loading.generating_configuration_file': 'Generating configuration file...',
	'loading.fetching_versions': 'Fetching versions...',

	'no_data.no_os_versions_available_for_download':
		'No OS versions available for download',
	'no_data.no_instructions_found':
		'Instructions for this application are not currently available. Please try again later.',
	'no_data.no_versions_yet': 'no versions yet',

	'info.development_images_for_local_development_1':
		'Development images should be used when you are developing an application and want to use the fast',
	'info.development_images_for_local_development_2': 'local mode',
	'info.development_images_for_local_development_3': 'workflow.',
	'info.development_images_for_local_development_4':
		'This variant should never be used in production.',
	'info.production_images_not_for_local_development':
		"Production images are ready for production deployments, but don't offer easy access for local development.",
	'info.applications_support_devices_with_same_architecture':
		'Applications can support any devices that share the same architecture as their default device type.',

	// autoUI

	'labels.actions': 'Actions',

	'resource.item_plural': 'Items',

	no_resource_data: "You don't have any {{resource}} yet.",

	'questions.how_about_adding_one': 'How about adding one?',
};

const getTranslation = (str: string, opts?: any) => {
	let translation = translationMap[str as keyof typeof translationMap];
	if (!opts) {
		return translation;
	}
	if (opts.count != null && opts.count > 1) {
		const pluralKey = `${str}_plural` as keyof typeof translationMap;
		translation =
			translationMap[pluralKey] ??
			translationMap[str as keyof typeof translationMap];
	}
	const compiled = template(translation, { interpolate: /{{([\s\S]+?)}}/g });
	return compiled(opts);
};

export const useTranslation = () => {
	const externalT = React.useContext(TranslationContext);
	const t: TFunction = (str: string, opts?: any) => {
		let result = str;
		if (!!externalT && typeof externalT === 'function') {
			result = externalT(str, opts);
		}
		if (result == null || result === str) {
			result = getTranslation(str, opts);
		}
		return result ?? str;
	};

	return { t };
};
