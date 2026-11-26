"use client";

import { useEffect, useRef } from "react";

type PortalRevealProps = { children: React.ReactNode };

export default function PortalReveal({ children }: PortalRevealProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || !("IntersectionObserver" in window)) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".portal-card"));
    if (!cards.length) return;

    grid.classList.add("portal-grid--reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          cards.forEach((card, index) => {
            card.style.setProperty("--portal-reveal-delay", `${index * 150}ms`);
            card.classList.add("is-visible");
          });
          observer.unobserve(grid);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return <div className="portal-grid" ref={gridRef}>{children}</div>;
}
