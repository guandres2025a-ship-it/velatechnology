"use client";

import Particles from "@tsparticles/react";
import { useMemo } from "react";
import type { ISourceOptions } from "@tsparticles/engine";

export default function HeroParticles() {
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
        distance: 175,
        opacity: 0.24,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.15,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: { value: 52, density: { enable: true, width: 900, height: 650 } },
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
