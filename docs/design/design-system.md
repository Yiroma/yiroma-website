# Design System — Yiroma

> Source de vérité pour l'identité visuelle du site. À utiliser comme référence lors du prototypage et du développement.
> Stack UI : **Next.js · Tailwind CSS · ShadcnUI · tweakcn**

---

## 1. Palette de couleurs

Direction choisie : **Marine & Bleu Pur** — sobre, tech, rassurant.

### Tokens sémantiques

Les couleurs sont définies en tant que variables CSS au format **OKLCH** (utilisé par tweakcn et ShadcnUI v4+).
À déclarer dans `globals.css` sous `:root` (light) et `.dark` (dark mode).

> OKLCH : `oklch(L C H)` — Lightness (0–1) · Chroma (0–0.4) · Hue (0–360)
> Avantage : espace colorimétrique perceptuellement uniforme, meilleur rendu des couleurs vives.

### Mode Clair (Light)

| Token sémantique               | Hex       | OKLCH                        | Usage                                      |
| ------------------------------ | --------- | ---------------------------- | ------------------------------------------ |
| `--background`                 | `#FFFFFF` | `oklch(1 0 0)`               | Fond principal des pages                   |
| `--foreground`                 | `#0F172A` | `oklch(0.208 0.042 264.695)` | Texte principal                            |
| `--muted`                      | `#F1F5F9` | `oklch(0.968 0.007 247.896)` | Fond sections alternées, inputs désactivés |
| `--muted-foreground`           | `#4B5B6E` | `oklch(0.48 0.046 257.417)`  | Texte secondaire, labels, placeholders     |
| `--card`                       | `#FFFFFF` | `oklch(1 0 0)`               | Fond des cards                             |
| `--card-foreground`            | `#0F172A` | `oklch(0.208 0.042 264.695)` | Texte dans les cards                       |
| `--primary`                    | `#2563eb` | `oklch(0.546 0.245 262.881)` | CTA principaux, liens actifs, highlights   |
| `--primary-foreground`         | `#FFFFFF` | `oklch(1 0 0)`               | Texte sur fond primary                     |
| `--secondary`                  | `#F8FAFC` | `oklch(0.984 0.003 247.858)` | Boutons secondaires, fonds légers          |
| `--secondary-foreground`       | `#1E293B` | `oklch(0.279 0.041 260.031)` | Texte sur fond secondary                   |
| `--border`                     | `#E2E8F0` | `oklch(0.929 0.013 255.508)` | Bordures, séparateurs                      |
| `--input`                      | `#E2E8F0` | `oklch(0.929 0.013 255.508)` | Bordure des champs de formulaire           |
| `--ring`                       | `#2563eb` | `oklch(0.546 0.245 262.881)` | Focus ring (accessibilité)                 |
| `--destructive`                | `#EF4444` | `oklch(0.637 0.237 25.331)`  | Erreurs, actions destructives              |
| `--destructive-foreground`     | `#FFFFFF` | `oklch(1 0 0)`               | Texte sur fond destructive                 |
| `--accent`                     | `#F1F5F9` | `oklch(0.968 0.007 247.896)` | Hover sur ghost buttons, items de menu     |
| `--accent-foreground`          | `#0F172A` | `oklch(0.208 0.042 264.695)` | Texte sur fond accent                      |
| `--popover`                    | `#FFFFFF` | `oklch(1 0 0)`               | Fond dropdowns, tooltips, popovers         |
| `--popover-foreground`         | `#0F172A` | `oklch(0.208 0.042 264.695)` | Texte dans les popovers                    |
| `--chart-1`                    | `#2563eb` | `oklch(0.546 0.245 262.881)` | Série 1 — blue (couleur primaire)          |
| `--chart-2`                    | `#0EA5E9` | `oklch(0.685 0.169 237.323)` | Série 2 — sky blue                         |
| `--chart-3`                    | `#10B981` | `oklch(0.696 0.17 162.48)`   | Série 3 — emerald                          |
| `--chart-4`                    | `#F59E0B` | `oklch(0.769 0.188 70.08)`   | Série 4 — amber                            |
| `--chart-5`                    | `#8B5CF6` | `oklch(0.606 0.25 292.717)`  | Série 5 — violet                           |
| `--sidebar`                    | `#F8FAFC` | `oklch(0.984 0.003 247.858)` | Fond de la sidebar                         |
| `--sidebar-foreground`         | `#0F172A` | `oklch(0.208 0.042 264.695)` | Texte dans la sidebar                      |
| `--sidebar-primary`            | `#2563eb` | `oklch(0.546 0.245 262.881)` | Item actif / sélectionné dans la sidebar   |
| `--sidebar-primary-foreground` | `#FFFFFF` | `oklch(1 0 0)`               | Texte sur item actif sidebar               |
| `--sidebar-accent`             | `#F1F5F9` | `oklch(0.968 0.007 247.896)` | Hover sur items de la sidebar              |
| `--sidebar-accent-foreground`  | `#0F172A` | `oklch(0.208 0.042 264.695)` | Texte sur hover sidebar                    |
| `--sidebar-border`             | `#E2E8F0` | `oklch(0.929 0.013 255.508)` | Bordure de la sidebar                      |
| `--sidebar-ring`               | `#2563eb` | `oklch(0.546 0.245 262.881)` | Focus ring dans la sidebar                 |

