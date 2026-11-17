import SiteFrame from "../components/layout/SiteFrame";
import HeroParticles from "../components/hero/HeroParticles";
import VelaConstellation from "../components/hero/VelaConstellation";


function StarField() {
  return <div className="star-field" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <i key={i} />)}</div>;
}


export default function Home() {
  return <SiteFrame>
    <main className="vela-site">
      <section className="hero-section" id="inicio">
        <StarField />
        <HeroParticles />
        <div className="hero-copy">
          <div className="eyebrow"><i /> THE DIGITAL UNIVERSE</div>
          <h1>Ideas que conectan.<br /><em>Posibilidades</em><br />sin límites.</h1>
          <p>Conectamos estrategia, creatividad y tecnología para transformar ideas en experiencias, productos y soluciones que abren nuevos caminos.</p>
          <div className="hero-actions"><a href="/soluciones" className="button-primary">Explora soluciones <span>↗</span></a><a href="/universo" className="text-link">Conoce el universo VELA <span>↓</span></a></div>
        </div>
        <div className="hero-art"><VelaConstellation /></div>
        <div className="hero-bottomline"><span>01 — 06</span><span>ESTRATEGIA · DISEÑO · TECNOLOGÍA</span><span>EXPLORE VELA ↓</span></div>
      </section>
      <section className="proof-strip"><span className="proof-intro">UN UNIVERSO DE POSIBILIDADES</span><div><b>ESTRATEGIA</b><i /><b>SOFTWARE</b><i /><b>INTELIGENCIA ARTIFICIAL</b><i /><b>EXPERIENCIAS DIGITALES</b><i /><b>INNOVACIÓN</b></div></section>
      <section className="home-intro section-wrap">
        <div className="section-kicker"><span>01</span> / EXPLORA VELA</div>
        <div className="home-intro-grid"><h2>Un universo.<br /><em>Muchas posibilidades.</em></h2><p>Las grandes ideas no viven aisladas. Se conectan, evolucionan y se convierten en algo extraordinario. Explora lo que somos y lo que podemos construir.</p></div>
      </section>
      <section className="home-links section-wrap">
        <a href="/universo"><span>01 / UNIVERSO</span><strong>Conoce qué nos mueve</strong><i>↗</i></a>
        <a href="/soluciones"><span>02 / SOLUCIONES</span><strong>Descubre lo que podemos crear</strong><i>↗</i></a>
        <a href="/proyectos"><span>03 / PROYECTOS</span><strong>Explora ideas en acción</strong><i>↗</i></a>
        <a href="/enfoque"><span>04 / ENFOQUE</span><strong>Así conectamos las piezas</strong><i>↗</i></a>
      </section>
      <section className="home-contact"><div className="section-wrap"><div className="section-kicker"><span>05</span> / EL SIGUIENTE PASO</div><h2>¿Qué podemos<br /><em>hacer posible?</em></h2><a className="button-primary" href="/contacto">Hablemos de tu idea <span>↗</span></a></div></section>
    </main>
  </SiteFrame>;
}