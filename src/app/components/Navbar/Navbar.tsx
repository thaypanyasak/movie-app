"use client";
import React, { useState } from "react";
import { useScrolled } from "./hooks/useScrolled";
import DesktopNav from "./components/DesktopNav";
import HamburgerButton from "./components/HamburgerButton";
import MobileMenu from "./components/MobileMenu";

const Navbar = () => {
  const scrolled = useScrolled(200);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-in-out
          px-4 sm:px-6 md:px-12 lg:px-10 
          py-4 sm:py-5 md:py-6 lg:py-10
          text-white ${
            scrolled
              ? "bg-[#0F0F0F] bg-opacity-80 shadow-lg mt-0"
              : "bg-transparent pt-6 sm:pt-8 md:pt-10 opacity-80"
          }`}
      >
        <div className="lg:hidden flex justify-start items-center">
          <HamburgerButton isOpen={menuOpen} onClick={toggleMenu} />
        </div>

        <div className="hidden lg:flex justify-between items-center w-full">
          <div className="flex gap-3 items-center">
            <img src="/img/logo.png" alt="icon" className="h-14 w-14" />
            <h1 className="text-white font-semibold text-2xl md:text-4xl group-hover:text-red-main group-hover:transition-custom">
              TheMovies
            </h1>
          </div>

          <DesktopNav />
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;
