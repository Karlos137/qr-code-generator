import { Html, Head, Main, NextScript } from "next/document"
import { mediaStyles } from "../utils/media"

// React components - Favicon
import Favicon from "../components/Favicon"

export default function Document() {
  return (
    <Html lang="cs" dir="ltr">
      <Head>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: mediaStyles }}
        />
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
