// React components
import QrGeneratorMenu from "../QrGeneratorMenu"
import QrCode from "../QrCode"
import Forms from "../Forms/Forms"

const QrGenerator = () => {
  return (
    <div className="mx-auto grid max-w-[1260px] grid-cols-1 gap-7.5 px-5 lg:grid-cols-[120px_auto_400px]">
      <QrGeneratorMenu />
      <div className="rounded-[30px] bg-white">
        <Forms />
      </div>
      <QrCode />
    </div>
  )
}
export default QrGenerator
