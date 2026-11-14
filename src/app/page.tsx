import Hero from "@/components/hero/Hero";

const capabilities = [
  { number: "01", code: "WEB / DIGITAL PRODUCTS", title: "Experiencias digitales", description: "Sitios web y productos digitales que convierten ideas en experiencias claras, memorables y funcionales.", tags: ["Estrategia", "UX / UI", "Desarrollo"], visual: "visual-web" },
  { number: "02", code: "ENGINEERING / SOFTWARE", title: "Software a medida", description: "Plataformas y herramientas creadas alrededor de la forma real en que funciona cada negocio.", tags: ["Arquitectura", "Integraciones", "Escalabilidad"], visual: "visual-code" },
  { number: "03", code: "AI / AUTOMATION", title: "Inteligencia y automatización", description: "Procesos conectados e inteligencia aplicada para reducir fricción y liberar nuevas oportunidades.", tags: ["Automatización", "IA aplicada", "Datos"], visual: "visual-ai" },
  { number: "04", code: "STRATEGY / CONSULTING", title: "Estrategia tecnológica", description: "Claridad para decidir qué construir, cómo hacerlo y cómo evolucionarlo con intención.", tags: ["Diagnóstico", "Consultoría", "Evolución"], visual: "visual-strategy" },
];

const principles = [
  { number: "01", title: "Explorar", text: "Entendemos el contexto, hacemos preguntas y encontramos oportunidades donde otros solo ven límites." },
  { number: "02", title: "Conectar", text: "Unimos estrategia, diseño y tecnología para convertir ideas dispersas en una dirección compartida." },
  { number: "03", title: "Construir", text: "Transformamos esa dirección en soluciones útiles, cuidadas y preparadas para evolucionar." },
];

function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="vela-eyebrow"><span>{index}</span><i /><span>{children}</span></div>;
}

