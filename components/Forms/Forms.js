// React components
import UrlForm from "./UrlForm"
import TextForm from "./TextForm"
import WifiForm from "./WifiForm"
import EmailForm from "./EmailForm"
import PhoneForm from "./PhoneForm"

// Store
import useAppStore from "../../store/appStore"

// Constants
import { FORMS } from "../../utils/constants"

const Forms = () => {
  const formSelected = useAppStore(state => state.formSelected)

  const getForm = form => {
    switch (form) {
      case FORMS.url:
        return <UrlForm />
      case FORMS.text:
        return <TextForm />
      case FORMS.wifi:
        return <WifiForm />
      case FORMS.email:
        return <EmailForm />
      case FORMS.phone:
        return <PhoneForm />
      default:
        return <UrlForm />
    }
  }
  return <div className="mb-8">{getForm(formSelected)}</div>
}
export default Forms
