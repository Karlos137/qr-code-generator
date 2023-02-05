// React components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import QrGenerator from "../components/QrGenerator"
import UrlForm from "../components/Forms/UrlForm"
import IntroText from "../components/IntroText"

export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <IntroText />
        <QrGenerator />
      </Layout>
    </>
  )
}
