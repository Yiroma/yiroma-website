# Architecture de déploiement — Yiroma

## Décision

**Export statique Next.js hébergé sur Hostinger (mutualisé)**

Choix retenu le 2026-03-10 après analyse des options.

### Contexte de la décision

Le site `yiroma.fr` est une vitrine freelance sans backend propre :

- Pas d'API Routes dynamiques
- Pas de Server Actions côté serveur
- Pas de base de données
- Le seul besoin "dynamique" est le formulaire de contact → traité via **EmailJS** (appel API depuis le navigateur, sans serveur)

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
        ├── PR feat/* → dev : lint + build check
        │
        └── merge dev → main : build export → deploy FTP Hostinger
                                        │
                                        ▼
                              /home/.../yiroma.fr/public_html/
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

## Formulaire de contact — EmailJS

Le formulaire `/contact` utilise **EmailJS** pour envoyer les mails directement depuis le navigateur.

- Pas de backend requis
- Gratuit jusqu'à 200 emails/mois (suffisant pour une vitrine)
- Les clés EmailJS (service ID, template ID, public key) sont des clés **publiques** → peuvent être en clair dans le code ou en variables d'environnement préfixées `NEXT_PUBLIC_`

Documentation : https://www.emailjs.com/docs/

---

## CI/CD — GitHub Actions

### Workflow 1 : `ci.yml` — Lint (PR feat/\* → dev)

Déclenché sur : `pull_request` ciblant `dev`

Étapes :

1. Checkout
2. Setup Node.js
3. `npm ci`
4. `npm run lint`
5. `npm run build` (vérifie que l'export statique compile)

### Workflow 2 : `deploy.yml` — Deploy (push main)

Déclenché sur : `push` vers `main`

Étapes :

1. Checkout
2. Setup Node.js
3. `npm ci`
4. `npm run build` (génère `out/`)
5. Upload FTP vers Hostinger via `SamKirkland/FTP-Deploy-Action`

#### Secrets GitHub requis

| Secret         | Description                                 |
| -------------- | ------------------------------------------- |
| `FTP_SERVER`   | Adresse FTP Hostinger (ex: `ftp.yiroma.fr`) |
| `FTP_USERNAME` | Identifiant FTP Hostinger                   |
| `FTP_PASSWORD` | Mot de passe FTP Hostinger                  |

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

Fichier `.env.sample` à la racine (à créer, commité) :

```env
# EmailJS — clés publiques (NEXT_PUBLIC_ = exposées côté client)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

> Le fichier `.env.local` (avec les vraies valeurs) est dans `.gitignore` et ne doit **jamais** être commité.
