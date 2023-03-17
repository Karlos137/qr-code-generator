// React
import { useState } from "react"

// React components
import Input from "../../Input"

const LogoForm = () => {
  const [logoUrl, setLogoUrl] = useState("")

  const handleFileChange = event => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      const logoUrl = URL.createObjectURL(file)
      setLogoUrl(logoUrl)
    }
  }

  return (
    <div className="grid grid-cols-[2fr_1fr] gap-7.5">
      <div>
        <Input
          id="logo-input"
          label="Vyberte logo"
          name="logoInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
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
