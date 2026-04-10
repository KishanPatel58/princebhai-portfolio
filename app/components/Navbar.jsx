"use client";

import { useState, useEffect } from "react";

const links = ["Home", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Active section
  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";

      links.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
        backdrop-blur bg-white/70 border-b`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="font-bold text-lg">Prince Trambadia</h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 text-sm">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`hover:text-black ${
                  active === link ? "font-bold" : "text-gray-500"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* MOBILE ICON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

        </div>
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* OFFCANVAS MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">

          {/* CLOSE BUTTON */}
          <button
            className="text-2xl mb-6"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {/* MENU LINKS */}
          <div className="flex flex-col gap-6 text-lg">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`${
                  active === link ? "font-bold" : "text-gray-600"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}