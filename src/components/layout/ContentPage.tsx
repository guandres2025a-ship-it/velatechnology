import SiteFrame from "./SiteFrame";

type ContentPageProps = {
  number: string;
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  items: { number: string; title: string; text: string }[];
  closing: string;
};

export default function ContentPage({ number, eyebrow, title, highlight, intro, items, closing }: ContentPageProps) {
  return <SiteFrame>
    <main className="content-page">
      <section className="content-hero">
        <div className="content-hero-glow" />
        <div className="section-kicker"><span>{number}</span> / {eyebrow}</div>
        <h1>{title}<br /><em>{highlight}</em></h1>
        <p>{intro}</p>
        <div className="content-hero-index">VELA TECHNOLOGIES <span>—</span> {number} / 06</div>
      </section>
      <section className="content-list section-wrap">
        {items.map((item) => <article className="content-row" key={item.number}>
          <span>{item.number}</span><div><h2>{item.title}</h2><p>{item.text}</p></div><i>↗</i>
        </article>)}
      </section>
      <section className="content-closing section-wrap"><p>{closing}</p><a className="button-primary" href="/contacto">Conectemos <span>↗</span></a></section>
    </main>
  </SiteFrame>;
}