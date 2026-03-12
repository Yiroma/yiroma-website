"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Lock, CheckCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn, formatPhoneNumberFR } from "@/lib/utils";
import { userContact, socialLinks } from "@/data/contact.data";
import { navLinks } from "@/data/nav.data";

type FormState = "idle" | "submitting" | "success" | "error";

const PROJECT_TYPES = [
  { value: "landing", label: "Création d'une landing page" },
  { value: "vitrine", label: "Création d'un site vitrine" },
  { value: "identite", label: "Identité visuelle & Charte graphique" },
  { value: "ecommerce", label: "Site e-commerce ou CMS" },
  { value: "seo", label: "Audit SEO & visibilité" },
  { value: "applicatif", label: "Développement applicatif sur-mesure" },
  { value: "unknown", label: "Je ne sais pas encore" },
] as const;

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [projectType, setProjectType] = useState<string | null>(null);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    // TODO: intégration EmailJS
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mx-auto max-w-lg rounded-2xl border border-green-200 bg-green-50 p-10 text-center dark:border-green-900 dark:bg-green-950/30">
            <CheckCircle
              size={48}
              className="mx-auto mb-5 text-green-600 dark:text-green-400"
              aria-hidden="true"
            />
            <h2 className="text-foreground mb-3 text-xl font-bold">
              Votre message a bien été envoyé !
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {`Je reviens vers vous sous 24h. En attendant, n'hésitez pas à consulter mes réalisations ou mes tarifs si ce n'est pas encore fait.`}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={navLinks[1].href} className={cn(buttonVariants({ variant: "outline" }))}>
                Voir les {navLinks[1].label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader eyebrow="Formulaire" title="Envoyez-moi un message" />
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16 xl:gap-24">
          <div>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="space-y-1.5">
                <Label htmlFor="fullName">
                  Prénom et Nom <span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jean Dupont"
                  className="h-11 px-4"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="email">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jean@exemple.fr"
                    className="h-11 px-4"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone">
                    Téléphone <span className="text-muted-foreground font-normal">(optionnel)</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="06 00 00 00 00"
                    className="h-11 px-4"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="projectType">
                  Type de besoin <span className="text-primary">*</span>
                </Label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger id="projectType" className="h-11 w-full px-4">
                    <SelectValue placeholder="Sélectionner…" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROJECT_TYPES.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input type="hidden" name="projectType" value={projectType ?? ""} />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">
                  Message <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Décrivez votre activité, votre besoin ou votre idée — même approximativement."
                  className="resize-y px-4 py-3"
                />
              </div>

              {formState === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Une erreur est survenue. Veuillez réessayer ou me{" "}
                  <a href={`mailto:${userContact.email}`} className="text-primary hover:underline">
                    contacter directement par email
                  </a>
                  .
                </p>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "disabled:cursor-not-allowed disabled:opacity-60",
                  )}
                >
                  {formState === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
                </button>

                <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
                  <Lock size={12} aria-hidden="true" className="shrink-0" />
                  Vos données sont utilisées uniquement pour répondre à votre demande. Aucun
                  démarchage, aucune revente.
                </p>
              </div>
            </form>
          </div>

          <aside className="bg-muted space-y-8 rounded-2xl p-8">
            <div>
              <p className="text-foreground mb-5 text-sm font-semibold tracking-wide uppercase">
                Réponse garantie sous 24h
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${userContact.email}`}
                    className="text-foreground hover:text-primary text-sm transition-colors"
                  >
                    {userContact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${userContact.phone}`}
                    className="text-foreground hover:text-primary text-sm transition-colors"
                  >
                    {formatPhoneNumberFR(userContact.phone)}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-foreground text-sm leading-relaxed">
                    {userContact.location}
                    <br />
                    <span className="text-muted-foreground">{userContact.local}</span>
                    <br />
                    <span className="text-muted-foreground">{userContact.remote}</span>
                  </p>
                </li>
              </ul>
            </div>

            <div className="border-border border-t pt-8">
              <p className="text-muted-foreground mb-4 text-xs font-semibold tracking-wide uppercase">
                Retrouvez-moi sur
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2")}
                  >
                    <Icon aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
