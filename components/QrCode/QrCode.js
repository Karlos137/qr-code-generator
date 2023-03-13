// React
import { useRef } from "react"

// React QRcode Logo
import { QRCode } from "react-qrcode-logo"

// React components
import Button from "../Button"

// Store
import useQrStore from "../../store/qrStore"

// Constants
import { TRANSPARENT_BACKGROUND } from "./QrCode.constants"

const QrCode = () => {
  const value = useQrStore(state => state.value)
  const bgColor = useQrStore(state => state.bgColor)
  const fgColor = useQrStore(state => state.fgColor)
  const eyeColor = useQrStore(state => state.eyeColor)
  const transparentBackground = useQrStore(state => state.transparentBackground)

  const qrCodeRef = useRef(null)

  const downloadPNG = () => {
    qrCodeRef.current.canvas.current.toBlob(blob => {
      const link = document.createElement("a")
      link.download = "qrcode.png"
      link.href = URL.createObjectURL(blob)
      link.click()
    }, "image/png")
  }

  function downloadSVG() {
    const canvas = qrCodeRef.current.canvas.current
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", canvas.width)
    svg.setAttribute("height", canvas.height)
    const svgNS = svg.namespaceURI
    const img = document.createElementNS(svgNS, "image")
    img.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "href",
      canvas.toDataURL()
    )
    img.setAttribute("width", canvas.width)
    img.setAttribute("height", canvas.height)
    svg.appendChild(img)

    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(svg)

    const downloadLink = document.createElement("a")
    downloadLink.href =
      "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString)
    downloadLink.download = "qrcode.svg"
    downloadLink.click()
  }

  return (
    <div id="qr-kod" className="mx-auto lg:sticky lg:top-2">
      <QRCode
        ref={qrCodeRef}
        value={value}
        bgColor={transparentBackground ? TRANSPARENT_BACKGROUND : bgColor}
        fgColor={fgColor}
        size={334}
        eyeColor={eyeColor}
      />
      <div className="mt-4 flex justify-between gap-2">
        <Button onClick={downloadPNG}>Stáhnout PNG</Button>
        <Button onClick={downloadSVG}>Stáhnout SVG</Button>
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
