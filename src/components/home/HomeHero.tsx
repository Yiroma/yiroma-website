import Image from "next/image";
import Link from "next/link";
import { MapPin, Layers, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { HeroWrapper } from "@/components/ui/HeroWrapper";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav.data";

export function HomeHero() {
  return (
    <HeroWrapper>
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="flex flex-col items-start">
          <span className="hero-anim-badge border-primary/25 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.8125rem] font-medium">
            <MapPin size={13} aria-hidden="true" />
            {`Création de site internet à Orléans`}
          </span>

          <h1 className="hero-anim-title text-foreground font-heading mb-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
            Du site vitrine à
            <br />
            l&apos;application métier,
            <br />
            je construis votre
            <br />
            <span className="gradient-text">présence digitale.</span>
          </h1>

          <p className="hero-anim-desc text-muted-foreground mb-10 max-w-100 text-lg leading-relaxed">
            Je conçois et je développe pour les artisans, commerçants et entreprises de la région
            orléanaise et de toute la France.
          </p>

          <div className="hero-anim-cta flex flex-wrap gap-3">
            <Link href={navLinks[1].href} className={cn(buttonVariants({ size: "lg" }))}>
              <Layers size={17} aria-hidden="true" />
              Découvrir mes {navLinks[1].label}
            </Link>
            <Link
              href={navLinks[2].href}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Voir mes {navLinks[2].label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-anim-image flex items-center justify-center">
          <Image
            src="/hero.svg"
            alt="Illustration création de site internet sur-mesure"
            width={540}
            height={480}
            priority
            fetchPriority="high"
            className="w-full drop-shadow-[0_20px_48px_rgba(37,99,235,0.18)] dark:brightness-[0.92] dark:drop-shadow-[0_20px_60px_rgba(59,130,246,0.35)] dark:saturate-[0.9]"
          />
        </div>
      </div>
    </HeroWrapper>
  );
}
