// Heroicons
import { Bars2Icon } from "@heroicons/react/24/solid"

// React components
import Logo from "../svgs/Logo"

const Navbar = () => {
  return (
    <div className="mx-auto max-w-[1920px] p-5">
      <div className="flex items-center justify-between rounded-[100px] bg-white px-8.5 py-[9px]">
        <Logo />
        <Bars2Icon className="h-8 w-8 text-sky-600" />
      </div>
    </div>
  )
}
export default Navbar
