const capabilities = [
  { number: "01", title: "Estrategia digital", text: "Damos dirección a las ideas y encontramos oportunidades donde otros solo ven problemas.", symbol: "✳" },
  { number: "02", title: "Desarrollo de software", text: "Creamos plataformas, productos y experiencias digitales pensadas para crecer.", symbol: "⌘" },
  { number: "03", title: "Inteligencia artificial", text: "Conectamos datos, procesos y automatización para trabajar de forma más inteligente.", symbol: "✧" },
];
const principles = [
  { title: "Pensamiento estratégico", text: "Cada proyecto comienza con una pregunta: qué queremos transformar y por qué." },
  { title: "Tecnología con propósito", text: "Elegimos las herramientas por lo que permiten lograr, no por seguir tendencias." },
  { title: "Diseño que conecta", text: "Creamos experiencias claras, útiles y memorables para las personas." },
  { title: "Evolución constante", text: "Construimos soluciones preparadas para adaptarse y abrir nuevos caminos." },
];
function VelaMark() { return <span className="vela-mark" aria-hidden="true"><span>V</span><i /></span>; }
function StarField() { return <div className="star-field" aria-hidden="true">{Array.from({ length: 24 }, (_, i) => <i key={i} />)}</div>; }
function Constellation() {
  return <div className="constellation-art" role="img" aria-label="Constelación VELA, símbolo de conexión y posibilidades">
    <div className="constellation-glow" /><div className="constellation-orbit orbit-one" /><div className="constellation-orbit orbit-two" /><div className="constellation-orbit orbit-three" />
    <svg viewBox="0 0 600 480" aria-hidden="true"><path d="M104 315 190 154 288 216 374 92 493 180 442 338 288 385 190 154" /><path d="M104 315 288 216 442 338M190 154 493 180M288 216 374 92" /></svg>
    <i className="node node-a" /><i className="node node-b" /><i className="node node-c" /><i className="node node-d" /><i className="node node-e" /><i className="node node-f" />
    <div className="constellation-center"><VelaMark /><span>VELA</span></div>
    <span className="constellation-label label-top">IDEAS / 01</span><span className="constellation-label label-side">CONNECTION IS EVERYTHING</span><span className="constellation-label label-bottom">10° 58' N — 74° 47' W</span>
  </div>;
}
export default function Home() {
  return <main className="vela-site">
    <header className="site-header">
      <a href="#inicio" className="brand" aria-label="VELA Technologies, inicio"><VelaMark /><span><b>VELA</b><small>TECHNOLOGIES</small></span></a>
      <nav className="desktop-nav" aria-label="Navegación principal"><a href="#universo">Universo VELA</a><a href="#posibilidades">Posibilidades</a><a href="#enfoque">Nuestro enfoque</a><a href="#ideas">Ideas</a></nav>
      <a className="header-cta" href="#contacto">Hablemos <span>↗</span></a>
    </header>
    <section className="hero-section" id="inicio">
      <StarField />
      <div className="hero-copy"><div className="eyebrow"><i /> EL FUTURO SE CONSTRUYE EN CONEXIÓN</div>
        <h1>Hagamos algo<br /><em>extraordinario</em><br />con tecnología.</h1>
        <p>Conectamos estrategia, creatividad y tecnología para convertir grandes ideas en soluciones que mueven el mundo.</p>
        <div className="hero-actions"><a href="#posibilidades" className="button-primary">Explora las posibilidades <span>↗</span></a><a href="#universo" className="text-link">Conoce VELA <span>↓</span></a></div>
      </div>
      <div className="hero-art"><Constellation /></div>
      <div className="hero-bottomline"><span>01 — 05</span><span>ESTRATEGIA · DISEÑO · TECNOLOGÍA</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
    <section className="proof-strip"><span className="proof-intro">UN UNIVERSO DE POSIBILIDADES</span><div><b>ESTRATEGIA</b><i /><b>SOFTWARE</b><i /><b>INTELIGENCIA ARTIFICIAL</b><i /><b>EXPERIENCIAS DIGITALES</b><i /><b>INNOVACIÓN</b></div></section>
    <section className="about-section section-wrap" id="universo"><div className="section-kicker"><span>01</span> / ¿QUÉ ES VELA?</div>
      <div className="about-grid"><h2>Un punto de<br />partida para<br /><em>lo que sigue.</em></h2><div className="about-copy"><span className="gold-line" /><p>VELA nace de una idea simple: las grandes transformaciones ocurren cuando las cosas correctas se conectan. Somos un universo de pensamiento, diseño y tecnología enfocado en convertir posibilidades en realidades.</p><a href="#enfoque" className="inline-link">Descubre nuestra visión <span>↗</span></a></div></div>
    </section>
    <section className="possibilities-section" id="posibilidades"><div className="section-wrap"><div className="section-kicker"><span>02</span> / LO QUE PODEMOS CREAR</div>
      <div className="possibilities-heading"><h2>Las posibilidades<br /><em>no tienen límites.</em></h2><p>Un ecosistema de capacidades que se conectan para crear soluciones relevantes, útiles y preparadas para el futuro.</p></div>
      <div className="capability-grid">{capabilities.map((item) => <article className="capability-card" key={item.number}><div className="capability-meta"><span>{item.number}</span><span>VELA / CAPABILITY</span></div><div className="capability-symbol">{item.symbol}<i /><i /></div><div className="capability-content"><h3>{item.title}</h3><p>{item.text}</p><a href="#contacto" aria-label={"Conversemos sobre " + item.title}>↗</a></div></article>)}</div>
    </div></section>
    <section className="future-section"><div className="future-art"><StarField /><div className="future-orbit future-orbit-a" /><div className="future-orbit future-orbit-b" /><div className="future-core"><VelaMark /><span>THE FUTURE<br />IS CONNECTED</span></div><div className="future-coordinate">VELA CONSTELLATION / 001</div></div>
      <div className="future-copy"><div className="section-kicker"><span>03</span> / EL SIGUIENTE HORIZONTE</div><h2>El futuro es ahora.<br /><em>Hagámoslo posible.</em></h2><p>Las ideas necesitan más que inspiración: necesitan dirección, herramientas y personas capaces de llevarlas más lejos. En VELA conectamos esas piezas.</p><a className="button-primary" href="#contacto">Construyamos el futuro <span>↗</span></a></div>
    </section>
    <section className="approach-section section-wrap" id="enfoque"><div className="section-kicker"><span>04</span> / NUESTRA FORMA DE PENSAR</div>
      <div className="approach-heading"><h2>La diferencia está<br />en <em>cómo conectamos.</em></h2><p>No creemos en soluciones aisladas. Creemos en una visión integral donde cada decisión suma y cada detalle tiene un propósito.</p></div>
      <div className="principles-grid">{principles.map((item, i) => <article key={item.title}><span>0{i + 1}</span><div className="principle-rule" /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>
    <section className="ideas-section" id="ideas"><div className="section-wrap ideas-inner"><div className="section-kicker"><span>05</span> / IDEAS EN MOVIMIENTO</div>
      <div className="ideas-heading"><h2>Todo gran cambio<br />comienza con <em>una idea.</em></h2><p>Exploramos nuevas conexiones entre tecnología, creatividad y futuro. ¿Tienes una idea que merece hacerse realidad?</p></div><a href="#contacto" className="ideas-link">Hablemos de lo que viene <span>↗</span></a>
    </div></section>
    <section className="contact-section" id="contacto"><div className="section-wrap contact-inner"><div className="section-kicker"><span>06</span> / TU PRÓXIMA IDEA COMIENZA AQUÍ</div><h2>¿Y si hacemos<br /><em>que suceda?</em></h2><div className="contact-bottom"><p>Cuéntanos qué imaginas. Estamos listos para conectar las piezas y construir algo extraordinario.</p><a className="button-primary" href="mailto:contacto@velatechnology.com">Conversemos <span>↗</span></a></div></div></section>
    <footer className="site-footer"><a href="#inicio" className="brand"><VelaMark /><span><b>VELA</b><small>TECHNOLOGIES</small></span></a><p>IDEAS CONNECTED. POSSIBILITIES UNLIMITED.</p><span>© {new Date().getFullYear()} VELA Technologies</span></footer>
  </main>;
}