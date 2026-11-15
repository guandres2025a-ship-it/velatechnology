"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function HeroParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    detectRetina: true,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 145, links: { opacity: 0.35 } },
        push: { quantity: 2 },
      },
    },
    particles: {
      color: { value: ["#D8BB7A", "#E8D9B5", "#91A6C0"] },
      links: {
        enable: true,
        color: "#D8BB7A",
        distance: 155,
        opacity: 0.18,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.55,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
      number: { value: 58, density: { enable: true, width: 900, height: 650 } },
      opacity: { value: { min: 0.18, max: 0.65 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2.8 } },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
  }), []);

  if (!ready) return null;

  return (
    <div className="hero-particles" aria-hidden="true">
      <Particles id="vela-hero-particles" options={options} />
    </div>
  );
}
