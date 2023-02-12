// React
import { useState, useEffect } from "react"

// Tailwind Merge
import { twMerge } from "tailwind-merge"

// Heroicons
import {
  ChevronUpIcon,
  SparklesIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline"

const AccordionItem = ({ title, children, icon, open, onHeaderClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const iconClassNames = "h-3.5 w-3.5 text-sky-600"

  const getIcon = () => {
    switch (icon) {
      case "sparkles":
        return <SparklesIcon className={iconClassNames} />
      case "qrCode":
        return <QrCodeIcon className={iconClassNames} />
      default:
        return <QrCodeIcon className={iconClassNames} />
    }
  }
  return (
    <div className="mb-8">
      <div>
        <div
          className="flex cursor-pointer items-center gap-2.5"
          onClick={() => {
            onHeaderClick()
          }}
        >
          {getIcon()}
          <span className="text-sm font-medium text-sky-600">{title}</span>
          <ChevronUpIcon
            className={twMerge(
              "h-3.5 w-3.5 rotate-180 text-sky-600",
              isOpen ? "rotate-0" : ""
            )}
          />
        </div>
        <div className="mt-2.5 mb-5 h-[1px] w-full bg-gray-100"></div>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  )
}
export default AccordionItem
