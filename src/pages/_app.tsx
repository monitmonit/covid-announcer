import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../styles/theme';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import axios from 'axios';
axios.defaults.baseURL = 'https://disease.sh/v3/covid-19';

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <React.Fragment>
      <Head>
        <title>Monit</title>
        <link rel="favicon" href="/favicon.ico" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default MyApp;
