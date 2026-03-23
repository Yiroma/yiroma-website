# Yiroma — Site vitrine freelance

Site vitrine de **Yiroma**, développeur Full Stack Freelance. Conçu pour démarcher les entreprises locales de la région orléanaise et servir de vitrine technique (performance, SEO, accessibilité).

**Production :** [yiroma.fr](https://yiroma.fr)

---

## Stack technique

| Couche      | Technologie                                     |
| ----------- | ----------------------------------------------- |
| Framework   | Next.js 16 (App Router, export statique)        |
| Langage     | TypeScript 5 (strict)                           |
| Style       | Tailwind CSS 4 · ShadcnUI                       |
| Composants  | @base-ui/react · Lucide React · next-themes     |
| Animations  | Framer Motion 12                                |
| Formulaire  | Cloudflare Worker + Turnstile (captcha RGPD)    |
| Analytics   | Google Analytics 4 (consentement RGPD)          |
| Déploiement | Export statique → rsync SSH → Hostinger         |
| CI/CD       | GitHub Actions (lint + deploy)                  |
| Linting     | ESLint 9 (flat config) · Prettier 3             |
| Hooks Git   | Husky 9 (commitlint · lint-staged · .env guard) |

---

## Pages

| Route       | Description                                          |
| ----------- | ---------------------------------------------------- |
| `/`         | Home — Hero, services, différenciateurs, tarifs, CTA |
| `/services` | Détail des 5 services                                |
| `/pricing`  | 4 forfaits + add-ons + FAQ                           |
| `/contact`  | Formulaire de contact + coordonnées                  |
| `/cgv`      | Conditions Générales de Vente                        |
| `/legals`   | Mentions légales                                     |

---

## Prérequis

- Node.js 20+
- npm

---

## Installation

```bash
git clone https://github.com/Yiroma/yiroma-website.git
cd yiroma-website
npm install
```

Copier le fichier d'environnement et renseigner les valeurs :

```bash
cp .env.sample .env.local
```

| Variable                         | Description                                      |
| -------------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Clé publique Cloudflare Turnstile (captcha)      |
| `NEXT_PUBLIC_WORKER_URL`         | URL du Cloudflare Worker (formulaire de contact) |
| `NEXT_PUBLIC_GA_ID`              | Identifiant de mesure Google Analytics 4         |

---

## Développement

```bash
npm run dev     # Serveur de développement (http://localhost:3000)
npm run lint    # ESLint
npm run format  # Prettier
npm run build   # Build export statique → ./out/
```

---

## Déploiement

Le déploiement est entièrement automatisé via GitHub Actions.

### Workflow CI (`ci.yml`)

Déclenché sur chaque **Pull Request vers `dev`** :

1. `npm ci`
2. `npm run lint`
3. `npm run build`

### Workflow Deploy (`deploy.yml`)

Déclenché sur chaque **push vers `main`** :

1. `npm ci` + `npm run build` → génère `./out/`
2. `rsync` SSH vers le serveur de production

**Secrets GitHub requis :**

| Secret                           | Description                             |
| -------------------------------- | --------------------------------------- |
| `SSH_PRIVATE_KEY`                | Clé privée SSH                          |
| `SSH_HOST`                       | Hôte du serveur                         |
| `SSH_PORT`                       | Port SSH                                |
| `SSH_USERNAME`                   | Utilisateur SSH                         |
| `SSH_TARGET_PATH`                | Chemin cible (ex: `public_html/`)       |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Clé Turnstile injectée au build         |
| `NEXT_PUBLIC_WORKER_URL`         | URL Cloudflare Worker injectée au build |

### Stratégie de branches

```
feat/* → PR → dev → PR → main → déploiement automatique
```

---

## Qualité du code

### Commits

Format conventionnel imposé par commitlint :

```
feat: ajout de la section tarifs
fix: correction du menu mobile
chore: mise à jour des dépendances
```

### Pre-commit (Husky + lint-staged)

Sur chaque commit :

- Prettier sur `*.{ts,tsx,json,md}`
- ESLint sur `*.{ts,tsx}` (zéro warning toléré)
- Blocage de tout fichier `.env` hors `.env.sample`

### Cible de performance

Lighthouse 100% sur toutes les pages (performance, accessibilité, SEO, best practices).

---

## Structure du projet

```
src/
├── app/              # Pages Next.js (App Router)
├── components/
│   ├── analytics/    # GA4 + cookie banner RGPD
│   ├── contact/      # Composants page /contact
│   ├── home/         # Composants page /
│   ├── layout/       # Navbar, Footer, ThemeToggle
│   ├── pricing/      # Composants page /pricing
│   ├── seo/          # JSON-LD structured data
│   ├── services/     # Composants page /services
│   └── ui/           # Composants réutilisables (ShadcnUI + custom)
├── data/             # Données statiques (services, pricing, nav, FAQ)
├── hooks/            # Hooks custom (cookies, animations)
└── lib/              # Utilitaires (cn, motion-variants)
docs/                 # Documentation du projet
.github/workflows/    # GitHub Actions (CI + deploy)
```

---

## Documentation

| Document                 | Lien                                                         |
| ------------------------ | ------------------------------------------------------------ |
| Architecture déploiement | [docs/deployment.md](docs/deployment.md)                     |
| Design System            | [docs/design/design-system.md](docs/design/design-system.md) |
| Instructions Claude      | [CLAUDE.md](CLAUDE.md)                                       |

---

## Contact

**Romaric Yi** — contact@yiroma.fr · 06 95 38 60 99

[GitHub](https://github.com/Yiroma) · [LinkedIn](https://linkedin.com/in/yiromaric) · [Malt](https://www.malt.fr/profile/romaricyi)
