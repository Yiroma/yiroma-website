# Audit & Plan SEO/GEO — Yiroma

> Suivi de l'optimisation SEO/GEO du site yiroma.fr.
> Ce fichier est mis à jour à chaque étape réalisée.

---

## Bilan de l'audit initial

### Points forts

- Hiérarchie de contenu solide (H1 → H2 → H3) sur toutes les pages
- Métadonnées basiques présentes (`title`, `description`) sur chaque page
- Localisation mentionnée naturellement dans le contenu (Orléans, Loiret, région)
- Design responsive et accessibilité correcte (aria, sémantique HTML)
- Export statique Next.js → performances élevées
- Web App Manifest configuré

### Lacunes identifiées

- Pas de `metadataBase` → URLs OG relatives, donc invalides
- Pas de `sitemap.xml`
- Pas de `robots.txt`
- Pas d'Open Graph ni Twitter Cards sur aucune page
- Pas de JSON-LD / données structurées
- Pas de mots-clés longue traîne locaux dans le contenu
- Image OG manquante (et mal placée dans `/src/app/` au lieu de `/public/`)
- Pas de balise `canonical` sur les pages secondaires

---

## P0 — Critique ✅ Terminé

> Éléments bloquants pour l'indexation et le partage social.

| Élément                                              | Fichier                     | Statut |
| ---------------------------------------------------- | --------------------------- | ------ |
| Image OG 1200×630 déplacée dans `/public/`           | `public/og-1200x630.png`    | ✅     |
| `metadataBase` défini                                | `src/app/layout.tsx`        | ✅     |
| `title.template` pour héritage des pages             | `src/app/layout.tsx`        | ✅     |
| Open Graph global (type, locale, siteName, image)    | `src/app/layout.tsx`        | ✅     |
| Twitter Card `summary_large_image` global            | `src/app/layout.tsx`        | ✅     |
| Directives `robots` explicites + `max-image-preview` | `src/app/layout.tsx`        | ✅     |
| `canonical` racine                                   | `src/app/layout.tsx`        | ✅     |
| `keywords` longue traîne locaux                      | `src/app/layout.tsx`        | ✅     |
| `sitemap.ts` → génère `/sitemap.xml`                 | `src/app/sitemap.ts`        | ✅     |
| `robots.ts` → génère `/robots.txt`                   | `src/app/robots.ts`         | ✅     |
| Open Graph + canonical sur `/services`               | `src/app/services/page.tsx` | ✅     |
| Open Graph + canonical sur `/pricing`                | `src/app/pricing/page.tsx`  | ✅     |
| Open Graph + canonical sur `/contact`                | `src/app/contact/page.tsx`  | ✅     |

---

## P1 — Important ✅ Terminé (code)

> SEO local, rich snippets et données structurées.

### Code livré

| Élément                                                 | Fichier                                 | Statut |
| ------------------------------------------------------- | --------------------------------------- | ------ |
| JSON-LD `Organization` (nom, logo, email, tél, réseaux) | `src/app/layout.tsx`                    | ✅     |
| JSON-LD `LocalBusiness` (adresse, géo, zone de service) | `src/app/layout.tsx`                    | ✅     |
| JSON-LD `WebSite`                                       | `src/app/layout.tsx`                    | ✅     |
| JSON-LD `FAQPage` (10 Q/R → rich snippets Google)       | `src/components/seo/JsonLdPricing.tsx`  | ✅     |
| JSON-LD `ItemList` de `Service` (forfaits + addons)     | `src/components/seo/JsonLdPricing.tsx`  | ✅     |
| JSON-LD `ItemList` de `Service` (5 services)            | `src/components/seo/JsonLdServices.tsx` | ✅     |
| JSON-LD `BreadcrumbList` sur `/services`                | `src/components/seo/JsonLdServices.tsx` | ✅     |
| JSON-LD `ContactPage` + `Person`                        | `src/components/seo/JsonLdContact.tsx`  | ✅     |
| JSON-LD `BreadcrumbList` sur `/contact`                 | `src/components/seo/JsonLdContact.tsx`  | ✅     |

### Actions hors code — À faire manuellement

| Action                                               | Prérequis    | Statut |
| ---------------------------------------------------- | ------------ | ------ |
| Soumettre `sitemap.xml` dans Google Search Console   | Site déployé | ⬜     |
| Créer / revendiquer la fiche Google Business Profile | —            | ⬜     |

---

## P2 — Optimisation contenu & mots-clés ✅ Terminé

