import SiteFrame from "../../components/layout/SiteFrame";

export default function ContactoPage() {
  return <SiteFrame>
    <main className="content-page contact-page">
      <section className="content-hero">
        <div className="content-hero-glow" />
        <div className="section-kicker"><span>06</span> / CONECTEMOS</div>
        <h1>Todo comienza<br /><em>con una conversación.</em></h1>
        <p>Cuéntanos qué imaginas, qué necesitas transformar o qué posibilidad quieres explorar. Estamos listos para escuchar.</p>
        <div className="contact-direct"><span>HABLEMOS DE TU PRÓXIMA IDEA</span><a href="mailto:contacto@velatechnology.com">contacto@velatechnology.com ↗</a></div>
      </section>
    </main>
  </SiteFrame>;
}