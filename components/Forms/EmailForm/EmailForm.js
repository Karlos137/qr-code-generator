// React
import { useState } from "react"

// React components
import Input from "../Input/Input"
import TextArea from "../TextArea"

// Store
import useQrStore from "../../../store/qrStore"

const EmailForm = () => {
  const [emailValues, setEmailValues] = useState({
    recipient: "",
    subject: "",
    text: "",
  })
  const setValue = useQrStore(state => state.setValue)

  const handleOnChange = e => {
    setEmailValues({
      ...emailValues,
      [e.target.name]: e.target.value,
    })

    setValue(
      `mailto:${
        e.target.name === "recipient" ? e.target.value : emailValues.recipient
      }?subject=${
        e.target.name === "subject" ? e.target.value : emailValues.subject
      }&body=${e.target.name === "text" ? e.target.value : emailValues.text}`
    )
  }

  return (
    <form>
      <Input
        id="email-recipient"
        label="Příjemce"
        name="recipient"
        placeholder="Příjemce"
        value={emailValues.name}
        onChange={handleOnChange}
      />
      <Input
        id="email-subject"
        label="Předmět"
        name="subject"
        placeholder="Předmět"
        value={emailValues.subject}
        onChange={handleOnChange}
      />
      <TextArea
        id="email-text"
        label="Zadejte text e-mailu"
        placeholder="Ahoj!"
        value={emailValues.text}
        onChange={handleOnChange}
      />
    </form>
  )
}
export default EmailForm
