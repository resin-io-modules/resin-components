// import * as semver from 'balena-semver';
import partition from 'lodash/partition';
import * as React from 'react';

import { Alert } from '../../components/Alert';
import { Box } from '../../components/Box';
import { Checkbox } from '../../components/Checkbox';
import { Flex } from '../../components/Flex';
import { Link } from '../../components/Link';
import { Select } from '../../components/Select';
import { RadioButton } from '../../components/RadioButton';
import { Txt } from '../../components/Txt';

import { QuestionMark } from './QuestionMark';
import { DeviceTypeSelector } from './DeviceTypeSelector';
import { OsTypeSelector } from './OsTypeSelector';
import {
	getPreferredVersionOpts,
	transformVersions,
	VersionSelectionOptions,
} from './versions';
import { DeviceType, OsVersionsByDeviceType } from './models';
import { useTranslation } from '../../hooks/useTranslation';
import styled from 'styled-components';
import { getOsVariantDisplayText } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons/faFileAlt';

export const DownloadImageLabel = styled.label`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 21px;
	font-size: 12px;
	margin-bottom: 8px;
	font-weight: normal;
`;

interface OsConfigurationProps {
	deviceTypeOsVersions: OsVersionsByDeviceType;
	compatibleDeviceTypes: DeviceType[];
	selectedDeviceType: DeviceType;
	osTypes: string[];
	hasEsrVersions: boolean;
	selectedOsType: string;
	isInitialDefault?: boolean;
	onSelectedDeviceTypeChange: (deviceType: DeviceType) => void;
	onSelectedVersionChange: (osVersion: string) => void;
	onSelectedOsTypeChange: (osType: string) => void;
	docsIcon?: IconProp;
}

export type BuildVariant = 'dev' | 'prod';

const canSelectVariant = (
	variant: BuildVariant,
	selectedVersion: VersionSelectionOptions | undefined,
) => Boolean(selectedVersion && selectedVersion.rawVersions[variant]);

const getCategorizedVersions = (
	deviceTypeOsVersions: OsVersionsByDeviceType,
	deviceType: DeviceType,
	osType: string | null,
) => {
	const osVersions = deviceTypeOsVersions[deviceType.slug] ?? [];
	const deviceOsVersions = osType
		? osVersions.filter((osVersion) => osVersion.osType === osType)
		: osVersions;

	const [proposedVersions, noBuildVariantVersions] = partition(
		deviceOsVersions,
		(v) => {
			// TODO: check if worth installing semver on rendition;
			// const major = semver.major(v.strippedVersion);
			const major = v.strippedVersion?.match(/\d+/)?.join();
			return major && parseInt(major, 10) >= 2;
		},
	);

	const proposedSelectionOpts = transformVersions(proposedVersions, true);
	const noBuildVariantSelectionOpts = transformVersions(
		noBuildVariantVersions,
		false,
	);
	const preferredSelectionOpts = getPreferredVersionOpts(
		proposedSelectionOpts,
		noBuildVariantSelectionOpts,
	);

	return {
		proposedSelectionOpts,
		noBuildVariantSelectionOpts,
		preferredSelectionOpts,
	};
};

const VariantSelector = ({
	version,
	variant,
	onVariantChange,
	t,
}: {
	version: VersionSelectionOptions | undefined;
	onVariantChange: (variant: BuildVariant) => void;
	variant: BuildVariant;
	t: (s: string) => string;
}) => {
	return (
		<>
			<RadioButton
				label={
					<>
						<Txt.span bold>{getOsVariantDisplayText('dev')}</Txt.span>
						<Alert ml={3} info plaintext>
							{t('info.recommended_for_new_users')}
						</Alert>
					</>
				}
				disabled={!canSelectVariant('dev', version)}
				checked={variant === 'dev'}
				onChange={() => onVariantChange('dev')}
			/>
			<Txt.p fontSize={1} mt={1} mb={3} color="tertiary.main">
				{t('info.development_images_for_local_development_1')}{' '}
				<Link href="https://balena.io/docs/development/local-mode/" blank>
					{t('info.development_images_for_local_development_2')}
				</Link>{' '}
				{t('info.development_images_for_local_development_3')}{' '}
				<strong>{t('info.development_images_for_local_development_4')}</strong>
			</Txt.p>

			<RadioButton
				label={<Txt.span bold>{getOsVariantDisplayText('prod')}</Txt.span>}
				disabled={!canSelectVariant('prod', version)}
				checked={variant === 'prod'}
				onChange={() => onVariantChange('prod')}
			/>
			<Txt.p fontSize={1} mt={1} color="tertiary.main">
				{t('info.production_images_not_for_local_development')}
			</Txt.p>
		</>
	);
};

