import React from "react";
import Link from "next/link";
import {
  type LucideIcon,
  Globe,
  Search,
  RefreshCw,
  Code2,
  Palette,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  wide?: boolean;
  // order visuel par breakpoint (mobile → md → lg géré par grid-area)
  orderMobile: number;
  orderMd: number;
};

const services: Service[] = [
  {
    id: "creation",
    icon: Globe,
    title: "Création de site web",
    description:
      "Landing page, site vitrine, portfolio ou e-commerce — un site professionnel, rapide et pensé pour convertir, taillé pour votre secteur et vos clients.",
    href: "/services#creation",
    orderMobile: 1,
    orderMd: 1,
  },
  {
    id: "seo",
    icon: Search,
    title: "Audit SEO & Visibilité GEO",
    description:
      "Votre site existe, mais personne ne le trouve ? J'analyse, je diagnostique et je vous donne un plan d'action concret pour remonter sur Google — et dans les IA génératives.",
    href: "/services#seo",
    orderMobile: 3,
    orderMd: 3,
  },
  {
    id: "refonte",
    icon: RefreshCw,
    title: "Refonte de site",
    description:
      "Votre site vieillit mal ou ne convertit plus ? Je modernise, j'accélère et je repositionne votre présence en ligne.",
    href: "/services#refonte",
    orderMobile: 2,
    orderMd: 2,
  },
  {
    id: "devapp",
    icon: Code2,
    title: "Développement applicatif",
    description:
      "Outil métier, API, back-office sur mesure — des applications robustes, testées et documentées.",
    href: "/services#devapp",
    orderMobile: 4,
    orderMd: 5,
  },
  {
    id: "charte",
    icon: Palette,
    title: "Identité visuelle & Charte graphique",
    description:
      "Logo, couleurs, typographies, règles d'usage — une identité cohérente qui rend votre marque reconnaissable sur tous vos supports.",
    href: "/services#charte",
    wide: true,
    orderMobile: 5,
    orderMd: 4,
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-muted relative z-10 py-16 shadow-[0_-20px_24px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)] md:py-24">
      {/* Numéro décoratif */}
      <span
        className="text-foreground pointer-events-none absolute top-0 right-4 font-sans text-[clamp(3rem,18vw,16rem)] leading-none font-extrabold tracking-[-0.04em] opacity-[0.033] select-none"
        aria-hidden="true"
      >
        01
      </span>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-8">
        {/* En-tête */}
        <div className="mb-10 text-center md:mb-14">
          <span className="text-primary mb-2.5 inline-block text-xs font-semibold tracking-[0.08em] uppercase">
            Ce que je fais pour vous
          </span>
          <h2 className="text-foreground font-sans text-[clamp(1.5rem,3vw,2rem)] leading-tight font-bold">
            Des services digitaux taillés
            <br />
            pour votre activité
          </h2>
          <div className="bg-primary mx-auto mt-3.5 h-0.75 w-10 rounded-full" />
        </div>

        {/* Bento grid — 1 col mobile, 2 col tablet, bento 3 col desktop */}
        <div className="bento-grid grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                style={
                  {
                    "--order-mobile": service.orderMobile,
                    "--order-md": service.orderMd,
                    order: "var(--order-mobile)",
                  } as React.CSSProperties
                }
                className={cn(
                  // Base card
                  `bento-${service.id} group`,
                  "border-border bg-card flex flex-col gap-3.5 rounded-xl border p-8 no-underline",
                  "transition-[background,border-color,box-shadow,transform] duration-200",
                  "hover:bg-primary hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]",
                  // Carte charte : horizontal sur md+
                  service.wide && "md:flex-row md:items-center md:gap-7 md:py-6",
                )}
              >
                {/* Icône */}
                <div
                  className={cn(
                    "justify-content flex size-12 shrink-0 items-center rounded-[10px]",
                    "bg-primary/10 text-primary",
                    "transition-[background,color] duration-200",
                    "group-hover:bg-white/20 group-hover:text-white",
                  )}
                >
                  <Icon size={22} className="m-auto" aria-hidden="true" />
                </div>

                {/* Contenu */}
                <div className={cn("flex flex-col gap-2.5", service.wide && "min-w-0 flex-1")}>
                  <h3 className="text-foreground font-sans text-[1.0625rem] font-semibold transition-colors duration-200 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground flex-1 text-sm leading-[1.65] transition-colors duration-200 group-hover:text-white/80">
                    {service.description}
                  </p>
                  <span className="text-primary mt-1 inline-flex items-center gap-1.5 text-sm font-medium transition-[color] duration-200 group-hover:text-white">
                    En savoir plus <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
