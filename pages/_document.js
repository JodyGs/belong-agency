import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>A boutique agency with a focus on sustainable beauty</title>
        <meta property="og:title" content="A boutique agency with a focus on sustainable beauty" key="title" />
        <meta name="description" content="Agence de relations publiques qui élaborent des stratégies de communication sur mesure qui renforcent la notoriété de marque et créent la demande." />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}