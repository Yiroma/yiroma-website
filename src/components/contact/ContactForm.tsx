"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Lock, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
import { fadeInUp, fadeIn, staggerContainer, staggerItem } from "@/lib/motion-variants";

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

declare global {
  interface Window {
    turnstile: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [projectType, setProjectType] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const scriptId = "turnstile-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (turnstileRef.current && window.turnstile) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(null),
          "error-callback": () => setTurnstileToken(null),
          appearance: "always",
          theme: "auto",
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!turnstileToken) return;

    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_WORKER_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          turnstileToken,
          from_name: data.get("fullName"),
          from_email: data.get("email"),
          phone: data.get("phone") || "Non renseigné",
          service_type: PROJECT_TYPES.find((t) => t.value === projectType)?.label ?? projectType,
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Worker error");

      setFormState("success");
    } catch {
      setFormState("error");
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken(null);
      }
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <AnimatePresence mode="wait">
          {formState === "success" ? (
            <motion.div
              key="success"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mx-auto max-w-lg rounded-2xl border border-green-200 bg-green-50 p-10 text-center dark:border-green-900 dark:bg-green-950/30"
            >
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
                <Link
                  href={navLinks[2].href}
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Voir les {navLinks[2].label}
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div key="form">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SectionHeader eyebrow="Formulaire" title="Envoyez-moi un message" />
              </motion.div>

              <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16 xl:gap-24">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <motion.div variants={staggerItem} className="space-y-1.5">
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
                    </motion.div>

                    <motion.div variants={staggerItem} className="grid gap-6 sm:grid-cols-2">
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
                          Téléphone{" "}
                          <span className="text-muted-foreground font-normal">(optionnel)</span>
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
                    </motion.div>

                    <motion.div variants={staggerItem} className="space-y-1.5">
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
                    </motion.div>

                    <motion.div variants={staggerItem} className="space-y-1.5">
                      <Label htmlFor="message">
                        Message <span className="text-primary">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Décrivez votre activité, votre besoin ou votre idée, même approximativement."
                        className="resize-y px-4 py-3"
                      />
                    </motion.div>

                    <motion.div variants={staggerItem}>
                      <div ref={turnstileRef} />
                    </motion.div>

                    <AnimatePresence>
                      {formState === "error" && (
                        <motion.p
                          variants={fadeIn}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="text-sm text-red-600 dark:text-red-400"
                        >
                          Une erreur est survenue. Veuillez réessayer ou me{" "}
                          <a
                            href={`mailto:${userContact.email}`}
                            className="text-primary hover:underline"
                          >
                            contacter directement par email
                          </a>
                          .
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <motion.div
                      variants={staggerItem}
                      className="flex flex-col gap-4 sm:flex-row sm:items-center"
                    >
                      <button
                        type="submit"
                        disabled={formState === "submitting" || !turnstileToken}
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
                    </motion.div>
                  </form>
                </motion.div>

                <motion.aside
                  className="bg-muted space-y-8 rounded-2xl p-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div>
                    <motion.p
                      variants={staggerItem}
                      className="text-foreground mb-5 text-sm font-semibold tracking-wide uppercase"
                    >
                      Réponse garantie sous 24h
                    </motion.p>
                    <ul className="space-y-4">
                      <motion.li variants={staggerItem} className="flex items-start gap-3">
                        <Mail
                          size={18}
                          className="text-primary mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <a
                          href={`mailto:${userContact.email}`}
                          className="text-foreground hover:text-primary text-sm transition-colors"
                        >
                          {userContact.email}
                        </a>
                      </motion.li>
                      <motion.li variants={staggerItem} className="flex items-start gap-3">
                        <Phone
                          size={18}
                          className="text-primary mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <a
                          href={`tel:${userContact.phone}`}
                          className="text-foreground hover:text-primary text-sm transition-colors"
                        >
                          {formatPhoneNumberFR(userContact.phone)}
                        </a>
                      </motion.li>
                      <motion.li variants={staggerItem} className="flex items-start gap-3">
                        <MapPin
                          size={18}
                          className="text-primary mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <p className="text-foreground text-sm leading-relaxed">
                          {userContact.location}
                          <br />
                          <span className="text-muted-foreground">{userContact.local}</span>
                          <br />
                          <span className="text-muted-foreground">{userContact.remote}</span>
                        </p>
                      </motion.li>
                    </ul>
                  </div>

                  <div className="border-border border-t pt-8">
                    <motion.p
                      variants={staggerItem}
                      className="text-muted-foreground mb-4 text-xs font-semibold tracking-wide uppercase"
                    >
                      Retrouvez-moi sur
                    </motion.p>
                    <div className="flex flex-wrap gap-2">
                      {socialLinks.map(({ href, label, icon: Icon }) => (
                        <motion.a
                          key={href}
                          variants={staggerItem}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "outline", size: "sm" }),
                            "gap-2",
                          )}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Icon aria-hidden="true" />
                          {label}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <motion.div variants={staggerItem} className="flex justify-center">
                    <Image
                      src="/contact.svg"
                      alt=""
                      width={260}
                      height={260}
                      className="h-auto w-65"
                      loading="eager"
                      aria-hidden="true"
                    />
                  </motion.div>
                </motion.aside>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
