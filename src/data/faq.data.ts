export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  // Avant de contacter
  {
    question: "Le devis est-il vraiment gratuit et sans engagement ?",
    answer:
      "Oui, sans exception. Vous décrivez votre besoin, je prépare un devis détaillé — aucune obligation de donner suite. Le projet ne démarre qu'après votre accord écrit et le versement de l'acompte.",
  },
  {
    question: "Et si mon projet ne rentre pas dans un forfait ?",
    answer:
      "C'est souvent le cas — et c'est normal. Décrivez-moi votre besoin, je vous prépare un devis sur-mesure sans engagement.",
  },
  {
    question: "Quelle est la différence entre vous et une agence web ?",
    answer:
      "Avec une agence, vous avez un commercial, un chef de projet, un designer, un développeur — et une facture qui reflète tout ça. Avec moi, vous avez un interlocuteur unique qui gère de A à Z : conception, développement, mise en ligne. Moins d'intermédiaires, plus de réactivité, et des tarifs cohérents avec la réalité d'un projet TPE/PME.",
  },
  // Pendant le projet
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Je demande un acompte de 30 % à la signature du devis, et le solde à la livraison. Pour les projets plus importants, un échéancier peut être aménagé. Aucun frais caché.",
  },
  {
    question: "Combien de temps pour livrer mon site ?",
    answer:
      "Cela dépend de la complexité du projet et de la rapidité de vos retours. Je vous donne un calendrier précis dès le devis accepté. À titre indicatif : 1-2 semaines pour une landing page, 3-4 semaines pour un site vitrine complet.",
  },
  {
    question: "Vous travaillez en dehors d'Orléans ?",
    answer:
      "Je travaille en présentiel sur Châteauneuf-sur-Loire et la région orléanaise, et en full remote pour toute la France.",
  },
  // Après livraison
  {
    question: "À qui appartient le site une fois livré ?",
    answer:
      "Le site vous appartient intégralement. Code source, nom de domaine, hébergement — tout est à votre nom. Vous n'êtes lié à aucun abonnement ni dépendant de ma personne pour faire vivre votre site.",
  },
  {
    question: "Est-ce que je pourrai modifier mon site seul ?",
    answer:
      "Pour les forfaits avec CMS, oui — je vous forme à l'utilisation lors d'une session d'1h incluse. Pour les autres forfaits, les modifications mineures peuvent passer par mon option maintenance.",
  },
  {
    question: "Vous vous occupez de l'hébergement ?",
    answer:
      "Je vous conseille et vous accompagne dans le choix de votre hébergeur selon votre budget et vos besoins. Vous souscrivez directement — vous restez propriétaire de votre infrastructure.",
  },
  // Technique
  {
    question: "Avec quelles technologies travaillez-vous ?",
    answer:
      "Front-end : React, Next.js, TypeScript, Tailwind CSS. Back-end : Node.js, Express, GraphQL, Java/Spring Boot. Bases de données : PostgreSQL, MySQL, SQLite. Tout est versionné, testé et documenté — le code livré vous appartient intégralement.",
  },
];
