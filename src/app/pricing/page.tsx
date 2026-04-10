import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingSection } from "@/components/pricing/PricingSection";
import { AddonSection } from "@/components/pricing/AddonSection";
import { FaqSection } from "@/components/pricing/FaqSection";
import { PricingCtaFinal } from "@/components/pricing/PricingCtaFinal";
import { faqJsonLd, pricingJsonLd, pricingBreadcrumbJsonLd } from "@/seo/pricing.jsonld";
import { pricingMetadata } from "@/seo/pricing.metadata";
import { Metadata } from "next";

export const metadata: Metadata = pricingMetadata;

export default function PricingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingBreadcrumbJsonLd) }}
      />
      <PricingHero />
      <PricingSection />
      <AddonSection />
      <FaqSection />
      <PricingCtaFinal />
    </main>
  );
}
