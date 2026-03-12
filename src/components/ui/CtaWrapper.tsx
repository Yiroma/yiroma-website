"use client";

import { useOrbEffect } from "@/hooks/useOrbEffect";

interface CtaWrapperProps {
  children: React.ReactNode;
}

export function CtaWrapper({ children }: CtaWrapperProps) {
  const { sectionRef, orbRef } = useOrbEffect();

  return (
    <section
      ref={sectionRef}
      className="section-primary-bg relative z-0 overflow-hidden py-16 md:py-24"
    >
      <div className="section-grid-bg pointer-events-none absolute inset-0 opacity-35" />
      <div className="section-fade pointer-events-none absolute inset-0" />
      <div ref={orbRef} className="glow-orb pointer-events-none absolute" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="cta-box bg-primary relative overflow-hidden rounded-2xl px-8 py-16 text-center md:px-16 md:py-20">
          {children}
        </div>
      </div>
    </section>
  );
}
