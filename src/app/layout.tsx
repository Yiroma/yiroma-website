import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
