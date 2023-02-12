// React
import { useState } from "react"

// React components
import Input from "../Input"
import Dropdown from "../Dropdown"

// Store
import useQrStore from "../../../store/qrStore"

// Constants
import { SECURITY_OPTIONS } from "./WifiForn.constants"

const WifiForm = () => {
  const [wifiValues, setWifiValues] = useState({
    name: "",
    password: "",
    security: "WPA",
  })
  const setValue = useQrStore(state => state.setValue)

  const handleOnChange = e => {
    setWifiValues({
      ...wifiValues,
      [e.target.name]: e.target.value,
    })

    setValue(
      `WIFI:T:${wifiValues.security};S:${
        e.target.name === "name" ? e.target.value : wifiValues.name
      };P:${
        e.target.name === "password" ? e.target.value : wifiValues.password
      };`
    )
  }

  const handleOptionChange = optionValue => {
    setWifiValues({
      ...wifiValues,
      security: optionValue,
    })

    setValue(
      `WIFI:T:${optionValue ? optionValue : wifiValues.security};S:${
        wifiValues.name
      };P:${wifiValues.password};`
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
      <div className="w-full xl:flex xl:gap-7.5">
        <Input
          id="wifi-password"
          label="Heslo"
          name="password"
          placeholder="Heslo"
          value={wifiValues.password}
          onChange={handleOnChange}
        />
        <Dropdown
          label="Zabezpečení"
          options={SECURITY_OPTIONS}
          onOptionClick={handleOptionChange}
        />
      </div>
    </form>
  )
}
export default WifiForm
