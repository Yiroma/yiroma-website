"use client";

import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookieBanner() {
  const { hasDecided, accept, refuse } = useCookieConsent();

  if (hasDecided) return null;

  return (
    <div className="border-border bg-background/95 fixed right-0 bottom-0 left-0 z-50 border-t px-4 py-4 shadow-lg backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground text-sm">
          Ce site utilise des cookies pour mesurer l&apos;audience et améliorer votre expérience.
          Vos données sont traitées conformément au{" "}
          <a
            href="/mentions-legales"
            className="hover:text-foreground underline underline-offset-4"
          >
            RGPD
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={refuse}
            className="border-border bg-background text-foreground hover:bg-accent rounded-md border px-4 py-2 text-sm font-medium transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
