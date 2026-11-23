"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "./VelaLivingHero.css";
import UniverseCanvas from "../universe/UniverseCanvas";
const CosmicCanvas = dynamic(() => import("../universe/CosmicCanvas"), {
  ssr: false,
  loading: () => (
    <div className="living-cosmos-layer living-cosmos-loading" aria-hidden="true" />
  ),
});

const dimensions = [
  { id: "experience", number: "01", name: "Web Experience", detail: "Experiencias digitales memorables", x: "18%", y: "28%" },
  { id: "systems", number: "02", name: "Business Systems", detail: "Sistemas que impulsan negocios", x: "78%", y: "24%" },
  { id: "automation", number: "03", name: "Automation", detail: "Procesos que trabajan contigo", x: "83%", y: "72%" },
  { id: "intelligence", number: "04", name: "Intelligence", detail: "Inteligencia para decidir mejor", x: "22%", y: "76%" },
];

export default function VelaLivingHero() {
  const [active, setActive] = useState("experience");
  const selected = dimensions.find((item) => item.id === active) ?? dimensions[0];

  return (
    <section className="living-hero" id="inicio" aria-labelledby="living-hero-title">
      <div className="living-hero-atmosphere" aria-hidden="true">
        <div className="living-nebula living-nebula--blue" />
        <div className="living-nebula living-nebula--violet" />
        <div className="living-nebula living-nebula--cyan" />
        <div className="living-galaxy living-galaxy--far" />
        <div className="living-galaxy living-galaxy--near" />
        <div className="living-supernova" />
        <div className="living-comet living-comet--one" />
        <div className="living-comet living-comet--two" />
      </div>
      <CosmicCanvas />
      <UniverseCanvas />
      <div className="living-hero-vignette" aria-hidden="true" />

      <div className="living-hero-content">
        <div className="living-hero-copy">
          <p className="living-overline">ESTRATEGIA · DISEÑO · TECNOLOGÍA</p>
          <h1 id="living-hero-title">Construimos<br />lo que <em>viene.</em></h1>
          <p className="living-hero-description">
            Diseñamos experiencias y sistemas inteligentes que transforman ideas en tecnología.
          </p>
          <div className="living-hero-actions">
            <a className="living-primary-cta" href="/universo">EXPLORA VELA <span>↗</span></a>
            <a className="living-secondary-cta" href="/soluciones">Ver soluciones <span>→</span></a>
          </div>
          <div className="living-hero-proof">
            <span className="living-proof-orb" />
            <span>IDEAS CONNECTED. POSSIBILITIES UNLIMITED.</span>
          </div>
        </div>

        <div className="living-constellation" aria-label="Explora las cuatro dimensiones de VELA">
          <div className="living-constellation-halo" aria-hidden="true" />
          <div className="living-constellation-ring living-constellation-ring--a" aria-hidden="true" />
          <div className="living-constellation-ring living-constellation-ring--b" aria-hidden="true" />
          <div className="living-constellation-ring living-constellation-ring--c" aria-hidden="true" />
          <svg className="living-constellation-lines" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <linearGradient id="living-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8fb8dc" stopOpacity=".12" />
                <stop offset="52%" stopColor="#e5cf9d" stopOpacity=".82" />
                <stop offset="100%" stopColor="#9a8bd1" stopOpacity=".18" />
              </linearGradient>
            </defs>
            <path d="M8 50 C8 31 27 17 50 17 C73 17 92 31 92 50 C92 69 73 83 50 83 C27 83 8 69 8 50Z" />
            <path d="M24 13 C43 8 70 26 81 44 C91 61 74 82 56 88 C38 94 18 77 13 57 C8 38 11 17 24 13Z" />
            <path d="M16 76 C31 55 57 37 85 22" />
            <path className="living-line-pulse" d="M8 50 C8 31 27 17 50 17 C73 17 92 31 92 50" />
          </svg>
          <div className="living-core">
            <div className="living-core-rings"><i /><i /><i /></div>
            <span className="living-core-mark" aria-hidden="true" />
            <span className="living-core-name">VELA</span>
            <small>IDEAS IN ORBIT</small>
          </div>
          {dimensions.map((dimension) => (
            <button
              key={dimension.id}
              type="button"
              className={`living-node living-node--${dimension.id}${active === dimension.id ? " is-active" : ""}`}
              style={{ left: dimension.x, top: dimension.y }}
              onMouseEnter={() => setActive(dimension.id)}
              onFocus={() => setActive(dimension.id)}
              onClick={() => setActive(dimension.id)}
              aria-pressed={active === dimension.id}
              aria-label={`${dimension.name}: ${dimension.detail}`}
            >
              <span className="living-node-star">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {dimension.id === "experience" && <><rect x="4" y="5" width="16" height="12" rx="1" /><path d="M2 20h20M9 17l-1 3m7-3 1 3" /></>}
                  {dimension.id === "systems" && <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v14c0 1.7 14 1.7 14 0V5M5 10c0 1.7 14 1.7 14 0m-14 5c0 1.7 14 1.7 14 0" /></>}
                  {dimension.id === "automation" && <path d="m13 2-9 12h7l-1 8 10-13h-7z" />}
                  {dimension.id === "intelligence" && <><path d="M12 3a5 5 0 0 0-5 5 4 4 0 0 0-2 7 4 4 0 0 0 7 4V3Zm0 0a5 5 0 0 1 5 5 4 4 0 0 1 2 7 4 4 0 0 1-7 4V3Z" /><path d="M8 10h2m4 0h2m-8 4h2m4 0h2" /></>}
                </svg>
              </span>
              <span className="living-node-label"><small>{dimension.number}</small>{dimension.name}</span>
            </button>
          ))}
          <div className="living-constellation-caption" aria-live="polite">
            <span>{selected.number} / 04</span>
            <strong>{selected.detail}</strong>
          </div>
          <span className="living-coordinate living-coordinate--top">19° 26&apos; 08.4&quot; N</span>
          <span className="living-coordinate living-coordinate--bottom">A SYSTEM OF POSSIBILITIES</span>
        </div>
      </div>

      <div className="living-hero-footer">
        <span>BUILT AT THE INTERSECTION OF IDEAS & TECHNOLOGY</span>
        <a href="#explora-vela">SCROLL TO EXPLORE <i>↓</i></a>
      </div>
    </section>
  );
}
