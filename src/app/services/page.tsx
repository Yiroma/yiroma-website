import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesList } from "@/components/services/ServicesList";
import { ProcessSection } from "@/components/services/ProcessSection";
import { ServicesCtaFinal } from "@/components/services/ServicesCtaFinal";
import { servicesJsonLd, servicesBreadcrumbJsonLd } from "@/seo/services.jsonld";
import { servicesMetadata } from "@/seo/services.metadata";
import { Metadata } from "next";

export const metadata: Metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbJsonLd) }}
      />
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <ServicesCtaFinal />
    </main>
  );
}
