"use client";

import { useEffect, useRef, useState } from "react";
import { CelestialGenerator, CelestialType, renderNebula } from "@eluvade/cosmos";

const GALAXY = {
  type: CelestialType.Galaxy,
  seed: 271828,
  resolution: 768,
  timeSpeed: 0.035,
  config: { inclinationDeg: 31, colorVariation: 0.12, fbmOctaves: 6 },
};

const NEBULAE = [
  { seed: 481516, className: "living-cosmos-nebula living-cosmos-nebula--blue" },
  { seed: 314159, className: "living-cosmos-nebula living-cosmos-nebula--violet" },
];

export default function CosmicCanvas() {
  const galaxyRef = useRef<HTMLCanvasElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = galaxyRef.current;
    const nebulaHost = nebulaRef.current;
    if (!canvas || !nebulaHost) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let generator: CelestialGenerator | null = null;
    let generatorDisposed = false;
    let animationId: number | null = null;
    let disposed = false;

    const disposeGenerator = () => {
      if (generator && !generatorDisposed) {
        generator.dispose();
        generatorDisposed = true;
        generator = null;
      }
    };
    let visible = document.visibilityState === "visible";

    const cancelFrame = () => {
      if (animationId !== null) {
        window.cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    const draw = (time: number) => {
      if (disposed || !visible || !generator) return;

      generator.render(GALAXY, motionPreference.matches ? 0 : time / 1000);

      if (!motionPreference.matches) {
        animationId = window.requestAnimationFrame(draw);
      } else {
        animationId = null;
      }
    };

    const start = () => {
      if (disposed || !visible || motionPreference.matches || animationId !== null) return;
      animationId = window.requestAnimationFrame(draw);
    };

    const onVisibilityChange = () => {
      visible = document.visibilityState === "visible";
      cancelFrame();

      if (!visible) return;
      if (motionPreference.matches) draw(0);
      else start();
    };

    const onMotionPreferenceChange = () => {
      cancelFrame();
      if (motionPreference.matches) draw(0);
      else start();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    motionPreference.addEventListener("change", onMotionPreferenceChange);

    const initialize = async () => {
      try {
        generator = new CelestialGenerator(canvas);

        // Compile only the Galaxy shader used by this hero before its first frame.
        await generator.precompile([CelestialType.Galaxy]);
        if (disposed) return;

        // The library types this result as HTMLCanvasElement | OffscreenCanvas.
        // Reuse an HTML canvas directly; bridge OffscreenCanvas only when needed.
        for (const nebula of NEBULAE) {
          const rendered = renderNebula(nebula.seed, 768);
          if (disposed) return;

          let element: HTMLCanvasElement;
          if (rendered instanceof HTMLCanvasElement) {
            element = rendered;
          } else {
            element = document.createElement("canvas");
            element.width = rendered.width;
            element.height = rendered.height;
            const context = element.getContext("2d");
            if (!context) throw new Error("Could not create a 2D context for the nebula.");
            context.drawImage(rendered, 0, 0);
          }

          element.className = nebula.className;
          nebulaHost.appendChild(element);
        }

        if (disposed) return;

        // Draw one static frame immediately so the transition never reveals a blank canvas.
        generator.render(GALAXY, 0);
        setReady(true);

        if (visible && !motionPreference.matches) start();
      } catch (error) {
        console.warn(
          "VELA Cosmos could not initialize; the CSS atmosphere remains as fallback.",
          error,
        );
        cancelFrame();
        disposeGenerator();
        nebulaHost.replaceChildren();
        if (!disposed) setReady(true);
      }
    };

    void initialize();

    return () => {
      disposed = true;
      cancelFrame();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
      disposeGenerator();
      nebulaHost.replaceChildren();
    };
  }, []);

  return (
    <div
      className={`living-cosmos-layer${ready ? " is-ready" : ""}`}
      aria-hidden="true"
    >
      <div className="living-cosmos-nebula-field" ref={nebulaRef} />
      <canvas className="living-cosmos-galaxy" ref={galaxyRef} />
    </div>
  );
}
