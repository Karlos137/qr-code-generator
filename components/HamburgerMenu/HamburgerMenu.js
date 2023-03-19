// Next.js
import Link from "next/link"

// React components (svg)
import Logo from "../svgs/Logo"

// Heroicons
import { XMarkIcon } from "@heroicons/react/24/outline"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

// Store
import useAppStore from "../../store/appStore"

const HamburgerMenu = () => {
  const setHamburgerMenuOpen = useAppStore(state => state.setHamburgerMenuOpen)

  return (
    <div className="fixed inset-0 z-10 flex h-full w-full flex-col overflow-scroll bg-sky-600 text-white">
      <header className="mb-[64px] flex items-center justify-between gap-x-4 px-[54px] py-7.5">
        <Logo fill="#fff" />
        <XMarkIcon
          className="h-8 w-8 cursor-pointer text-white"
          onClick={() => {
            setHamburgerMenuOpen(false)
          }}
          aria-label="Zavřít hamburger menu"
        />
      </header>
      <main className="mb-8 px-5">
        <ul className="flex flex-col items-center gap-y-8">
          <li>
            <a
              className="text-lg hover:text-orange-400"
              href="#jak-na-to"
              onClick={() => {
                setHamburgerMenuOpen(false)
              }}
            >
              Jak na to?
            </a>
          </li>
          <li>
            <a
              className="text-lg hover:text-orange-400"
              href="#co-je-to-qr-kod"
              onClick={() => {
                setHamburgerMenuOpen(false)
              }}
            >
              Co je to QR kód?
            </a>
          </li>
        </ul>
      </main>
      <footer className="mt-auto flex flex-col items-center gap-4 px-5 pb-5">
        <p className="text-center">qrkodgenerator.cz</p>
        {/* <Link
          className="text-lg hover:text-orange-400"
          href="mailto:test@test.cz"
          title="test@test.cz"
          aria-label="Kontakt - e-mail"
        >
          <EnvelopeIcon className="h-6 w-6" />
        </Link> */}
      </footer>
    </div>
  )
}
export default HamburgerMenu
