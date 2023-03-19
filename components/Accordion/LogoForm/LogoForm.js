// React
import { useState } from "react"

// Next.js
import Image from "next/image"

// React components
import Input from "../../Input"
import Toggle from "../../Toggle"

// Store
import useQrStore from "../../../store/qrStore"

const LogoForm = () => {
  const logoUrl = useQrStore(state => state.logoUrl)
  const setLogoUrl = useQrStore(state => state.setLogoUrl)
  const logoSize = useQrStore(state => state.logoSize)
  const setLogoSize = useQrStore(state => state.setLogoSize)
  const logoBackgroundTransparent = useQrStore(
    state => state.logoBackgroundTransparent
  )
  const setLogoBackgroundTransparent = useQrStore(
    state => state.setLogoBackgroundTransparent
  )
  const [logoFileName, setLogoFileName] = useState("")

  const handleFileChange = event => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        const dataUrl = reader.result
        setLogoUrl(dataUrl)
        setLogoFileName(file.name)
      }
    }
  }

  return (
    <>
      <div className="grid grid-cols-[2fr_1fr] gap-7.5 md:grid-cols-[4fr_1fr]">
        <div>
          <Input
            id="logo-input"
            label="Nahrát logo"
            name="logoInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            fileName={logoFileName}
          />
        </div>
        {logoUrl && (
          <div className="flex flex-col px-2">
            <Image
              className="mt-auto block max-w-[100%]"
              src={logoUrl}
              alt="Logo - QR kód"
              width={94}
              height={94}
              quality={97}
            />
          </div>
        )}
      </div>
      <div className="mt-4">
        <Input
          type="range"
          id="logo-size"
          label="Velikost loga"
          disabled={!logoUrl}
          value={logoSize}
          min={40}
          max={100}
          onChange={e => {
            setLogoSize(e.target.value)
          }}
        />
        <Toggle
          label="Odebrat pozadí za logem"
          enabled={logoBackgroundTransparent}
          disabled={!logoUrl}
          onChange={() => {
            setLogoBackgroundTransparent(!logoBackgroundTransparent)
          }}
        />
      </div>
    </>
  )
}
export default LogoForm
