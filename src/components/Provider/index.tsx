import { Grommet, GrommetProps } from 'grommet';
import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../common-types';
import defaultTheme from '../../theme';
import { px } from '../../utils';
import { BreakpointProvider } from './BreakpointProvider';
import { Helmet } from 'react-helmet';
import {
	WidgetContext,
	WidgetContextValue,
} from '../../contexts/WidgetContext';
import { TranslationContext } from '../../contexts/TranslationContext';
import { HistoryContext } from '../../contexts/HistoryContext';
import { AnalyticsContext, Analytics } from '../../contexts/AnalyticsContext';
import type { History } from 'history';

const Base = styled(Grommet)`
	font-family: ${(props) => props.theme.font};
	font-size: ${(props) => px(props.theme.fontSizes[2])};
	color: ${(props) => px(props.theme.colors.text.main)};
`;

const BaseProvider = ({
	theme,
	widgets,
	t,
	history,
	analytics,
	...props
}: ThemedProvider) => {
	const isDefaultFont = !theme?.font;
	const providerTheme = merge(cloneDeep(defaultTheme), theme);
	console.log('test');
	return (
		<BreakpointProvider breakpoints={providerTheme.breakpoints}>
			<WidgetContext.Provider value={widgets ?? {}}>
				<TranslationContext.Provider value={t ?? {}}>
					<HistoryContext.Provider value={history ?? null}>
						<AnalyticsContext.Provider value={analytics ?? null}>
							{isDefaultFont && (
								<Helmet>
									<link
										href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400&family=Ubuntu+Mono:wght@400;700&display=fallback"
										rel="stylesheet"
									/>
								</Helmet>
							)}
							<Base theme={providerTheme} {...props} />
						</AnalyticsContext.Provider>
					</HistoryContext.Provider>
				</TranslationContext.Provider>
			</WidgetContext.Provider>
		</BreakpointProvider>
	);
};

export interface ThemedProvider
	extends Omit<React.HTMLAttributes<HTMLElement>, 'dir'> {
	widgets?: WidgetContextValue;
	theme?: Partial<Theme>;
	dir?: GrommetProps['dir'];
	t?: any; // useTranslation
	history?: History; // Application Router history
	analytics?: Analytics;
}

export const Provider = BaseProvider;
