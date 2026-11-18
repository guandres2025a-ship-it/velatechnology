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
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
    particles: {
      // Distant stars stay cool and dim; warm gold belongs to the foreground UI.
      color: { value: ["#7895BC", "#A7B8D2", "#8C83B8"] },
      links: {
        enable: true,
        color: "#8198BC",
        distance: 105,
        opacity: 0.035,
        width: 0.6,
      },
      move: {
        enable: true,
        speed: 0.16,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
      number: { value: 19, density: { enable: true, width: 900, height: 650 } },
      opacity: { value: { min: 0.12, max: 0.34 } },
      shape: { type: "circle" },
      size: { value: { min: 0.7, max: 1.7 } },
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
