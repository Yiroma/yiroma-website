# Plan d'animations Framer Motion — Yiroma

> Ce document recense tous les éléments à animer avec Framer Motion pour obtenir un rendu visuel moderne et professionnel. Les animations doivent rester sobres et en accord avec le positionnement corporate du site.

---

## Principes directeurs

- **Sobriété** : animations légères, durées courtes (0.3–0.6s), easings naturels
- **Entrance-first** : priorité aux animations d'apparition au scroll (viewport)
- **Stagger** : décalage progressif sur les listes de cartes pour un effet "cascade"
- **Accessibilité** : toutes les animations respectent `prefers-reduced-motion` via `useReducedMotion()`
- **Performance** : animer uniquement `opacity`, `transform` (translate, scale) — jamais `width`, `height`, `color`

---

## Installation & setup

### 1. Installation

```bash
npm install framer-motion
```

### 2. Fichier de variants partagés

Créer `src/lib/motion-variants.ts` avec les variants réutilisables :

```ts
// Fade in depuis le bas (usage général)
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Fade in simple
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

// Fade in depuis la gauche
export const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Fade in depuis la droite
export const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Container pour stagger enfants
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Item dans un stagger
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Scale in (badges, icônes)
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};
```

### 3. Hook `useAnimationInView`

Créer `src/hooks/useAnimationInView.ts` pour simplifier le déclenchement au scroll :

```ts
import { useInView } from "framer-motion";
import { useRef } from "react";

export function useAnimationInView(options = { once: true, amount: 0.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  return { ref, isInView };
}
```

---

## Pages & composants à animer

---

### 🏠 Page Home (`/`)

#### `HomeHero.tsx`

| Élément                     | Animation                           | Détail                             |
| --------------------------- | ----------------------------------- | ---------------------------------- |
| Badge localisation (MapPin) | `scaleIn` + `fadeIn`                | Apparaît en premier, léger pop     |
| Titre H1 (2 lignes)         | `fadeInUp` staggeré ligne par ligne | Chaque ligne avec délai 0.1s       |
| Paragraphe description      | `fadeInUp`                          | Après le titre, délai 0.2s         |
| Groupe de boutons CTA       | `fadeInUp`                          | Après la description, délai 0.3s   |
| Illustration `hero.svg`     | `fadeIn` + légère translation Y     | Apparaît depuis le bas, délai 0.4s |

> Toute la séquence hero est une animation au **chargement de page** (pas au scroll), orchestrée avec `staggerContainer`.

---

#### `ServicesPreview.tsx`

| Élément                           | Animation                               | Détail                                  |
| --------------------------------- | --------------------------------------- | --------------------------------------- |
| `SectionHeader` (eyebrow + titre) | `fadeInUp`                              | Déclenché au scroll                     |
| Grille de 5 cartes bento          | `staggerContainer`                      | Les cartes apparaissent en cascade      |
| Chaque carte                      | `staggerItem` (fadeInUp)                | Délai progressif 0.08s entre chaque     |
| Hover sur carte                   | `whileHover: { y: -4, scale: 1.01 }`    | Remplace les classes Tailwind actuelles |
| Icône de service au hover         | `whileHover: { rotate: 5, scale: 1.1 }` | Micro-interaction subtile               |

---

#### `WhyYiroma.tsx`

| Élément                         | Animation                                          | Détail              |
| ------------------------------- | -------------------------------------------------- | ------------------- |
| `SectionHeader`                 | `fadeInUp`                                         | Déclenché au scroll |
| Article 1 (illustration gauche) | Illustration : `fadeInLeft`, Texte : `fadeInRight` | Triggered au scroll |
| Article 2 (illustration droite) | Illustration : `fadeInRight`, Texte : `fadeInLeft` | Triggered au scroll |
| Article 3 (illustration gauche) | Illustration : `fadeInLeft`, Texte : `fadeInRight` | Triggered au scroll |

> Chaque article se déclenche indépendamment quand il entre dans le viewport (`once: true, amount: 0.3`).

---

#### `PricingPreview.tsx`

