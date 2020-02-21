import { ThemeProvider } from 'styled-components';
import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import makeStore from '../redux/store';

import { theme } from '../lib/theme';
import GlobalStyles from '../lib/global';

import Navigation from '../components/Navigation/index';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = {};

    if (Component.getInitialProps) {
      Object.assign(pageProps, await Component.getInitialProps(ctx));
    }

    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store} = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Navigation {...pageProps} />
            <GlobalStyles />
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </>
    );
  }
}

export default withRedux(makeStore)(MyApp);
