import { RiMedal2Fill } from "@remixicon/react";
import { navItems, socialLink } from "../constant/data";
import ToggleTheme from "./ToggleTheme";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { useState } from "react";
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <header className="fixed top-0 left-0 w-full pt-3 z-40">
      <div className="container">
        <div className="flex items-center justify-between bg-zinc-100/80 
        rounded-full px-4 py-3 border border-zinc-200 dark:bg-zinc-900
        dark:border-zinc-800 backdrop:blue-lg">
          <div className="flex items-center gap-3.5">
            {socialLink.map((item) => (
              <a key={item.id} href="#" className="hover:text-emerald-600 transition-colors">
                <item.icon />
              </a>
            ))}
          </div>
          <ul className={`lg:hidden absolute top-full right-6
          bg-zinc-200 min-w-36 mt-3 rounded-lg p-5 space-y-3 scale-y-0 
          transition-transform origin-top-right
            ${isMenuOpen ? "scale-y-100" : ""}
          `}>
            {navItems.map((item) => (
              <li key={item.id} className="">
                <a href={item.href} className={`hover:text-emerald-500 transition-colors font-medium`}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ul className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="font-medium text-zinc-800 dark:text-zinc-400
                hover:text-emerald-500
                dark:hover:text-emerald-500
                transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2.5">
            <ToggleTheme />
            <button className="lg:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
