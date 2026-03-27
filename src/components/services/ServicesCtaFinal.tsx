"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CtaWrapper } from "@/components/ui/CtaWrapper";
import { navLinks } from "@/data/nav.data";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

export function ServicesCtaFinal() {
  return (
    <CtaWrapper>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center"
      >
        <motion.h2
          variants={staggerItem}
          className="font-heading mb-3 text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold text-white"
        >
          Pas sûr de ce dont vous avez besoin ?
        </motion.h2>
        <motion.p variants={staggerItem} className="mx-auto mb-9 max-w-md text-base text-white/80">
          {`C'est normal. Décrivez-moi votre situation en quelques mots : je vous oriente vers la
          solution la plus adaptée, sans engagement.`}
        </motion.p>
        <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="text-primary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-transparent bg-white px-2.5 text-sm font-medium whitespace-nowrap transition-all hover:bg-white/90 focus-visible:ring-3"
          >
            <Mail size={17} aria-hidden="true" />
            Prenons 30 minutes pour en parler
          </Link>
          <Link
            href={`${navLinks[2].href}`}
            className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-white/35 bg-white/15 px-2.5 text-sm font-medium whitespace-nowrap text-white transition-all hover:bg-white/25 focus-visible:ring-3"
          >
            Voir mes {`${navLinks[2].label}`}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </motion.div>
    </CtaWrapper>
  );
}