### Mode Sombre (Dark)

| Token sémantique               | Hex       | OKLCH                        | Usage                                  |
| ------------------------------ | --------- | ---------------------------- | -------------------------------------- |
| `--background`                 | `#0F172A` | `oklch(0.208 0.042 264.695)` | Fond principal                         |
| `--foreground`                 | `#F8FAFC` | `oklch(0.984 0.003 247.858)` | Texte principal                        |
| `--muted`                      | `#1E293B` | `oklch(0.279 0.041 260.031)` | Fond sections alternées                |
| `--muted-foreground`           | `#94A3B8` | `oklch(0.704 0.04 256.788)`  | Texte secondaire                       |
| `--card`                       | `#1E293B` | `oklch(0.279 0.041 260.031)` | Fond des cards                         |
| `--card-foreground`            | `#F8FAFC` | `oklch(0.984 0.003 247.858)` | Texte dans les cards                   |
| `--primary`                    | `#3b82f6` | `oklch(0.661 0.214 264.052)` | CTA principaux (légèrement plus clair) |
| `--primary-foreground`         | `#FFFFFF` | `oklch(1 0 0)`               | Texte sur fond primary                 |
| `--secondary`                  | `#1E293B` | `oklch(0.279 0.041 260.031)` | Boutons secondaires                    |
| `--secondary-foreground`       | `#E2E8F0` | `oklch(0.929 0.013 255.508)` | Texte sur fond secondary               |
| `--border`                     | `#334155` | `oklch(0.372 0.044 257.287)` | Bordures, séparateurs                  |
| `--input`                      | `#334155` | `oklch(0.372 0.044 257.287)` | Bordure des champs de formulaire       |
| `--ring`                       | `#3b82f6` | `oklch(0.661 0.214 264.052)` | Focus ring                             |
| `--destructive`                | `#EF4444` | `oklch(0.637 0.237 25.331)`  | Erreurs                                |
| `--destructive-foreground`     | `#FFFFFF` | `oklch(1 0 0)`               | Texte sur fond destructive             |
| `--accent`                     | `#1E293B` | `oklch(0.328 0.041 260.031)` | Hover sur ghost buttons, items de menu |
| `--accent-foreground`          | `#F8FAFC` | `oklch(0.984 0.003 247.858)` | Texte sur fond accent                  |
| `--popover`                    | `#1E293B` | `oklch(0.279 0.041 260.031)` | Fond dropdowns, tooltips, popovers     |
| `--popover-foreground`         | `#F8FAFC` | `oklch(0.984 0.003 247.858)` | Texte dans les popovers                |
| `--chart-1`                    | `#3b82f6` | `oklch(0.661 0.214 264.052)` | Série 1 — blue-500                     |
| `--chart-2`                    | `#38BDF8` | `oklch(0.769 0.133 223.603)` | Série 2 — sky-400                      |
| `--chart-3`                    | `#34D399` | `oklch(0.797 0.154 163.223)` | Série 3 — emerald-400                  |
| `--chart-4`                    | `#FCD34D` | `oklch(0.879 0.169 91.605)`  | Série 4 — amber-300                    |
| `--chart-5`                    | `#A78BFA` | `oklch(0.702 0.183 293.541)` | Série 5 — violet-400                   |
| `--sidebar`                    | `#1E293B` | `oklch(0.279 0.041 260.031)` | Fond de la sidebar                     |
| `--sidebar-foreground`         | `#F8FAFC` | `oklch(0.984 0.003 247.858)` | Texte dans la sidebar                  |
| `--sidebar-primary`            | `#3b82f6` | `oklch(0.661 0.214 264.052)` | Item actif / sélectionné               |
| `--sidebar-primary-foreground` | `#FFFFFF` | `oklch(1 0 0)`               | Texte sur item actif sidebar           |
| `--sidebar-accent`             | `#334155` | `oklch(0.328 0.041 260.031)` | Hover sur items de la sidebar          |
| `--sidebar-accent-foreground`  | `#F8FAFC` | `oklch(0.984 0.003 247.858)` | Texte sur hover sidebar                |
| `--sidebar-border`             | `#334155` | `oklch(0.372 0.044 257.287)` | Bordure de la sidebar                  |
| `--sidebar-ring`               | `#3b82f6` | `oklch(0.661 0.214 264.052)` | Focus ring dans la sidebar             |

