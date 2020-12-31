import Document, { Html, Head, Main, NextScript } from 'next/document';

class MuWebDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>Mu Web</title>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MuWebDocument;
