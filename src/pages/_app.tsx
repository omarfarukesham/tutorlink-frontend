// src/pages/_app.tsx
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <Component {...pageProps} />
    <Toaster position="top-right" />
  </Provider>
  );
}
