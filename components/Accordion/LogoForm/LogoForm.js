// React
import { useState } from "react"

// Next.js
import Image from "next/image"

// React components
import Input from "../../Input"
import Toggle from "../../Toggle"

// Store
import useQrStore from "../../../store/qrStore"

// Heroicons
import { XMarkIcon } from "@heroicons/react/24/outline"

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

  const handleFileRemove = () => {
    setLogoUrl("")
    setLogoFileName("")
  }

  return (
    <>
      <div className="grid grid-cols-[2fr_1fr] gap-5 md:grid-cols-[3fr_1fr] xl:grid-cols-[4fr_1fr]">
        <div>
          <Input
            id="logo-input"
            label="Nahrát logo*"
            name="logoInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            fileName={logoFileName}
          />
        </div>
        {logoUrl && (
          <div className="flex shrink-0 flex-col items-center gap-1 px-2">
            <Image
              className="mt-auto block max-w-[100%] shrink-0"
              src={logoUrl}
              alt="Logo - QR kód"
              width={94}
              height={94}
              quality={97}
            />
            <div className="w-fit cursor-pointer" onClick={handleFileRemove}>
              <XMarkIcon className="h-6 w-6 text-red-600 hover:text-red-900" />
            </div>
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
      <p className="mt-4 text-xs italic text-gray-500">
        *doporučujeme nahrávat loga v maximální velikosti 200kb
      </p>
    </>
  )
}
export default LogoForm
