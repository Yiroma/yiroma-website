# Conventions Code Style

## TypeScript

- Mode **strict** obligatoire (`tsconfig.json` — `"strict": true`)
- Pas de `any` — utiliser `unknown` si le type est indéterminé
- Typage explicite des props de composants (interface ou type)
- Pas de `// @ts-ignore` — corriger le problème à la source
- Nommage du code en **anglais** (variables, fonctions, types, fichiers)

```typescript
// ✅ Correct
interface CardProps {
  title: string;
  description: string;
  href?: string;
}

// ❌ Interdit
const data: any = fetch(...);
```

---

## Nommage

| Élément                  | Convention          | Exemple                          |
| ------------------------ | ------------------- | -------------------------------- |
| Composants React         | PascalCase          | `ServiceCard.tsx`                |
| Hooks custom             | camelCase + `use`   | `useTheme.ts`                    |
| Fonctions utilitaires    | camelCase           | `formatDate.ts`                  |
| Types / Interfaces       | PascalCase          | `ServiceItem`, `ProjectCardProps`|
| Variables / constantes   | camelCase           | `isMenuOpen`, `projectList`      |
| Constantes globales      | SCREAMING_SNAKE_CASE| `MAX_PROJECTS`                   |
| Fichiers composants      | PascalCase          | `Navbar.tsx`                     |
| Autres fichiers          | kebab-case          | `theme-provider.tsx`             |
| Dossiers                 | kebab-case          | `components/ui/`                 |

---

## Prettier

Configuration dans `.prettierrc` (ou `prettier.config.mjs`) :

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2
}
```

- Formatage automatique à la sauvegarde (VSCode : `editor.formatOnSave`)
- Ne jamais commiter du code non formaté

---

## ESLint

- Config dans `eslint.config.mjs` (ESLint flat config)
- Règles Next.js activées : `next/core-web-vitals`
- Ne pas désactiver les règles sans justification commentée
- Zéro warning en production

---

## Imports

Ordre des imports dans chaque fichier :

```typescript
// 1. Next.js / React
import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

// 2. Bibliothèques externes
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// 3. Composants internes
import { Navbar } from "@/components/navbar";

// 4. Types locaux
import type { ServiceItem } from "@/types";

// 5. Styles (si nécessaire)
import "./styles.css";
```

- Utiliser l'alias `@/` — jamais de chemins relatifs remontants (`../../`)
