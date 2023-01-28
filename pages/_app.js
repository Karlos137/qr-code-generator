// Next.js - Google fonts
import { Poppins } from "@next/font/google"

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] })

function MyApp({ Component, pageProps }) {
  return (
    <div className={`app ${poppins.className}`}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
