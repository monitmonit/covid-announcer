import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../theme';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import axios from 'axios';
import BaseLayout from '../components/layout/BaseLayout';
axios.defaults.baseURL = 'https://disease.sh/v3/covid-19';

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  const [darkMode, setDarkMode] = useState(isDarkMode);
  return (
    <React.Fragment>
      <Head>
        <title>Monit</title>
        <link rel="favicon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <BaseLayout darkMode={darkMode} setDarkMode={setDarkMode}>
            <CssBaseline />
            <Component {...pageProps} />
          </BaseLayout>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default MyApp;
