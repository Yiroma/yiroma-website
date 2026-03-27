import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactCtaFinal } from "@/components/contact/ContactCtaFinal";
import { JsonLdContact } from "@/components/seo/JsonLdContact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet. Formulaire de contact, email, téléphone : je réponds sous 24h. Développeur freelance, région orléanaise et toute la France.",
  alternates: {
    canonical: "https://yiroma.fr/contact",
  },
  openGraph: {
    title: "Contact — Yiroma",
    description:
      "Parlons de votre projet. Formulaire de contact, email, téléphone : je réponds sous 24h. Développeur freelance, région orléanaise et toute la France.",
    url: "https://yiroma.fr/contact",
    type: "website",
  },
  twitter: {
    title: "Contact — Yiroma",
    description:
      "Parlons de votre projet. Formulaire de contact, email, téléphone : je réponds sous 24h. Développeur freelance, région orléanaise et toute la France.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <JsonLdContact />
      <ContactHero />
      <ContactForm />
      <ContactCtaFinal />
    </main>
  );
}