| Élément                         | Animation                          | Détail                        |
| ------------------------------- | ---------------------------------- | ----------------------------- |
| `SectionHeader`                 | `fadeInUp`                         | Déclenché au scroll           |
| 4 cartes tarifs                 | `staggerContainer` + `staggerItem` | Cascade d'apparition          |
| Carte "populaire" (highlighted) | `scaleIn` légèrement plus grand    | Se distingue visuellement     |
| Hover sur carte                 | `whileHover: { y: -6, boxShadow }` | Élévation au survol           |
| Boutons CTA bas de section      | `fadeInUp`                         | Apparaissent après les cartes |

---

#### `HomeCtaFinal.tsx`

| Élément           | Animation  | Détail              |
| ----------------- | ---------- | ------------------- |
| Titre             | `fadeInUp` | Déclenché au scroll |
| Description       | `fadeInUp` | Délai 0.15s         |
| Groupe de boutons | `fadeInUp` | Délai 0.3s          |

---

### 🛠️ Page Services (`/services`)

#### `ServicesHero.tsx`

| Élément                       | Animation                                   | Détail                    |
| ----------------------------- | ------------------------------------------- | ------------------------- |
| Eyebrow + Titre + Description | `staggerContainer` + `fadeInUp` par élément | Séquence d'entrée de page |

---

#### `ServiceSection.tsx`

| Élément                 | Animation                                    | Détail                        |
| ----------------------- | -------------------------------------------- | ----------------------------- |
| Chaque `ServiceSection` | `fadeInUp` au scroll                         | `once: true, amount: 0.2`     |
| Illustration alternée   | `fadeInLeft` ou `fadeInRight` selon position | Miroir de l'illustration      |
| Texte alterné           | Inverse de l'illustration                    | Effet symétrique              |
| Liste de features       | `staggerContainer` + `staggerItem`           | Items apparaissent en cascade |
| Numéro de service       | `scaleIn`                                    | Discret, juste un pop         |

---

#### `ServicesCtaFinal.tsx`

| Élément | Animation           | Détail                          |
| ------- | ------------------- | ------------------------------- |
| Contenu | `fadeInUp` staggeré | Même pattern que `HomeCtaFinal` |

---

### 💰 Page Tarifs (`/pricing`)

#### `PricingHero.tsx`

| Élément                       | Animation                       | Détail         |
| ----------------------------- | ------------------------------- | -------------- |
| Eyebrow + Titre + Description | `staggerContainer` + `fadeInUp` | Entrée de page |

---

#### `PricingSection.tsx` / `PricingCard.tsx`

| Élément              | Animation                               | Détail                 |
| -------------------- | --------------------------------------- | ---------------------- |
| Section header       | `fadeInUp`                              | Déclenché au scroll    |
| Grille de 4 cartes   | `staggerContainer`                      | Cascade                |
| Chaque `PricingCard` | `staggerItem`                           | Apparition progressive |
| Carte mise en avant  | `scaleIn` + légère ombre                | Se distingue du lot    |
| Liste des inclus     | `staggerItem` avec délai supplémentaire | Micro-stagger interne  |
| Hover sur carte      | `whileHover: { y: -6 }`                 | Élévation              |

---

#### `AddonSection.tsx`

| Élément      | Animation                          | Détail |
| ------------ | ---------------------------------- | ------ |
| Header       | `fadeInUp`                         |        |
| Items addons | `staggerContainer` + `staggerItem` |        |

---

#### `FaqSection.tsx`

| Élément                  | Animation                            | Détail                                                          |
| ------------------------ | ------------------------------------ | --------------------------------------------------------------- |
| Header                   | `fadeInUp`                           |                                                                 |
| Liste d'accordéons       | `staggerContainer` + `staggerItem`   | Apparition en cascade                                           |
| Contenu accordion ouvert | `AnimatePresence` + height animation | Ouverture/fermeture fluide (`overflow: hidden`, `height: auto`) |

> L'animation d'accordion est la plus technique : utiliser `motion.div` avec `initial={{ height: 0 }}` et `animate={{ height: "auto" }}`.

---

### 📬 Page Contact (`/contact`)

#### `ContactHero.tsx`

| Élément                       | Animation                       | Détail         |
| ----------------------------- | ------------------------------- | -------------- |
| Eyebrow + Titre + Description | `staggerContainer` + `fadeInUp` | Entrée de page |

---

#### `ContactForm.tsx`

