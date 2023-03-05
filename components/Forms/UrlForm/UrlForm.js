// React
import { useState } from "react"

// React components
import Input from "../../Input"

// Store
import useQrStore from "../../../store/qrStore"

const UrlForm = () => {
  const [urlValue, setUrlValue] = useState("")
  const setValue = useQrStore(state => state.setValue)

  const handleOnChange = e => {
    setUrlValue(e.target.value)
    setValue(e.target.value)
  }

  return (
    <form>
      <Input
        id="url"
        label="Zadejte URL webové stránky"
        placeholder="https://"
        value={urlValue}
        onChange={handleOnChange}
      />
    </form>
  )
}
export default UrlForm
