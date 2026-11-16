"use client";

import { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import type { ReactNode } from "react";
import { loadSlim } from "@tsparticles/slim";

const initializeParticles = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

export default function AppProviders({ children }: { children: ReactNode }) {
  return <ParticlesProvider init={initializeParticles}>{children}</ParticlesProvider>;
}