### Couleurs utilitaires (Tailwind custom)

À déclarer dans `tailwind.config.ts` pour usage direct dans les classes :

| Nom           | Hex light | Hex dark  | Usage                        |
| ------------- | --------- | --------- | ---------------------------- |
| `navy`        | `#0F172A` | `#F8FAFC` | Couleur de marque principale |
| `blue`        | `#2563eb` | `#3b82f6` | Couleur d'accent principale  |
| `slate-muted` | `#64748B` | `#94A3B8` | Texte secondaire             |

---

## 2. Typographie

### Familles

| Rôle   | Police                | Source       | Variable CSS     |
| ------ | --------------------- | ------------ | ---------------- |
| Titres | **Plus Jakarta Sans** | Google Fonts | `--font-heading` |
| Corps  | **DM sans**           | Google Fonts | `--font-body`    |
| Code   | **JetBrains Mono**    | Google Fonts | `--font-mono`    |

> Chargement via `next/font/google` — pas de FOUT, optimisé pour les performances.

### Échelle typographique

| Élément       | Taille desktop    | Taille mobile     | Graisse | Interligne |
| ------------- | ----------------- | ----------------- | ------- | ---------- |
| H1            | `3rem` (48px)     | `2rem` (32px)     | 700     | 1.2        |
| H2            | `2rem` (32px)     | `1.5rem` (24px)   | 700     | 1.25       |
| H3            | `1.5rem` (24px)   | `1.25rem` (20px)  | 600     | 1.3        |
| Sous-titre    | `1.25rem` (20px)  | `1.125rem` (18px) | 400     | 1.5        |
| Corps         | `1rem` (16px)     | `1rem` (16px)     | 400     | 1.6        |
| Small / label | `0.875rem` (14px) | `0.875rem`        | 400     | 1.5        |
| Caption       | `0.75rem` (12px)  | `0.75rem`         | 400     | 1.4        |

> Tous les titres utilisent **Plus Jakarta Sans**, le reste **DM sans**.

---

## 3. Espacement & grille

Système basé sur le **8pt grid** — tous les espacements sont des multiples de 8px (standard Tailwind).

### Grille de mise en page

| Propriété               | Valeur                         |
| ----------------------- | ------------------------------ |
| Max-width               | `1280px` (`max-w-7xl`)         |
| Padding horizontal page | `24px` mobile / `48px` desktop |
| Colonnes                | 12 colonnes                    |
| Gutter                  | `24px`                         |

### Padding des sections

| Breakpoint | Padding vertical |
| ---------- | ---------------- |
| Mobile     | `48px` (`py-12`) |
| Desktop    | `80px` (`py-20`) |

### Espacements inter-éléments fréquents

| Usage                       | Valeur Tailwind       |
| --------------------------- | --------------------- |
| Entre titre et sous-titre   | `16px` (`gap-4`)      |
| Entre sous-titre et CTA     | `32px` (`mt-8`)       |
| Entre cards dans une grille | `24px` (`gap-6`)      |
| Entre sections de page      | `80px` (`space-y-20`) |

---

## 4. Composants UI

### Radius global

| Token ShadcnUI | Valeur  | Usage                         |
| -------------- | ------- | ----------------------------- |
| `--radius`     | `6px`   | Base pour tous les composants |
| Cards          | `12px`  | `rounded-xl`                  |
| Badges / tags  | `999px` | `rounded-full` (pill)         |
| Inputs         | `6px`   | `rounded-md`                  |

---

### Boutons

**Primaire** — action principale (CTA)

- Fond : `primary` (indigo)
- Texte : blanc
- Radius : `6px`
- Padding : `px-6 py-3`
- Hover : légère assombrissement (`brightness-90`) + transition 150ms
- Taille par défaut : `text-sm font-medium`

**Secondaire** — action alternative

- Fond : transparent
- Bordure : `1px solid border`
- Texte : `foreground`
- Hover : fond `muted`

