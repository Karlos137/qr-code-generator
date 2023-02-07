// React
import { useState } from "react"

// React components
import Input from "../Input/Input"

// Store
import useQrStore from "../../../store/qrStore"

const UrlForm = () => {
  const [phoneValue, setPhoneValue] = useState("")
  const setValue = useQrStore(state => state.setValue)

  const handleOnChange = e => {
    setPhoneValue(e.target.value)
    setValue(e.target.value)
  }

  return (
    <form>
      <Input
        id="phone"
        label="Telefonní číslo"
        placeholder="+420"
        onKeyPress={event => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault()
          }
        }}
        value={phoneValue}
        onChange={handleOnChange}
      />
    </form>
  )
}
export default UrlForm
