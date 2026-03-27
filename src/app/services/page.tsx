import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesList } from "@/components/services/ServicesList";
import { ProcessSection } from "@/components/services/ProcessSection";
import { ServicesCtaFinal } from "@/components/services/ServicesCtaFinal";
import { JsonLdServices } from "@/components/seo/JsonLdServices";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Création de site web, refonte, identité visuelle, audit SEO & GEO, développement applicatif sur-mesure. Des services digitaux taillés pour votre activité.",
  alternates: {
    canonical: "https://yiroma.fr/services",
  },
  openGraph: {
    title: "Services — Yiroma",
    description:
      "Création de site web, refonte, identité visuelle, audit SEO & GEO, développement applicatif sur-mesure. Des services digitaux taillés pour votre activité.",
    url: "https://yiroma.fr/services",
    type: "website",
  },
  twitter: {
    title: "Services — Yiroma",
    description:
      "Création de site web, refonte, identité visuelle, audit SEO & GEO, développement applicatif sur-mesure. Des services digitaux taillés pour votre activité.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLdServices />
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <ServicesCtaFinal />
    </main>
  );
}
