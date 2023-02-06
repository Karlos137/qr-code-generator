// React components
import UrlForm from "./UrlForm"
import TextForm from "./TextForm"
import WifiForm from "./WifiForm"

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
      default:
        return <UrlForm />
    }
  }
  return <div>{getForm(formSelected)}</div>
}
export default Forms
