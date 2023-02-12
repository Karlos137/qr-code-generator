// React
import { useState, useRef } from "react"

// Tailwind Merge
import { twMerge } from "tailwind-merge"

// Heroicons
import { ChevronUpIcon } from "@heroicons/react/24/outline"

// Hooks
import useClickOutside from "../../../hooks/useClickOutside"

const Dropdown = ({ label, options, onOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("Zabezpečení")
  const ref = useRef(null)

  useClickOutside(ref, () => {
    setIsOpen(false)
  })

  return (
    <div className="relative w-full max-w-[183px] shrink-0">
      <div className="mb-2 flex flex-col gap-1">
        <div className="text-sm font-light text-gray-500">{label}</div>
        <div
          ref={ref}
          className="relative cursor-pointer"
          onClick={() => {
            setIsOpen(prev => !prev)
          }}
        >
          <div className="rounded-[20px] bg-gray-100 px-4 py-1.5 text-sky-600">
            {value}
          </div>
          <ChevronUpIcon
            className={twMerge(
              "absolute right-4 top-[9px] h-4.5 w-4.5",
              !isOpen ? "rotate-180" : ""
            )}
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] flex w-full flex-col gap-2.5 rounded-[20px] bg-gray-100 px-4 py-2.5">
          {options.map(option => {
            return (
              <div
                className="cursor-pointer text-sky-600 hover:text-orange-500"
                key={option.id}
                onClick={() => {
                  setValue(option.label)
                  setIsOpen(false)
                  onOptionClick(option.value)
                }}
              >
                {option.label}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default Dropdown
