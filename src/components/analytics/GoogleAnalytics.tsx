"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  const { isAccepted, isHydrated } = useCookieConsent();

  useEffect(() => {
    if (!isHydrated || !GA_ID) return;
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", {
      analytics_storage: isAccepted ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }, [isAccepted, isHydrated]);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
