// React
import { useRef } from "react"

// Constants
import { HEX_COLOR_REGEX } from "../../utils/constants"

// Store
import useQrStore from "../../store/qrStore"

// React components
import Button from "../Button"

// Heroicons
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"

// Tailwind Merge
import { twMerge } from "tailwind-merge"

const MAX_LENGTH = 200

const Input = ({
  type = "text",
  name,
  withColorForm,
  placeholder,
  id,
  label,
  value,
  onChange,
  fileName,
  disabled,
  ...rest
}) => {
  const fgColor = useQrStore(state => state.fgColor)
  const bgColor = useQrStore(state => state.bgColor)
  const eyeColor = useQrStore(state => state.bgColor)

  const fgColorValue = HEX_COLOR_REGEX.test(value) ? value : fgColor
  const bgColorValue = HEX_COLOR_REGEX.test(value) ? value : bgColor
  const outerLtCornerColorValue = HEX_COLOR_REGEX.test(value)
    ? value
    : eyeColor[0].outer
  const outerRtCornerColorValue = HEX_COLOR_REGEX.test(value)
    ? value
    : eyeColor[1].outer
  const outerLbCornerColorValue = HEX_COLOR_REGEX.test(value)
    ? value
    : eyeColor[1].outer

  const innerLtCornerColorValue = HEX_COLOR_REGEX.test(value)
    ? value
    : eyeColor[0].inner
  const innerRtCornerColorValue = HEX_COLOR_REGEX.test(value)
    ? value
    : eyeColor[1].inner
  const innerLbCornerColorValue = HEX_COLOR_REGEX.test(value)
    ? value
    : eyeColor[1].inner

  const getColorValue = () => {
    switch (withColorForm) {
      case "fgColor":
        return fgColorValue
      case "bgColor":
        return bgColorValue
      case "outerLtCornerColor":
        return outerLtCornerColorValue
      case "outerRtCornerColor":
        return outerRtCornerColorValue
      case "outerLbCornerColor":
        return outerLbCornerColorValue
      case "innerLtCornerColor":
        return innerLtCornerColorValue
      case "innerRtCornerColor":
        return innerRtCornerColorValue
      case "innerLbCornerColor":
        return innerLbCornerColorValue
      default:
        return ""
    }
  }

  const hiddenFileInput = useRef(null)

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  const getContent = () => {
    if (type === "file") {
      return (
        <div className="mt-4 flex grow-0 flex-wrap items-center gap-2">
          <Button onClick={handleClick} icon={true}>
            <span>Vybrat</span>
            <ArrowUpTrayIcon className="h-4.5 w-4.5 text-sky-600 group-hover:text-white" />
          </Button>
          <input
            className="hidden"
            id={id}
            type={type}
            ref={hiddenFileInput}
            onChange={onChange}
            name={name}
            {...rest}
          />
          <p className="pl-2 text-sm">{fileName}</p>
        </div>
      )
    } else if (type === "range") {
      return (
        <>
          <input
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-sky-600 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:accent-gray-400"
            id={id}
            type={type}
            value={value}
            disabled={disabled}
            onChange={onChange}
            name={name}
            {...rest}
          />
          <div className="mt-1">{`${value}%`}</div>
        </>
      )
    } else {
      if (withColorForm) {
        return (
          <div className="flex w-full items-center gap-4">
            <input
              className="w-full grow rounded-[20px] bg-gray-100 px-4 py-1.5 text-base placeholder:text-gray-500 focus:outline-sky-600"
              id={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              name={name}
              maxLength={MAX_LENGTH}
              {...rest}
            />
            <input
              className="rounded-sm bg-gray-100"
              type="color"
              aria-label={`${label} - barva`}
              value={getColorValue()}
              onChange={onChange}
              name={name}
            />
          </div>
        )
      } else {
        return (
          <input
            className="rounded-[20px] bg-gray-100 px-4 py-1.5 text-base placeholder:text-gray-500 focus:outline-sky-600"
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            maxLength={MAX_LENGTH}
            {...rest}
          />
        )
      }
    }
  }
  return (
    <div className="mb-2 flex w-auto shrink grow flex-col gap-1">
      <label className="text-sm font-light text-gray-500" htmlFor={id}>
        {label}
      </label>

      {getContent()}
    </div>
  )
}
export default Input
