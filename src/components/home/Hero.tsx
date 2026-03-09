"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Layers, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="hero-section relative z-0 overflow-hidden py-24 pb-20">
      {/* Grille de fond */}
      <div className="hero-grid-bg pointer-events-none absolute inset-0 z-0 opacity-35" />

      {/* Fondu radial sur les bords */}
      <div className="hero-fade pointer-events-none absolute inset-0 z-0" />

      {/* Orbe glow souris */}
      <div ref={orbRef} className="glow-orb pointer-events-none absolute z-0" />

      {/* Contenu */}
      <div className="relative z-10 container mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          {/* Texte gauche */}
          <div className="flex flex-col items-start">
            {/* Sur-titre */}
            <span className="border-primary/25 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.8125rem] font-medium">
              <MapPin size={13} aria-hidden="true" />
              Développeur Full Stack Freelance — Orléans &amp; toute la France
            </span>

            {/* H1 */}
            <h1 className="text-foreground mb-5 font-sans text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
              Du site vitrine à
              <br />
              l&apos;application métier,
              <br />
              je construis votre
              <br />
              <span className="gradient-text">présence digitale.</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-muted-foreground mb-10 max-w-100 text-lg leading-relaxed">
              Je conçois, je développe — vous devenez visible.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
                <Layers size={17} aria-hidden="true" />
                Découvrir mes services
              </Link>
              <Link
                href="/portfolio"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Voir mes réalisations
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex items-center justify-center">
            <Image
              src="/hero.svg"
              alt="Illustration développeur web freelance"
              width={540}
              height={480}
              priority
              className="w-full drop-shadow-[0_20px_48px_rgba(37,99,235,0.18)] dark:brightness-[0.92] dark:drop-shadow-[0_20px_60px_rgba(59,130,246,0.35)] dark:saturate-[0.9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
