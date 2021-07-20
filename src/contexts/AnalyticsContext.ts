import * as React from 'react';

export interface Analytics {
	endpoint: string;
	projectName: string;
	componentName: string;
	componentVersion?: string;
	// deviceId: string;
}

export const AnalyticsContext = React.createContext<Analytics | null>(null);
