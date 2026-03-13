export type PricingPlan = {
  name: string;
  tagline: string;
  price: string;
  target: string;
  features: string[];
  delay: string;
  highlighted?: boolean;
  cta: string;
};

export const webPlans: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "La présence en ligne essentielle",
    price: "À partir de 600€",
    target: "Lancement d'activité, offre ponctuelle, campagne ciblée",
    features: [
      "Landing page (1 page)",
      "Design responsive",
      "SEO technique de base",
      "Formulaire de contact",
      "2 allers-retours inclus",
      "Conseil hébergement & mise en ligne",
    ],
    delay: "1 à 2 semaines",
    cta: "Demander un devis",
  },
  {
    name: "Pro",
    tagline: "Votre vitrine professionnelle complète",
    price: "À partir de 1400€",
    target: "Artisans, commerçants, professions libérales, PME",
    features: [
      "Site vitrine jusqu'à 8 pages",
      "Design responsive",
      "SEO technique de base + SEO local",
      "Formulaire de contact",
      "Conseil Google Business Profile",
      "3 allers-retours inclus",
      "Conseil hébergement & mise en ligne",
    ],
    delay: "3 à 4 semaines",
    highlighted: true,
    cta: "Demander un devis",
  },
  {
    name: "E-commerce & CMS",
    tagline: "Vendez en ligne ou gérez votre contenu en autonomie",
    price: "À partir de 3200€",
    target: "Boutiques, restaurants, structures avec actualités régulières",
    features: [
      "Jusqu'à 15 pages",
      "Catalogue produits ou espace blog/actualités",
      "Interface d'administration simple",
      "Design responsive",
      "SEO technique + SEO local",
      "4 allers-retours inclus",
      "Formation prise en main (1h)",
      "Conseil hébergement & mise en ligne",
      "Intégration paiement en ligne (option)",
    ],
    delay: "5 à 7 semaines",
    cta: "Demander un devis",
  },
  {
    name: "Sur-mesure",
    tagline: "Pour les projets complexes et les besoins spécifiques",
    price: "Sur devis",
    target: "Entreprises, ESN, projets applicatifs métier",
    features: [
      "Application web métier",
      "API REST ou GraphQL",
      "Back-office & tableau de bord",
      "Architecture documentée (Clean Architecture, UML)",
      "Tests automatisés inclus",
      "Allers-retours illimités",
      "Option maintenance & suivi disponible",
    ],
    delay: "Selon cahier des charges",
    cta: "Parlons-en",
  },
];

export const addonPlans: PricingPlan[] = [
  {
    name: "Création de logo",
    tagline: "Une identité visuelle qui vous ressemble",
    price: "À partir de 450€",
    target: "Création d'activité, rebranding, nouveau projet",
    features: [
      "3 propositions de concepts",
      "2 allers-retours inclus",
      "Fichiers livrés en SVG, PNG, PDF",
      "Versions couleur, noire et blanche",
    ],
    delay: "3 à 5 jours",
    cta: "Demander un devis",
  },
  {
    name: "Charte graphique",
    tagline: "Un socle visuel cohérent pour toutes vos communications",
    price: "À partir de 1200€",
    target: "Structures souhaitant formaliser leur identité visuelle",
    features: [
      "Logo + variations inclus",
      "Palette de couleurs",
      "Typographies & règles d'usage",
      "Éléments graphiques secondaires",
      "Guide d'utilisation (PDF)",
    ],
    delay: "1 à 2 semaines",
    cta: "Demander un devis",
  },
  {
    name: "Audit SEO / GEO",
    tagline: "Identifiez ce qui freine votre visibilité en ligne",
    price: "À partir de 600€",
    target: "Sites existants souhaitant améliorer leur référencement",
    features: [
      "Analyse technique complète",
      "Audit du contenu & des mots-clés",
      "Rapport de visibilité GEO (IA)",
      "Liste de recommandations priorisées",
      "Session de restitution (30 min)",
    ],
    delay: "3 à 5 jours",
    cta: "Demander un devis",
  },
];
