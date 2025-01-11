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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9782317089565725"
          crossOrigin="anonymous"
        ></script>
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
