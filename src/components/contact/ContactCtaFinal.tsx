"use client";

import { m } from "framer-motion";
import { CtaWrapper } from "@/components/ui/CtaWrapper";
import { socialLinks } from "@/data/contact.data";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

export function ContactCtaFinal() {
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
          Vous préférez passer par une plateforme ?
        </m.h2>
        <m.p variants={staggerItem} className="mx-auto mb-9 max-w-md text-base text-white/80">
          Retrouvez-moi également sur {socialLinks[2].label} pour les missions freelance en
          entreprise.
        </m.p>
        <m.div variants={staggerItem}>
          <a
            href={socialLinks[2].href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-transparent bg-white px-4 text-sm font-medium whitespace-nowrap transition-all hover:bg-white/90 focus-visible:ring-3"
          >
            Voir mon profil {socialLinks[2].label}
          </a>
        </m.div>
      </m.div>
    </CtaWrapper>
  );
}
