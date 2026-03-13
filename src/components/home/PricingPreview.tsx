"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buttonVariants } from "@/components/ui/button";
import { webPlans } from "@/data/pricing.data";
import { navLinks } from "@/data/nav.data";

export function PricingPreview() {
  return (
    <section className="bg-background relative z-0 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          eyebrow="Des forfaits clairs, sans mauvaise surprise"
          title={
            <>
              Vous savez ce que vous payez
              <br />
              et ce que vous obtenez.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {webPlans.map((plan) => (
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
                {plan.features.slice(0, 4).map((item) => (
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          <Link
            href={navLinks[1].href}
            className={cn(buttonVariants({ variant: "default", size: "sm" }), "gap-1.5")}
          >
            Voir le détail des {navLinks[1].label} <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href={`${navLinks[1].href}#faq`}
            className="text-primary inline-flex items-center gap-1.5 text-sm font-medium transition-[gap] duration-150 hover:gap-2.5"
          >
            Des questions ? Consultez la FAQ <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
