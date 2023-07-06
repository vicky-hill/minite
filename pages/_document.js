import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://kit.fontawesome.com/66e49c80d0.js" crossorigin="anonymous"></script>
      </body>
    </Html>
  )
}
