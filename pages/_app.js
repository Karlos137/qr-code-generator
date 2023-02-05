// Styles
import "../styles/global.css"

// Next.js - Google fonts
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
})

function MyApp({ Component, pageProps }) {
  return (
    <div
      className={`app ${poppins.className} flex min-h-screen flex-col bg-gray-100`}
    >
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
