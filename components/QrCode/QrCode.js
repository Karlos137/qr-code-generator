// React
import { useRef, useEffect, useState } from "react"

// React components
import Button from "../Button"

// Store
import useQrStore from "../../store/qrStore"

// Constants
import {
  TRANSPARENT_BACKGROUND,
  BASE_OPTIONS,
  MOBILE_SIZES,
} from "./QrCode.constants"

// easyqrcodejs
import QRCode from "easyqrcodejs"

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

// Hooks
import useMediaQuery from "../../hooks/useMediaQuery"

const QrCode = () => {
  const isMobile = useMediaQuery("(max-width: 440px)")
  const isSmallMobile = useMediaQuery("(max-width: 365px)")
  const value = useQrStore(state => state.value)
  const bgColor = useQrStore(state => state.bgColor)
  const fgColor = useQrStore(state => state.fgColor)
  const eyeColor = useQrStore(state => state.eyeColor)
  const transparentBackground = useQrStore(state => state.transparentBackground)
  const colorfulCorners = useQrStore(state => state.colorfulCorners)
  const correctionLevel = useQrStore(state => state.correctionLevel)
  const logoUrl = useQrStore(state => state.logoUrl)
  const logoSize = useQrStore(state => state.logoSize)
  const logoBackgroundTransparent = useQrStore(
    state => state.logoBackgroundTransparent
  )
  const downloadSize = useQrStore(state => state.downloadSize)

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
      width: isSmallMobile
        ? MOBILE_SIZES.smallMobile
        : isMobile
        ? MOBILE_SIZES.mobile
        : BASE_OPTIONS.width,
      height: isSmallMobile
        ? MOBILE_SIZES.smallMobile
        : isMobile
        ? MOBILE_SIZES.mobile
        : BASE_OPTIONS.height,
      text: value ? value : " ",
      colorDark: fgColor,
      colorLight: transparentBackground ? TRANSPARENT_BACKGROUND : bgColor,
      correctLevel: getCorrectionLevel(),
      logoWidth: (BASE_OPTIONS.width / 3.5 / 100) * logoSize,
      logoHeight: (BASE_OPTIONS.width / 3.5 / 100) * logoSize,
      logoBackgroundTransparent: logoBackgroundTransparent,
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
    logoSize,
    logoBackgroundTransparent,
    isSmallMobile,
    isMobile,
    getCorrectionLevel,
  ])

  const handleDownload = format => {
    if (qrCodeRef.current !== null && qrCodeRef.current?.children?.length > 0) {
      const currentQrCodeSize =
        qrCodeRef.current.children?.[0].getBoundingClientRect().width

      if (format === "svg") {
        downloadSvg(qrCodeRef.current.children?.[0], "qr-kod", {
          css: "none",
        })
      }

      if (format === "png") {
        downloadPng(qrCodeRef.current.children?.[0], "qr-kod", {
          downloadPNGOptions: { scale: downloadSize / currentQrCodeSize / 2 },
          css: "none",
        })
      }

      if (format === "webp") {
        toImg("#qr-kod-svg svg", "qr-kod", {
          scale: downloadSize / currentQrCodeSize,
          format: "webp",
          download: true,
        })
      }
    }
  }

  return (
    <div id="qr-kod" className="mx-auto justify-self-center lg:sticky lg:top-2">
      <div
        id="qr-kod-svg"
        className="min-h-[271px] min-[366px]:min-h-[313px] min-[421px]:min-h-[376px]"
        ref={qrCodeRef}
      />
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
