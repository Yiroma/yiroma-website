"use client";

import { useEffect, useState } from "react";

type ConsentStatus = "accepted" | "refused" | null;

const STORAGE_KEY = "cookie_consent";

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(localStorage.getItem(STORAGE_KEY) as ConsentStatus);
    setIsHydrated(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  }

  function refuse() {
    localStorage.setItem(STORAGE_KEY, "refused");
    setConsent("refused");
  }

  return {
    consent,
    isHydrated,
    hasDecided: consent !== null,
    isAccepted: consent === "accepted",
    accept,
    refuse,
  };
}
