import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingSection } from "@/components/pricing/PricingSection";
import { AddonSection } from "@/components/pricing/AddonSection";
import { FaqSection } from "@/components/pricing/FaqSection";
import { PricingCtaFinal } from "@/components/pricing/PricingCtaFinal";
import { JsonLdPricing } from "@/components/seo/JsonLdPricing";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Forfaits clairs et transparents : Starter à partir de 600€, Pro à partir de 1 400€, E-commerce à partir de 3 200€, Sur-mesure sur devis. Développeur freelance, région orléanaise.",
  alternates: {
    canonical: "https://yiroma.fr/pricing",
  },
  openGraph: {
    title: "Tarifs — Yiroma",
    description:
      "Forfaits clairs et transparents : Starter à partir de 600€, Pro à partir de 1 400€, E-commerce à partir de 3 200€, Sur-mesure sur devis. Développeur freelance, région orléanaise.",
    url: "https://yiroma.fr/pricing",
    type: "website",
  },
  twitter: {
    title: "Tarifs — Yiroma",
    description:
      "Forfaits clairs et transparents : Starter à partir de 600€, Pro à partir de 1 400€, E-commerce à partir de 3 200€, Sur-mesure sur devis. Développeur freelance, région orléanaise.",
  },
};

export default function PricingPage() {
  return (
    <main>
      <JsonLdPricing />
      <PricingHero />
      <PricingSection />
      <AddonSection />
      <FaqSection />
      <PricingCtaFinal />
    </main>
  );
}
