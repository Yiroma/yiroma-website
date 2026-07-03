# Architecture de déploiement — Yiroma

## Décision

**Export statique Next.js hébergé sur Hostinger (mutualisé)**

Choix retenu le 2026-03-10 après analyse des options.

### Contexte de la décision

Le site `yiroma.fr` est une vitrine freelance sans backend propre :

- Pas d'API Routes dynamiques
- Pas de Server Actions côté serveur
- Pas de base de données
- Le seul besoin "dynamique" est le formulaire de contact → traité via un **Cloudflare Worker** (appel API depuis le navigateur, protégé par **Cloudflare Turnstile**)

### Options considérées

| Option                                    | Description                                    | Décision                        |
| ----------------------------------------- | ---------------------------------------------- | ------------------------------- |
| A — Export statique + EmailJS + Hostinger | Build statique, service tiers pour le mail     | ✅ **Retenu**                   |
| B — Node.js + Docker + VPS                | Serveur Node.js, image Docker, déploiement SSH | ❌ Trop complexe pour ce besoin |
| C — Export statique + API Route sur VPS   | Hybride                                        | ❌ Complexité inutile           |

### Pourquoi Hostinger mutualisé plutôt que le VPS ?

- Le VPS (mini-PC maison) est utilisé pour `yiromaric.fr` avec Docker + Node.js
- Un export statique n'a pas besoin de Docker ni de Node.js en production
- Hostinger mutualisé supporte parfaitement les fichiers HTML/CSS/JS statiques
- Moins de maintenance serveur, coût inclus dans l'abonnement existant

---

## Architecture cible

```
Code source (Next.js + TypeScript)
        │
        ▼
GitHub Actions (CI/CD)
        │
        ├── PR → dev : lint + build check
        │
        └── push → main : build export → deploy SSH/rsync Hostinger
                                        │
                                        ▼
                              Répertoire cible Hostinger (SSH_TARGET_PATH)
```

---

## Configuration Next.js requise

Dans [next.config.ts](../next.config.ts), ajouter :

```ts
const nextConfig = {
  output: "export",
};
```

Cela génère un dossier `out/` contenant les fichiers statiques prêts à déployer.

> ⚠️ Avec `output: 'export'`, les fonctionnalités suivantes ne sont pas disponibles :
>
> - API Routes (`/api/*`)
> - Server Actions
> - Image Optimization (remplacer par `unoptimized: true` ou un service externe)
> - Middleware dynamique

---

## Formulaire de contact — Cloudflare Worker + Turnstile

Le formulaire `/contact` poste vers un **Cloudflare Worker** (`NEXT_PUBLIC_WORKER_URL`) qui envoie le mail côté serveur (Worker), pas de backend applicatif requis côté Next.js.

- Protection anti-bot via **Cloudflare Turnstile** (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`) — le token Turnstile est vérifié par le Worker avant envoi
- Le Worker Cloudflare et sa configuration ne font pas partie de ce dépôt
- Les clés (`NEXT_PUBLIC_*`) sont publiques → exposées côté client par construction, injectées au build via les secrets GitHub Actions

Voir [src/hooks/useTurnstile.ts](../src/hooks/useTurnstile.ts) et [src/components/contact/ContactForm.tsx](../src/components/contact/ContactForm.tsx).

---

## CI/CD — GitHub Actions

### Workflow 1 : [ci.yml](../.github/workflows/ci.yml) — CI — Lint & Build (PR → dev)

Déclenché sur : `pull_request` ciblant `dev`

Étapes :

1. Checkout
2. Setup Node.js 20.x
3. `npm ci`
4. `npm run lint`
5. `npm run build` (vérifie que l'export statique compile)

### Workflow 2 : [deploy.yml](../.github/workflows/deploy.yml) — Deploy — Export & SSH (push main)

Déclenché sur : `push` vers `main`

Étapes :

1. Checkout
2. Setup Node.js 20.x
3. `npm ci`
4. `npm run build` (génère `out/`, avec `NEXT_PUBLIC_TURNSTILE_SITE_KEY` et `NEXT_PUBLIC_WORKER_URL` injectées depuis les secrets)
5. Configuration de la clé SSH (`~/.ssh/deploy_key`) + `ssh-keyscan` vers `known_hosts`
6. Déploiement via `rsync -avz --delete` du dossier `out/` vers Hostinger en SSH

#### Secrets GitHub requis

| Secret                           | Description                                       |
| -------------------------------- | ------------------------------------------------- |
| `SSH_PRIVATE_KEY`                | Clé privée SSH pour l'accès Hostinger             |
| `SSH_HOST`                       | Hôte SSH Hostinger                                |
| `SSH_PORT`                       | Port SSH Hostinger                                |
| `SSH_USERNAME`                   | Identifiant SSH Hostinger                         |
| `SSH_TARGET_PATH`                | Chemin cible du déploiement sur le serveur        |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Clé publique Cloudflare Turnstile (formulaire)    |
| `NEXT_PUBLIC_WORKER_URL`         | URL du Cloudflare Worker qui traite le formulaire |

Ces secrets sont à configurer dans : GitHub → Settings → Secrets and variables → Actions

---

## Hooks locaux — Husky

| Hook         | Outil         | Vérification                                        |
| ------------ | ------------- | --------------------------------------------------- |
| `commit-msg` | commitlint    | Format conventionnel des commits                    |
| `pre-commit` | lint-staged   | ESLint sur les fichiers modifiés                    |
| `pre-commit` | script custom | Bloque si un `.env` (hors `.env.sample`) est staged |

---

## Variables d'environnement

Fichier [.env.sample](../.env.sample) à la racine (commité) :

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
NEXT_PUBLIC_WORKER_URL=your_worker_url
NEXT_PUBLIC_GA_ID=your_ga_measurement_id
```

Ces variables sont publiques (`NEXT_PUBLIC_` = exposées côté client) → peuvent être en clair dans le code ou en variables d'environnement.

> Le fichier `.env.local` (avec les vraies valeurs) est dans `.gitignore` et ne doit **jamais** être commité.
