"use client";

import { useEffect, useRef } from "react";

export default function HeroDepth() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || coarsePointer) return;

    let frame = 0;
    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      // Normalize and clamp pointer input so edge positions never create a jump.
      const rawX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
      const rawY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
      // Ease the response toward the edges: subtle near center, more depth at the perimeter.
      const shape = (value: number) => Math.sign(value) * Math.pow(Math.abs(value), 1.25);
      const x = shape(rawX);
      const y = shape(rawY);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty("--depth-x", x.toFixed(3));
        element.style.setProperty("--depth-y", y.toFixed(3));
      });
    };
    const handleLeave = () => {
      element.style.setProperty("--depth-x", "0");
      element.style.setProperty("--depth-y", "0");
    };
    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", handleLeave);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div ref={ref} className="hero-depth" aria-hidden="true">
      <span className="hero-depth-nebula" />
      <span className="hero-depth-horizon" />
      <span className="hero-depth-lanes" />
      <span className="hero-depth-near" />
      <span className="hero-depth-rift" />
      <span className="hero-depth-dust" />
      <span className="hero-depth-foreground" />
      <span className="hero-depth-corelight" />
    </div>
  );
}
