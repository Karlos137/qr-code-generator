// React
import { useState } from "react"

// React components
import Input from "../../Forms/Input"

const ColorsForm = () => {
  const [colorValues, setColorValues] = useState({
    foreground: "#000000",
    background: "#000000",
  })

  const handleOnChange = e => {
    console.log(e.target.value)
    console.log(e.target.name)
    setColorValues({
      ...colorValues,
      [e.target.name]: e.target.value,
    })
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
          withColorForm={true}
        />
        <Input
          id="bg-color"
          label="Pozadí"
          name="background"
          placeholder="#"
          value={colorValues.background}
          onChange={handleOnChange}
          withColorForm={true}
        />
      </div>
    </div>
  )
}
export default ColorsForm
