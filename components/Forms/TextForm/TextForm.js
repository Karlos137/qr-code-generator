// React components
import TextArea from "../TextArea"

// Store
import useQrStore from "../../../store/qrStore"

const TextForm = () => {
  const value = useQrStore(state => state.value)
  const setValue = useQrStore(state => state.setValue)

  const handleOnChange = e => {
    setValue(e.target.value)
  }

  return (
    <div>
      <TextArea
        id="text"
        label="Zadejte text"
        placeholder="Ahoj!"
        value={value}
        onChange={handleOnChange}
      />
    </div>
  )
}
export default TextForm
