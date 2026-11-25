"use client";

import { useEffect, useRef, useState } from "react";
import { CelestialGenerator, CelestialType, renderNebula as renderNebulaCanvas } from "@eluvade/cosmos";

const GALAXIES = [
  { seed: 271828, resolution: 384, className: "living-cosmos-galaxy living-cosmos-galaxy--a", inclinationDeg: 31 },
  { seed: 118033, resolution: 320, className: "living-cosmos-galaxy living-cosmos-galaxy--b", inclinationDeg: 67 },
  { seed: 141421, resolution: 256, className: "living-cosmos-galaxy living-cosmos-galaxy--c", inclinationDeg: 14 },
  { seed: 161803, resolution: 320, className: "living-cosmos-galaxy living-cosmos-galaxy--d", inclinationDeg: 52 },
  { seed: 173205, resolution: 224, className: "living-cosmos-galaxy living-cosmos-galaxy--e", inclinationDeg: 38 },
  { seed: 223607, resolution: 192, className: "living-cosmos-galaxy living-cosmos-galaxy--f", inclinationDeg: 72 },
] as const;

const NEBULAE = [
  { seed: 481516, className: "living-cosmos-nebula living-cosmos-nebula--blue" },
  { seed: 314159, className: "living-cosmos-nebula living-cosmos-nebula--violet" },
];

export default function CosmicCanvas() {
  const rendererRef = useRef<HTMLCanvasElement>(null);
  const galaxyHostRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const rendererCanvas = rendererRef.current;
    const galaxyHost = galaxyHostRef.current;
    const nebulaHost = nebulaRef.current;
    if (!rendererCanvas || !galaxyHost || !nebulaHost) return;

    let generator: CelestialGenerator | null = null;
    let disposed = false;
    const timers: number[] = [];

    const snapshotGalaxy = (galaxy: (typeof GALAXIES)[number]) => {
      if (!generator || disposed) return;
      rendererCanvas.width = galaxy.resolution;
      rendererCanvas.height = galaxy.resolution;
      generator.render({
        type: CelestialType.Galaxy,
        seed: galaxy.seed,
        resolution: galaxy.resolution,
        timeSpeed: 0,
        config: {
          inclinationDeg: galaxy.inclinationDeg,
          colorVariation: 0.28,
          fbmOctaves: 5,
        },
      }, 0);

      // Copy each procedural render into a lightweight 2D canvas. One WebGL
      // context is reused for all galaxies, avoiding a stack of GPU contexts.
      const snapshot = document.createElement("canvas");
      snapshot.width = galaxy.resolution;
      snapshot.height = galaxy.resolution;
      const context = snapshot.getContext("2d");
      if (!context) return;
      context.drawImage(rendererCanvas, 0, 0, galaxy.resolution, galaxy.resolution);
      snapshot.className = galaxy.className;
      snapshot.setAttribute("aria-hidden", "true");
      galaxyHost.appendChild(snapshot);
    };

    const renderNebula = (nebula: (typeof NEBULAE)[number]) => {
      if (disposed) return;
      try {
        const rendered = renderNebulaCanvas(nebula.seed, 512);
        // The library may return an OffscreenCanvas, which cannot be appended
        // to the DOM. Copy either canvas type into a regular HTML canvas.
        const element = document.createElement("canvas");
        element.width = 512;
        element.height = 512;
        const context = element.getContext("2d");
        if (!context) return;
        context.drawImage(rendered, 0, 0, 512, 512);
        element.className = nebula.className;
        element.setAttribute("aria-hidden", "true");
        nebulaHost.appendChild(element);
        nebulaHost.classList.add("is-ready");
      } catch (error) {
        console.warn("VELA decorative nebula could not be rendered.", error);
      }
    };


    const initialize = async () => {
      try {
        generator = new CelestialGenerator(rendererCanvas);
        await generator.precompile([CelestialType.Galaxy]);
        if (disposed) return;

        // Populate the field progressively: the first galaxy appears quickly,
        // then the remaining independent galaxies arrive in short intervals.
        snapshotGalaxy(GALAXIES[0]);
        setReady(true);

        GALAXIES.slice(1).forEach((galaxy, index) => {
          const timer = window.setTimeout(() => snapshotGalaxy(galaxy), 280 + index * 260);
          timers.push(timer);
        });

        NEBULAE.forEach((nebula, index) => {
          const timer = window.setTimeout(() => renderNebula(nebula), 520 + index * 420);
          timers.push(timer);
        });
      } catch (error) {
        console.warn(
          "VELA Cosmos could not initialize; the CSS atmosphere remains as fallback.",
          error,
        );
        if (!disposed) setReady(true);
      }
    };

    void initialize();

    return () => {
      disposed = true;
      timers.forEach((timer) => window.clearTimeout(timer));
      generator?.dispose();
      generator = null;
      galaxyHost.replaceChildren();
      nebulaHost.replaceChildren();
    };
  }, []);

  return (
    <div className={`living-cosmos-layer${ready ? " is-ready" : ""}`} aria-hidden="true">
      <div className="living-cosmos-nebula-field" ref={nebulaRef} />
      <div className="living-cosmos-galaxy-field" ref={galaxyHostRef} />
      <canvas className="living-cosmos-renderer" ref={rendererRef} />
    </div>
  );
}
