import '../style/index.scss';
import { AppProps } from 'next/app';
import * as React from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
