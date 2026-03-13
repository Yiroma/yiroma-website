"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { HeroWrapper } from "@/components/ui/HeroWrapper";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav.data";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

export function ServicesHero() {
  return (
    <HeroWrapper>
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={staggerItem}
          className="text-primary mb-4 text-xs font-semibold tracking-[0.08em] uppercase"
        >
          {navLinks[1].label}
        </motion.p>
        <motion.h1
          variants={staggerItem}
          className="text-foreground mb-5 font-sans text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-extrabold tracking-[-0.02em]"
        >
          Des services digitaux taillés
          <br />
          <span className="gradient-text">pour votre activité</span>
        </motion.h1>
        <motion.p
          variants={staggerItem}
          className="text-muted-foreground mx-auto mb-9 max-w-xl text-lg leading-relaxed"
        >
          Création de site internet, refonte, audit SEO ou développement applicatif sur-mesure — je
          m&apos;adapte à votre situation, que vous soyez basé à Orléans, dans le Loiret ou ailleurs
          en France.
        </motion.p>
        <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-3">
          <Link href={`${navLinks[1].href}`} className={cn(buttonVariants({ size: "lg" }))}>
            Voir les {`${navLinks[1].label}`}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href={`${navLinks[3].href}`}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            <Mail size={17} aria-hidden="true" />
            Demander un devis
          </Link>
        </motion.div>
      </motion.div>
    </HeroWrapper>
  );
}
