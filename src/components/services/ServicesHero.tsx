"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { HeroWrapper } from "@/components/ui/HeroWrapper";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav.data";

export function ServicesHero() {
  return (
    <HeroWrapper>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-primary mb-4 text-xs font-semibold tracking-[0.08em] uppercase">
          {navLinks[0].label}
        </p>
        <h1 className="text-foreground mb-5 font-sans text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
          Des services digitaux taillés
          <br />
          <span className="gradient-text">pour votre activité</span>
        </h1>
        <p className="text-muted-foreground mx-auto mb-9 max-w-xl text-lg leading-relaxed">
          Création de site internet, refonte, audit SEO ou développement applicatif sur-mesure — je
          m&apos;adapte à votre situation, que vous soyez basé à Orléans, dans le Loiret ou ailleurs
          en France.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={`${navLinks[1].href}`} className={cn(buttonVariants({ size: "lg" }))}>
            Voir les {`${navLinks[1].label}`}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href={`${navLinks[2].href}`}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            <Mail size={17} aria-hidden="true" />
            Demander un devis
          </Link>
        </div>
      </div>
    </HeroWrapper>
  );
}
