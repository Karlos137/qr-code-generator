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
    const inputValue = e.target.value

    if (/^\+?\d*$/.test(inputValue)) {
      setPhoneValue(inputValue)
      setValue(inputValue)
    }
  }

  return (
    <form>
      <Input
        id="phone"
        label="Telefonní číslo"
        placeholder="+420"
        value={phoneValue}
        onChange={handleOnChange}
      />
    </form>
  )
}
export default UrlForm
