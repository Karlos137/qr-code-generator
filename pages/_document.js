import { Html, Head, Main, NextScript } from "next/document"
import { mediaStyles } from "../utils/media"

// React components - Favicon
import Favicon from "../components/Favicon"

export default function Document() {
  return (
    <Html>
      <Head>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: mediaStyles }}
        />
        <meta name="robots" content="noindex, nofollow" />
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
