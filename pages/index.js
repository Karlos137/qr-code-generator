// React components
import Seo from "../components/Seo"

// React QRcode Logo
import { QRCode } from "react-qrcode-logo"

export default function Home() {
  return (
    <>
      <Seo />
      <QRCode value="test" />
    </>
  )
}
