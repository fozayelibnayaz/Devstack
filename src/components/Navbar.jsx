import { useState } from "react";
import logoText from "../../assets/logo-text.png";
import hamburgerIcon from "../../ui/hamburger.png";

const links = [
  { name: "Home", href: "#home" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4">

        <div className="relative grid h-16 grid-cols-[auto_1fr_auto] items-center sm:grid-cols-3 md:flex md:justify-between">
          <button
            className="justify-self-start p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={hamburgerIcon} alt="menu" className="h-6 w-6" />
          </button>

          <a href="#home" className="flex items-center gap-2 justify-self-center md:justify-self-auto">
            <img src={logoText} alt="Dev Stack" className="h-8 w-auto" />
          </a>

          <div className="flex items-center gap-1 justify-self-end sm:gap-3">
            <a
              href="#home"
              className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 sm:px-3"
            >
              Sign In
            </a>
            <a
              href="#home"
              className="whitespace-nowrap rounded-full bg-brand-pink px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Sign Up
            </a>
          </div>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-8 md:flex">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-slate-600 hover:text-pink-600">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {menuOpen && (
          <ul className="flex flex-col gap-1 border-t border-slate-100 py-3 md:hidden">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;