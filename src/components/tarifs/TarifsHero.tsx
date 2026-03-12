"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useOrbEffect } from "@/hooks/useOrbEffect";

export function TarifsHero() {
  const { sectionRef, orbRef } = useOrbEffect();

  return (
    <section
      ref={sectionRef}
      className="section-primary-bg relative z-0 overflow-hidden py-20 pb-16 md:py-28 md:pb-24"
    >
      <div className="section-grid-bg pointer-events-none absolute inset-0 opacity-35" />
      <div className="section-fade pointer-events-none absolute inset-0" />
      <div ref={orbRef} className="glow-orb pointer-events-none absolute" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-primary mb-4 text-xs font-semibold tracking-[0.08em] uppercase">
            Tarifs
          </p>
          <h1 className="text-foreground mb-5 font-sans text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
            Des forfaits clairs,
            <br />
            <span className="gradient-text">sans mauvaise surprise</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-9 max-w-xl text-lg leading-relaxed">
            Vous savez ce que vous payez et ce que vous obtenez. Et si votre besoin ne rentre pas
            dans une case, on en parle.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
            <Mail size={17} aria-hidden="true" />
            Demander un devis gratuit
          </Link>
        </div>
      </div>
    </section>
  );
}
