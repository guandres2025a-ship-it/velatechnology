const links = [
  { label: "Inicio", href: "/" },
  { label: "Universo", href: "/universo" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Enfoque", href: "/enfoque" },
  { label: "Ideas", href: "/ideas" },
];

export default function Navbar() {
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
    </header>
  );
}