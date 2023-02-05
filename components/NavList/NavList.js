// Next.js
import Link from "next/link"

const NavList = () => {
  return (
    <ul className="flex items-center gap-x-8.5">
      <li>
        <Link
          className="text-lg text-sky-600 hover:text-orange-500"
          href="#jak-na-to"
        >
          Jak na to?
        </Link>
      </li>
      <li>
        <Link
          className="text-lg text-sky-600 hover:text-orange-500"
          href="#co-je-to-qr-kod"
        >
          Co je to QR kód?
        </Link>
      </li>
    </ul>
  )
}
export default NavList
