const services = [
  { id: "01", title: "Experiencias digitales", text: "Sitios web y productos digitales que hacen que cada interacción tenga sentido.", label: "WEB / DIGITAL" },
  { id: "02", title: "Software a medida", text: "Herramientas y plataformas creadas alrededor de los retos reales de cada negocio.", label: "ENGINEERING" },
  { id: "03", title: "IA y automatización", text: "Procesos inteligentes que conectan información, equipos y nuevas oportunidades.", label: "AI / AUTOMATION" },
];

const steps = [
  { id: "01", title: "Entender", text: "Escuchamos, exploramos el contexto y definimos el verdadero desafío." },
  { id: "02", title: "Diseñar", text: "Trazamos una dirección clara y convertimos ideas en experiencias." },
  { id: "03", title: "Construir", text: "Desarrollamos, conectamos y hacemos evolucionar la solución." },
];

function Mark() {
  return <span className="vela-mark" aria-hidden="true"><span>V</span><i /></span>;
}

function Arrow() {
  return <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">↗</span>;
}

function InterfaceVisual() {
  return (
    <div className="interface-scene" aria-label="Composición visual abstracta del universo digital de VELA" role="img">
      <div className="scene-halo" />
      <div className="scene-orbit scene-orbit-a" /><div className="scene-orbit scene-orbit-b" />
      <div className="scene-star star-a" /><div className="scene-star star-b" /><div className="scene-star star-c" />
      <div className="scene-card scene-card-back"><span className="scene-card-kicker">VELA / SIGNAL</span><div className="signal-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="signal-foot"><span>LIVE SYSTEM</span><b>CONNECTED</b></div></div>
      <div className="scene-card scene-card-main">
        <div className="scene-window"><span /><span /><span /><small>VELA / DIGITAL SPACE</small></div>
        <div className="scene-main-copy"><small>IDEAS IN MOTION</small><strong>Make it<br /><em>possible.</em></strong><p>Strategy · Design · Technology</p></div>
        <div className="scene-main-bottom"><span>01 — 03</span><div><i /><i /><i /></div><span>EXPLORE</span></div>
      </div>
      <div className="scene-floating scene-floating-top"><span className="floating-pulse" /> SYSTEM ONLINE</div>
      <div className="scene-floating scene-floating-bottom"><b>V</b><span>ONE VISION<br />MANY POSSIBILITIES</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="vela-site">
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="VELA Technologies, inicio"><Mark /><span><b>VELA</b><small>TECHNOLOGIES</small></span></a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#universo">Universo VELA</a><a href="#soluciones">Soluciones</a><a href="#metodo">Nuestro enfoque</a>
        </nav>
        <a className="header-cta" href="#contacto">Hablemos <Arrow /></a>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><i /> TECNOLOGÍA CON DIRECCIÓN <i /></div>
          <h1>Ideas que conectan.<br /><em>Posibilidades</em> que<br />se vuelven realidad.</h1>
          <p>En VELA unimos estrategia, creatividad y tecnología para construir soluciones digitales que impulsan lo que viene.</p>
          <div className="hero-actions"><a href="#soluciones" className="button-primary group">Explora soluciones <Arrow /></a><a href="#universo" className="button-text">Conoce nuestro universo <span>↓</span></a></div>
          <div className="hero-note"><span>01 / 03</span><i /><span>INNOVACIÓN QUE SE CONECTA</span></div>
        </div>
        <div className="hero-art"><InterfaceVisual /></div>
        <div className="hero-side-label">STRATEGY · DESIGN · TECHNOLOGY</div>
      </section>

      <section className="capability-ribbon" aria-label="Áreas de trabajo">
        <span>DONDE LAS IDEAS TOMAN FORMA</span><i /> <b>DESARROLLO DIGITAL</b><i /><b>SOFTWARE</b><i /><b>INTELIGENCIA ARTIFICIAL</b><i /><b>INNOVACIÓN</b>
      </section>

      <section className="intro-section section-wrap" id="universo">
        <div className="section-index">01 <span>—</span> EL UNIVERSO VELA</div>
        <div className="intro-layout">
          <h2>La tecnología<br />es el medio.<br /><em>El impacto es<br />el objetivo.</em></h2>
          <div className="intro-description"><div className="gold-rule" /><p>Creemos que las mejores ideas aparecen cuando las conexiones correctas suceden. Por eso VELA reúne distintas disciplinas para transformar desafíos en experiencias, herramientas y soluciones con propósito.</p><a href="#contacto" className="inline-link">Descubre lo que podemos crear <Arrow /></a></div>
        </div>
        <div className="intro-bottom"><span>UNA VISIÓN INTEGRAL</span><p>ESTRATEGIA <b>+</b> CREATIVIDAD <b>+</b> TECNOLOGÍA</p><span>VELA / 2026</span></div>
      </section>

      <section className="solutions-section" id="soluciones">
        <div className="section-wrap">
          <div className="section-index">02 <span>—</span> QUÉ HACEMOS</div>
          <div className="section-heading"><h2>Un mundo de ideas.<br /><em>Un ecosistema de soluciones.</em></h2><p>Capacidades que trabajan juntas para resolver problemas reales y abrir nuevas oportunidades.</p></div>
          <div className="solutions-grid">
            {services.map((service) => <article className="solution-card" key={service.id}>
              <div className="solution-top"><span>{service.id}</span><span>{service.label}</span></div>
              <div className="solution-graphic" aria-hidden="true"><div className="graphic-ring" /><div className="graphic-ring graphic-ring-inner" /><div className="graphic-core">{service.id === "01" ? "✳" : service.id === "02" ? "{ }" : "✧"}</div><i /><i /><i /></div>
              <div className="solution-copy"><h3>{service.title}</h3><p>{service.text}</p><a href="#contacto" aria-label={`Consultar sobre ${service.title}`}><Arrow /></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="feature-section section-wrap">
        <div className="feature-visual">
          <div className="feature-orbit feature-orbit-one" /><div className="feature-orbit feature-orbit-two" />
          <div className="feature-constellation"><i /><i /><i /><i /><i /><i /><i /><svg viewBox="0 0 400 300" aria-hidden="true"><path d="M62 205 L115 94 L190 133 L248 54 L324 126 L275 230 L160 248 Z" /></svg></div>
          <div className="feature-caption"><span>VELA CONSTELLATION</span><b>10° 58' N / 74° 47' W</b></div>
        </div>
        <div className="feature-copy"><div className="section-index">03 <span>—</span> UNA FORMA DE CONECTAR</div><h2>Todo está<br />conectado.<br /><em>Hagámoslo<br />posible.</em></h2><p>Desde la primera conversación hasta la solución final, pensamos cada proyecto como un sistema: cada decisión, cada detalle y cada tecnología cumple una función.</p><a href="#metodo" className="inline-link">Así trabajamos <Arrow /></a></div>
      </section>

      <section className="method-section" id="metodo">
        <div className="section-wrap">
          <div className="section-index">04 <span>—</span> CÓMO LO HACEMOS</div>
          <div className="section-heading"><h2>De la idea<br /><em>al siguiente horizonte.</em></h2><p>Un proceso flexible, colaborativo y enfocado en crear algo que realmente aporte valor.</p></div>
          <div className="method-grid">{steps.map((step) => <article key={step.id}><span>{step.id}</span><div className="method-line" /><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-stars" /><div className="section-wrap contact-inner"><div className="section-index">05 <span>—</span> EMPECEMOS ALGO NUEVO</div><h2>¿Qué podemos<br /><em>hacer posible</em><br />contigo?</h2><div className="contact-bottom"><p>Cuéntanos qué tienes en mente. Estamos listos para explorar nuevas conexiones.</p><a className="button-primary group" href="mailto:contacto@velatechnology.com">Hablemos <Arrow /></a></div></div>
      </section>

      <footer className="site-footer"><a href="#inicio" className="brand"><Mark /><span><b>VELA</b><small>TECHNOLOGIES</small></span></a><p>INNOVATION · DIRECTION · GROWTH</p><span>© {new Date().getFullYear()} VELA Technologies</span></footer>
    </main>
  );
}
