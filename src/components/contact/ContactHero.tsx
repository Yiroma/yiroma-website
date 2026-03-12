"use client";

import { HeroWrapper } from "@/components/ui/HeroWrapper";

export function ContactHero() {
  return (
    <HeroWrapper>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-primary mb-4 text-xs font-semibold tracking-[0.08em] uppercase">
          Contact
        </p>
        <h1 className="text-foreground mb-5 font-sans text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
          Parlons de votre projet
        </h1>
        <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed">
          Pas besoin d&apos;avoir tout défini. Une idée, un besoin, une question — c&apos;est
          suffisant pour commencer.
        </p>
      </div>
    </HeroWrapper>
  );
}
