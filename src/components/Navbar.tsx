import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-blue-500 font-bold"
      : "text-white hover:text-blue-400"

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Gallery</h1>

      <div className="flex gap-6">
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
    </nav>
  )
}