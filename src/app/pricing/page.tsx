import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingSection } from "@/components/pricing/PricingSection";
import { AddonSection } from "@/components/pricing/AddonSection";
import { PricingCtaFinal } from "@/components/pricing/PricingCtaFinal";

export const metadata: Metadata = {
  title: "Tarifs — Yiroma",
  description:
    "Forfaits clairs et transparents : Starter à partir de 400€, Pro à partir de 900€, E-commerce à partir de 1 800€, Sur-mesure sur devis. Développeur freelance, région orléanaise.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PricingSection />
      <AddonSection />
      <PricingCtaFinal />
    </main>
  );
}
