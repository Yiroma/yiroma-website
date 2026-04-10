import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactCtaFinal } from "@/components/contact/ContactCtaFinal";
import { contactJsonLd, contactBreadcrumbJsonLd } from "@/seo/contact.jsonld";
import { contactMetadata } from "@/seo/contact.metadata";
import { Metadata } from "next";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbJsonLd) }}
      />
      <ContactHero />
      <ContactForm />
      <ContactCtaFinal />
    </main>
  );
}
