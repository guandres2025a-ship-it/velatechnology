"use client";

import { useEffect, useRef } from "react";
import { CelestialGenerator, CelestialType, renderNebula } from "@eluvade/cosmos";

const GALAXY = {
  type: CelestialType.Galaxy,
  seed: 271828,
  resolution: 768,
  timeSpeed: 0.035,
  config: {
    inclinationDeg: 31,
    colorVariation: 0.12,
    fbmOctaves: 6,
  },
} as const;

export default function CosmicCanvas() {
  const galaxyRef = useRef<HTMLCanvasElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = galaxyRef.current;
    const nebulaHost = nebulaRef.current;
    if (!canvas || !nebulaHost) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let generator: CelestialGenerator | null = null;
    let animationId = 0;
    let visible = document.visibilityState === "visible";
    let disposed = false;

    try {
      generator = new CelestialGenerator(canvas);
      const nebulaA = renderNebula(481516, 768);
      const nebulaB = renderNebula(314159, 768);
      nebulaA.className = "living-cosmos-nebula living-cosmos-nebula--blue";
      nebulaB.className = "living-cosmos-nebula living-cosmos-nebula--violet";
      nebulaHost.replaceChildren(nebulaA, nebulaB);

      const draw = (time: number) => {
        if (disposed || !visible || !generator) return;
        generator.render(GALAXY, time / 1000);
        if (!reducedMotion.matches) {
          animationId = window.requestAnimationFrame(draw);
        }
      };

      draw(0);

      const onVisibility = () => {
        visible = document.visibilityState === "visible";
        window.cancelAnimationFrame(animationId);
        if (visible && !reducedMotion.matches) {
          animationId = window.requestAnimationFrame(draw);
        }
      };

      const onMotionPreference = () => {
        window.cancelAnimationFrame(animationId);
        if (reducedMotion.matches) draw(0);
        else if (visible) animationId = window.requestAnimationFrame(draw);
      };

      document.addEventListener("visibilitychange", onVisibility);
      reducedMotion.addEventListener("change", onMotionPreference);

      return () => {
        disposed = true;
        window.cancelAnimationFrame(animationId);
        document.removeEventListener("visibilitychange", onVisibility);
        reducedMotion.removeEventListener("change", onMotionPreference);
        generator?.dispose();
        nebulaHost.replaceChildren();
      };
    } catch (error) {
      console.warn("VELA Cosmos layer could not initialize; CSS atmosphere remains active.", error);
      generator?.dispose();
      canvas.hidden = true;
      return;
    }
  }, []);

  return (
    <div className="living-cosmos-layer" aria-hidden="true">
      <div className="living-cosmos-nebula-field" ref={nebulaRef} />
      <canvas className="living-cosmos-galaxy" ref={galaxyRef} />
    </div>
  );
}
