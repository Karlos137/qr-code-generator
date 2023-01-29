import { Html, Head, Main, NextScript } from "next/document"

// React components - Favicon
import Favicon from "../components/Favicon"

export default function Document() {
  return (
    <Html>
      <Head>
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
