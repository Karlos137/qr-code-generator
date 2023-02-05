// React components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import QrGenerator from "../components/QrGenerator"
import IntroText from "../components/IntroText"
import InfoCards from "../components/InfoCards"

export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <IntroText />
        <QrGenerator />
        <InfoCards />
      </Layout>
    </>
  )
}
