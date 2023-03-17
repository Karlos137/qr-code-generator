// React
import { useState, useEffect } from "react"

// Framer Motion
import { motion, AnimatePresence } from "framer-motion"

// Heroicons
import {
  ChevronDownIcon,
  SparklesIcon,
  QrCodeIcon,
  Cog8ToothIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline"

const AccordionItem = ({ title, children, icon, open, onHeaderClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const iconClassNames = "h-6 w-6 text-sky-600"

  const getIcon = () => {
    switch (icon) {
      case "sparkles":
        return <SparklesIcon className={iconClassNames} />
      case "qrCode":
        return <QrCodeIcon className={iconClassNames} />
      case "settings":
        return <Cog8ToothIcon className={iconClassNames} />
      case "image":
        return <PhotoIcon className={iconClassNames} />
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
          <motion.div
            animate={
              isOpen
                ? {
                    rotate: 180,
                  }
                : { rotate: 0 }
            }
          >
            <ChevronDownIcon className="h-3.5 w-3.5 rotate-180 text-sky-600" />
          </motion.div>
        </div>
        <div className="mt-2.5 h-[1px] w-full bg-gray-100"></div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${title}`}
            initial={isOpen ? "open" : "collapsed"}
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="w-full pb-5"></div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default AccordionItem
