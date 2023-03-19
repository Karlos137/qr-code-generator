// Next.js
import Head from "next/head"

const Seo = ({
  title = "QR kód generátor",
  description = "Webová aplikace pro generování QR kódu",
}) => {
  return (
    <Head>
      <title>{`${title} | QRkodgenerator.cz`}</title>
      <meta name="description" content={description} />
    </Head>
  )
}
export default Seo
