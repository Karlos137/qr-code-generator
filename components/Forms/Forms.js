// React components
import UrlForm from "./UrlForm"
import TextForm from "./TextForm"

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
      default:
        return <UrlForm />
    }
  }
  return <div>{getForm(formSelected)}</div>
}
export default Forms
