// React
import { useState } from "react"

// React components
import Dropdown from "../../Dropdown"

// Constants
import {
  DEFAULT_SETTINGS,
  CORRECTION_LEVEL_OPTIONS,
} from "./SettingsForm.constants"

// Store
import useQrStore from "../../../store/qrStore"

const SettingsForm = () => {
  const [settingsValues, setSettingsValues] = useState({
    correctionLevel: DEFAULT_SETTINGS.correctionLevel.value,
  })
  const setCorrectionLevel = useQrStore(state => state.setCorrectionLevel)

  const handleOptionChange = optionValue => {
    setSettingsValues({
      ...settingsValues,
      correctionLevel: optionValue,
    })

    setCorrectionLevel(optionValue)
  }

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-7.5 min-[1160px]:flex-nowrap">
        <Dropdown
          label="Úroveň korekce"
          options={CORRECTION_LEVEL_OPTIONS}
          onOptionClick={handleOptionChange}
          defaultValue={DEFAULT_SETTINGS.correctionLevel.label}
        />
      </div>
    </div>
  )
}
export default SettingsForm
