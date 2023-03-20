// React
import { useRef } from "react"

// React components
import Button from "../Button"

// Store
import useQrStore from "../../store/qrStore"

// Constants
import { TRANSPARENT_BACKGROUND, SIZE } from "./QrCode.constants"

// SVG Crowbar
import downloadSvg, { downloadPng } from "svg-crowbar"

// Heroicons
import {
  ArrowDownCircleIcon,
  PrinterIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline"

// React SVG to image
import toImg from "react-svg-to-image"

// qrcode.react
import { QRCodeSVG } from "qrcode.react"

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
  // const eyeColor = useQrStore(state => state.eyeColor)
  // const colorfulCorners = useQrStore(state => state.colorfulCorners)

  const buttonIconClassNames = "h-4.5 w-4.5 text-sky-600 group-hover:text-white"

  const qrCodeRef = useRef(null)

  const handleDownload = format => {
    if (qrCodeRef.current !== null && qrCodeRef.current?.children?.length > 0) {
      const qrSvg = qrCodeRef.current.children?.[0]

      if (format === "svg") {
        downloadSvg(qrSvg, "qr-kod", {
          css: "none",
        })
      }

      if (format === "png") {
        downloadPng(qrSvg, "qr-kod", {
          downloadPNGOptions: { scale: downloadSize / SIZE / 2 },
          css: "none",
        })
      }

      if (format === "webp") {
        const qrSvgCloned = qrSvg.cloneNode(true)
        qrSvgCloned.id = "qr-kod-svg-cloned"
        qrCodeRef.current.appendChild(qrSvgCloned)

        const loadPromise = new Promise(resolve => {
          qrSvgCloned.addEventListener("load", resolve)
        })

        loadPromise.then(() => {
          toImg(
            "#qr-kod-svg-cloned",
            "qr-kod",
            {
              scale: downloadSize / SIZE,
              format: "webp",
              download: true,
            },
            qrSvgCloned
          ).then(() => {
            qrCodeRef.current.removeChild(qrSvgCloned)
          })
        })
      }
    }
  }

  return (
    <div id="qr-kod" className="mx-auto justify-self-center lg:sticky lg:top-2">
      <div ref={qrCodeRef} id="qr-kod-svg">
        {logoUrl ? (
          <QRCodeSVG
            value={value}
            size={SIZE}
            bgColor={transparentBackground ? TRANSPARENT_BACKGROUND : bgColor}
            fgColor={fgColor}
            level={correctionLevel}
            includeMargin={true}
            imageSettings={{
              src: logoUrl,
              width: logoSize,
              height: logoSize,
              excavate: logoBackgroundTransparent,
            }}
          />
        ) : (
          <QRCodeSVG
            value={value}
            size={350}
            bgColor={transparentBackground ? TRANSPARENT_BACKGROUND : bgColor}
            fgColor={fgColor}
            level={correctionLevel}
            includeMargin={true}
          />
        )}
      </div>

      <div className="mt-2 flex items-center gap-1">
        <ExclamationCircleIcon className="h-4 w-4 text-gray-600" />
        <p className="text-xs italic text-gray-600">
          Před stažením nezapomeňte otestovat funkčnost QR kódu!
        </p>
      </div>
      <div className="mt-4 flex gap-2">
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
            handleDownload("svg")
          }}
        >
          <span>SVG</span>
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
