// React
import { useRef, useEffect } from "react"

// React components
import Button from "../Button"

// Store
import useQrStore from "../../store/qrStore"

// Constants
import { TRANSPARENT_BACKGROUND } from "./QrCode.constants"
import { DEFAULT_COLORS } from "../Accordion/ColorsForm/ColorsForm.constants"

import QR from "easyqrcodejs"
import downloadSvg, { downloadPng } from "svg-crowbar"

const QrCode = () => {
  const value = useQrStore(state => state.value)
  const bgColor = useQrStore(state => state.bgColor)
  const fgColor = useQrStore(state => state.fgColor)
  const eyeColor = useQrStore(state => state.eyeColor)
  const transparentBackground = useQrStore(state => state.transparentBackground)
  const colorfulCorners = useQrStore(state => state.colorfulCorners)
  const qrCodeRef = useRef(null)

  useEffect(() => {
    const options = {
      quietZone: 20,
      text: value ? value : " ",
      width: 340,
      height: 340,
      colorDark: fgColor,
      colorLight: transparentBackground ? TRANSPARENT_BACKGROUND : bgColor,
      drawer: "svg",
    }

    if (colorfulCorners) {
      options.PO_TL = eyeColor[0].outer
      options.PI_TL = eyeColor[0].inner
    }

    const qr = new QR(qrCodeRef.current, options)
  }, [
    value,
    fgColor,
    bgColor,
    eyeColor,
    colorfulCorners,
    transparentBackground,
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
    }
  }

  return (
    <div id="qr-kod" className="mx-auto lg:sticky lg:top-2">
      <div id="qr-kod-svg" ref={qrCodeRef} />
      <div className="mt-4 flex justify-between gap-2">
        <Button
          onClick={() => {
            handleDownload("svg")
          }}
        >
          Stáhnout SVG
        </Button>
        <Button
          onClick={() => {
            handleDownload("png")
          }}
        >
          Stáhnout PNG
        </Button>
      </div>
      <div className="mt-4">
        <Button
          onClick={() => {
            window.print()
          }}
        >
          Tisknout
        </Button>
      </div>
    </div>
  )
}
export default QrCode
