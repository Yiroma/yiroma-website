import type { Metadata } from "next";

const siteUrl = "https://yiroma.fr";
const ogImage = `${siteUrl}/og.webp`;

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yiroma — Création de site internet et solutions digitales",
    template: "Yiroma — %s",
  },
  description:
    "Création de sites web, refonte de sites existants, audit et optimisation SEO/GEO/Performance, développement applicatif sur-mesure à Châteauneuf-sur-Loire, Orléans et dans le Loiret (45).",
  keywords: [
    "création site internet Orléans",
    "développeur web freelance Loiret",
    "développeur Full Stack freelance",
    "refonte site vitrine",
    "audit SEO Orléans",
    "développement applicatif sur-mesure",
    "site internet Châteauneuf-sur-Loire",
    "développeur Next.js freelance",
  ],
  authors: [{ name: "Romaric Yi", url: siteUrl }],
  creator: "Romaric Yi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Yiroma",
    title: "Yiroma — Création de site internet et solutions digitales",
    description:
      "Création de sites web, refonte, audit SEO/GEO et développement applicatif sur-mesure. Développeur Full Stack Freelance à Orléans et toute la France.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        type: "image/webp",
        alt: "Yiroma — Développeur Full Stack Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yiroma — Création de site internet et solutions digitales",
    description:
      "Création de sites web, refonte, audit SEO/GEO et développement applicatif sur-mesure. Développeur Full Stack Freelance à Orléans et toute la France.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};
