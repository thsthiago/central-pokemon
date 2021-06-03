import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Roboto:wght@400;700&family=ZCOOL+QingKe+HuangYou&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Thiago Cabral | Desenvolvedor Web"
          />
          <meta name="keywords" content="Pokémon" />
          <meta name="author" content="Thiago Cabral" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
