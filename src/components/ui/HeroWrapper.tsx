"use client";

import { useOrbEffect } from "@/hooks/useOrbEffect";

interface HeroWrapperProps {
  children: React.ReactNode;
}

export function HeroWrapper({ children }: HeroWrapperProps) {
  const { sectionRef, orbRef } = useOrbEffect();

  return (
    <section
      ref={sectionRef}
      className="section-primary-bg relative z-0 overflow-hidden py-20 pb-16 md:py-28 md:pb-24"
    >
      <div className="section-grid-bg pointer-events-none absolute inset-0 opacity-35" />
      <div className="section-fade pointer-events-none absolute inset-0" />
      <div ref={orbRef} className="glow-orb pointer-events-none absolute" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-8">{children}</div>
    </section>
  );
}
