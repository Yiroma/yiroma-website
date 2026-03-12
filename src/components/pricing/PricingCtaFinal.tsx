"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { CtaWrapper } from "@/components/ui/CtaWrapper";

export function PricingCtaFinal() {
  return (
    <CtaWrapper>
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
    </CtaWrapper>
  );
}
