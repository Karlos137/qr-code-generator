// Next.js
import Link from "next/link"

// React components (svg)
import Logo from "../svgs/Logo"

// Heroicons
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const Footer = () => {
  return (
    <footer className="print-hide mt-auto flex flex-col items-center bg-white px-5 py-4 text-center">
      <Logo />
      <p className="mt-0.5 mb-1">qrkodgenerator.cz</p>
      {/* <Link
        href="mailto:test@test.cz"
        title="test@test.cz"
        aria-label="Kontakt - e-mail"
      >
        <EnvelopeIcon className="h-6 w-6 text-orange-500 hover:text-sky-500" />
      </Link> */}
      <p className="mt-6 mb-2">
        QR Code je registrovaná ochranná známka společnosti DENSO WAVE
        INCORPORATED.
      </p>
      <p className="text-sm">&copy; {new Date().getFullYear()}</p>
    </footer>
  )
}
export default Footer
