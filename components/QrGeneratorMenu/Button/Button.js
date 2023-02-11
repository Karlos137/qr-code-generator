// Heroicons
import {
  LinkIcon,
  Bars3BottomLeftIcon,
  WifiIcon,
  AtSymbolIcon,
  DevicePhoneMobileIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline"

// Tailwind Merge
import { twMerge } from "tailwind-merge"

const Button = ({ icon, text, active = false, onClick }) => {
  const iconClassNames = `${
    active ? "h-4.5 w-4.5 text-white" : "h-4.5 w-4.5 text-sky-500"
  }`

  const getIcon = () => {
    switch (icon) {
      case "url":
        return <LinkIcon className={iconClassNames} />
      case "text":
        return <Bars3BottomLeftIcon className={iconClassNames} />
      case "wifi":
        return <WifiIcon className={iconClassNames} />
      case "email":
        return <AtSymbolIcon className={iconClassNames} />
      case "phone":
        return <DevicePhoneMobileIcon className={iconClassNames} />
      case "businessCard":
        return <IdentificationIcon className={iconClassNames} />
      default:
        return <LinkIcon className={iconClassNames} />
    }
  }
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex min-w-[72px] flex-col items-center gap-2 rounded-[20px] bg-white py-2 px-3 hover:shadow-md lg:min-w-[100px] lg:flex-row",
        active ? "bg-orange-500 text-white" : ""
      )}
    >
      {getIcon()} {text}
    </button>
  )
}
export default Button
