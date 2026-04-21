"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { m } from "framer-motion";
import { CtaWrapper } from "@/components/ui/CtaWrapper";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";
import { navLinks } from "@/data/nav.data";

export function HomeCtaFinal() {
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
          Un projet en tête ? Parlons-en.
        </m.h2>
        <m.p variants={staggerItem} className="mx-auto mb-9 max-w-sm text-base text-white/80">
          Premier échange gratuit, sans engagement. <br />
          Je réponds sous 24h.
        </m.p>
        <m.div variants={staggerItem} className="flex flex-wrap justify-center gap-3">
          <Link
            href={navLinks[3].href}
            className="text-primary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-transparent bg-white px-2.5 text-sm font-medium whitespace-nowrap transition-all hover:bg-white/90 focus-visible:ring-3"
          >
            <Mail size={17} aria-hidden="true" />
            Demander un devis gratuit
          </Link>
          <Link
            href={navLinks[2].href}
            className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-white/35 bg-white/15 px-2.5 text-sm font-medium whitespace-nowrap text-white transition-all hover:bg-white/25 focus-visible:ring-3"
          >
            Voir mes {navLinks[2].label}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </m.div>
      </m.div>
    </CtaWrapper>
  );
}
