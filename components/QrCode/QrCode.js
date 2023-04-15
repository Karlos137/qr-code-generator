// React
import { useRef } from "react"

// React components
import Button from "../Button"

// Store
import useQrStore from "../../store/qrStore"

// Constants
import { TRANSPARENT_BACKGROUND, SIZE } from "./QrCode.constants"
import { DEFAULT_COLORS } from "../Accordion/ColorsForm/ColorsForm.constants"

// Heroicons
import {
  ArrowDownCircleIcon,
  PrinterIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline"

// React qrcode logo
import { QRCode } from "react-qrcode-logo"

const QrCode = () => {
  const value = useQrStore(state => state.value)
  const bgColor = useQrStore(state => state.bgColor)
  const fgColor = useQrStore(state => state.fgColor)
  const transparentBackground = useQrStore(state => state.transparentBackground)
  const correctionLevel = useQrStore(state => state.correctionLevel)
  const logoUrl = useQrStore(state => state.logoUrl)
  const logoSize = useQrStore(state => state.logoSize)
  const logoBackgroundTransparent = useQrStore(
    state => state.logoBackgroundTransparent
  )
  const downloadSize = useQrStore(state => state.downloadSize)
  const eyeColor = useQrStore(state => state.eyeColor)
  const colorfulCorners = useQrStore(state => state.colorfulCorners)

  const buttonIconClassNames = "h-4.5 w-4.5 text-sky-600 group-hover:text-white"

  const qrCodeRef = useRef(null)

  const handleDownload = format => {
    if (qrCodeRef.current !== null && qrCodeRef.current?.children?.length > 0) {
      const qrCanvas = qrCodeRef.current.children?.[0]
      const width = downloadSize
      const height = downloadSize

      // Create a new canvas for the resized image
      const resizedCanvas = document.createElement("canvas")
      resizedCanvas.width = width
      resizedCanvas.height = height
      const resizedContext = resizedCanvas.getContext("2d")

      // Draw the original canvas onto the resized canvas
      resizedContext.drawImage(qrCanvas, 0, 0, width, height)

      const link = document.createElement("a")

      if (format === "png") {
        link.href = resizedCanvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream")
        link.download = "qrkod.png"
      }

      if (format === "webp") {
        link.href = resizedCanvas
          .toDataURL("image/webp")
          .replace("image/webp", "image/octet-stream")
        link.download = "qrkod.webp"
      }

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div id="qr-kod" className="mx-auto justify-self-center lg:sticky lg:top-2">
      <div ref={qrCodeRef} id="qr-kod-canvas" className="aspect-square">
        <QRCode
          value={value}
          size={SIZE}
          bgColor={transparentBackground ? TRANSPARENT_BACKGROUND : bgColor}
          fgColor={fgColor}
          ecLevel={correctionLevel}
          eyeColor={colorfulCorners ? eyeColor : DEFAULT_COLORS}
        />
      </div>

      <div className="print-hide mt-2 flex items-center gap-1">
        <ExclamationCircleIcon className="h-4 w-4 text-gray-600" />
        <p className="text-xs italic text-gray-600">
          Před stažením nezapomeňte otestovat funkčnost QR kódu!
        </p>
      </div>
      <div className="print-hide mt-4 flex gap-2">
        <Button
          icon={true}
          onClick={() => {
            handleDownload("png")
          }}
        >
          <span>PNG</span>
          <ArrowDownCircleIcon className={buttonIconClassNames} />
        </Button>
        <Button
          icon={true}
          onClick={() => {
            handleDownload("webp")
          }}
        >
          <span>WEBP</span>
          <ArrowDownCircleIcon className={buttonIconClassNames} />
        </Button>
        <Button
          icon={true}
          onClick={() => {
            window.print()
          }}
        >
          <span>TISK</span>
          <PrinterIcon className={buttonIconClassNames} />
        </Button>
      </div>
    </div>
  )
}
export default QrCode
