// React components
import Input from "../Input/Input"

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
      <Input
        placeholder="Zadejte text"
        value={value}
        onChange={handleOnChange}
      />
    </div>
  )
}
export default TextForm
