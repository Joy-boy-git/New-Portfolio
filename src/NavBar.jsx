import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 md:p-0 transition-colors duration-300 ${
      isActive
        ? "text-pink-500"
        : "text-white hover:text-pink-500"
    }`;

  return (
    <>
      <header>
        <nav
          className="sticky top-0 z-50 flex justify-between items-center border-b border-pink-500 bg-black p-4 shadow-lg"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-bold text-white"
            data-aos="fade-right"
          >
            BERLIN <span className="text-pink-500">S P</span>
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            id="mobile-menu"
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent shadow-lg md:shadow-none flex-col md:flex-row md:flex gap-4 md:gap-10 transition-all duration-300 ${
              menuOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/skill"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;