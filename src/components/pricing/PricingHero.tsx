"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { HeroWrapper } from "@/components/ui/HeroWrapper";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav.data";

export function PricingHero() {
  return (
    <HeroWrapper>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-primary mb-4 text-xs font-semibold tracking-[0.08em] uppercase">
          {`${navLinks[1].label}`}
        </p>
        <h1 className="text-foreground mb-5 font-sans text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
          Des forfaits clairs,
          <br />
          <span className="gradient-text">sans mauvaise surprise</span>
        </h1>
        <p className="text-muted-foreground mx-auto mb-9 max-w-xl text-lg leading-relaxed">
          Vous savez ce que vous payez et ce que vous obtenez. Et si votre besoin ne rentre pas dans
          une case, on en parle.
        </p>
        <Link href={`${navLinks[2].href}`} className={cn(buttonVariants({ size: "lg" }))}>
          <Mail size={17} aria-hidden="true" />
          Demander un devis gratuit
        </Link>
      </div>
    </HeroWrapper>
  );
}