export const OsConfiguration = ({
	deviceTypeOsVersions,
	compatibleDeviceTypes,
	selectedDeviceType,
	osTypes,
	hasEsrVersions,
	selectedOsType,
	isInitialDefault,
	onSelectedVersionChange,
	onSelectedDeviceTypeChange,
	onSelectedOsTypeChange,
	docsIcon,
}: OsConfigurationProps) => {
	const { t } = useTranslation();
	const [showAllVersions, setShowAllVersions] = React.useState(false);
	const [version, setVersion] = React.useState<
		VersionSelectionOptions | undefined
	>();
	const [variant, setVariant] = React.useState<BuildVariant>('prod');
	const {
		proposedSelectionOpts,
		noBuildVariantSelectionOpts,
		preferredSelectionOpts,
	} = getCategorizedVersions(
		deviceTypeOsVersions,
		selectedDeviceType,
		selectedOsType,
	);
	// Default to showing the 3 most recent major-minor versions
	let versionSelectionOpts = preferredSelectionOpts;

	if (showAllVersions) {
		versionSelectionOpts = proposedSelectionOpts.concat(
			noBuildVariantSelectionOpts,
		);
	}

	const hasEditions = Boolean(
		versionSelectionOpts && version?.supportsBuildEditions,
	);

	const shouldShowAllVersionsToggle =
		preferredSelectionOpts.length <
		proposedSelectionOpts.length + noBuildVariantSelectionOpts.length;

	React.useEffect(() => {
		const versionWithVariant = version?.rawVersions[variant];
		if (!versionWithVariant) {
			return;
		}

		onSelectedVersionChange(versionWithVariant);
	}, [version, variant]);

	React.useEffect(() => {
		if (!version) {
			return;
		}

		const selectedVariantExists = version.rawVersions[variant];
		if (!selectedVariantExists) {
			setVariant(variant === 'dev' ? 'prod' : 'dev');
		}
	}, [version, variant]);

	const handleShowAllVersions = (e: any) => {
		const isChecked = e.target.checked;
		setShowAllVersions(isChecked);

		if (isChecked || !version) {
			return;
		}

		const selectedValueIsPreferred = preferredSelectionOpts.some(
			(ver) => ver.value === version.value,
		);
		if (selectedValueIsPreferred) {
			return;
		}

		const preferred =
			preferredSelectionOpts.find((ver) => ver.isRecommended) ??
			preferredSelectionOpts?.[0];
		if (preferred) {
			setVersion(preferred);
		}
	};

	React.useEffect(() => {
		setVersion(
			versionSelectionOpts.find((ver) => ver.isRecommended) ??
				versionSelectionOpts[0],
		);
	}, [selectedDeviceType, selectedOsType]);

	return (
		<>
			<Flex mb={3}>
				{compatibleDeviceTypes.length > 1 && (
					<Box flex={3} mr={2}>
						<DownloadImageLabel>
							{t('placeholders.select_device_type')}
							<QuestionMark
								tooltip={t(
									'info.applications_support_devices_with_same_architecture',
								)}
							/>
						</DownloadImageLabel>
						<DeviceTypeSelector
							deviceTypeOptions={compatibleDeviceTypes}
							selectedDeviceType={selectedDeviceType}
							selectDeviceTypeOption={onSelectedDeviceTypeChange}
						/>
					</Box>
				)}
				{(!isInitialDefault || !selectedOsType) && (
					<Box flex={2} ml={2}>
						<DownloadImageLabel>
							{t('placeholders.select_os_type_status')}{' '}
							<DocsLink
								href="https://www.balena.io/docs/reference/OS/extended-support-release"
								docsIcon={docsIcon}
							/>
						</DownloadImageLabel>
						<OsTypeSelector
							supportedOsTypes={osTypes}
							hasEsrVersions={hasEsrVersions}
							selectedOsTypeSlug={selectedOsType}
							onSelectedOsTypeChange={onSelectedOsTypeChange}
						/>
					</Box>
				)}
			</Flex>
			{(!isInitialDefault || !version) && (
				<Box mb={3}>
					<DownloadImageLabel>
						{t('placeholders.select_version')}
					</DownloadImageLabel>

					<Flex alignItems="center">
						<Box flex={3} mr={2}>
							<Select<VersionSelectionOptions>
								id="e2e-download-image-versions-list"
								valueKey="value"
								labelKey="title"
								emptySearchMessage="No version available for this application type"
								value={version ?? {}}
								placeholder={'Choose a version...'}
								onChange={({ option }) => {
									setVersion(option);
								}}
								options={versionSelectionOpts}
							/>
						</Box>

						{shouldShowAllVersionsToggle && (
							<Box flex={2} ml={2}>
								<Checkbox
									checked={showAllVersions}
									label={'Show outdated versions'}
									onChange={handleShowAllVersions}
								/>
							</Box>
						)}
					</Flex>
				</Box>
			)}

			{hasEditions && (!isInitialDefault || !variant) && (
				<Box mb={2}>
					<DownloadImageLabel>
						{t('placeholders.select_edition')}
					</DownloadImageLabel>
					<Box mr={4} mb={3}>
						<VariantSelector
							t={t}
							version={version}
							variant={variant}
							onVariantChange={setVariant}
						/>
					</Box>
				</Box>
			)}
		</>
	);
};

interface DocsLinkProps {
	href: string;
	docsIcon?: IconProp;
}

export const DocsLink = ({ href, docsIcon }: DocsLinkProps) => {
	return (
		<Link blank href={href} fontSize={2} ml={2}>
			<FontAwesomeIcon icon={docsIcon || faFileAlt} />
		</Link>
	);
};
