export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Le devis est-il vraiment gratuit et sans engagement ?",
    answer:
      "Oui, sans exception. Vous décrivez votre besoin, je prépare un devis détaillé, sans aucune obligation de donner suite. Le projet ne démarre qu'après votre accord écrit et le versement de l'acompte.",
  },
  {
    question: "Et si mon projet ne rentre pas dans un forfait ?",
    answer:
      "C'est souvent le cas, et c'est normal. Décrivez-moi votre besoin, je vous prépare un devis sur-mesure sans engagement.",
  },
  {
    question: "Quelle est la différence entre vous et une agence web ?",
    answer:
      "Avec une agence, vous avez un commercial, un chef de projet, un designer, un développeur, et une facture qui reflète tout ça. Avec moi, vous avez un interlocuteur unique qui gère de A à Z : conception, développement, mise en ligne. Moins d'intermédiaires, plus de réactivité, et des tarifs cohérents avec la réalité d'un projet TPE/PME.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Je demande un acompte de 30 % à la signature du devis, et le solde à la livraison. Pour les projets plus importants, un échéancier peut être aménagé. Aucun frais caché.",
  },
  {
    question: "Combien de temps pour livrer mon site ?",
    answer:
      "Cela dépend de la complexité du projet et de la rapidité de vos retours. À titre indicatif : 1 à 2 semaines pour une landing page, 3 à 4 semaines pour un site vitrine complet, et 1 à 2 semaines de plus si je crée aussi votre charte graphique. Un calendrier précis vous est communiqué à la signature du devis.",
  },
  {
    question: "Vous travaillez en dehors d'Orléans ?",
    answer:
      "Je travaille en présentiel sur Châteauneuf-sur-Loire et la région orléanaise, et en full remote pour toute la France.",
  },
  {
    question: "À qui appartient le site une fois livré ?",
    answer:
      "Le site vous appartient. Une fois la prestation entièrement réglée, vous disposez des droits sur le code source livré, et le nom de domaine et l'hébergement sont à votre nom. Vous n'êtes lié à aucun abonnement ni dépendant de ma personne pour faire vivre votre site. Les éléments de tiers (polices, images libres de droit, composants open source) restent soumis à leurs licences.",
  },
  {
    question: "Est-ce que je pourrai modifier mon site seul ?",
    answer:
      "Pour les forfaits avec CMS, oui : je vous forme à l'utilisation lors d'une session d'1h incluse. Pour les autres forfaits, les modifications passent par moi, sans abonnement : les petites modifications et corrections sont incluses pendant 1 mois après la livraison, puis sur devis.",
  },
  {
    question: "Vous vous occupez de l'hébergement ?",
    answer:
      "Je vous conseille et vous accompagne dans le choix de votre hébergeur et de votre nom de domaine selon votre budget et vos besoins. Vous les souscrivez directement, à votre nom et à vos frais (ils ne sont pas inclus dans mes tarifs), et vous restez propriétaire de votre infrastructure.",
  },
  {
    question: "Puis-je avoir une estimation avant de me décider ?",
    answer:
      "Oui. Je vous envoie un devis à titre informatif, non contractuel, avec des tarifs maintenus pendant 30 jours. Quand vous avez décidé, je prépare le devis définitif avec les éléments retenus, à signer pour lancer le projet.",
  },
  {
    question: "Combien de modifications sont incluses ?",
    answer:
      "Le nombre d'allers-retours est indiqué dans chaque forfait et dans votre devis (2 au minimum). Un aller-retour correspond à une série de retours regroupés, transmis en une seule fois.",
  },
  {
    question: "Pouvez-vous me garantir la première place sur Google ou dans les IA ?",
    answer:
      "Non, et méfiez-vous de ceux qui le promettent. Je mets en place les bonnes pratiques : site rapide, contenu clair, données structurées, référencement local, conseils pour votre fiche Google Business Profile. Le résultat dépend aussi de la concurrence, de vos avis et de votre activité en ligne.",
  },
  {
    question: "Avec quelles technologies travaillez-vous ?",
    answer:
      "Front-end : React, Next.js, TypeScript, Tailwind CSS. Back-end : Node.js, Express, GraphQL, Java/Spring Boot. Bases de données : PostgreSQL, MySQL, SQLite. Tout est versionné, testé et documenté. Le code livré vous appartient une fois la prestation réglée.",
  },
];
