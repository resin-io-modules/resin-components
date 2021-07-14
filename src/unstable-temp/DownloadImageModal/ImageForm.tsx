import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cloneDeep from 'lodash/cloneDeep';
import debounce from 'lodash/debounce';
import * as React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Alert } from '../../components/Alert';
import { Button } from '../../components/Button';
import { DropDownButton } from '../../components/DropDownButton';
import { Flex } from '../../components/Flex';
import { Txt } from '../../components/Txt';

import { DownloadFormModel, FormModel } from './FormModel';
import { DeviceType } from './models';
import { DownloadOptions } from './DownloadImageModal';

const debounceDownloadSize = debounce(
	(getDownloadSize, deviceType, rawVersion, setDownloadSize) =>
		getDownloadSize(deviceType.slug, rawVersion)
			.then(setDownloadSize)
			.catch(() => {
				setDownloadSize(null);
			}),
	200,
	{
		trailing: true,
		leading: false,
	},
);

const getDeviceTypeOptions = (deviceType: DeviceType) => {
	if (!deviceType.options) {
		return [];
	}

	return cloneDeep(deviceType.options).map((group) => {
		// Add an extra label value for network config
		if (group.name === 'network') {
			group.options.forEach((g) => {
				if (g.name === 'network') {
					g.choicesLabels = {
						ethernet: 'Ethernet only',
						wifi: 'Wifi + Ethernet',
					};
				}
			});
		}

		return group;
	});
};

const isDownloadDisabled = (
	formModel: FormModel,
	rawVersion: ImageFormProps['rawVersion'],
) => {
	if (!rawVersion) {
		return true;
	}

	return formModel.network === 'wifi' && !formModel.wifiSsid;
};

interface ImageFormProps {
	downloadUrl: string;
	appId: number;
	releaseId?: number;
	rawVersion: string | null;
	deviceType: DeviceType;
	authToken?: string;
	onDownloadStart?: (
		downloadConfigOnly: boolean,
		downloadOptions: DownloadOptions,
	) => void;
	setIsDownloadingConfig: (isDownloading: boolean) => void;
	downloadConfig?: (model: FormModel) => Promise<void> | undefined;
	getDownloadSize?: () => Promise<string> | undefined;
	configurationComponent: React.ReactNode;
}

export const ImageForm = ({
	downloadUrl,
	appId,
	releaseId,
	rawVersion,
	deviceType,
	authToken,
	onDownloadStart,
	setIsDownloadingConfig,
	downloadConfig,
	getDownloadSize,
	configurationComponent,
}: ImageFormProps) => {
	const [downloadSize, setDownloadSize] = React.useState<string | null>(null);
	// If the image is deployed to docker, we only offer config
	// download, so there is no need to show the toggle
	const hasDockerImageDownload =
		deviceType?.yocto?.deployArtifact === 'docker-image';
	const [model, setModel] = React.useState<FormModel>({
		downloadConfigOnly: hasDockerImageDownload,
	});

	const setDownloadConfigOnly = (downloadConfigOnly: boolean) => {
		const downloadOptions = {
			applicationId: appId,
			releaseId,
			deviceType: deviceType.slug,
			appUpdatePollInterval: model.appUpdatePollInterval,
			downloadConfigOnly,
			network: model.network,
			version: rawVersion,
			provisioningKeyName: model.provisioningKeyName,
		} as DownloadOptions;

		if (typeof onDownloadStart === 'function') {
			onDownloadStart(downloadConfigOnly, downloadOptions);
		}
		setModel({
			...model,
			downloadConfigOnly,
		});
	};

	React.useEffect(() => {
		if (hasDockerImageDownload && !model.downloadConfigOnly) {
			setDownloadConfigOnly(true);
		}
	}, [hasDockerImageDownload, model.downloadConfigOnly]);

	React.useEffect(() => {
		if (!deviceType || !rawVersion || !getDownloadSize) {
			setDownloadSize(null);
			return;
		}

		// Debounce as the version changes right after the devicetype does, resulting in multiple requests.
		debounceDownloadSize(
			getDownloadSize,
			deviceType,
			rawVersion,
			setDownloadSize,
		);
	}, [deviceType?.slug, rawVersion]);

	const { t } = useTranslation();

	return (
		<form
			action={downloadUrl}
			target="_blank"
			method="post"
			autoComplete="off"
			style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
		>
			<input type="hidden" name="appId" value={appId} />
			{releaseId && <input type="hidden" name="releaseId" value={releaseId} />}
			<input type="hidden" name="_token" value={authToken} />
			<input name="version" value={rawVersion ?? ''} type="hidden" />
			<input name="deviceType" value={deviceType?.slug} type="hidden" />
			<input name="fileType" value=".zip" type="hidden" />

			{configurationComponent}

			<Flex flexDirection="column" flex="1">
				<DownloadFormModel
					model={model}
					onModelChange={setModel}
					options={getDeviceTypeOptions(deviceType)}
				/>
			</Flex>

			{(deviceType.imageDownloadAlerts ?? []).map((alert) => {
				return (
					<Alert
						key={alert.message}
						mb={3}
						info={alert.type === 'info'}
						warning={alert.type === 'warning'}
						danger={alert.type === 'danger'}
						success={alert.type === 'success'}
					>
						{alert.message}
					</Alert>
				);
			})}

			<Flex>
				{!downloadConfig && (
					<Button
						mt={2}
						ml="auto"
						className="e2e-download-image-submit"
						primary
						type="submit"
						disabled={hasDockerImageDownload}
						onClick={() => setDownloadConfigOnly(false)}
					>
						<Txt bold={!model.downloadConfigOnly}>
							{t('actions.download_balenaos') +
								(rawVersion && downloadSize ? ` (~${downloadSize})` : '')}
						</Txt>
					</Button>
				)}
				{!!downloadConfig && (
					<DropDownButton
						mt={2}
						primary
						ml="auto"
						className="e2e-download-image-submit"
						type={!model.downloadConfigOnly ? 'submit' : 'button'}
						disabled={isDownloadDisabled(model, rawVersion)}
						onClick={async () => {
							if (model.downloadConfigOnly && downloadConfig) {
								setIsDownloadingConfig(true);
								await downloadConfig(model);
								setIsDownloadingConfig(false);
							}
						}}
						icon={<FontAwesomeIcon icon={faDownload} />}
						label={
							model.downloadConfigOnly
								? t('actions.download_configuration_file')
								: t('actions.download_balenaos') +
								  (rawVersion && downloadSize ? ` (~${downloadSize})` : '')
						}
						alignRight
						dropUp
					>
						<Button
							plain
							disabled={hasDockerImageDownload}
							onClick={() => setDownloadConfigOnly(false)}
						>
							<Txt bold={!model.downloadConfigOnly}>
								{t('actions.download_balenaos')}
							</Txt>
						</Button>
						<Button plain onClick={() => setDownloadConfigOnly(true)}>
							<Txt bold={!!model.downloadConfigOnly}>
								{t('actions.download_configuration_file_only')}
							</Txt>
						</Button>
					</DropDownButton>
				)}
			</Flex>
		</form>
	);
};
