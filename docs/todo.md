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

### ~~`.gitignore` à créer~~ ✅ Résolu

Généré automatiquement par `create-next-app`.

### ~~Palette de couleurs & typographie à définir~~ ✅ Résolu

Design system défini dans [docs/design/design-system.md](docs/design/design-system.md). Tokens ShadcnUI configurés. Prototype visuel validé.

### ~~Prototype visuel avant développement~~ ✅ Résolu

Prototype HTML disponible dans `docs/design/prototype-home.html`.

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
