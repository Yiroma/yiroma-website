import { faqs } from "@/data/faq.data";
import { webPlans, addonPlans } from "@/data/pricing.data";

const siteUrl = "https://yiroma.fr";

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Yiroma — Forfaits",
  description: "Forfaits de création de site web et services digitaux",
  url: `${siteUrl}/pricing`,
  itemListElement: [...webPlans, ...addonPlans].map((plan, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: plan.name,
      description: plan.tagline,
      provider: { "@id": `${siteUrl}/#organization` },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: plan.price.replace(/[^0-9]/g, "") || undefined,
        priceSpecification:
          plan.price === "Sur devis"
            ? {
                "@type": "PriceSpecification",
                description: "Sur devis selon cahier des charges",
              }
            : undefined,
        description: plan.price,
        eligibleRegion: { "@type": "Country", name: "France" },
      },
    },
  })),
};

export const pricingBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tarifs",
      item: `${siteUrl}/pricing`,
    },
  ],
};
