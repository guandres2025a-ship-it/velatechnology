"use client";

import Particles from "@tsparticles/react";
import { useMemo } from "react";
import type { ISourceOptions } from "@tsparticles/engine";

export default function HeroParticles() {
  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 30,
    detectRetina: true,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 125, links: { opacity: 0.28 } },
        push: { quantity: 2 },
      },
    },
    particles: {
      color: { value: ["#D8BB7A", "#E8D9B5", "#91A6C0"] },
      links: {
        enable: true,
        color: "#D8BB7A",
        distance: 135,
        opacity: 0.12,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.42,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: { value: 32, density: { enable: true, width: 850, height: 600 } },
      opacity: { value: { min: 0.28, max: 0.8 } },
      shape: { type: "circle" },
      size: { value: { min: 1.2, max: 3.2 } },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
  }), []);

  return (
    <div className="hero-particles" aria-hidden="true">
      <Particles id="vela-hero-particles" options={options} />
    </div>
  );
}
