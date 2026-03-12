import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumberFR(phone: string): string {
  return phone
    .replace(/^\+33/, "0")
    .replace(/(\d{2})(?=\d)/g, "$1 ")
    .trim();
}
