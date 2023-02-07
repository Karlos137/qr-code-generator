// React
import { useState } from "react"

// React components
import Input from "../Input"

// Store
import useQrStore from "../../../store/qrStore"

const WifiForm = () => {
  const [wifiValues, setWifiValues] = useState({
    name: "",
    password: "",
  })
  const setValue = useQrStore(state => state.setValue)

  const handleOnChange = e => {
    setWifiValues({
      ...wifiValues,
      [e.target.name]: e.target.value,
    })

    setValue(
      `WIFI:T:WPA;S:${
        e.target.name === "name" ? e.target.value : wifiValues.name
      };P:${
        e.target.name === "password" ? e.target.value : wifiValues.password
      };`
    )
  }

  return (
    <form>
      <Input
        id="wifi-name"
        label="Název sítě"
        name="name"
        placeholder="Název sítě"
        value={wifiValues.name}
        onChange={handleOnChange}
      />
      <Input
        id="wifi-password"
        label="Heslo"
        name="password"
        placeholder="Heslo"
        value={wifiValues.password}
        onChange={handleOnChange}
      />
    </form>
  )
}
export default WifiForm
