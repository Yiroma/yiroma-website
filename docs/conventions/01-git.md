# Conventions Git

## Branches

| Branche   | Usage                                      |
| --------- | ------------------------------------------ |
| `main`    | Production — toujours stable et déployable |
| `feat/*`  | Nouvelle fonctionnalité ou nouvelle page   |
| `fix/*`   | Correction de bug                          |
| `chore/*` | Maintenance, config, dépendances           |
| `docs/*`  | Documentation uniquement                   |

**Exemples :**

```
feat/navbar
feat/page-home
fix/contact-form
chore/update-deps
docs/conventions
```

---

## Commits

Format : **Conventional Commits** en français.

```
<type>(<scope>): <description courte>
```

### Types

| Type       | Usage                                              |
| ---------- | -------------------------------------------------- |
| `feat`     | Nouvelle fonctionnalité, nouveau composant         |
| `fix`      | Correction de bug                                  |
| `chore`    | Config, outils, dépendances, tâches de maintenance |
| `docs`     | Documentation, copywriting, design system          |
| `style`    | Modification purement visuelle (CSS, spacing)      |
| `refactor` | Restructuration sans changement de comportement    |
| `perf`     | Optimisation de performance                        |
| `test`     | Ajout ou modification de tests                     |

### Scopes courants

| Scope       | Usage                           |
| ----------- | ------------------------------- |
| `init`      | Initialisation du projet        |
| `layout`    | Layout racine, fonts, providers |
| `design`    | Design system, tokens, thème    |
| `navbar`    | Composant Navbar                |
| `footer`    | Composant Footer                |
| `home`      | Page Home                       |
| `services`  | Page Services                   |
| `portfolio` | Page Portfolio                  |
| `tarifs`    | Page Tarifs                     |
| `contact`   | Page Contact                    |
| `seo`       | Meta tags, sitemap, robots      |
| `deploy`    | Docker, VPS, CI/CD              |

### Exemples

```
feat(navbar): ajoute le menu mobile avec Sheet ShadcnUI
feat(home): implémente la section Hero
fix(contact): corrige la validation du formulaire
chore(deps): met à jour next-themes vers 0.4
style(home): ajuste l'espacement de la section services
perf(images): optimise les images avec next/image
docs(design): met à jour les tokens typographiques
```

### Règles

- Description en minuscules, sans point final
- Maximum 72 caractères sur la première ligne
- Corps du message (optionnel) séparé par une ligne vide
- Un commit = une chose — ne pas mélanger feature et fix

---

## Versioning

Projet personnel — pas de semver strict.
Les tags Git servent à marquer les jalons importants :

```
v0.1 — Mise en place du projet (init, design system, layout)
v0.2 — Composants communs (Navbar, Footer)
v0.3 — Pages complètes
v1.0 — Mise en ligne sur VPS
```
