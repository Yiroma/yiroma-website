"use client";

import Link from "next/link";
import { Check, ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ServiceData } from "./services.data";

type Props = { service: ServiceData };

export function ServiceSection({ service }: Props) {
  const { id, bg, icon: Icon, label, title, description, extra, cardsLabel, cards } = service;

  const titleLines = title.split("\n");

  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-16 md:py-24", bg === "muted" ? "bg-muted" : "bg-background")}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 flex flex-col gap-4 md:mb-14">
          <div className="bg-primary/10 text-primary flex size-14 items-center justify-center rounded-[12px]">
            <Icon size={28} aria-hidden="true" />
          </div>
          <div>
            <p className="text-primary mb-2 text-xs font-semibold tracking-[0.08em] uppercase">
              {label}
            </p>
            <h2 className="text-foreground font-sans text-[clamp(1.375rem,2.5vw,1.875rem)] leading-snug font-bold">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <div className="bg-primary mt-3.5 h-0.75 w-10 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground text-[0.9375rem] leading-[1.75]">{description}</p>

            {extra?.type === "checklist" && (
              <div>
                <p className="text-foreground mb-4 text-sm font-semibold">{extra.label}</p>
                <ul className="flex flex-col gap-2.5">
                  {extra.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {extra?.type === "minicards" && (
              <div className="flex flex-col gap-3">
                {extra.items.map((item) => (
                  <div key={item.title} className="border-border bg-card rounded-xl border p-5">
                    <p className="text-foreground mb-1.5 text-sm font-semibold">{item.title}</p>
                    <p className="text-muted-foreground text-sm leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/pricing" className={cn(buttonVariants())}>
                Voir les tarifs
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }))}>
                <Mail size={15} aria-hidden="true" />
                Demander un devis
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-foreground text-sm font-semibold">{cardsLabel}</p>
            {cards.map((card) => (
              <div
                key={card.title}
                className="border-border bg-card rounded-xl border p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="text-foreground mb-2 font-sans text-base font-semibold">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.7]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
