import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Add the favicon link */}
        <link rel="icon" href="/favicon.ico" />
        {/* Title should be defined at the page level */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
