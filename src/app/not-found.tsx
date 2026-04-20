"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { HeroWrapper } from "@/components/ui/HeroWrapper";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav.data";
import { fadeInUp, fadeIn, scaleIn, staggerContainer } from "@/lib/motion-variants";

export default function NotFound() {
  return (
    <main>
      <HeroWrapper>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-6">
          <motion.div
            className="order-2 flex flex-col items-start md:order-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={scaleIn}
              className="border-primary/25 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.8125rem] font-medium"
            >
              Erreur 404
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-foreground font-heading mb-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] font-extrabold tracking-[-0.02em]"
            >
              Cette page a pris
              <br />
              <span className="gradient-text">un autre chemin.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-10 max-w-100 text-lg leading-relaxed"
            >
              {`La page que vous cherchez n'existe plus ou a été déplacée. Pas d'inquiétude, je
              vous remets sur la bonne voie.`}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <Link href={navLinks[0].href} className={cn(buttonVariants({ size: "lg" }))}>
                <Home size={17} aria-hidden="true" />
                {`Retour à l'`}
                {navLinks[0].label.toLowerCase()}
              </Link>
              <Link
                href={navLinks[3].href}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                <Mail size={16} aria-hidden="true" />
                Me contacter
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 flex items-center justify-center md:order-2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src="/error-404.svg"
              alt="Illustration erreur 404 — page introuvable"
              width={540}
              height={480}
              priority
              className="w-full max-w-md drop-shadow-[0_20px_48px_rgba(37,99,235,0.18)] dark:brightness-[0.92] dark:drop-shadow-[0_20px_60px_rgba(59,130,246,0.35)] dark:saturate-[0.9]"
            />
          </motion.div>
        </div>
      </HeroWrapper>
    </main>
  );
}
