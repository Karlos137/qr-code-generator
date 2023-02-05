// React QRcode Logo
import { QRCode } from "react-qrcode-logo"

// Store
import useQrStore from "../../store/qrStore"

const QrCode = () => {
  const value = useQrStore(state => state.value)
  const bgColor = useQrStore(state => state.bgColor)
  const fgColor = useQrStore(state => state.fgColor)

  return (
    <div>
      <QRCode value={value} bgColor={bgColor} fgColor={fgColor} size={334} />
    </div>
  )
}
export default QrCode
