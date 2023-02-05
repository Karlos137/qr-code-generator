// React components
import SvgScan1 from "../../svgs/SvgScan1"
import SvgScan2 from "../../svgs/SvgScan2"

const Card = ({ orientation = "right", children, id }) => {
  return (
    <div id={id} className="pt-8">
      <div className="mx-auto flex w-full max-w-[600px] flex-col rounded-[30px] lg:max-w-[1220px] lg:flex-row">
        <div
          className={`grow-1 w-full rounded-t-[30px] bg-white p-5 lg:px-7.5 lg:py-8 ${
            orientation === "right"
              ? "lg:order-2 lg:rounded-r-[30px] lg:rounded-tl-none lg:rounded-bl-none xl:pr-[110px]"
              : "lg:rounded-rb-none lg:rounded-l-[30px] lg:rounded-tr-none xl:pl-[110px]"
          }`}
        >
          {children}
        </div>
        <div
          className={`relative flex h-36 shrink-0 grow-0 flex-col justify-end overflow-hidden rounded-b-[30px] lg:h-auto lg:w-[480px] ${
            orientation === "right"
              ? "items-end bg-orange-500 lg:rounded-l-[30px] lg:rounded-br-none lg:rounded-tr-none"
              : "items-center bg-sky-600 lg:rounded-r-[30px] lg:rounded-bl-none lg:rounded-tl-none"
          }`}
        >
          <div
            className={`absolute right-0 bottom-[-12px] lg:relative lg:flex lg:items-end ${
              orientation === "right" ? "bottom-0" : "bottom-[-12px]"
            }`}
          >
            {orientation === "right" ? <SvgScan1 /> : <SvgScan2 />}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
