// React
import { useEffect } from "react"

// React components
import Header from "../Header"
import Footer from "../Footer"
import HamburgerMenu from "../HamburgerMenu"

// Store
import useAppStore from "../../store/appStore"

// Artsy Fresnel
import { Media, MediaContextProvider } from "../../utils/media"

const Layout = ({ children }) => {
  const hamburgerMenuOpen = useAppStore(state => state.hamburgerMenuOpen)

  useEffect(() => {
    //Set overflow: hidden to body when menu open to prevent background scrolling
    if (hamburgerMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "initial"
    }
  }, [hamburgerMenuOpen])

  return (
    <>
      <MediaContextProvider disableDynamicMediaQueries>
        <Media lessThan="md">{hamburgerMenuOpen && <HamburgerMenu />}</Media>
      </MediaContextProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
