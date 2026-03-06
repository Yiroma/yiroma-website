# Suggestions & points d'attention — Projet Yiroma

> Ce fichier recense les points à traiter avant ou pendant le développement. À supprimer ou archiver une fois les éléments traités.

---

## Prioritaire — avant de coder

### README.md à compléter

Le fichier est actuellement vide (juste le nom du repo). À remplir a minima avec :

- Description du projet
- Stack utilisée
- Instructions pour lancer le projet en local (`npm install`, `npm run dev`, etc.)
- Variables d'environnement nécessaires

### `.gitignore` à créer

Aucun `.gitignore` n'existe encore. À créer dès l'initialisation du projet Next.js avec au minimum :

- `node_modules/`
- `.next/`
- `.env` / `.env.local`
- `out/`

### Palette de couleurs & typographie à définir

Aucun document de design system n'existe. Définir les tokens avant d'écrire du Tailwind CSS évite les incohérences visuelles entre les pages. À créer dans `docs/design-system.md` ou directement dans `tailwind.config.ts`. Points à couvrir :

- Couleurs principales (brand, fond, texte, accents)
- Typographies (titres, corps, taille de base)
- Espacements & breakpoints personnalisés si besoin

---

## À compléter au fil du projet

### SIRET à renseigner

Le footer dans `docs/copywrights/home.md` contient `SIRET : xxxxxxxx`.
À remplacer par le vrai numéro avant la mise en ligne.

### URL Malt à mettre à jour

L'URL Malt est actuellement `#` dans `CLAUDE.md` et dans le footer.
À remplacer dès que le profil Malt est créé ou mis à jour.

---

## Points de décision en suspens

### Champ "Budget estimé" dans le formulaire contact

Le wireframe initial incluait un champ "Budget estimé" (select), absent du copywriting validé.
**Décision à prendre :** on l'ajoute ou on s'en tient au formulaire du copywriting ?

### Prototype visuel avant développement

Le statut du projet marque le prototype visuel comme non réalisé.
**Options :**

- Réaliser une maquette Figma avant de coder (recommandé pour valider l'identité visuelle)
- Passer directement au développement si la direction visuelle est claire en tête

---

## Infrastructure & déploiement (à traiter plus tard)

- Configurer Docker pour le déploiement VPS
- Mettre en place les variables d'environnement pour le formulaire de contact (service email : Resend, Nodemailer, ou autre)
- Configurer le domaine `yiroma.fr` et le certificat SSL
- Mettre en place un pipeline CI/CD simple (optionnel mais recommandé)
