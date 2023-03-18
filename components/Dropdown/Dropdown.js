// React
import { useState, useRef } from "react"

// Framer Motion
import { motion, AnimatePresence } from "framer-motion"

// Heroicons
import { ChevronDownIcon } from "@heroicons/react/24/outline"

// Hooks
import useClickOutside from "../../hooks/useClickOutside"

const Dropdown = ({ label, options, onOptionClick, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)
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
          <div className="rounded-[20px] bg-gray-100 px-4 py-1.5 text-sky-600 hover:shadow">
            {value}
          </div>
          <motion.div
            className="absolute right-4 top-[9px]"
            animate={
              isOpen
                ? {
                    rotate: 180,
                  }
                : { rotate: 0 }
            }
          >
            <ChevronDownIcon className="h-4.5 w-4.5 text-sky-600" />
          </motion.div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${label}`}
            initial={isOpen ? "open" : "collapsed"}
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", overflow: "initial" },
              collapsed: { opacity: 0, height: 0, overflow: "hidden" },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="absolute top-[calc(100%+4px)] z-10 flex w-full flex-col gap-2.5 rounded-[20px] bg-gray-100 px-4 py-2.5 shadow"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default Dropdown
