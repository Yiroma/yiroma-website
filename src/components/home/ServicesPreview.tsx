import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services.data";
import { navLinks } from "@/data/nav.data";

export function ServicesPreview() {
  return (
    <section className="bg-muted relative z-10 py-16 shadow-[0_-20px_24px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)] md:py-24">
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          eyebrow="Ce que je fais pour vous"
          title={
            <>
              Des services digitaux taillés
              <br />
              pour votre activité
            </>
          }
          align="center"
        />

        <div className="bento-grid grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            const { title, description, orderMobile, orderMd, wide } = service.preview;
            return (
              <Link
                key={service.id}
                href={`${navLinks[0].href}#${service.id}`}
                style={
                  {
                    "--order-mobile": orderMobile,
                    "--order-md": orderMd,
                    order: "var(--order-mobile)",
                  } as React.CSSProperties
                }
                className={cn(
                  `bento-${service.id} group`,
                  "border-border bg-card flex flex-col gap-3.5 rounded-xl border p-8 no-underline",
                  "transition-[background,border-color,box-shadow,transform] duration-200",
                  "hover:bg-primary hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]",
                  wide && "md:flex-row md:items-center md:gap-7 md:py-6",
                )}
              >
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

                <div className={cn("flex flex-col gap-2.5", wide && "min-w-0 flex-1")}>
                  <h3 className="text-foreground font-sans text-[1.0625rem] font-semibold transition-colors duration-200 group-hover:text-white">
                    {title}
                  </h3>
                  <p className="text-muted-foreground flex-1 text-sm leading-[1.65] transition-colors duration-200 group-hover:text-white/80">
                    {description}
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
