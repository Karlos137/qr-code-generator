// React components
import Button from "./Button"

// Store
import useAppStore from "../../store/appStore"

// Constants
import { FORMS } from "../../utils/constants"

const QrGeneratorMenu = () => {
  const formSelected = useAppStore(state => state.formSelected)
  const setFormSelected = useAppStore(state => state.setFormSelected)

  return (
    <ul className="lg:gap:6 flex flex-wrap justify-center gap-4 rounded-[30px] bg-white px-1.5 py-4 lg:max-w-[120px] lg:flex-col lg:flex-nowrap lg:justify-start lg:py-6">
      <li>
        <Button
          icon="url"
          text="URL"
          active={formSelected === FORMS.url}
          onClick={() => {
            setFormSelected(FORMS.url)
          }}
        />
      </li>
      <li>
        <Button
          icon="text"
          text="Text"
          active={formSelected === FORMS.text}
          onClick={() => {
            setFormSelected(FORMS.text)
          }}
        />
      </li>
      <li>
        <Button
          icon="wifi"
          text="WiFi"
          active={formSelected === FORMS.wifi}
          onClick={() => {
            setFormSelected(FORMS.wifi)
          }}
        />
      </li>
      <li>
        <Button
          icon="email"
          text="E-mail"
          active={formSelected === FORMS.email}
          onClick={() => {
            setFormSelected(FORMS.email)
          }}
        />
      </li>
      <li>
        <Button
          icon="phone"
          text="Tel"
          active={formSelected === FORMS.phone}
          onClick={() => {
            setFormSelected(FORMS.phone)
          }}
        />
      </li>
      {/* <li>
        <Button
          icon="businessCard"
          text="Vizitka"
          active={formSelected === FORMS.businessCard}
          onClick={() => {
            setFormSelected(FORMS.businessCard)
          }}
        />
      </li> */}
    </ul>
  )
}
export default QrGeneratorMenu
