import Navbar from "./Navbar";

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  return <>
    <Navbar />
    {children}
    <footer className="site-footer site-footer--universe">
      <div className="footer-main">
        <div className="footer-brand-column">
          <a href="/" className="brand footer-brand">
            <span className="vela-mark" aria-hidden="true"><span>V</span><i /></span>
            <span><b>VELA</b><small>TECHNOLOGIES</small></span>
          </a>
          <p>Conectamos ideas, estrategia y tecnología para crear lo que viene.</p>
          <span className="footer-manifesto">IDEAS CONNECTED. POSSIBILITIES UNLIMITED.</span>
        </div>
        <div className="footer-nav-column">
          <span className="footer-label">EXPLORA VELA</span>
          <a href="/universo">El universo</a>
          <a href="/soluciones">Soluciones</a>
          <a href="/proyectos">Proyectos</a>
          <a href="/enfoque">Nuestro enfoque</a>
        </div>
        <div className="footer-contact-column">
          <span className="footer-label">EL SIGUIENTE PASO</span>
          <strong>¿Tienes una idea<br />en mente?</strong>
          <a className="footer-contact-link" href="/contacto">Conversemos <span>↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} VELA Technologies. Todos los derechos reservados.</span>
        <span>DISEÑADO PARA LO QUE VIENE.</span>
        <a href="#">VOLVER ARRIBA ↑</a>
      </div>
    </footer>
  </>;
}
