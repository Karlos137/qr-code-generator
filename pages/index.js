// React components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import QrCode from "../components/QrCode"
import UrlForm from "../components/Forms/UrlForm"

export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <UrlForm />
        <QrCode />
      </Layout>
    </>
  )
}
