import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-blue-400 font-bold"
      : "text-white hover:text-blue-400"

  return (
    <nav className="bg-black text-white px-6 py-4">
      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Gallery</h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link
            to="/"
            className={linkClass("/")}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={linkClass("/about")}
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={linkClass("/contact")}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}