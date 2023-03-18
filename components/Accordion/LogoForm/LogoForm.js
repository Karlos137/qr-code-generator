// React
import { useState } from "react"

// React components
import Input from "../../Input"

// Store
import useQrStore from "../../../store/qrStore"

const LogoForm = () => {
  const logoUrl = useQrStore(state => state.logoUrl)
  const setLogoUrl = useQrStore(state => state.setLogoUrl)
  const [logoFileName, setLogoFileName] = useState("")

  const handleFileChange = event => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      const logoUrl = URL.createObjectURL(file)
      setLogoUrl(logoUrl)
      setLogoFileName(file.name)
    }
  }

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-7.5 md:grid-cols-[2fr_1fr]">
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
        <div className="px-2">
          <img
            className="block max-w-[100%]"
            src={logoUrl}
            alt="Logo - QR kód"
          />
        </div>
      )}
    </div>
  )
}
export default LogoForm
