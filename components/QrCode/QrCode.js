// React QRcode Logo
import { QRCode } from "react-qrcode-logo"

// Store
import useQrStore from "../../store/qrStore"

const QrCode = () => {
  const value = useQrStore(state => state.value)
  const bgColor = useQrStore(state => state.bgColor)
  const fgColor = useQrStore(state => state.fgColor)
  const eyeColor = useQrStore(state => state.eyeColor)

  return (
    <div className="mx-auto lg:sticky lg:top-0">
      <QRCode
        value={value}
        bgColor={bgColor}
        fgColor={fgColor}
        size={334}
        eyeColor={eyeColor}
      />
    </div>
  )
}
export default QrCode
