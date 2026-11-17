"use client";

import { useState } from "react";
import type { PointerEvent } from "react";

export default function VelaConstellation() {
  const [awakened, setAwakened] = useState(false);

  function moveField(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--pointer-x", String(x));
    event.currentTarget.style.setProperty("--pointer-y", String(y));
  }

  function resetField(event: React.PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "0");
    event.currentTarget.style.setProperty("--pointer-y", "0");
  }

  return (
    <div
      className={`constellation-art vela-constellation${awakened ? " is-awakened" : ""}`}
      role="group"
      aria-label="Constelación interactiva VELA"
      onPointerMove={moveField}
      onPointerLeave={resetField}
    >
      <div className="constellation-glow" />
      <div className="constellation-orbit orbit-one" />
      <div className="constellation-orbit orbit-two" />
      <div className="constellation-orbit orbit-three" />
      <svg viewBox="0 0 600 480" aria-hidden="true">
        <path className="network-path path-main" d="M104 315 190 154 288 216 374 92 493 180 442 338 288 385 190 154" />
        <path className="network-path path-cross" d="M104 315 288 216 442 338M190 154 493 180M288 216 374 92" />
        <path className="network-path path-inner" d="M190 154 288 216 374 92 493 180 442 338 288 385 104 315" />
      </svg>
      <i className="node node-a" /><i className="node node-b" />
      <i className="node node-c" /><i className="node node-d" />
      <i className="node node-e" /><i className="node node-f" />
      <i className="node node-g" /><i className="node node-h" />
      <span className="constellation-label label-top">IDEAS / 01</span>
      <span className="constellation-label label-side">CONNECTION IS EVERYTHING</span>
      <span className="constellation-label label-bottom">10° 58' N — 74° 47' W</span>
      <button
        className="constellation-center"
        type="button"
        aria-pressed={awakened}
        aria-label={awakened ? "Desactivar núcleo VELA" : "Activar núcleo VELA"}
        onClick={() => setAwakened((value) => !value)}
      >
        <span className="core-rings" aria-hidden="true"><span /><span /><span /></span>
        <span className="vela-mark" aria-hidden="true"><span>V</span><i /></span>
        <span className="core-word">VELA</span>
        <span className="core-hint">{awakened ? "UNIVERSE CONNECTED" : "ACTIVATE THE UNIVERSE"}</span>
      </button>
      <span className="constellation-caption" aria-live="polite">
        {awakened ? "STRATEGY · DESIGN · TECHNOLOGY · INTELLIGENCE" : "A SYSTEM OF CONNECTED POSSIBILITIES"}
      </span>
    </div>
  );
}
