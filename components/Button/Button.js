// Tailwind Merge
import { twMerge } from "tailwind-merge"

const Button = ({ children, onClick, href, icon }) => {
  const classNames = twMerge(
    "min-w-[120px] rounded-[20px] border-[1px] border-sky-600 bg-white py-1 px-6 text-sky-600 hover:border-orange-500 hover:bg-orange-500 hover:text-white",
    icon &&
      "group min-w-[48px] flex items-center justify-between gap-1 px-2 py-0.5"
  )

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    )
  }
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}
export default Button
