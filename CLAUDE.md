# CLAUDE.md — Projet Yiroma

> Ce fichier est la source de vérité du projet. Il doit être lu en priorité avant toute intervention sur le code ou le contenu. Ce fichier doit être mise à jour à chaque étape importante et/ou quand de nouvelles informations/étapes sont ajouter au projet.

---

## 🧑 Contexte & identité

- **Marque :** Yiroma
- **Propriétaire :** Romaric Yi
- **Statut juridique :** Auto-entrepreneur
- **Activité :** Développeur Full Stack Freelance — création de sites web, audit SEO/GEO, développement applicatif sur-mesure
- **Localisation :** Châteauneuf-sur-Loire (45) — présentiel région orléanaise, remote toute la France
- **Contact :** contact@yiroma.fr · 06 95 38 60 99
- **Liens :** [GitHub](https://github.com/Yiroma) · [LinkedIn](https://linkedin.com/in/yiromaric) · [Malt](https://www.malt.fr/profile/romaricyi) · [Site](https://yiroma.fr)

---

## 📂 Documents de référence

| Document                      | Lien                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| Brainstorm & plan de route    | [docs/brainstorm.md](docs/brainstorm.md)                     |
| Architecture déploiement      | [docs/deployment.md](docs/deployment.md)                     |
| Design System                 | [docs/design/design-system.md](docs/design/design-system.md) |
| Audit & plan SEO/GEO          | [docs/seo-geo-audit.md](docs/seo-geo-audit.md)               |
| Plan animations Framer Motion | [docs/animations-plan.md](docs/animations-plan.md)           |

> Le design system est la référence pour toutes les décisions visuelles.
> Le fichier seo-geo-audit.md est la référence pour l'état d'avancement SEO/GEO et les actions restantes.

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
- [x] Développement — page Tarifs (`/pricing`)
- [x] Développement — page Contact
- [x] SEO — meta tags, sitemap, robots.txt, Open Graph, Twitter Cards, JSON-LD, canonical (voir [docs/seo-geo-audit.md](docs/seo-geo-audit.md))
- [ ] SEO — Google Business Profile (action manuelle post-déploiement)
- [ ] SEO — Soumettre sitemap dans Google Search Console (action manuelle post-déploiement)
- [x] CI/CD — Husky (commitlint · lint-staged · protection .env)
- [x] CI/CD — GitHub Actions workflow lint (PR feat → dev)
- [x] CI/CD — GitHub Actions workflow deploy (merge dev → main → Hostinger)
- [x] Formulaire contact — intégration EmailJS
- [x] ajouter des animations sur le site avec Framer Motion
- [x] Déploiement — export statique Next.js (`output: 'export'`)
- [x] Déploiement — mise en ligne sur Hostinger
- [ ] Tests Lighthouse (post-déploiement — cible > 90 sur toutes les pages)
