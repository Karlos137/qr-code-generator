// React
import { useState } from "react"

// React components
import TextArea from "../TextArea"

// Store
import useQrStore from "../../../store/qrStore"

const TextForm = () => {
  const [textValue, setTextValue] = useState("")
  const setValue = useQrStore(state => state.setValue)

  const handleOnChange = e => {
    setTextValue(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div>
      <TextArea
        id="text"
        label="Zadejte text"
        placeholder="Ahoj!"
        value={textValue}
        onChange={handleOnChange}
      />
    </div>
  )
}
export default TextForm