> Enrichissement du contenu pour un meilleur positionnement sur les requêtes locales et longue traîne.

| Action                                                                                 | Fichier                                    | Statut |
| -------------------------------------------------------------------------------------- | ------------------------------------------ | ------ |
| Ancrage géographique dans le sous-titre du Hero home                                   | `src/components/home/HomeHero.tsx`         | ✅     |
| Cibles sectorielles (artisans, commerçants, PME) dans WhyYiroma                        | `src/components/home/WhyYiroma.tsx`        | ✅     |
| Mots-clés "création de site internet", "Orléans", "Loiret" dans le sous-titre Services | `src/components/services/ServicesHero.tsx` | ✅     |
| Correction du bug d'entités HTML échappées dans ServicesHero                           | `src/components/services/ServicesHero.tsx` | ✅     |
| Vérification des `alt` sur toutes les images                                           | `HomeHero.tsx`, `WhyYiroma.tsx`            | ✅     |

---

## P3 — GEO (Visibilité sur les IA génératives) ✅ Terminé (code)

> ChatGPT, Perplexity, Gemini, Copilot — optimiser pour être cité par ces nouveaux moteurs.

### Code livré

| Action                                                                                        | Fichier                     | Statut |
| --------------------------------------------------------------------------------------------- | --------------------------- | ------ |
| JSON-LD `Person` pour Romaric Yi (entité nommée avec `knowsAbout` GEO/SEO/dev)                | `src/app/layout.tsx`        | ✅     |
| Enrichissement description service SEO/GEO avec mention explicite ChatGPT, Perplexity, Gemini | `src/data/services.data.ts` | ✅     |
| `humans.txt` (lu par certains crawlers d'IA)                                                  | `public/humans.txt`         | ✅     |

### Actions hors code — À faire manuellement

| Action                                   | Détail                                                                                | Statut |
| ---------------------------------------- | ------------------------------------------------------------------------------------- | ------ |
| Enrichir le profil Malt                  | Description détaillée, compétences GEO, projets — les IA citent les sources reconnues | ⬜     |
| Publier des articles LinkedIn sur le GEO | Signaux d'autorité externes indexés par les IA                                        | ⬜     |
| Être référencé sur des annuaires locaux  | CCI Loiret, Pages Jaunes Pro, BNI, annuaires freelance                                | ⬜     |

---

## P4 — Polish & robustesse ✅ Terminé (code)

> Finitions techniques et validation finale.

### Code & vérifications

| Action                                  | Détail                                                                                                                                        | Statut |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Vérification des favicons et icônes PWA | `favicon.ico`, `favicon.svg`, `apple-icon.png`, `icon-192x192.png`, `icon-512x512.png` sont dans `src/app/` — correct pour Next.js App Router | ✅     |
| ESLint — zéro warning/erreur            | `npm run lint` → propre                                                                                                                       | ✅     |
| Build statique complet                  | Toutes les routes générées en statique, TypeScript strict OK                                                                                  | ✅     |

### Actions hors code — À faire après déploiement

| Action                                               | Outil                                                                                                                              | Statut |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Tests Lighthouse > 90 sur toutes les pages           | Chrome DevTools / PageSpeed Insights                                                                                               | ⬜     |
| Validation des données structurées JSON-LD           | [Google Rich Results Test](https://search.google.com/test/rich-results) · [Schema Markup Validator](https://validator.schema.org/) | ⬜     |
| Vérification du rendu Open Graph                     | [OpenGraph.xyz](https://www.opengraph.xyz/) · [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)                  | ⬜     |
| Soumettre `sitemap.xml` dans Google Search Console   | Google Search Console                                                                                                              | ⬜     |
| Créer / revendiquer la fiche Google Business Profile | Google Business Profile                                                                                                            | ⬜     |

---

## Récapitulatif global

| Phase                                             | Statut            | Notes                                          |
| ------------------------------------------------- | ----------------- | ---------------------------------------------- |
| P0 — Critique (sitemap, robots, OG, metadataBase) | ✅ Terminé        | —                                              |
| P1 — Structured data + JSON-LD                    | ✅ Terminé (code) | GSC + GBP à faire manuellement                 |
| P2 — Contenu & mots-clés longue traîne            | ✅ Terminé        | —                                              |
| P3 — GEO (IA génératives)                         | ✅ Terminé (code) | Malt, LinkedIn, annuaires à faire manuellement |
| P4 — Polish & robustesse                          | ✅ Terminé (code) | Lighthouse, validations, GSC post-déploiement  |
