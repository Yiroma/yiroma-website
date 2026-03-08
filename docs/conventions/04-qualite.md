# Conventions Qualité

## Performance

- **Objectif Lighthouse : > 90** sur toutes les pages (LCP, CLS, FID)
- Utiliser `next/image` avec `width`, `height` et `priority` sur les images above-the-fold
- Utiliser `next/font` pour les polices — zéro FOUT
- Pas de bibliothèques lourdes inutiles — vérifier le bundle size avant d'ajouter une dépendance
- Préférer les Server Components — réduire le JavaScript client au minimum
- Lazy loading pour les composants non critiques (`dynamic()` de Next.js)

---

## Accessibilité (a11y)

- **Niveau WCAG AA minimum**
- Contraste texte/fond : ratio ≥ 4.5:1 (texte normal), ≥ 3:1 (grand texte)
- Tous les éléments interactifs accessibles au clavier (`Tab`, `Enter`, `Escape`)
- `focus-visible` obligatoire sur tous les boutons et liens (`focus-visible:ring-2 ring-primary`)
- Attribut `alt` descriptif sur toutes les images (vide `alt=""` pour les images décoratives)
- Attributs `aria-*` sur les composants interactifs complexes (menu mobile, modals)
- Structure de titres cohérente : un seul `<h1>` par page, hiérarchie respectée

---

## SEO

- `<title>` et `<meta description>` uniques sur chaque page (via `export const metadata`)
- `lang="fr"` sur la balise `<html>`
- URLs en kebab-case, descriptives et en français
- `sitemap.xml` et `robots.txt` générés avant la mise en ligne
- Balises Open Graph (`og:title`, `og:description`, `og:image`) sur toutes les pages
- Données structurées JSON-LD pour le profil freelance (Schema.org `Person` / `LocalBusiness`)

---

## Sécurité

- Pas de secrets dans le code — utiliser les variables d'environnement (`.env.local`)
- Fichier `.env.local` dans `.gitignore` — jamais commité
- Valider et assainir toutes les entrées du formulaire de contact côté serveur
- En-têtes HTTP de sécurité configurés dans `next.config.ts` :
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`

---

## Principes de développement

### KISS — Keep It Simple, Stupid
Choisir la solution la plus simple qui fonctionne. Éviter la sur-ingénierie.

### YAGNI — You Aren't Gonna Need It
Ne pas implémenter une fonctionnalité "au cas où". Implémenter ce qui est requis maintenant.

### DRY — Don't Repeat Yourself
Extraire la logique dupliquée dans un composant ou une fonction utilitaire — mais seulement si la duplication apparaît au moins 3 fois.

### Responsabilité unique
Un composant = une responsabilité. Si un composant fait trop de choses, le découper.

---

## Checklist avant mise en ligne

- [ ] Lighthouse > 90 sur toutes les pages (mobile + desktop)
- [ ] Zéro erreur ESLint / TypeScript
- [ ] Tous les `alt` renseignés
- [ ] Formulaire de contact testé et fonctionnel
- [ ] Meta tags et Open Graph vérifiés
- [ ] `sitemap.xml` et `robots.txt` en place
- [ ] Variables d'environnement configurées sur le VPS
- [ ] Test dark mode sur toutes les pages
- [ ] Test responsive mobile (375px) et desktop (1280px)
