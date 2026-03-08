import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Yiroma — Création de site internet et solutions digitales",
  description:
    "Création de sites web, refonte de sites existants, audit et optimisation SEO/GEO/Performance, développement applicatif sur-mesure à Châteauneuf-sur-Loire, Orléans et dans le loiret(45).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("font-sans", inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
