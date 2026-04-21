"use client";

import { m } from "framer-motion";
import { HeroWrapper } from "@/components/ui/HeroWrapper";
import { navLinks } from "@/data/nav.data";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

export function ContactHero() {
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
          {navLinks[3].label}
        </m.p>
        <m.h1
          variants={staggerItem}
          className="text-foreground font-heading mb-5 text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-[-0.02em]"
        >
          Parlons de votre projet
        </m.h1>
        <m.p
          variants={staggerItem}
          className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed"
        >
          {`Pas besoin d'avoir tout défini. Une idée, un besoin, une question`}
          <br />
          {`c'est suffisant pour commencer.`}
        </m.p>
      </m.div>
    </HeroWrapper>
  );
}
