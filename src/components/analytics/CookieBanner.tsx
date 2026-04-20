"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { navLegalsLinks } from "@/data/nav.data";

export function CookieBanner() {
  const { hasDecided, isHydrated, accept, refuse } = useCookieConsent();

  if (!isHydrated || hasDecided) return null;

  return (
    <div className="border-border bg-background/95 fixed right-0 bottom-0 left-0 z-50 border-t px-4 py-4 shadow-lg backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground text-sm">
          Ce site utilise des cookies pour mesurer l&apos;audience et améliorer votre expérience.
          Vos données sont traitées conformément à notre{" "}
          <Link
            href={navLegalsLinks[1].href}
            className="hover:text-foreground underline underline-offset-4"
          >
            {navLegalsLinks[1].label}
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button onClick={refuse} variant="outline">
            Refuser
          </Button>
          <Button onClick={accept}>Accepter</Button>
        </div>
      </div>
    </div>
  );
}
