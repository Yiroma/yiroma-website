const siteUrl = "https://yiroma.fr";

export const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contact`,
  name: "Yiroma — Contact",
  description:
    "Formulaire de contact pour discuter de votre projet web. Développeur Full Stack Freelance à Orléans.",
  url: `${siteUrl}/contact`,
  mainEntity: {
    "@type": "Person",
    name: "Romaric Yi",
    jobTitle: "Développeur Full Stack Freelance",
    email: "contact@yiroma.fr",
    telephone: "+33695386099",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Châteauneuf-sur-Loire",
      postalCode: "45110",
      addressRegion: "Centre-Val de Loire",
      addressCountry: "FR",
    },
    sameAs: [
      "https://www.linkedin.com/company/yiroma",
      "https://github.com/Yiroma",
      "https://www.malt.fr/profile/romaricyi",
    ],
  },
};

export const contactBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${siteUrl}/contact`,
    },
  ],
};
