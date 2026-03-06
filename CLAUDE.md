# CLAUDE.md — Projet Yiroma

> Ce fichier est la source de vérité du projet. Il doit être lu en priorité avant toute intervention sur le code ou le contenu.

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

| Couche      | Technologie          |
| ----------- | -------------------- |
| Framework   | Next.js (App Router) |
| Langage     | TypeScript           |
| Style       | Tailwind CSS         |
| Déploiement | Vercel               |
| Qualité     | ESLint · Prettier    |

---

## 📁 Structure des pages

```
/                   → Home
/services           → Détail des 3 services
/portfolio          → Réalisations (5 projets)
/tarifs             → 4 forfaits + FAQ
/contact            → Formulaire + coordonnées
```

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
5. CTA final — `Un projet en tête ? Parlons-en.`
6. Footer

---

### `/services` — Services

**H1 :** `Des services digitaux taillés pour votre activité`

**3 services :**

**1. Création & Refonte de site**

- Landing page · Site vitrine · E-commerce/CMS · Refonte
- Toujours inclus : responsive, Lighthouse > 90, SEO de base, formulaire, conseil hébergement

**2. Audit SEO & Visibilité**

- Audit technique · Audit contenu & mots-clés · Google Business Profile · GEO (IA)
- Livrable : rapport détaillé priorisé + option suivi

**3. Développement applicatif**

- Application métier · API REST/GraphQL · Back-office · Automatisation · Intégrations
- Méthode : UML + Clean Architecture + tests automatisés + documentation

**CTA final :** `Pas sûr de ce dont vous avez besoin ? Prenons 30 minutes pour en parler.`

---

### `/portfolio` — Portfolio

**H1 :** `Mes réalisations`
**Sous-titre :** `Des projets concrets, des besoins réels, du code qui fonctionne.`

**Filtres :** Tous · Site web · Application · En cours

**Format de présentation :** Problème → Solution → Stack

**Projets :**

| Projet                     | Année    | Type        | Modal |
| -------------------------- | -------- | ----------- | ----- |
| CarePlan                   | 2025     | Application | ✅    |
| Budget Management          | En cours | Application | ✅    |
| Hive                       | 2025     | Application | ❌    |
| Taxi Loire Valley Services | 2024     | Site web    | ❌    |
| DevMX                      | 2023     | Site web    | ❌    |

**Détail projets :**

**CarePlan (2025)**

- Besoin : Gestion de plannings médicaux multi-rôles
- Solution : Architecture microservices, GraphQL, tests automatisés
- Stack : React · TypeScript · Apollo · GraphQL · TypeORM · PostgreSQL · Docker

**Budget Management (en cours)**

- Besoin : Application de gestion financière robuste et conteneurisée
- Solution : Architecture en couches, API REST, Java/Spring Boot + Next.js
- Stack : Next.js · TypeScript · Tailwind · Java · Spring Boot · PostgreSQL · Docker

**Hive (2025)**

- Besoin : Bibliothèque de médias locale avec favoris et recommandations
- Solution : Interface mobile-first, GraphQL, SQLite léger
- Stack : React · TypeScript · Tailwind · Apollo · GraphQL · TypeORM · SQLite

**Taxi Loire Valley Services (2024)**

- Besoin : VTC local sans présence en ligne
- Solution : Site vitrine + identité visuelle + SEO local — Lighthouse > 95
- Stack : HTML5 · CSS3 · JavaScript

**DevMX (2023)**

- Besoin : Blog communautaire pour développeurs
- Solution : Auth complète, rôles utilisateurs, interface admin
- Stack : React · SASS · Node.js · Express · MySQL

**CTA final :** `Votre projet pourrait être ici.`

---

### `/tarifs` — Tarifs

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

**Liens :** Malt · LinkedIn · GitHub

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
- Commits en français, conventionnels (feat:, fix:, chore:, etc.)
- Tester la performance Lighthouse avant chaque mise en ligne
- Respecter les bonnes pratiques SEO : balises meta, og:tags, sitemap, robots.txt

---

## 🚧 Statut du projet

- [x] Brainstorming & positionnement
- [x] Architecture des pages (wireframes)
- [x] Copywriting home
- [x] Copywriting services
- [x] Copywriting portfolio
- [x] Copywriting tarifs
- [x] Copywriting contact
- [ ] Prototype visuel home
- [ ] Développement — mise en place du projet Next.js
- [ ] Développement — composants communs (Navbar, Footer, CTA)
- [ ] Développement — page Home
- [ ] Développement — page Services
- [ ] Développement — page Portfolio
- [ ] Développement — page Tarifs
- [ ] Développement — page Contact
- [ ] SEO — meta tags, sitemap, robots.txt
- [ ] SEO — Google Business Profile
- [ ] Déploiement sur VPS (docker)
- [ ] Tests Lighthouse
