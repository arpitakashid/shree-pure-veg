import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Rooms", path: "/rooms" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" }, // We'll build this page later
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-yellow-500/20 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <img
            src={logo}
            alt="Restaurant Logo"
            className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
          />

          <div>
            <h1 className="text-yellow-400 text-xl font-bold leading-none">
              SHREE PURE VEG
            </h1>

            <p className="text-white text-sm">
              Family Restaurant
            </p>
          </div>

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 border-b border-white/10 transition ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </div>
      )}

    </nav>
  );
}