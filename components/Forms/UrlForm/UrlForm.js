// React components
import Input from "../Input/Input"

// Store
import useQrStore from "../../../store/qrStore"

const UrlForm = () => {
  const value = useQrStore(state => state.value)
  const setValue = useQrStore(state => state.setValue)

  const handleOnChange = e => {
    setValue(e.target.value)
  }

  return (
    <form>
      <Input
        placeholder="Zadejte url"
        value={value}
        onChange={handleOnChange}
      />
    </form>
  )
}
export default UrlForm
