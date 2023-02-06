// React
import { useState } from "react"

// React components
import Input from "../Input"

// Store
import useQrStore from "../../../store/qrStore"

const WifiForm = () => {
  const [values, setValues] = useState({
    wifiName: "",
    wifiPassword: "",
  })
  const setValue = useQrStore(state => state.setValue)

  const handleOnChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })

    console.log(
      `WIFI:T:WPA;S:${
        e.target.name === "wifiName" ? e.target.value : values.wifiName
      };P:${
        e.target.name === "wifiPassword" ? e.target.value : values.wifiPassword
      };`
    )

    setValue(
      `WIFI:T:WPA;S:${
        e.target.name === "wifiName" ? e.target.value : values.wifiName
      };P:${
        e.target.name === "wifiPassword" ? e.target.value : values.wifiPassword
      };`
    )
  }

  return (
    <form>
      <Input
        id="wifi-name"
        label="Název sítě"
        name="wifiName"
        placeholder="Název sítě"
        value={values.wifiName}
        onChange={handleOnChange}
      />
      <Input
        id="wifi-password"
        label="Heslo"
        name="wifiPassword"
        placeholder="Heslo"
        value={values.wifiPassword}
        onChange={handleOnChange}
      />
    </form>
  )
}
export default WifiForm
