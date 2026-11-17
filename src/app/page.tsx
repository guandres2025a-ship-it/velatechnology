import SiteFrame from "../components/layout/SiteFrame";
import HeroParticles from "../components/hero/HeroParticles";

function VelaMark() {
  return <span className="vela-mark" aria-hidden="true"><span>V</span><i /></span>;
}

function StarField() {
  return <div className="star-field" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <i key={i} />)}</div>;
}

function Constellation() {
  return <div className="constellation-art" role="img" aria-label="Constelación VELA, símbolo de conexión y posibilidades">
    <div className="constellation-glow" />
    <div className="constellation-orbit orbit-one" /><div className="constellation-orbit orbit-two" /><div className="constellation-orbit orbit-three" />
    <svg viewBox="0 0 600 480" aria-hidden="true"><path d="M104 315 190 154 288 216 374 92 493 180 442 338 288 385 190 154" /><path d="M104 315 288 216 442 338M190 154 493 180M288 216 374 92" /></svg>
    <i className="node node-a" /><i className="node node-b" /><i className="node node-c" /><i className="node node-d" /><i className="node node-e" /><i className="node node-f" />
    <div className="constellation-center"><VelaMark /><span>VELA</span></div>
    <span className="constellation-label label-top">IDEAS / 01</span><span className="constellation-label label-side">CONNECTION IS EVERYTHING</span><span className="constellation-label label-bottom">10° 58' N — 74° 47' W</span>
  </div>;
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
        <div className="hero-art"><Constellation /></div>
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