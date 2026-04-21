"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { m } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { HeroWrapper } from "@/components/ui/HeroWrapper";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav.data";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

export function PricingHero() {
  return (
    <HeroWrapper>
      <m.div
        className="mx-auto max-w-2xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <m.p
          variants={staggerItem}
          className="text-primary mb-4 text-xs font-semibold tracking-[0.08em] uppercase"
        >
          {`${navLinks[2].label}`}
        </m.p>
        <m.h1
          variants={staggerItem}
          className="text-foreground font-heading mb-5 text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-[-0.02em]"
        >
          Des forfaits clairs,
          <br />
          <span className="gradient-text">sans mauvaise surprise</span>
        </m.h1>
        <m.p
          variants={staggerItem}
          className="text-muted-foreground mx-auto mb-9 max-w-xl text-lg leading-relaxed"
        >
          Vous savez ce que vous payez et ce que vous obtenez. Et si votre besoin ne rentre pas dans
          une case, on en parle.
        </m.p>
        <m.div variants={staggerItem}>
          <Link href={`${navLinks[3].href}`} className={cn(buttonVariants({ size: "lg" }))}>
            <Mail size={17} aria-hidden="true" />
            Demander un devis gratuit
          </Link>
        </m.div>
      </m.div>
    </HeroWrapper>
  );
}
