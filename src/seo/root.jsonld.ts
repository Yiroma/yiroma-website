const siteUrl = "https://yiroma.fr";

export const rootJsonLd = {
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
        "https://www.linkedin.com/company/yiroma",
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
        { "@type": "AdministrativeArea", name: "Loiret", identifier: "45" },
        { "@type": "AdministrativeArea", name: "Centre-Val de Loire" },
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
        "https://www.linkedin.com/company/yiroma",
        "https://github.com/Yiroma",
        "https://www.malt.fr/profile/romaricyi",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Romaric Yi",
      givenName: "Romaric",
      familyName: "Yi",
      jobTitle: "Développeur Full Stack Freelance",
      description:
        "Développeur Full Stack Freelance diplômé Concepteur Développeur d'Application (Bac+4), spécialisé en création de sites web, audit SEO & GEO et développement applicatif sur-mesure pour les TPE, PME, artisans et commerçants de la région orléanaise et de toute la France.",
      url: siteUrl,
      email: "contact@yiroma.fr",
      telephone: "+33695386099",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Châteauneuf-sur-Loire",
        postalCode: "45110",
        addressRegion: "Centre-Val de Loire",
        addressCountry: "FR",
      },
      knowsAbout: [
        "Création de site internet",
        "Développement web",
        "Next.js",
        "TypeScript",
        "React",
        "SEO",
        "GEO — Generative Engine Optimization",
        "Référencement local",
        "Développement applicatif",
        "Clean Architecture",
      ],
      worksFor: { "@id": `${siteUrl}/#organization` },
      sameAs: [
        "https://www.linkedin.com/company/yiroma",
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
