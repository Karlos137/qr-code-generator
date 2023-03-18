// React
import { useRef, useEffect } from "react"

// React components
import Button from "../Button"

// Store
import useQrStore from "../../store/qrStore"

// Constants
import { TRANSPARENT_BACKGROUND, BASE_OPTIONS } from "./QrCode.constants"
// import { DEFAULT_COLORS } from "../Accordion/ColorsForm/ColorsForm.constants"

// easyqrcodejs
import QRCode from "easyqrcodejs"

// SVG Crowbar
import downloadSvg, { downloadPng } from "svg-crowbar"

// Heroicons
import { ArrowDownCircleIcon, PrinterIcon } from "@heroicons/react/24/outline"

// React SVG to image
import toImg from "react-svg-to-image"

const QrCode = () => {
  const value = useQrStore(state => state.value)
  const bgColor = useQrStore(state => state.bgColor)
  const fgColor = useQrStore(state => state.fgColor)
  const eyeColor = useQrStore(state => state.eyeColor)
  const transparentBackground = useQrStore(state => state.transparentBackground)
  const colorfulCorners = useQrStore(state => state.colorfulCorners)
  const correctionLevel = useQrStore(state => state.correctionLevel)
  const logoUrl = useQrStore(state => state.logoUrl)

  const qrCodeRef = useRef(null)

  const buttonIconClassNames = "h-4.5 w-4.5 text-sky-600 group-hover:text-white"

  const getCorrectionLevel = () => {
    switch (correctionLevel) {
      case "L":
        return QRCode.CorrectLevel.L
      case "M":
        return QRCode.CorrectLevel.M
      case "Q":
        return QRCode.CorrectLevel.Q
      case "H":
        return QRCode.CorrectLevel.H
      default:
        return QRCode.CorrectLevel.L
    }
  }

  useEffect(() => {
    const options = {
      ...BASE_OPTIONS,
      text: value ? value : " ",
      colorDark: fgColor,
      colorLight: transparentBackground ? TRANSPARENT_BACKGROUND : bgColor,
      correctLevel: getCorrectionLevel(),
    }

    if (colorfulCorners) {
      options.PO_TL = eyeColor[0].outer
      options.PI_TL = eyeColor[0].inner
      options.PO_TR = eyeColor[1].outer
      options.PI_TR = eyeColor[1].inner
      options.PO_BL = eyeColor[2].outer
      options.PI_BL = eyeColor[2].inner
    }

    if (logoUrl) {
      options.logo = logoUrl
    }

    const qr = new QRCode(qrCodeRef.current, options)
  }, [
    value,
    fgColor,
    bgColor,
    eyeColor,
    colorfulCorners,
    transparentBackground,
    correctionLevel,
    logoUrl,
  ])

  const handleDownload = format => {
    if (qrCodeRef.current !== null && qrCodeRef.current?.children?.length > 0) {
      if (format === "svg") {
        downloadSvg(qrCodeRef.current.children?.[0], "qrcode", {
          css: "none",
        })
      }

      if (format === "png") {
        downloadPng(qrCodeRef.current.children?.[0], "qrcode")
      }

      if (format === "webp") {
        toImg("#qr-kod-svg svg", "qrcode", {
          scale: 2,
          format: "webp",
          quality: 1,
          download: true,
        })
      }
    }
  }

  return (
    <div id="qr-kod" className="mx-auto lg:sticky lg:top-2">
      <div id="qr-kod-svg" ref={qrCodeRef} />
      <div className="mt-4 flex gap-2">
        <Button
          icon={true}
          onClick={() => {
            handleDownload("svg")
          }}
        >
          <span>SVG</span>
          <ArrowDownCircleIcon className={buttonIconClassNames} />
        </Button>
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
