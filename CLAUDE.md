# CLAUDE.md — Projet Yiroma

> Ce fichier est la source de vérité du projet. Il doit être lu en priorité avant toute intervention sur le code ou le contenu. Ce fichier doit être mise à jour à chaque étape importante et/ou quand de nouvelles informations/étapes sont ajouter au projet.

---

## 🧑 Contexte & identité

- **Marque :** Yiroma
- **Propriétaire :** Romaric Yi
- **Statut juridique :** Auto-entrepreneur
- **Activité :** Développeur Full Stack Freelance — création de sites web, audit SEO/GEO, développement applicatif sur-mesure
- **Localisation :** Châteauneuf-sur-Loire (45) — présentiel région orléanaise, remote toute la France
- **Contact :** yiromaric@gmail.com · 06 95 38 60 99
- **Liens :** [GitHub](https://github.com/Yiroma) · [LinkedIn](https://linkedin.com/in/yiromaric) · [Malt](#) · [Site](https://yiroma.fr)

---

## 📂 Documents de référence

| Document                     | Lien                                                           |
| ---------------------------- | -------------------------------------------------------------- |
| Brainstorm & plan de route   | [docs/brainstorm.md](docs/brainstorm.md)                       |
| Architecture déploiement     | [docs/deployment.md](docs/deployment.md)                       |
| Design System                | [docs/design/design-system.md](docs/design/design-system.md)   |
| Suggestions & points ouverts | [docs/suggestions.md](docs/suggestions.md)                     |
| Copywriting Home             | [docs/copywrights/home.md](docs/copywrights/home.md)           |
| Copywriting Services         | [docs/copywrights/services.md](docs/copywrights/services.md)   |
| Copywriting Portfolio        | [docs/copywrights/portfolio.md](docs/copywrights/portfolio.md) |
| Copywriting Tarifs           | [docs/copywrights/tarifs.md](docs/copywrights/tarifs.md)       |
| Copywriting Contact          | [docs/copywrights/contact.md](docs/copywrights/contact.md)     |

> Les fichiers de copywriting sont la référence pour tout le contenu des pages.
> Le design system est la référence pour toutes les décisions visuelles.

---

## 🎯 Objectifs du site

1. **Démarcher les entreprises locales** (TPE/PME, artisans, commerçants) de la région orléanaise
2. **Proposer des services freelance** aux grandes entreprises et ESN (via Malt notamment)
3. **Servir de vitrine technique** — le site lui-même doit démontrer la qualité du travail (perf, SEO, accessibilité)

---

## 🗣️ Positionnement & ton

- **Ton :** Pro & corporate — sobre, rassurant, sans jargon inutile
- **Langue :** Français, vouvoiement avec le visiteur
- **Différenciateurs clés :**
  - Diplômé CDA Bac+4 (Concepteur Développeur d'Application)
  - 10 ans d'expérience en management et relation client
  - Capable de livrer de A à Z : conception, développement, déploiement
  - Code propre, testé, documenté (Clean Architecture)

---

## 🏗️ Stack technique

| Couche      | Technologie                                                       |
| ----------- | ----------------------------------------------------------------- |
| Framework   | Next.js 16 (App Router)                                           |
| Langage     | TypeScript 5 (strict)                                             |
| Style       | Tailwind CSS 4 · ShadcnUI                                         |
| Composants  | ShadcnUI v4 · Lucide React · next-themes                          |
| Déploiement | Export statique Next.js → Hostinger (mutualisé)                   |
| Mail        | EmailJS (formulaire de contact, sans backend)                     |
| Qualité     | ESLint 9 (flat config) · Prettier 3 · prettier-plugin-tailwindcss |

---

## 📁 Structure des pages

```
/                   → Home (Hero · Services aperçu bento · Pourquoi Yiroma · Projets · Tarifs résumés · CTA)
/services           → Détail des 5 services (Création · Refonte · Identité visuelle · Audit SEO/GEO · Dev applicatif)
/pricing            → 4 forfaits détaillés + prestations complémentaires + FAQ complète
/contact            → Formulaire + coordonnées
```

> `/portfolio` supprimé de la v1 — 3 projets en aperçu sur la home suffisent. À recréer en v2.

---

## 📄 Copywriting validé par page

### `/` — Home

**Sur-titre :** `Développeur Full Stack Freelance — Orléans & toute la France`
**H1 :** `Du site vitrine à l'application métier, je construis votre présence digitale.`
**Sous-titre :** `Je conçois, je développe — vous devenez visible.`
**CTAs :** `Découvrir mes services` · `Voir mes réalisations`

**Sections :**

1. Hero
2. Services — aperçu 3 colonnes (Création de site · Audit SEO · Dev applicatif)
3. Pourquoi Yiroma — 3 arguments (Concepteur Bac+4 · Manager 10 ans · Code propre)
4. Projets — aperçu 3 cartes (CarePlan · Hive · Taxi Loire Valley)
5. Tarifs — résumé 4 forfaits (prix + cible) + CTA vers `/pricing`
6. CTA final — `Un projet en tête ? Parlons-en.`
7. Footer

---

### `/pricing` — Tarifs

**H1 :** `Des forfaits clairs, sans mauvaise surprise`

**Base de calcul :** TJM 300€/jour (à réviser à 350€ après premières références)

**4 forfaits :**

| Forfait          | Prix               | Cible                                | Délai        |
| ---------------- | ------------------ | ------------------------------------ | ------------ |
| Starter          | À partir de 400€   | Lancement, offre ponctuelle          | 1-2 semaines |
| Pro              | À partir de 900€   | Artisans, PME, professions libérales | 3-4 semaines |
| E-commerce & CMS | À partir de 1 800€ | Boutiques, restaurants, actus        | 5-7 semaines |
| Sur-mesure       | Sur devis          | Entreprises, ESN, applicatif         | Selon CDC    |

**Inclus dans tous les forfaits :** design responsive, SEO technique de base, conseil hébergement
**Option maintenance :** disponible à la demande pour tous les forfaits (pas d'abonnement)
**Paiement en ligne (Stripe etc.) :** option disponible en supplément sur devis (forfait E-commerce)
**Hébergement :** conseil et accompagnement inclus — le client souscrit directement

**FAQ (5 questions) :**

1. Délai de livraison
2. Modification du site en autonomie
3. Hébergement
4. Zone géographique
5. Projet hors forfait

---

### `/contact` — Contact

**H1 :** `Parlons de votre projet`
**Sous-titre :** `Pas besoin d'avoir tout défini. Une idée, un besoin, une question — c'est suffisant pour commencer.`

**Formulaire :**

- Prénom et Nom (obligatoire)
- Email (obligatoire)
- Téléphone (optionnel)
- Type de besoin (select) : Landing page · Site vitrine · E-commerce/CMS · Audit SEO · Dev applicatif · Je ne sais pas encore
- Message (obligatoire)

**Coordonnées affichées :**

- 📧 yiromaric@gmail.com
- 📞 06 95 38 60 99
- 📍 Châteauneuf-sur-Loire (45) — présentiel région orléanaise · remote toute la France

**Liens :** Malt · LinkedIn · GitHub · WhatsApp

---

## 🎨 Directives design

- **Style :** Pro & corporate — sobre, rassurant, épuré
- **Performance cible :** Lighthouse > 90 sur toutes les pages
- **Accessibilité :** Respecter les bonnes pratiques a11y (contraste, aria, focus)
- **Mobile-first :** Toutes les pages pensées mobile en priorité
- **Pas de stock photos génériques** — illustrations sobres ou captures de projets réels

---

## ✅ Règles de développement

- Toujours utiliser TypeScript strict
- Composants dans `/components`, pages dans `/app` (App Router)
- Pas de `any` TypeScript
- Nommage en anglais pour le code, français pour le contenu
- **URLs en anglais** : les routes Next.js (`/app/pricing/`, `/app/services/`, etc.) sont en anglais — prêt pour une future internationalisation. Le label affiché dans la nav reste en français (ex: `href="/pricing"` label `"Tarifs"`).
- Commits en français, conventionnels (feat:, fix:, chore:, etc.)
- Tester la performance Lighthouse avant chaque mise en ligne
- Respecter les bonnes pratiques SEO : balises meta, og:tags, sitemap, robots.txt

### Commentaires JSX

- **Pas de commentaires** dans les `return` JSX pour décrire ce que le code fait (`{/* Icône */}`, `{/* Contenu */}`, etc.)
- Commentaires autorisés uniquement pour expliquer **pourquoi** : contrainte non évidente, logique conditionnelle non triviale
- Si un bloc a besoin d'un commentaire pour être compris, l'extraire en sous-composant nommé

### Conventions UI

- Ce projet utilise `@base-ui/react/button` (pas Radix) → pas de prop `asChild` sur `Button`
- Pattern correct pour un bouton-lien : `<Link className={cn(buttonVariants({ ... }))}>`
- Tailwind en priorité ; CSS vanilla uniquement pour ce qui est inexprimable (ex : `grid-template-areas`)
- `z-index` : utiliser le minimum nécessaire, ne pas dupliquer sur un enfant si le parent crée déjà le stacking context

---

## 🚧 Statut du projet

- [x] Brainstorming & positionnement
- [x] Architecture des pages (wireframes)
- [x] Copywriting home
- [x] Copywriting services (5 services : Création · Refonte · Identité visuelle · Audit SEO/GEO · Dev applicatif)
- [x] Copywriting tarifs
- [x] Copywriting contact
- [x] Design system (palette, typo, composants, tokens ShadcnUI)
- [x] Prototype visuel home
- [x] Développement — mise en place du projet Next.js
- [x] Développement — configuration ESLint / Prettier
- [x] Développement — stratégie de branches Git (main ← dev ← feat/\*)
- [x] Développement — composants communs (Navbar ✅ · Footer ✅ · CTA)
- [x] Développement — page Home (Hero ✅ · Services ✅ · Pourquoi Yiroma ✅ · Projets · Tarifs résumés · CTA final)
- [x] Développement — page cgv
- [x] Développement — page mentions-legales
- [x] Développement — page Services
- [ ] Développement — page Tarifs (`/pricing`)
- [ ] Développement — page Contact
- [ ] SEO — meta tags, sitemap, robots.txt
- [ ] SEO — Google Business Profile
- [x] CI/CD — Husky (commitlint · lint-staged · protection .env)
- [x] CI/CD — GitHub Actions workflow lint (PR feat → dev)
- [x] CI/CD — GitHub Actions workflow deploy (merge dev → main → Hostinger)
- [ ] Formulaire contact — intégration EmailJS
- [x] Déploiement — export statique Next.js (`output: 'export'`)
- [x] Déploiement — mise en ligne sur Hostinger
- [ ] Tests Lighthouse
