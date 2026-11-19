"use client";

import { useState } from "react";

const systems = [
  { id: "web", number: "01", name: "WEB EXPERIENCE", title: "Experiencias que dejan huella.", description: "Diseñamos y desarrollamos experiencias digitales donde estrategia, diseño y tecnología trabajan como una sola fuerza.", className: "orbit-node-web" },
  { id: "business", number: "02", name: "BUSINESS SYSTEMS", title: "Negocios en movimiento.", description: "Conectamos procesos, información y herramientas para que las organizaciones evolucionen con claridad.", className: "orbit-node-business" },
  { id: "automation", number: "03", name: "AUTOMATION", title: "Menos fricción. Más posibilidades.", description: "Creamos flujos inteligentes que liberan tiempo, conectan tareas y convierten complejidad en movimiento.", className: "orbit-node-automation" },
  { id: "intelligence", number: "04", name: "INTELLIGENCE", title: "Ideas que aprenden y evolucionan.", description: "Integramos inteligencia artificial para ampliar capacidades, descubrir patrones y tomar mejores decisiones.", className: "orbit-node-intelligence" },
];

export default function VelaConstellation() {
  const [active, setActive] = useState("web");
  const selected = systems.find((system) => system.id === active) ?? systems[0];

  return (
    <div className="vela-orbit-system" aria-label="Sistema orbital interactivo de VELA">
      <div className="orbit-system-topline"><span>VELA / FOUR DOMAINS</span><span>04 CONNECTED DOMAINS</span></div>
      <div className="orbit-stage">
        <svg className="orbit-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="vela-connection" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#8ba9d0" stopOpacity=".08" /><stop offset="52%" stopColor="#d8bb7a" stopOpacity=".72" /><stop offset="100%" stopColor="#78a6d2" stopOpacity=".12" /></linearGradient></defs>
          <path className={active === "web" ? "is-active" : ""} d="M50 50 C40 38 31 28 17 19" />
          <path className={active === "business" ? "is-active" : ""} d="M50 50 C62 37 72 29 84 25" />
          <path className={active === "automation" ? "is-active" : ""} d="M50 50 C64 62 73 72 82 79" />
          <path className={active === "intelligence" ? "is-active" : ""} d="M50 50 C38 64 29 73 17 82" />
        </svg>
        <div className="orbit-halo orbit-halo-outer" />
        <div className="orbit-halo orbit-halo-inner" />
        <div className="orbit-track orbit-track-a" />
        <div className="orbit-track orbit-track-b" />
        <div className="orbit-track orbit-track-c" />
        <div className="orbit-track orbit-track-d" />
        <div className="orbit-core-aura" />
        <div className="orbit-core">
          <span className="orbit-core-overline">THE CENTER OF</span>
          <span className="orbit-core-symbol">V</span>
          <span className="orbit-core-name">VELA</span>
          <span className="orbit-core-caption">ONE UNIVERSE<br />INFINITE CONNECTIONS</span>
        </div>
        {systems.map((system) => (
          <button
            key={system.id}
            type="button"
            className={`orbit-node ${system.className}${active === system.id ? " is-active" : ""}`}
            onClick={() => setActive(system.id)}
            aria-pressed={active === system.id}
            aria-label={`Explorar ${system.name}`}
          >
            <span className="orbit-node-point" />
            <span className="orbit-node-number">{system.number}</span>
            <span className="orbit-node-name">{system.name}</span>
          </button>
        ))}
        <div className="orbit-coordinate orbit-coordinate-one">10°58'N / 74°47'W</div>
        <div className="orbit-coordinate orbit-coordinate-two">EST. IN POSSIBILITY</div>
      </div>
      <div className="orbit-system-detail" aria-live="polite">
        <div className="orbit-detail-index"><span>{selected.number}</span><i /> {selected.name}</div>
        <div className="orbit-detail-copy"><strong>{selected.title}</strong><p>{selected.description}</p></div>
        <a href="/soluciones" aria-label="Explorar soluciones">↗</a>
      </div>
    </div>
  );
}
