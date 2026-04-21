"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { m } from "framer-motion";
import { CtaWrapper } from "@/components/ui/CtaWrapper";
import { navLinks } from "@/data/nav.data";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

export function PricingCtaFinal() {
  return (
    <CtaWrapper>
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center"
      >
        <m.h2
          variants={staggerItem}
          className="font-heading mb-3 text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold text-white"
        >
          Un projet en tête ?
        </m.h2>
        <m.p variants={staggerItem} className="mx-auto mb-9 max-w-md text-base text-white/80">
          Tous les devis sont gratuits et sans engagement. <br /> Je réponds sous 24h.
        </m.p>
        <m.div variants={staggerItem}>
          <Link
            href={`${navLinks[3].href}`}
            className="text-primary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-transparent bg-white px-4 text-sm font-medium whitespace-nowrap transition-all hover:bg-white/90 focus-visible:ring-3"
          >
            <Mail size={17} aria-hidden="true" />
            Demander un devis gratuit
          </Link>
        </m.div>
      </m.div>
    </CtaWrapper>
  );
}
