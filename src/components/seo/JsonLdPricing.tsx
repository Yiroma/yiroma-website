import { faqs } from "@/data/faq.data";
import { webPlans, addonPlans } from "@/data/pricing.data";

const siteUrl = "https://yiroma.fr";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Forfaits — Yiroma",
  description: "Forfaits de création de site web et services digitaux",
  url: `${siteUrl}/pricing`,
  itemListElement: [...webPlans, ...addonPlans].map((plan, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: plan.name,
      description: plan.tagline,
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
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
        eligibleRegion: {
          "@type": "Country",
          name: "France",
        },
      },
    },
  })),
};

export function JsonLdPricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
    </>
  );
}
