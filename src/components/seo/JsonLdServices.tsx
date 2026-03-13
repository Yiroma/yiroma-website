import { services } from "@/data/services.data";

const siteUrl = "https://yiroma.fr";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services — Yiroma",
  description:
    "Services digitaux : création de site web, refonte, identité visuelle, audit SEO & GEO, développement applicatif",
  url: `${siteUrl}/services`,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${siteUrl}/services#${service.id}`,
      name: service.preview.title,
      description: service.preview.description,
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "France",
      },
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteUrl}/services`,
    },
  ],
};

export function JsonLdServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
