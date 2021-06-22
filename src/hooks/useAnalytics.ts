import React from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';
import { AnalyticsUrlParams, createClient } from 'analytics-client';

export const useAnalytics = () => {
	const analytics = React.useContext(AnalyticsContext);
	if (
		!analytics?.componentName ||
		!analytics?.endpoint ||
		!analytics?.projectName
	) {
		return {};
	}

	const urlParamsHandler = new AnalyticsUrlParams();

	const newQuery =
		urlParamsHandler.consumeUrlParameters(window.location.search) ?? null;

	const passedDeviceId = urlParamsHandler.getPassedDeviceId();

	const analyticsClient = createClient({
		...analytics,
		deviceId: passedDeviceId,
	});

	urlParamsHandler.setClient(analyticsClient);

	return { analyticsClient, urlParamsHandler, newQuery };
};
