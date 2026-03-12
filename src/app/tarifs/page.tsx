import type { Metadata } from "next";
import { TarifsHero } from "@/components/tarifs/TarifsHero";
import { PricingSection } from "@/components/tarifs/PricingSection";
import { AddonSection } from "@/components/tarifs/AddonSection";
import { TarifsCtaFinal } from "@/components/tarifs/TarifsCtaFinal";

export const metadata: Metadata = {
  title: "Tarifs — Yiroma",
  description:
    "Forfaits clairs et transparents : Starter à partir de 400€, Pro à partir de 900€, E-commerce à partir de 1 800€, Sur-mesure sur devis. Développeur freelance, région orléanaise.",
};

export default function TarifsPage() {
  return (
    <main>
      <TarifsHero />
      <PricingSection />
      <AddonSection />
      <TarifsCtaFinal />
    </main>
  );
}
