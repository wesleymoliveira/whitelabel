import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/theme';
import createEmotionCache from '@/createEmotionCache';
import { ApolloProvider } from '@apollo/client';
import client from '@/config/apollo';

import 'react-quill/dist/quill.snow.css';
import './app.css';

import Script from 'next/script';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<ApolloProvider client={client}>
					<Script src='https://polyfill.io/v3/polyfill.min.js?features=Intl'></Script>
					<Head>
						<title>Whitelabel - Frontend</title>
						<meta name='viewport' content='initial-scale=1, width=device-width' />
						<meta name='msapplication-TileColor' content='#da532c' />
						<meta name='theme-color' content='#2D2D2C' />
						<meta name='apple-mobile-web-app-capable' content='yes' />
						<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
					</Head>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />			
							<Component {...pageProps} />
				</ApolloProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}
