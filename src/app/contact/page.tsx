import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactCtaFinal } from "@/components/contact/ContactCtaFinal";

export const metadata: Metadata = {
  title: "Contact — Yiroma",
  description:
    "Parlons de votre projet. Formulaire de contact, email, téléphone — je réponds sous 24h. Développeur freelance, région orléanaise et toute la France.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactCtaFinal />
    </main>
  );
}
