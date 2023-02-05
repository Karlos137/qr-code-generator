const NavList = () => {
  return (
    <ul className="flex items-center gap-x-8.5">
      <li>
        <a
          className="text-lg text-sky-600 hover:text-orange-500"
          href="#jak-na-to"
        >
          Jak na to?
        </a>
      </li>
      <li>
        <a
          className="text-lg text-sky-600 hover:text-orange-500"
          href="#co-je-to-qr-kod"
        >
          Co je to QR kód?
        </a>
      </li>
    </ul>
  )
}
export default NavList
