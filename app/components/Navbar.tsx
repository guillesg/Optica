"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        backdrop-blur-xl transition-all duration-300
        ${scrolled
          ? "bg-white/75 shadow-lg border-b border-optica-gray/40"
          : "bg-white/40 border-b border-transparent"}
      `}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO DESKTOP → INICIO */}
        <a
          href="#inicio"
          className="hidden md:block text-2xl font-semibold tracking-wide text-optica-blue"
        >
          <span className="text-optica-gray">Ó</span>
          Òpticos Domínguez Romero
        </a>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex gap-6 text-optica-blue font-medium">
          <a href="#servicios" className="hover:text-optica-purple transition">
            Servicios
          </a>
          <a href="#galeria" className="hover:text-optica-purple transition">
            Galería
          </a>
          <a href="#contacto" className="hover:text-optica-purple transition">
            Contacto
          </a>
        </div>

        {/* LOGO MOBILE */}
        <a
          href="#inicio"
          className="md:hidden flex items-center gap-1 text-4xl font-bold"
        >
          <span className="text-optica-gray">Ó</span>
          <span className="text-optica-blue">Ò</span>
        </a>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative"
        >
          <span
            className={`block w-8 h-1 bg-optica-blue rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-optica-blue rounded my-1 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-optica-blue rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden flex flex-col bg-white/95 border-t border-optica-gray/30 py-3 px-4 text-optica-blue">
          <a href="#servicios" className="py-2 hover:text-optica-purple" onClick={() => setOpen(false)}>
            Servicios
          </a>
          <a href="#galeria" className="py-2 hover:text-optica-purple" onClick={() => setOpen(false)}>
            Galería
          </a>
          <a href="#contacto" className="py-2 hover:text-optica-purple" onClick={() => setOpen(false)}>
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
