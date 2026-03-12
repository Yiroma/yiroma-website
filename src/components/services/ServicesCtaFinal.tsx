"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { CtaWrapper } from "@/components/ui/CtaWrapper";
import { navLinks } from "@/data/nav.data";

export function ServicesCtaFinal() {
  return (
    <CtaWrapper>
      <h2 className="mb-3 font-sans text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold text-white">
        Pas sûr de ce dont vous avez besoin ?
      </h2>
      <p className="mx-auto mb-9 max-w-md text-base text-white/80">
        C&apos;est normal. Décrivez-moi votre situation en quelques mots — je vous oriente vers la
        solution la plus adaptée, sans engagement.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/contact"
          className="text-primary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-transparent bg-white px-2.5 text-sm font-medium whitespace-nowrap transition-all hover:bg-white/90 focus-visible:ring-3"
        >
          <Mail size={17} aria-hidden="true" />
          Prenons 30 minutes pour en parler
        </Link>
        <Link
          href={`${navLinks[1].href}`}
          className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-white/35 bg-white/15 px-2.5 text-sm font-medium whitespace-nowrap text-white transition-all hover:bg-white/25 focus-visible:ring-3"
        >
          Voir mes {`${navLinks[1].label}`}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </CtaWrapper>
  );
}
