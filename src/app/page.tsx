import SiteFrame from "../components/layout/SiteFrame";
import HeroParticles from "../components/hero/HeroParticles";
import HeroDepth from "../components/hero/HeroDepth";
import VelaConstellation from "../components/hero/VelaConstellation";


function StarField() {
  return <div className="star-field" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <i key={i} />)}</div>;
}


export default function Home() {
  return <SiteFrame>
    <main className="vela-site">
      <section className="hero-section" id="inicio">
        <HeroDepth />
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
      <section className="home-intro home-intro--violet">
        <div className="section-wrap home-intro-inner">
          <div className="section-kicker"><span>01</span> / EXPLORA VELA</div>
          <div className="home-intro-grid">
            <div className="home-intro-copy">
              <h2>Un universo.<br /><em>Muchas posibilidades.</em></h2>
              <p>Las grandes ideas no viven aisladas. Se conectan, evolucionan y se convierten en algo extraordinario. Explora lo que somos y lo que podemos construir.</p>
            </div>
            <div className="intro-orbit-visual" aria-hidden="true">
              <div className="intro-nebula" />
              <div className="intro-orbit intro-orbit--one"><i /></div>
              <div className="intro-orbit intro-orbit--two"><i /></div>
              <div className="intro-orbit intro-orbit--three"><i /></div>
              <div className="intro-core"><span>V</span><small>VELA UNIVERSE</small></div>
              <span className="intro-coordinate intro-coordinate--top">INNOVATION / 01</span>
              <span className="intro-coordinate intro-coordinate--bottom">BEYOND THE EXPECTED</span>
              <span className="intro-satellite intro-satellite--one">IDEAS</span>
              <span className="intro-satellite intro-satellite--two">SYSTEMS</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-links home-portals">
        <div className="section-wrap">
          <div className="portals-heading">
            <div><div className="section-kicker"><span>02</span> / NAVEGA EL UNIVERSO</div><h2>Cuatro caminos.<br /><em>Una misma visión.</em></h2></div>
            <p>Explora las dimensiones que dan forma a VELA. Cada una conecta una idea con nuevas posibilidades.</p>
          </div>
          <div className="portal-grid">
            <a className="portal-card portal-card--universe" href="/universo">
              <span className="portal-index">01 <i /> DISCOVER</span>
              <span className="portal-art portal-art--universe" aria-hidden="true"><i /><i /><i /><b>V</b></span>
              <span className="portal-content"><strong>El universo VELA</strong><small>Conoce qué nos mueve y la visión que nos impulsa.</small></span>
              <span className="portal-arrow">↗</span>
            </a>
            <a className="portal-card portal-card--solutions" href="/soluciones">
              <span className="portal-index">02 <i /> CREATE</span>
              <span className="portal-art portal-art--solutions" aria-hidden="true"><i /><i /><i /><b>✳</b></span>
              <span className="portal-content"><strong>Soluciones</strong><small>Ideas convertidas en herramientas, experiencias y tecnología.</small></span>
              <span className="portal-arrow">↗</span>
            </a>
            <a className="portal-card portal-card--projects" href="/proyectos">
              <span className="portal-index">03 <i /> EXPLORE</span>
              <span className="portal-art portal-art--projects" aria-hidden="true"><i /><i /><i /><b>◈</b></span>
              <span className="portal-content"><strong>Proyectos</strong><small>Descubre conceptos, experimentos e ideas en acción.</small></span>
              <span className="portal-arrow">↗</span>
            </a>
            <a className="portal-card portal-card--approach" href="/enfoque">
              <span className="portal-index">04 <i /> CONNECT</span>
              <span className="portal-art portal-art--approach" aria-hidden="true"><i /><i /><i /><b>⌘</b></span>
              <span className="portal-content"><strong>Nuestro enfoque</strong><small>La forma en que conectamos estrategia, diseño y tecnología.</small></span>
              <span className="portal-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="home-contact home-contact--portal" id="contacto">
        <div className="contact-cosmos" aria-hidden="true">
          <div className="contact-glow" />
          <div className="contact-ring contact-ring--one" />
          <div className="contact-ring contact-ring--two" />
          <div className="contact-ring contact-ring--three" />
          <div className="contact-star contact-star--one" />
          <div className="contact-star contact-star--two" />
          <div className="contact-star contact-star--three" />
          <div className="contact-monogram">V</div>
        </div>
        <div className="section-wrap contact-content">
          <div className="section-kicker"><span>03</span> / EL SIGUIENTE PASO</div>
          <div className="contact-overline">EVERYTHING STARTS WITH AN IDEA</div>
          <h2>El futuro no<br />se espera. <em>Se crea.</em></h2>
          <p>Tu próxima gran idea merece un universo de posibilidades. Conversemos y descubramos hasta dónde podemos llevarla.</p>
          <a className="contact-main-link" href="/contacto"><span>Hablemos de tu proyecto</span><i>↗</i></a>
          <div className="contact-footnote"><span>ESTRATEGIA · DISEÑO · TECNOLOGÍA</span><span>LET’S BUILD WHAT’S NEXT.</span></div>
        </div>
      </section>
      <section className="selected-work" id="proyectos-destacados">
        <div className="section-wrap">
          <div className="selected-work-heading">
            <div>
              <div className="section-kicker"><span>04</span> / TRABAJO EN ACCIÓN</div>
              <h2>Selected<br /><em>universes.</em></h2>
            </div>
            <p>Tres proyectos. Tres identidades. Una misma visión: convertir ideas en experiencias digitales con propósito.</p>
          </div>
          <div className="selected-work-grid">
            <a className="work-card work-card--featured" href="https://velatechnology.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Explorar el portafolio de VELA Technology">
              <div className="work-card-visual work-visual--vela" aria-hidden="true">
                <span className="work-orbit work-orbit--a" /><span className="work-orbit work-orbit--b" /><span className="work-orbit work-orbit--c" />
                <span className="work-visual-core">V</span><span className="work-visual-caption">A UNIVERSE OF INNOVATION</span>
              </div>
              <div className="work-card-info">
                <div><span className="work-category">01 / PROYECTO PROPIO</span><h3>VELA Technology</h3><p>El universo digital que reúne nuestra visión, capacidades y soluciones.</p></div>
                <span className="work-card-arrow">↗</span>
              </div>
            </a>
            <a className="work-card" href="https://ronald-hernandez.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Explorar la landing page de Ronald Hernández">
              <div className="work-card-visual work-visual--ronald" aria-hidden="true">
                <span className="work-art-frame"><i /><i /><i /><b>RH</b></span><span className="work-visual-caption">ART · CULTURE · IDENTITY</span>
              </div>
              <div className="work-card-info">
                <div><span className="work-category">02 / DISEÑO Y DESARROLLO WEB</span><h3>Ronald Hernández</h3><p>Una presencia digital para dar espacio a su trayectoria y universo artístico.</p></div>
                <span className="work-card-arrow">↗</span>
              </div>
            </a>
            <a className="work-card" href="https://nueva-jerusalen.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Explorar la landing page de Iglesia Nueva Jerusalén Casa del Dios Altísimo">
              <div className="work-card-visual work-visual--church" aria-hidden="true">
                <span className="church-light" /><span className="church-cross">✝</span><span className="work-visual-caption">FAITH · COMMUNITY · PURPOSE</span>
              </div>
              <div className="work-card-info">
                <div><span className="work-category">03 / DISEÑO Y DESARROLLO WEB</span><h3>Iglesia Nueva Jerusalén</h3><p>Una landing institucional para comunicar su misión y conectar con su comunidad.</p></div>
                <span className="work-card-arrow">↗</span>
              </div>
            </a>
          </div>
          <div className="selected-work-foot"><span>VELA TECHNOLOGY</span><span>IDEAS MADE DIGITAL <i>✳</i></span></div>
        </div>
      </section>
    </main>
  </SiteFrame>;
}
