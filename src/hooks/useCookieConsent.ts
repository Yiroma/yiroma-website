"use client";

import { useSyncExternalStore } from "react";

type ConsentStatus = "accepted" | "refused" | null;

const STORAGE_KEY = "cookie_consent";

function getSnapshot(): ConsentStatus {
  return localStorage.getItem(STORAGE_KEY) as ConsentStatus;
}

function getServerSnapshot(): ConsentStatus {
  return null;
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function dispatchStorage() {
  window.dispatchEvent(new Event("storage"));
}

export function useCookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    dispatchStorage();
  }

  function refuse() {
    localStorage.setItem(STORAGE_KEY, "refused");
    dispatchStorage();
  }

  return {
    consent,
    hasDecided: consent !== null,
    isHydrated: typeof window !== "undefined",
    isAccepted: consent === "accepted",
    accept,
    refuse,
  };
}
