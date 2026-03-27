"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { HeroWrapper } from "@/components/ui/HeroWrapper";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav.data";
import { fadeInUp, fadeIn, scaleIn, staggerContainer } from "@/lib/motion-variants";

export function HomeHero() {
  return (
    <HeroWrapper>
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <motion.div
          className="flex flex-col items-start"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={scaleIn}
            className="border-primary/25 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.8125rem] font-medium"
          >
            <MapPin size={13} aria-hidden="true" />
            {`Création de site internet à Orléans`}
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-foreground font-heading mb-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] font-extrabold tracking-[-0.02em]"
          >
            Du site vitrine à
            <br />
            l&apos;application métier,
            <br />
            je construis votre
            <br />
            <span className="gradient-text">présence digitale.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground mb-10 max-w-100 text-lg leading-relaxed"
          >
            Je conçois et je développe pour les artisans, commerçants et entreprises de la région
            orléanaise et de toute la France.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <Link href={navLinks[1].href} className={cn(buttonVariants({ size: "lg" }))}>
              <Layers size={17} aria-hidden="true" />
              Découvrir mes {navLinks[1].label}
            </Link>
            <Link
              href={navLinks[2].href}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Voir mes {navLinks[2].label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Image
            src="/hero.svg"
            alt="Illustration création de site internet sur-mesure"
            width={540}
            height={480}
            priority
            className="w-full drop-shadow-[0_20px_48px_rgba(37,99,235,0.18)] dark:brightness-[0.92] dark:drop-shadow-[0_20px_60px_rgba(59,130,246,0.35)] dark:saturate-[0.9]"
          />
        </motion.div>
      </div>
    </HeroWrapper>
  );
}
