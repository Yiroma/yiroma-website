import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  target: string;
  includes: string[];
  delay: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "La présence en ligne essentielle",
    price: "À partir de 400€",
    target: "Lancement, offre ponctuelle, campagne ciblée",
    includes: [
      "Landing page (1 page)",
      "Design responsive",
      "SEO technique de base",
      "Formulaire de contact",
    ],
    delay: "1 à 2 semaines",
  },
  {
    name: "Pro",
    tagline: "Votre vitrine professionnelle complète",
    price: "À partir de 900€",
    target: "Artisans, PME, professions libérales",
    includes: [
      "Site vitrine jusqu'à 8 pages",
      "SEO technique + SEO local",
      "Google Business Profile",
      "Formulaire de contact",
    ],
    delay: "3 à 4 semaines",
    highlighted: true,
  },
  {
    name: "E-commerce & CMS",
    tagline: "Vendez en ligne ou gérez votre contenu",
    price: "À partir de 1 800€",
    target: "Boutiques, restaurants, actus régulières",
    includes: [
      "Jusqu'à 15 pages",
      "Interface d'administration",
      "SEO technique + local",
      "Formation prise en main (1h)",
    ],
    delay: "5 à 7 semaines",
  },
  {
    name: "Sur-mesure",
    tagline: "Pour les projets complexes",
    price: "Sur devis",
    target: "Entreprises, ESN, applicatif métier",
    includes: [
      "Application web métier",
      "API REST ou GraphQL",
      "Back-office & tableau de bord",
      "Tests automatisés inclus",
    ],
    delay: "Selon cahier des charges",
  },
];

export function PricingPreview() {
  return (
    <section className="bg-background relative z-0 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 md:mb-14">
          <p className="text-primary mb-2.5 text-xs font-semibold tracking-[0.08em] uppercase">
            Des forfaits clairs, sans mauvaise surprise
          </p>
          <h2 className="text-foreground font-sans text-[clamp(1.5rem,3vw,2rem)] leading-tight font-bold">
            Vous savez ce que vous payez
            <br />
            et ce que vous obtenez.
          </h2>
          <div className="bg-primary mt-3.5 h-0.75 w-10 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col gap-4 rounded-xl border p-6 transition-[box-shadow,transform] duration-200",
                plan.highlighted
                  ? "border-primary/40 bg-primary/5 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]"
                  : "border-border bg-card hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]",
              )}
            >
              <div>
                <p
                  className={cn(
                    "mb-0.5 text-sm font-semibold",
                    plan.highlighted ? "text-primary" : "text-foreground",
                  )}
                >
                  {plan.name}
                </p>
                <p className="text-muted-foreground text-xs">{plan.tagline}</p>
              </div>

              <p className="text-foreground font-sans text-[1.0625rem] leading-snug font-bold">
                {plan.price}
              </p>

              <p className="text-muted-foreground text-xs leading-normal">
                Idéal pour : {plan.target}
              </p>

              <ul className="flex flex-col gap-1.5" aria-label="Inclus dans ce forfait">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs">
                    <Check size={13} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mt-auto border-t border-dashed pt-3 text-[0.6875rem]">
                Délai estimé : {plan.delay}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/tarifs"
            className="text-primary inline-flex items-center gap-1.5 text-sm font-medium transition-[gap] duration-150 hover:gap-2.5"
          >
            Voir le détail des forfaits <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
