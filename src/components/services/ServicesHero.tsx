"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const orb = orbRef.current;
    if (!section || !orb) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      orb.style.left = e.clientX - rect.left + "px";
      orb.style.top = e.clientY - rect.top + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
            Services
          </p>
          <h1 className="text-foreground mb-5 font-sans text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
            Des services digitaux taillés
            <br />
            <span className="gradient-text">pour votre activité</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-9 max-w-xl text-lg leading-relaxed">
            Que vous ayez besoin d&apos;une première présence en ligne, d&apos;une refonte,
            d&apos;un meilleur référencement ou d&apos;un outil métier sur-mesure — je m&apos;adapte
            à votre situation et à vos objectifs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tarifs" className={cn(buttonVariants({ size: "lg" }))}>
              Voir les tarifs
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <Mail size={17} aria-hidden="true" />
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
