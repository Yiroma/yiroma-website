"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion-variants";

const steps = [
  {
    number: "1",
    title: "Découverte & cadrage",
    description:
      "On échange sur votre activité, vos objectifs et votre budget. Je vous pose les bonnes questions pour cerner précisément votre besoin avant toute chose.",
    illustration: "/analyse.svg",
  },
  {
    number: "2",
    title: "Conception & design",
    description:
      "Je vous soumets une maquette ou une structure visuelle pour valider l'approche avant de coder. Vous voyez à quoi ressemblera le résultat final.",
    illustration: "/designer.svg",
  },
  {
    number: "3",
    title: "Développement",
    description:
      "Je développe votre projet en vous tenant informé à chaque étape. Vous avez accès à une version de prévisualisation tout au long du projet.",
    illustration: "/cooperate.svg",
  },
  {
    number: "4",
    title: "Mise en ligne & SEO",
    description:
      "Déploiement, configuration du nom de domaine, optimisations SEO de base. Votre site est en ligne, rapide et référençable dès le premier jour.",
    illustration: "/seo.svg",
  },
  {
    number: "5",
    title: "Livraison & suivi",
    description:
      "Vous repartez avec votre projet clé en main, documenté et expliqué. Je reste disponible pour toute question ou évolution future.",
    illustration: "/validation.svg",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="bg-muted/40 relative z-10 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            eyebrow="Déroulement d'une mission"
            title="De la première idée à la mise en ligne"
          />
          <p className="text-muted-foreground -mt-8 mb-10 text-base leading-relaxed md:mb-14">
            Voici comment je travaille avec vous, de A à Z. Chaque étape est claire, planifiée et
            validée ensemble.
          </p>
        </m.div>

        {/* Mobile : liste verticale */}
        <m.ol
          className="mt-12 flex flex-col gap-10 lg:hidden"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step) => (
            <m.li key={step.number} variants={staggerItem} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="border-primary text-primary flex size-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold">
                  {step.number}
                </span>
                <div
                  className="bg-border/40 relative mt-2 w-px grow overflow-hidden"
                  aria-hidden="true"
                >
                  <m.div
                    className="bg-primary/60 absolute inset-x-0 top-0 h-full origin-top"
                    variants={{
                      hidden: { scaleY: 0 },
                      visible: {
                        scaleY: 1,
                        transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="pb-2">
                <Image
                  src={step.illustration}
                  alt=""
                  width={80}
                  height={80}
                  className="mb-3 h-20 w-auto"
                  aria-hidden="true"
                />
                <p className="text-foreground mb-1 text-sm font-semibold">{step.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </m.li>
          ))}
        </m.ol>

        {/* Desktop : frise horizontale */}
        <m.div
          className="mt-12 hidden lg:block"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative mb-0 hidden lg:block">
            <div
              className="border-border absolute top-6 right-0 left-0 border-t border-dashed"
              aria-hidden="true"
            />
            <m.div
              className="bg-primary/60 absolute top-5.75 left-0 h-px origin-left"
              style={{ right: 0 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step) => (
              <m.div
                key={step.number}
                variants={staggerItem}
                className="flex flex-1 flex-col items-center"
              >
                <span className="border-primary bg-background text-primary relative z-10 mb-6 flex size-12 items-center justify-center rounded-full border-2 text-sm font-bold">
                  {step.number}
                </span>
                <div className="border-border hover:border-primary hover:bg-primary/5 flex h-full w-full cursor-default flex-col items-center rounded-xl border bg-transparent p-4 text-center transition-colors duration-200">
                  <Image
                    src={step.illustration}
                    alt=""
                    width={120}
                    height={120}
                    className="mb-4 h-28 w-auto"
                    style={{ width: "auto" }}
                    aria-hidden="true"
                  />
                  <p className="text-foreground mb-2 text-sm font-semibold">{step.title}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
