import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Inter({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://yiroma.fr";
const ogImage = `${siteUrl}/og-1200x630.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yiroma — Création de site internet et solutions digitales",
    template: "%s — Yiroma",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Yiroma",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-1200x630.png`,
      },
      description:
        "Développeur Full Stack Freelance — Création de sites web, audit SEO/GEO, développement applicatif sur-mesure.",
      email: "contact@yiroma.fr",
      telephone: "+33695386099",
      founder: {
        "@type": "Person",
        name: "Romaric Yi",
        jobTitle: "Développeur Full Stack Freelance",
        url: siteUrl,
      },
      sameAs: [
        "https://linkedin.com/in/yiromaric",
        "https://github.com/Yiroma",
        "https://www.malt.fr/profile/romaricyi",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Yiroma",
      url: siteUrl,
      image: `${siteUrl}/og-1200x630.png`,
      telephone: "+33695386099",
      email: "contact@yiroma.fr",
      priceRange: "€€",
      description:
        "Création de sites web, refonte, audit SEO & GEO, développement applicatif sur-mesure à Châteauneuf-sur-Loire, Orléans et dans toute la France.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Châteauneuf-sur-Loire",
        postalCode: "45110",
        addressRegion: "Centre-Val de Loire",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.8705,
        longitude: 2.2182,
      },
      areaServed: [
        { "@type": "City", name: "Orléans" },
        { "@type": "City", name: "Châteauneuf-sur-Loire" },
        {
          "@type": "AdministrativeArea",
          name: "Loiret",
          identifier: "45",
        },
        {
          "@type": "AdministrativeArea",
          name: "Centre-Val de Loire",
        },
        { "@type": "Country", name: "France" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://linkedin.com/in/yiromaric",
        "https://github.com/Yiroma",
        "https://www.malt.fr/profile/romaricyi",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Yiroma",
      description:
        "Développeur Full Stack Freelance — Création de sites web, audit SEO/GEO, développement applicatif sur-mesure.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
