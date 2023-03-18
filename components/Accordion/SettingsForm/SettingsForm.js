// React components
import Dropdown from "../../Dropdown"

// Constants
import {
  DEFAULT_SETTINGS,
  CORRECTION_LEVEL_OPTIONS,
  SIZE_OPTIONS,
} from "./SettingsForm.constants"

// Store
import useQrStore from "../../../store/qrStore"

const SettingsForm = () => {
  const setCorrectionLevel = useQrStore(state => state.setCorrectionLevel)
  const setDownloadSize = useQrStore(state => state.setDownloadSize)

  const handleCorrectionOptionChange = optionValue => {
    setCorrectionLevel(optionValue)
  }

  const handleSizeOptionChange = optionValue => {
    setDownloadSize(optionValue)
  }

  return (
    <div>
      <div className="flex flex-wrap justify-start gap-6 min-[1160px]:flex-nowrap">
        <Dropdown
          label="Úroveň korekce"
          options={CORRECTION_LEVEL_OPTIONS}
          onOptionClick={handleCorrectionOptionChange}
          defaultValue={DEFAULT_SETTINGS.correctionLevel.label}
        />
        <Dropdown
          label="Velikost*"
          options={SIZE_OPTIONS}
          onOptionClick={handleSizeOptionChange}
          defaultValue={DEFAULT_SETTINGS.size.label}
        />
      </div>
      <p className="mt-4 text-xs italic text-gray-500">
        *velikost se aplikuje při stažení QR kódu ve formátech PNG a WEBP
      </p>
    </div>
  )
}
export default SettingsForm
