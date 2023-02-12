// React
import { useState, useEffect } from "react"

// React components
import Input from "../../Forms/Input"

// Store
import useQrStore from "../../../store/qrStore"

// Constants
import { HEX_COLOR_REGEX } from "../../../utils/constants"

const ColorsForm = () => {
  const [colorValues, setColorValues] = useState({
    foreground: "#000000",
    background: "#ffffff",
  })

  const bgColor = useQrStore(state => state.bgColor)
  const fgColor = useQrStore(state => state.fgColor)
  const setBgColor = useQrStore(state => state.setBgColor)
  const setFgColor = useQrStore(state => state.setFgColor)

  useEffect(() => {
    setColorValues({
      foreground: fgColor,
      background: bgColor,
    })
  }, [])

  const handleOnChange = e => {
    setColorValues({
      ...colorValues,
      [e.target.name]: e.target.value,
    })

    switch (e.target.name) {
      case "foreground":
        if (HEX_COLOR_REGEX.test(e.target.value)) {
          setFgColor(e.target.value)
        }
        break
      case "background":
        if (HEX_COLOR_REGEX.test(e.target.value)) {
          setBgColor(e.target.value)
        }
        break
      default:
        setFgColor("#000000")
        setBgColor("#ffffff")
    }
  }
  return (
    <div>
      <div className="flex justify-between gap-7.5">
        <Input
          id="fg-color"
          label="Popředí"
          name="foreground"
          placeholder="#"
          value={colorValues.foreground}
          onChange={handleOnChange}
          withColorForm="fgColor"
        />
        <Input
          id="bg-color"
          label="Pozadí"
          name="background"
          placeholder="#"
          value={colorValues.background}
          onChange={handleOnChange}
          withColorForm="bgColor"
        />
      </div>
    </div>
  )
}
export default ColorsForm
