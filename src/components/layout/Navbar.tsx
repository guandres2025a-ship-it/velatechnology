"use client";

import { useState } from "react";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Universo", href: "/universo" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Enfoque", href: "/enfoque" },
  { label: "Ideas", href: "/ideas" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="/" className="brand" aria-label="VELA Technologies, inicio">
        <span className="vela-mark" aria-hidden="true"><span>V</span><i /></span>
        <span><b>VELA</b><small>TECHNOLOGIES</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="header-cta" href="/contacto">Hablemos <span>↗</span></a>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="vela-mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        id="vela-mobile-navigation"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Navegación móvil"
        aria-hidden={!menuOpen}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
            {link.label}<span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
