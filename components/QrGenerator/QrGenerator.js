// React components
import QrGeneratorMenu from "../QrGeneratorMenu"
import QrCode from "../QrCode"
import Forms from "../Forms/Forms"

// Constants
import { FORMS } from "../../utils/constants"

// Store
import useAppStore from "../../store/appStore"

const QrGenerator = () => {
  const formSelected = useAppStore(state => state.formSelected)

  const getFormTitle = () => {
    switch (formSelected) {
      case FORMS.url:
        return "URL"
      case FORMS.email:
        return "E-mail"
      case FORMS.phone:
        return "Telefon"
      case FORMS.text:
        return "Prostý text"
      case FORMS.wifi:
        return "WiFi"
      case FORMS.businessCard:
        return "Vizitka"
      default:
        return ""
    }
  }
  return (
    <div className="mx-auto grid max-w-[1260px] grid-cols-1 gap-7.5 px-5 lg:grid-cols-[120px_auto_400px]">
      <QrGeneratorMenu />
      <div className="rounded-[30px] bg-white px-4 py-6 lg:px-10">
        <h2 className="mb-4 text-[1.3125rem] text-orange-500">
          {getFormTitle()}
        </h2>
        <Forms />
      </div>
      <QrCode />
    </div>
  )
}
export default QrGenerator
