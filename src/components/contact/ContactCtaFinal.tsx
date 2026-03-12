"use client";

import { CtaWrapper } from "@/components/ui/CtaWrapper";

export function ContactCtaFinal() {
  return (
    <CtaWrapper>
      <h2 className="mb-3 font-sans text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold text-white">
        Vous préférez passer par une plateforme ?
      </h2>
      <p className="mx-auto mb-9 max-w-md text-base text-white/80">
        Retrouvez-moi également sur Malt pour les missions freelance en entreprise.
      </p>
      <a
        href="https://www.malt.fr/profile/romaricyi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-transparent bg-white px-4 text-sm font-medium whitespace-nowrap transition-all hover:bg-white/90 focus-visible:ring-3"
      >
        Voir mon profil Malt
      </a>
    </CtaWrapper>
  );
}
