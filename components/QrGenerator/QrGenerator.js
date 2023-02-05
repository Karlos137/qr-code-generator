// React components
import QrGeneratorMenu from "../QrGeneratorMenu"
import QrCode from "../QrCode"

const QrGenerator = () => {
  return (
    <div className="grid">
      <QrGeneratorMenu />
      <QrCode />
    </div>
  )
}
export default QrGenerator
