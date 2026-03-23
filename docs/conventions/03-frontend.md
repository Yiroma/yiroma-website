# Conventions Frontend

## Structure des dossiers

```
src/
├── app/                        # Pages — App Router Next.js
│   ├── layout.tsx              # Layout racine (fonts, providers, metadata)
│   ├── page.tsx                # Page Home /
│   ├── globals.css             # CSS global, tokens Tailwind
│   ├── services/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/                     # Composants ShadcnUI (ne pas modifier directement)
│   ├── layout/                 # Navbar, Footer
│   └── home/ services/ pricing/ contact/  # Sections par page
├── data/                       # Données statiques (nav, pricing, services...)
├── lib/
│   └── utils.ts                # Fonction cn() et utilitaires
├── hooks/                      # Hooks React custom
└── types/                      # Types et interfaces globaux
```

---

## Next.js — App Router

- Toutes les pages dans `src/app/` — un dossier par route
- **Server Components par défaut** — n'ajouter `"use client"` que si nécessaire (état, événements, hooks)
- Les métadonnées SEO se définissent avec `export const metadata` dans chaque `page.tsx`
- Les layouts partagés se définissent dans `layout.tsx`
- Pas de `pages/` — utiliser uniquement l'App Router

```typescript
// Métadonnées par page
export const metadata: Metadata = {
  title: "Services — Yiroma",
  description: "...",
};
```

---

## Composants React

- Un composant par fichier
- Props typées avec une interface nommée `<Composant>Props`
- Exporter en named export (pas de default export sauf pour les pages)
- Les composants `"use client"` dans `components/` — jamais directement dans `app/`

```typescript
// ✅ Correct
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (...)
}
```

---

## Tailwind CSS

- Classes Tailwind en priorité — pas de CSS inline
- Variantes dans l'ordre : base → responsive (`sm:`, `md:`, `lg:`) → état (`hover:`, `focus:`)
- Utiliser `cn()` pour les classes conditionnelles
- Mobile-first — concevoir pour mobile, puis adapter desktop
- Ne jamais hardcoder des couleurs hex — utiliser les tokens (`text-primary`, `bg-muted`)

```typescript
// ✅ Correct
<div className={cn(
  "rounded-xl p-6 shadow-sm",
  "hover:shadow-md hover:-translate-y-0.5 transition-all duration-200",
  isActive && "border-2 border-primary"
)} />

// ❌ Interdit
<div style={{ color: "#2563eb" }} />
```

---

## ShadcnUI

- Les composants dans `src/components/ui/` sont générés par ShadcnUI — **ne pas les modifier directement**
- Pour personnaliser un composant ShadcnUI, créer un composant wrapper dans `components/`
- Ajouter un composant : `npx shadcn@latest add <composant>`

---

## Images et médias

- Utiliser `next/image` pour toutes les images — jamais de balise `<img>` nue
- Attribut `alt` obligatoire et descriptif
- Formats : WebP ou AVIF en priorité
- Pas de stock photos génériques — illustrations sobres ou captures réelles

---

## Contenu

- La langue du contenu est le **français** (vouvoiement)
- Les identifiants, classes et variables restent en **anglais**
