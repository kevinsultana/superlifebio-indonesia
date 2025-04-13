import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { listMenu } from "../data/listMenu";

export default function Header() {
  // State untuk mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State untuk toggle submenu di mobile
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <header className="bg-white/80 w-full fixed lg:flex-row lg:flex lg:justify-between">
      {/* Header umum */}
      <div className="flex justify-between items-center my-2 mx-8 md:mx-16 lg:mx-32">
        <Link to="/">
          <img
            src="/logosuperlife.png"
            alt="logo superlife"
            className="w-12 lg:w-16"
          />
        </Link>

        {/* Mobile: Tampilkan ikon hamburger/close */}
        <div className="block lg:hidden">
          {!isMobileMenuOpen ? (
            <FaBars
              className="text-xl cursor-pointer fill-red-400"
              onClick={toggleMobileMenu}
            />
          ) : (
            <FaTimes
              className="text-xl cursor-pointer fill-red-400"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0 bg-white text-stone-950 p-4 mx-8 z-10 shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform origin-top ${
          isMobileMenuOpen
            ? "opacity-100 max-h-[1000px] translate-y-0"
            : "opacity-0 max-h-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="space-y-3">
          {listMenu.map((item, index) => (
            <li key={index}>
              <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                {/* Link utama (jika submenu ada, tampilkan dengan font-bold) */}
                {item.linkMenu.startsWith("http") ? (
                  <a
                    href={item.linkMenu}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-xs ${
                      item.listSubMenu.length > 0 ? "font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.linkMenu}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xs ${
                      item.listSubMenu.length > 0 ? "font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Jika ada submenu, tampilkan ikon toggle */}
                {item.listSubMenu.length > 0 && (
                  <span
                    className="ml-2 cursor-pointer"
                    onClick={() => toggleSubmenu(index)}
                  >
                    {openSubmenus[index] ? (
                      <FaAngleUp className="text-xs fill-green-300" />
                    ) : (
                      <FaAngleDown className="text-xs fill-green-300" />
                    )}
                  </span>
                )}
              </div>

              {/* Submenu Mobile dengan animasi */}
              {item.listSubMenu.length > 0 && (
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openSubmenus[index]
                      ? "opacity-100 max-h-60 translate-y-0"
                      : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <ul className="mt-2 ml-4 space-y-2 text-sm text-gray-600">
                    {item.listSubMenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={sub.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="hover:bg-stone-100 px-2 py-1 block"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center items-center space-x-6 mx-8 lg:mx-32 ">
        {listMenu.map((item, index) => (
          <div key={index} className="relative group">
            {/* Link utama */}
            {item.linkMenu.startsWith("http") ? (
              <a
                href={item.linkMenu}
                target="_blank"
                rel="noreferrer"
                className={`text-md text-stone-800 ${
                  item.listSubMenu.length > 0 ? "font-bold" : ""
                }`}
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.linkMenu}
                className={`text-md text-stone-800 py-8 ${
                  item.listSubMenu.length > 0 ? "font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            )}

            {/* Submenu muncul saat hover (desktop) */}
            {item.listSubMenu.length > 0 && (
              <div className="absolute -left-1 mt-7 w-44 border-t-2 border-t-red-400 hidden group-hover:block bg-white shadow-md">
                <ul className="py-2">
                  {item.listSubMenu.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={sub.path}
                        className="block px-4 py-2 text-sm hover:bg-stone-100"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
