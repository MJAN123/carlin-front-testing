import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/img/icon.svg" rel="icon" />

          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            crossOrigin="true"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
