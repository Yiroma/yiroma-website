"use client";

import { useState } from "react";

type ConsentStatus = "accepted" | "refused" | null;

const STORAGE_KEY = "cookie_consent";

function getStoredConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY) as ConsentStatus;
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>(getStoredConsent);

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
    hasDecided: consent !== null,
    isAccepted: consent === "accepted",
    accept,
    refuse,
  };
}
