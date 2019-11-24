/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from 'styled-components';
import App from 'next/app';
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';


import { theme } from '../lib/theme';
import GlobalStyles from '../lib/global';

import Navigation from '../components/Navigation/index';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done()

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = {};

    if (Component.getInitialProps) {
      Object.assign(pageProps, await Component.getInitialProps(ctx));
    }
    // eslint-disable-next-line no-console
    console.log(pageProps);

    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    // console.log(pageProps);

    return (
      <>
        {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

          <Navigation {...pageProps} />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
