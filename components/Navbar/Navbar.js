// Heroicons
import { Bars2Icon } from "@heroicons/react/24/outline"

// Artsy Fesnel
import { Media, MediaContextProvider } from "../../utils/media"

// React components
import Logo from "../svgs/Logo"
import NavList from "../NavList"

// Store
import useAppStore from "../../store/appStore"

const Navbar = () => {
  const setHamburgerMenuOpen = useAppStore(state => state.setHamburgerMenuOpen)

  return (
    <div className="mx-auto max-w-[1920px] px-5 pb-3 pt-5 md:py-5">
      <div className="flex items-center justify-between rounded-[100px] bg-white px-8.5 py-[9px]">
        <Logo />
        <MediaContextProvider disableDynamicMediaQueries>
          <Media lessThan="md">
            <Bars2Icon
              className="h-8 w-8 cursor-pointer text-sky-600"
              onClick={() => {
                setHamburgerMenuOpen(true)
              }}
              aria-label="Otevřít hamburger menu"
            />
          </Media>
          <Media greaterThanOrEqual="md">
            <NavList />
          </Media>
        </MediaContextProvider>
      </div>
    </div>
  )
}
export default Navbar
