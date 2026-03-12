"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { CtaWrapper } from "@/components/ui/CtaWrapper";

export function HomeCtaFinal() {
  return (
    <CtaWrapper>
      <h2 className="mb-3 font-sans text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold text-white">
        Un projet en tête ? Parlons-en.
      </h2>
      <p className="mx-auto mb-9 max-w-sm text-base text-white/80">
        Premier échange gratuit, sans engagement. Je réponds sous 24h.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/contact"
          className="text-primary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-transparent bg-white px-2.5 text-sm font-medium whitespace-nowrap transition-all hover:bg-white/90 focus-visible:ring-3"
        >
          <Mail size={17} aria-hidden="true" />
          Demander un devis gratuit
        </Link>
        <Link
          href="/pricing"
          className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-white/35 bg-white/15 px-2.5 text-sm font-medium whitespace-nowrap text-white transition-all hover:bg-white/25 focus-visible:ring-3"
        >
          Voir mes tarifs
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </CtaWrapper>
  );
}
