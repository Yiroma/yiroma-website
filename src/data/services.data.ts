import { Globe, RefreshCw, Palette, Search, Code2, type LucideIcon } from "lucide-react";

export type Card = {
  title: string;
  description: string;
};

export type CheckList = {
  type: "checklist";
  label: string;
  items: string[];
};

export type MiniCards = {
  type: "minicards";
  items: { title: string; description: string }[];
};

export type LeftExtra = CheckList | MiniCards;

export type ServiceData = {
  id: string;
  bg: "background" | "muted";
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  extra?: LeftExtra;
  cardsLabel: string;
  cards: Card[];
  preview: {
    title: string;
    description: string;
    orderMobile: number;
    orderMd: number;
    wide?: boolean;
  };
};

export const services: ServiceData[] = [
  {
    id: "creation",
    bg: "background",
    icon: Globe,
    label: "Service 1",
    title: "Votre site web, enfin à la hauteur\nde votre activité",
    preview: {
      title: "Création de site web",
      description:
        "Landing page, site vitrine, portfolio ou e-commerce — un site professionnel, rapide et pensé pour convertir, taillé pour votre secteur et vos clients.",
      orderMobile: 1,
      orderMd: 1,
    },
    description:
      "Un site internet, c'est votre vitrine ouverte 24h/24. Il doit être rapide, clair, et convaincre vos visiteurs de vous contacter. Je conçois des sites pensés pour vos clients — pas pour faire plaisir aux développeurs.",
    extra: {
      type: "checklist",
      label: "Ce qui est toujours inclus",
      items: [
        "Design responsive (mobile, tablette, desktop)",
        "Optimisation des performances (Lighthouse > 90)",
        "SEO technique de base",
        "Formulaire de contact",
        "Mise en ligne et accompagnement au démarrage",
      ],
    },
    cardsLabel: "3 formats disponibles",
    cards: [
      {
        title: "Landing page",
        description:
          "Une page unique, percutante, centrée sur un seul objectif : convertir vos visiteurs en contacts ou en clients. Idéale pour un lancement, une offre spécifique ou une campagne.",
      },
      {
        title: "Site vitrine",
        description:
          "De 5 à 10 pages pour présenter votre activité, vos services, votre équipe et vous rendre crédible aux yeux de vos prospects. Le socle de toute présence digitale sérieuse.",
      },
      {
        title: "Site e-commerce & CMS",
        description:
          "Vendez en ligne ou gérez votre contenu en autonomie. Je développe des boutiques et des sites éditoriaux avec des interfaces d'administration simples à prendre en main.",
      },
    ],
  },
  {
    id: "refonte",
    bg: "muted",
    icon: RefreshCw,
    label: "Service 2",
    title: "Votre site vieillit mal ?\nReconstruisons-le sur des bases saines.",
    preview: {
      title: "Refonte de site",
      description:
        "Votre site vieillit mal ou ne convertit plus ? Je modernise, j'accélère et je repositionne votre présence en ligne.",
      orderMobile: 2,
      orderMd: 2,
    },
    description:
      "Un site lent, vieillissant ou qui ne convertit plus coûte plus cher qu'une refonte. J'analyse ce qui freine vos résultats, je modernise l'interface et je repositionne votre présence en ligne.",
    extra: {
      type: "checklist",
      label: "Ce qui est toujours inclus",
      items: [
        "Design responsive (mobile, tablette, desktop)",
        "Optimisation des performances (Lighthouse > 90)",
        "Redirection des anciennes URLs",
        "Mise en ligne et accompagnement au démarrage",
      ],
    },
    cardsLabel: "Ce que comprend une refonte",
    cards: [
      {
        title: "Audit de l'existant",
        description:
          "J'analyse votre site actuel : performances, SEO, UX, contenu — pour identifier précisément ce qui freine vos résultats avant de reconstruire.",
      },
      {
        title: "Redesign & modernisation",
        description:
          "Nouvelle identité visuelle ou refonte de l'existante, mise en page repensée, expérience utilisateur optimisée.",
      },
      {
        title: "Migration & redirection",
        description:
          "Je gère la migration technique pour préserver votre référencement existant et éviter toute perte de trafic.",
      },
    ],
  },
  {
    id: "charte",
    bg: "background",
    icon: Palette,
    label: "Service 3",
    title: "Vous partez de zéro ?\nJe construis votre identité de A à Z.",
    preview: {
      title: "Identité visuelle & Charte graphique",
      description:
        "Logo, couleurs, typographies, règles d'usage — une identité cohérente qui rend votre marque reconnaissable sur tous vos supports.",
      orderMobile: 5,
      orderMd: 4,
      wide: true,
    },
    description:
      "Un développeur a besoin d'éléments visuels pour travailler — logo, couleurs, typographies. Si vous n'avez rien, pas de problème : je conçois votre identité visuelle complète avant de développer votre site.",
    cardsLabel: "Ce que comprend ce service",
    cards: [
      {
        title: "Logo",
        description:
          "Création d'un logo professionnel, déclinable sur tous vos supports (web, print, réseaux sociaux).",
      },
      {
        title: "Charte graphique",
        description:
          "Palette de couleurs, typographies, règles d'usage — un guide clair pour garantir la cohérence de votre image sur tous vos canaux.",
      },
      {
        title: "Maquettes & prototype",
        description:
          "Wireframes, maquettes desktop et mobile, prototype interactif — vous validez le rendu avant que le développement commence.",
      },
    ],
  },
  {
    id: "seo",
    bg: "muted",
    icon: Search,
    label: "Service 4",
    title: "Soyez trouvé — sur Google,\net sur les intelligences artificielles",
    preview: {
      title: "Audit SEO & Visibilité GEO",
      description:
        "Votre site existe, mais personne ne le trouve ? J'analyse, je diagnostique et je vous donne un plan d'action concret pour remonter sur Google — et dans les IA génératives.",
      orderMobile: 3,
      orderMd: 3,
    },
    description:
      "Avoir un beau site ne suffit plus. Si vos clients ne vous trouvent pas sur Google — ou si votre entreprise n'est jamais citée par ChatGPT, Perplexity ou Gemini quand ils répondent à une question de votre secteur — votre site ne travaille pas pour vous. Je diagnostique ce qui bloque votre visibilité et je vous donne un plan d'action concret.",
    extra: {
      type: "minicards",
      items: [
        {
          title: "Livrable",
          description:
            "Vous recevez un rapport détaillé, clair et priorisé — avec des actions classées par impact et par effort. Pas de jargon, des décisions concrètes.",
        },
        {
          title: "Option suivi",
          description:
            "Je peux rester impliqué après l'audit : mise en œuvre des recommandations, suivi des positions, ajustements réguliers.",
        },
      ],
    },
    cardsLabel: "Ce que comprend un audit complet",
    cards: [
      {
        title: "Audit technique",
        description:
          "Vitesse de chargement, sécurité, structure du code, compatibilité mobile — je vérifie tout ce que Google analyse pour vous classer.",
      },
      {
        title: "Audit contenu & mots-clés",
        description:
          "Vos pages parlent-elles le même langage que vos clients ? J'identifie les opportunités de mots-clés locaux et les contenus à créer ou améliorer.",
      },
      {
        title: "Google Business Profile",
        description:
          "Votre fiche Google est souvent le premier contact avec un client local. Je l'optimise pour maximiser votre visibilité sur les recherches de proximité.",
      },
      {
        title: "GEO — Visibilité sur les IA",
        description:
          "ChatGPT, Perplexity, Gemini... Les intelligences artificielles recommandent désormais des entreprises. Je structure votre contenu pour que vous soyez cité par ces nouveaux moteurs de recherche.",
      },
    ],
  },
  {
    id: "devapp",
    bg: "background",
    icon: Code2,
    label: "Service 5",
    title: "Au-delà du site : des outils qui\nstructurent et automatisent votre activité",
    preview: {
      title: "Développement applicatif",
      description:
        "Outil métier, API, back-office sur mesure — des applications robustes, testées et documentées.",
      orderMobile: 4,
      orderMd: 5,
    },
    description:
      "Certains besoins dépassent ce qu'un site internet peut faire. Gestion interne, automatisation de processus, outils métier spécifiques — je conçois des applications robustes, pensées pour durer et évoluer avec vous.",
    extra: {
      type: "checklist",
      label: "Ma méthode",
      items: [
        "Conception en amont (UML, maquettes, architecture)",
        "Code structuré et documenté (Clean Architecture)",
        "Tests automatisés inclus",
        "Livraison avec guide de prise en main",
      ],
    },
    cardsLabel: "Ce que je développe",
    cards: [
      {
        title: "Application web métier",
        description:
          "Un outil pensé pour votre activité spécifique : gestion de plannings, suivi client, tableau de bord — conçu sur-mesure, pas adapté d'un template générique.",
      },
      {
        title: "API REST & GraphQL",
        description:
          "Je développe des interfaces de programmation pour connecter vos outils entre eux ou exposer vos données à des applications tierces.",
      },
      {
        title: "Back-office & tableau de bord",
        description:
          "Une interface d'administration claire pour piloter votre activité, gérer vos données et suivre vos indicateurs — sans dépendre d'un développeur pour chaque modification.",
      },
      {
        title: "Automatisation & intégrations",
        description:
          "Connectez vos outils existants, automatisez vos tâches répétitives, intégrez des services tiers (paiement, email, CRM...).",
      },
    ],
  },
];
