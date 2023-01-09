// React components
import Seo from "../components/Seo"
import QrCode from "../components/QrCode"
import UrlForm from "../components/Forms/UrlForm"

export default function Home() {
  return (
    <>
      <Seo />
      <UrlForm />
      <QrCode />
    </>
  )
}
