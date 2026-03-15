"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useOrbEffect } from "@/hooks/useOrbEffect";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useBlobAnimation } from "@/hooks/useBlobAnimation";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/motion-variants";

type Argument = {
  id: string;
  label: string;
  title: string;
  description: string;
  illustration: string;
  alt: string;
};

const arguments_: Argument[] = [
  {
    id: "conception",
    label: "Conception",
    title: "Un concepteur, pas seulement un développeur",
    description:
      "Diplômé Concepteur Développeur d'Application (Bac+4), je pense vos projets en amont — architecture, sécurité, expérience utilisateur — avant d'écrire la première ligne de code.",
    illustration: "/brainstrom.svg",
    alt: "Illustration conception et architecture",
  },
  {
    id: "communication",
    label: "Communication",
    title: "Je parle votre langue, pas que celle de la technique",
    description:
      "10 ans de management et de relation client me permettent de comprendre vos vrais besoins — que vous soyez artisan, commerçant, profession libérale ou PME — et de livrer ce qui était vraiment demandé, sans jargon.",
    illustration: "/checking.svg",
    alt: "Illustration communication et relation client",
  },
  {
    id: "qualite",
    label: "Qualité",
    title: "Du code propre, livré dans les temps",
    description:
      "Architecture structurée, tests automatisés, documentation soignée. Vous recevez un projet maintenable — pas une boîte noire que personne ne peut faire évoluer.",
    illustration: "/setup.svg",
    alt: "Illustration qualité et rigueur technique",
  },
];

export function WhyYiroma() {
  const { sectionRef, orbRef } = useOrbEffect();
  const { setRef } = useBlobAnimation(3);

  return (
    <section
      ref={sectionRef}
      className="section-primary-bg relative z-0 overflow-hidden py-16 md:py-24"
    >
      <div ref={setRef(0)} className="section-blob-1" />
      <div ref={setRef(1)} className="section-blob-2" />
      <div ref={setRef(2)} className="section-blob-3" />
      <div className="section-diagonal pointer-events-none absolute inset-0" />
      <div className="section-spotlights pointer-events-none absolute inset-0" />
      <div className="section-fade pointer-events-none absolute inset-0" />
      <div ref={orbRef} className="glow-orb pointer-events-none absolute" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            eyebrow="Pourquoi travailler avec moi"
            title={
              <>
                Un développeur qui pense
                <br />
                avant de coder.
              </>
            }
          />
        </motion.div>

        <div className="flex flex-col">
          {arguments_.map((arg, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.article
                key={arg.id}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="border-border grid grid-cols-1 items-center gap-10 border-b py-12 last:border-b-0 md:grid-cols-2 md:gap-18 md:py-14"
              >
                <motion.div
                  variants={isEven ? fadeInRight : fadeInLeft}
                  className={`flex justify-center ${isEven ? "md:order-2" : ""}`}
                >
                  <Image
                    src={arg.illustration}
                    alt={arg.alt}
                    width={400}
                    height={320}
                    className="w-full max-w-sm drop-shadow-[0_8px_24px_rgba(37,99,235,0.12)] dark:brightness-[0.92] dark:drop-shadow-[0_8px_32px_rgba(59,130,246,0.25)] dark:saturate-[0.9]"
                  />
                </motion.div>

                <motion.div
                  variants={isEven ? fadeInLeft : fadeInRight}
                  className={`flex flex-col gap-4 ${isEven ? "md:order-1" : ""}`}
                >
                  <p className="text-primary text-xs font-semibold tracking-[0.08em] uppercase">
                    {arg.label}
                  </p>
                  <h3 className="text-foreground font-heading text-[clamp(1.125rem,2vw,1.375rem)] leading-snug font-bold">
                    {arg.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.9375rem] leading-[1.75]">
                    {arg.description}
                  </p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