**Ghost** — action tertiaire, liens internes

- Sans fond, sans bordure
- Texte : `muted-foreground` → `foreground` au hover

**Lien** — navigation inline

- Texte : `primary`
- Underline au hover
- Pas de fond

> Tous les boutons ont un `focus-visible:ring-2 ring-primary` pour l'accessibilité.

---

### Cards

**Card standard** (portfolio, services)

- Fond : `card`
- Radius : `12px` (`rounded-xl`)
- Ombre repos : `shadow-sm` (`0 1px 3px rgba(0,0,0,0.08)`)
- Ombre hover : `shadow-md` + `translateY(-2px)` — transition 200ms
- Padding interne : `24px` (`p-6`)
- Bordure : aucune (distinction par fond et ombre)

**Card tarif**

- Même base que card standard
- Variante "recommandé" : bordure `2px solid primary` + badge "Recommandé"

---

### Badges / Tags (stack technique)

- Fond : `muted`
- Texte : `muted-foreground`
- Radius : pill (`rounded-full`)
- Padding : `px-3 py-1`
- Taille : `text-xs font-medium`
- Pas d'icône par défaut

---

### Formulaires (page Contact)

- Label : `text-sm font-medium text-foreground`
- Input / Select / Textarea :
  - Bordure : `border border-input`
  - Radius : `6px`
  - Fond : `background`
  - Focus : `ring-2 ring-primary ring-offset-2`
  - Placeholder : `text-muted-foreground`
- Champs requis : astérisque `*` en `primary` après le label
- Message d'erreur : `text-destructive text-sm mt-1`

---

### Navigation (Navbar)

- Fond : `background/80` avec `backdrop-blur-md` (glassmorphism léger)
- Sticky en haut de page
- Hauteur : `64px`
- Liens : `text-sm font-medium text-muted-foreground` → `text-foreground` au hover / actif
- CTA navbar : bouton **primaire**, taille `sm`
- Mobile : menu hamburger → drawer latéral (ShadcnUI Sheet)

---

## 5. Ombres

| Nom         | Valeur CSS                    | Usage             |
| ----------- | ----------------------------- | ----------------- |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)`  | Cards au repos    |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.12)` | Cards au hover    |
| `shadow-lg` | `0 8px 24px rgba(0,0,0,0.16)` | Modals, dropdowns |

> En dark mode : opacité légèrement réduite, les ombres sont moins visibles sur fond sombre — compenser avec une légère bordure (`border border-border`).

---

## 6. Iconographie

Bibliothèque : **Lucide React** (`lucide-react`)

| Usage                       | Taille | Couleur            |
| --------------------------- | ------ | ------------------ |
| Icônes de service (H2)      | `32px` | `primary`          |
| Arguments "Pourquoi Yiroma" | `24px` | `primary`          |
| Icônes dans les boutons     | `16px` | Hérité du bouton   |
| Icônes de contact           | `20px` | `muted-foreground` |
| Checkmarks (tarifs)         | `16px` | `primary`          |

> Stroke-width uniforme : `1.5` (défaut Lucide).
> Ne jamais remplir les icônes — garder le style outline.

---

## 7. Animations & transitions

- Durée standard : `150ms` (interactions rapides : hover, focus)
- Durée longue : `300ms` (entrées de composants, modals)
- Easing : `ease-in-out` par défaut
- Pas d'animations décoratives superflues — respecter `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. ShadcnUI & tweakcn

### Configuration ShadcnUI

Fichier `components.json` :

```json
{
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### Workflow tweakcn

1. Utiliser [tweakcn.com](https://tweakcn.com) pour générer le thème CSS à partir des tokens définis dans ce document
2. Coller le résultat dans `globals.css` sous `:root` et `.dark`
3. Ne jamais écraser manuellement les variables générées — passer par tweakcn pour les modifications

### Dark mode

Stratégie : `class` (Tailwind) + `next-themes`

```js
// tailwind.config.ts
darkMode: "class";
```

Le toggle dark/light est géré via `next-themes` (`ThemeProvider` dans le layout racine).

---

## 9. Checklist avant prototype

- [ ] Valider la palette avec un outil de contraste (ratio WCAG AA minimum : 4.5:1 pour le texte)
- [ ] Générer le thème ShadcnUI via tweakcn avec les tokens de ce fichier
- [ ] Configurer `tailwind.config.ts` avec les couleurs custom et les fonts
- [ ] Vérifier le rendu dark mode sur les cards et la navbar
- [ ] Tester les focus ring sur tous les éléments interactifs
