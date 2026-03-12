"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { useOrbEffect } from "@/hooks/useOrbEffect";

export function TarifsCtaFinal() {
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
          <h2 className="mb-3 font-sans text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold text-white">
            Un projet en tête ?
          </h2>
          <p className="mx-auto mb-9 max-w-md text-base text-white/80">
            Tous les devis sont gratuits et sans engagement. Je réponds sous 24h.
          </p>
          <Link
            href="/contact"
            className="text-primary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-transparent bg-white px-4 text-sm font-medium whitespace-nowrap transition-all hover:bg-white/90 focus-visible:ring-3"
          >
            <Mail size={17} aria-hidden="true" />
            Demander un devis gratuit
          </Link>
        </div>
      </div>
    </section>
  );
}
