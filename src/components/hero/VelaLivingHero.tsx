"use client";

import { useState } from "react";
import "./VelaLivingHero.css";
import UniverseCanvas from "../universe/UniverseCanvas";
import CosmicCanvas from "../universe/CosmicCanvas";

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
          <div className="living-eyebrow"><span /> THE DIGITAL UNIVERSE <span /></div>
          <p className="living-overline">ESTRATEGIA · DISEÑO · TECNOLOGÍA</p>
          <h1 id="living-hero-title">El futuro no se <em>imagina.</em><br />Se construye.</h1>
          <p className="living-hero-description">
            Conectamos ideas, diseño y tecnología para crear experiencias digitales,
            sistemas inteligentes y nuevas posibilidades para los negocios.
          </p>
          <div className="living-hero-actions">
            <a className="living-primary-cta" href="/soluciones">EXPLORA SOLUCIONES <span>↗</span></a>
            <a className="living-secondary-cta" href="/universo">Descubre VELA <span>→</span></a>
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
            <path d="M18 28 L50 50 L78 24 M50 50 L83 72 M50 50 L22 76 M18 28 L78 24 M22 76 L83 72" />
            <path className="living-line-pulse" d="M18 28 L50 50 L78 24 M50 50 L83 72 M50 50 L22 76" />
          </svg>
          <div className="living-core">
            <div className="living-core-rings"><i /><i /><i /></div>
            <span className="living-core-mark">V</span>
            <span className="living-core-name">VELA</span>
            <small>THE CONNECTING FORCE</small>
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
              <span className="living-node-star" />
              <span className="living-node-label"><small>{dimension.number}</small>{dimension.name}</span>
            </button>
          ))}
          <div className="living-constellation-caption" aria-live="polite">
            <span>{selected.number} / 04</span>
            <strong>{selected.detail}</strong>
          </div>
          <span className="living-coordinate living-coordinate--top">19° 26' 08.4&quot; N</span>
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