function Arrow() {
  return <span className="vela-arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071426] text-white">
      <Hero />

      <section id="nosotros" className="vela-intro relative px-6 py-28 sm:py-36 lg:px-10">
        <div className="vela-intro-grid" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <Eyebrow index="01">UNA NUEVA DIRECCIÓN</Eyebrow>
            <h2 className="vela-display max-w-5xl">Las grandes ideas no aparecen de la nada. <em>Se conectan.</em></h2>
          </div>
          <div className="max-w-lg lg:justify-self-end">
            <p className="text-lg leading-8 text-[#C2CDDA]">En VELA conectamos creatividad, estrategia y tecnología para convertir desafíos en experiencias y soluciones que impulsan lo que viene.</p>
            <a href="#ecosistema" className="vela-text-link mt-8">DESCUBRE NUESTRA VISIÓN <Arrow /></a>
          </div>
        </div>
        <div className="relative mx-auto mt-20 grid max-w-7xl grid-cols-2 border-y border-white/10 py-6 sm:grid-cols-4">
          {[["01", "IDEAS CON INTENCIÓN"], ["02", "TECNOLOGÍA ÚTIL"], ["03", "DISEÑO CON PROPÓSITO"], ["04", "EVOLUCIÓN CONSTANTE"]].map(([n, label]) => (
            <div key={n} className="vela-stat py-3"><span>{n}</span><p>{label}</p></div>
          ))}
        </div>
      </section>

      <section id="servicios" className="vela-capabilities relative px-6 py-28 sm:py-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <Eyebrow index="02">QUÉ HACEMOS</Eyebrow>
              <h2 className="vela-section-title">Tecnología para <span>mover ideas.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#8E9FB3]">Un ecosistema de capacidades que se combinan para resolver necesidades reales. No soluciones en serie: respuestas pensadas para cada desafío.</p>
          </div>

          <div className="vela-capability-grid mt-16">
            {capabilities.map((item) => (
              <article key={item.number} className="vela-capability group">
                <div className="vela-capability-top"><span>{item.number}</span><span>{item.code}</span></div>
                <div className={`vela-capability-visual ${item.visual}`} aria-hidden="true">
                  {item.visual === "visual-web" && <><div className="browser-frame"><div className="browser-dots"><i /><i /><i /></div><div className="browser-content"><b /><span /><span /><div /></div></div><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /></>}
                  {item.visual === "visual-code" && <div className="code-window"><span>VELA / SYSTEM</span><b>{"{ "}</b><i>design</i><b> : </b><em>function</em><br /><b>{"  "}</b><i>build</i><b> : </b><em>experience</em><br /><b>{"  "}</b><i>scale</i><b> : </b><em>possibility</em><br /><b>{"}"}</b></div>}
                  {item.visual === "visual-ai" && <div className="ai-core"><span /><span /><span /><b>AI</b></div>}
                  {item.visual === "visual-strategy" && <div className="strategy-rings"><i /><i /><i /><b>↗</b></div>}
                </div>
                <div className="vela-capability-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="vela-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a href="#contacto" className="vela-capability-link" aria-label={`Conversemos sobre ${item.title}`}><Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosistema" className="vela-ecosystem relative overflow-hidden border-y border-white/[0.08] px-6 py-28 sm:py-36 lg:px-10">
        <div className="vela-ecosystem-glow" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow index="03">EL ECOSISTEMA VELA</Eyebrow>
            <h2 className="vela-section-title">Una visión.<br /><span>Múltiples conexiones.</span></h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#AAB8C9]">Las mejores soluciones nacen cuando las disciplinas dejan de trabajar por separado. En VELA, cada pieza tiene un propósito y cada conexión abre una posibilidad.</p>
            <a href="#contacto" className="vela-text-link mt-9">CONECTEMOS TU IDEA <Arrow /></a>
          </div>
          <div className="vela-system-art" role="img" aria-label="Diagrama visual del ecosistema VELA: estrategia, creatividad y tecnología conectadas">
            <div className="system-orbit orbit-a" /><div className="system-orbit orbit-b" /><div className="system-orbit orbit-c" />
            <div className="system-center"><span>V</span><small>VELA</small></div>
            <div className="system-node node-one"><i>✳</i><span>ESTRATEGIA</span></div>
            <div className="system-node node-two"><i>◇</i><span>CREATIVIDAD</span></div>
            <div className="system-node node-three"><i>⌘</i><span>TECNOLOGÍA</span></div>
            <div className="system-spark spark-one" /><div className="system-spark spark-two" /><div className="system-spark spark-three" />
          </div>
        </div>
      </section>

      <section className="vela-method px-6 py-28 sm:py-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><Eyebrow index="04">CÓMO PENSAMOS</Eyebrow><h2 className="vela-section-title">De la primera pregunta <span>al siguiente horizonte.</span></h2></div>
          <div className="vela-method-grid mt-16">
            {principles.map((item, index) => <article key={item.number} className="vela-method-step"><span className="method-number">{item.number}</span><div className="method-line"><i /></div><span className="method-index">0{index + 1} / 03</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="proyectos" className="vela-next relative px-6 py-24 sm:py-32 lg:px-10">
        <div className="vela-next-panel mx-auto max-w-7xl overflow-hidden">
          <div className="vela-next-art" aria-hidden="true"><div /><div /><div /><span>V</span></div>
          <div className="vela-next-copy">
            <Eyebrow index="05">LO QUE VIENE</Eyebrow>
            <h2>Las posibilidades<br />no tienen <em>un solo límite.</em></h2>
            <p>Este espacio crecerá con proyectos, productos y experimentos creados por VELA. Cada idea será una nueva oportunidad para explorar lo que la tecnología puede hacer.</p>
            <a href="#contacto" className="vela-text-link">HAGAMOS ALGO EXTRAORDINARIO <Arrow /></a>
          </div>
          <span className="vela-next-coordinate">10° 58' N / 74° 47' W · DIGITAL UNIVERSE</span>
        </div>
      </section>

      <section id="contacto" className="vela-contact relative overflow-hidden px-6 py-28 sm:py-36 lg:px-10">
        <div className="vela-contact-stars" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <Eyebrow index="06">TU PRÓXIMO PASO COMIENZA AQUÍ</Eyebrow>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="vela-contact-title">¿Y si llevamos<br /><em>tu idea más lejos?</em></h2>
            <a href="mailto:contacto@velatechnology.com" className="vela-contact-button">HABLEMOS <Arrow /></a>
          </div>
          <p className="mt-8 max-w-lg text-sm leading-7 text-[#91A1B5]">Cuéntanos qué imaginas. Nos interesa conocer el desafío, explorar las posibilidades y encontrar juntos una dirección.</p>
        </div>
      </section>

      <footer className="vela-footer px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <a href="#inicio" className="text-sm font-semibold tracking-[0.24em]">VELA <span className="text-[#D6B878]">TECHNOLOGIES</span></a>
          <p className="text-[10px] tracking-[0.08em] text-[#718198]">INNOVATION · DIRECTION · GROWTH</p>
          <p className="text-[10px] text-[#667991]">© {new Date().getFullYear()} VELA Technologies. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
