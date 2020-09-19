import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '@phobon/tokens';

import { MDXProvider } from '@mdx-js/react';

import FourPanelLayout from '../components/FourPanelLayout';

const components = {
  // Map components as required here. Move this to local state to update
  // at runtime, which may not really be needed
};

export default class CanvasApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>canvas</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content="canvas" />
          <meta name="description" content="An mdx-powered app template" />
          <link rel="icon" href="/static/favicon.ico" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://github.com/phobon/canvas" />
          <meta property="og:title" content="canvas" />
          <meta property="og:description" content="An mdx-powered app template" />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://github.com/phobon/canvas" />
          <meta property="twitter:title" content="canvas" />
          <meta property="twitter:description" content="An mdx-powered app template" />
          <meta property="twitter:image" content="" />

        </Head>
        <ThemeProvider theme={theme}>
          {/* Set up authentication here */}
          <FourPanelLayout>
            <MDXProvider components={components}>
              <Component {...pageProps} />
            </MDXProvider>
          </FourPanelLayout>
        </ThemeProvider>
      </>
    )
  }
}