| Élément                                | Animation                                     | Détail                             |
| -------------------------------------- | --------------------------------------------- | ---------------------------------- |
| Formulaire entier                      | `fadeInUp` au scroll                          | Bloc global                        |
| Chaque champ du formulaire             | `staggerItem`                                 | Apparition ligne par ligne         |
| Message de succès/erreur               | `AnimatePresence` + `fadeIn`                  | Apparition fluide après soumission |
| Bloc coordonnées (email, tel, adresse) | `staggerItem`                                 | Cohérent avec le formulaire        |
| Liens sociaux                          | `staggerItem` + `whileHover: { scale: 1.15 }` | Micro-interaction                  |

---

### 🧭 `Navbar.tsx` / `NavbarMobile.tsx`

| Élément                       | Animation                                       | Détail                                              |
| ----------------------------- | ----------------------------------------------- | --------------------------------------------------- |
| Navbar au scroll (apparition) | `motion.header` avec `useScroll` + opacité/blur | Background qui s'opacifie au scroll                 |
| Lien actif (underline)        | `layoutId="nav-indicator"`                      | Animation de sliding indicator sous le lien actif   |
| Menu mobile (Sheet)           | `AnimatePresence` + slide depuis la droite      | Remplacement ou enrichissement de la Sheet ShadcnUI |
| Items menu mobile             | `staggerContainer` + `staggerItem`              | Apparition en cascade                               |

---

### 🦶 `Footer.tsx`

| Élément            | Animation                           | Détail                          |
| ------------------ | ----------------------------------- | ------------------------------- |
| Colonnes du footer | `staggerContainer` + `staggerItem`  | Apparition en cascade au scroll |
| Liens sociaux      | `whileHover: { y: -3, scale: 1.1 }` | Micro-interaction hover         |

---

## Récapitulatif des patterns utilisés

| Pattern                            | Composants concernés                              |
| ---------------------------------- | ------------------------------------------------- |
| `fadeInUp` au scroll               | SectionHeader, Hero textes, CTA                   |
| `staggerContainer` + `staggerItem` | ServicesPreview, PricingSection, FAQ, ContactForm |
| `fadeInLeft` / `fadeInRight`       | WhyYiroma articles, ServiceSection illustrations  |
| `scaleIn`                          | Badges, icônes, carte mise en avant               |
| `whileHover`                       | Toutes les cartes, liens sociaux, boutons         |
| `AnimatePresence`                  | Accordion FAQ, formulaire soumis, menu mobile     |
| `useScroll` + `useTransform`       | Navbar background, effets parallaxe subtils       |
| `layoutId`                         | Indicateur lien actif Navbar                      |

---

## Ordre de priorité d'implémentation

### Priorité 1 — Impact visuel fort, implémentation simple

1. [ ] Setup : installer framer-motion, créer `motion-variants.ts`
2. [ ] `HomeHero.tsx` — séquence d'entrée complète
3. [ ] `ServicesPreview.tsx` — stagger des cartes bento
4. [ ] `WhyYiroma.tsx` — fade directionnels gauche/droite
5. [ ] `PricingPreview.tsx` — stagger des cartes tarifs

### Priorité 2 — Cohérence cross-pages

6. [ ] `ServicesHero.tsx` + `ServiceSection.tsx`
7. [ ] `PricingSection.tsx` + `PricingCard.tsx`
8. [ ] `ContactHero.tsx` + `ContactForm.tsx`
9. [ ] Tous les `CtaFinal` (Home, Services, Pricing, Contact)

### Priorité 3 — Détails et micro-interactions

10. [ ] Navbar — background au scroll + `layoutId` indicateur
11. [ ] `FaqSection.tsx` — accordion avec `AnimatePresence`
12. [ ] `Footer.tsx` — stagger + hover liens sociaux
13. [ ] Menu mobile (`NavbarMobile.tsx`) — slide + stagger
14. [ ] `AddonSection.tsx`

---

## Notes techniques

- **`"use client"` obligatoire** sur tous les composants utilisant Framer Motion (hooks React)
- **Server Components** : les composants purement serveur devront être wrappés dans un client wrapper si on veut les animer
- **`AnimatePresence`** doit entourer les éléments conditionnels à son niveau le plus haut possible
- **`once: true`** sur `useInView` pour ne déclencher l'animation qu'une seule fois (meilleure perf)
- **Éviter** `layout` animations sur de grandes sections — réservé aux éléments compacts (indicateur nav, accordion)
- **`useReducedMotion()`** de Framer Motion : wrapper global à prévoir pour désactiver les animations si nécessaire
