/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yiroma — Mentions légales",
  description:
    "Mentions légales du site yiroma.fr : éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies.",
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:px-12">
      <h1 className="mb-12 text-3xl font-bold">Mentions légales</h1>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Éditeur du site</h2>
        <p className="text-muted-foreground leading-relaxed">Le présent site est édité par :</p>
        <ul className="text-muted-foreground mt-3 space-y-1 leading-relaxed">
          <li>
            <span className="text-foreground font-medium">Nom :</span> Romaric YI – EI
          </li>
          <li>
            <span className="text-foreground font-medium">Nom commercial :</span> Yiroma
          </li>
          <li>
            <span className="text-foreground font-medium">Forme juridique :</span> Micro-entreprise
          </li>
          <li>
            <span className="text-foreground font-medium">Siège social :</span> 10 Bis, Chemin des
            Levrettes, 45110 Châteauneuf-sur-Loire, FRANCE
          </li>
          <li>
            <span className="text-foreground font-medium">SIRET :</span> 984 160 515 00016
          </li>
          <li>
            <span className="text-foreground font-medium">Responsable de la publication :</span>{" "}
            Romaric YI
          </li>
          <li>
            <span className="text-foreground font-medium">Contact :</span> contact@yiroma.fr / 06 95
            38 60 99
          </li>
          <li>
            <span className="text-foreground font-medium">Site web :</span> https://yiroma.fr
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Hébergeur du site</h2>
        <p className="text-muted-foreground leading-relaxed">
          L'hébergement du site est assuré par :
        </p>
        <ul className="text-muted-foreground mt-3 space-y-1 leading-relaxed">
          <li>
            <span className="text-foreground font-medium">Nom de l'hébergeur :</span> Hostinger
            International Ltd.
          </li>
          <li>
            <span className="text-foreground font-medium">Adresse :</span> 61, Lordou Vironos
            Street, 6023 Larnaca, Chypre
          </li>
          <li>
            <span className="text-foreground font-medium">Site web :</span>{" "}
            https://www.hostinger.fr/contact
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Propriété intellectuelle</h2>
        <p className="text-muted-foreground leading-relaxed">
          Tous les éléments du site (textes, images, illustrations, logos, icônes, etc.) sont
          protégés par les lois en vigueur sur la propriété intellectuelle et sont la propriété
          exclusive de Romaric YI, sauf mention contraire.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Toute reproduction, représentation, modification, publication, ou adaptation de tout ou
          partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite
          sans l'autorisation écrite préalable de Romaric YI.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Données personnelles</h2>
        <p className="text-muted-foreground leading-relaxed">
          Conformément au Règlement Général sur la Protection des Données (RGPD), les informations
          personnelles collectées via ce site (formulaires de contact, devis, etc.) sont traitées de
          manière confidentielle.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          <span className="text-foreground font-medium">Responsable du traitement :</span> Romaric
          YI
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Les données sont collectées dans le cadre de la gestion des relations commerciales (devis,
          factures, contacts). Elles ne seront jamais transmises à des tiers sans votre consentement
          explicite, sauf en cas de nécessité légale.
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au RGPD, vous
          disposez des droits suivants :
        </p>
        <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-5 leading-relaxed">
          <li>Droit d'accès, de rectification et de suppression de vos données personnelles</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit de limiter ou de vous opposer au traitement de vos données</li>
          <li>Droit d'introduire une réclamation auprès de la CNIL</li>
        </ul>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Pour exercer ces droits, vous pouvez adresser une demande à{" "}
          <a
            href="mailto:contact@yiroma.fr"
            className="text-foreground underline underline-offset-4"
          >
            contact@yiroma.fr
          </a>
          . Une réponse vous sera apportée dans un délai maximal d'un mois.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Cookies</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des
          statistiques de visite. Vous avez la possibilité de refuser l'utilisation des cookies lors
          de votre première visite via un bandeau d'information.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Vous pouvez également configurer votre navigateur pour bloquer les cookies ou les
          supprimer.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Limitation de responsabilité</h2>
        <p className="text-muted-foreground leading-relaxed">
          Romaric YI s'efforce d'assurer l'exactitude des informations diffusées sur ce site.
          Toutefois, il ne peut être tenu responsable des erreurs ou omissions. Le Prestataire
          décline toute responsabilité pour les dommages directs ou indirects pouvant résulter de
          l'accès ou de l'utilisation du site, y compris en cas de virus informatique ou de tout
          autre dommage au matériel informatique.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Liens hypertextes</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ce site peut contenir des liens vers des sites externes. Romaric YI décline toute
          responsabilité quant au contenu de ces sites tiers.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Toute création de lien hypertexte vers ce site doit faire l'objet d'une autorisation
          préalable et écrite de Romaric YI.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Droit applicable</h2>
        <p className="text-muted-foreground leading-relaxed">
          Les présentes mentions légales sont soumises à la législation française. En cas de litige,
          et à défaut d'accord amiable, les tribunaux français seront les seuls compétents.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Crédits</h2>
        <h3 className="text-foreground mb-2 font-medium">Images / illustrations :</h3>
        <ul className="text-muted-foreground space-y-1 leading-relaxed">
          <li>
            Page « accueil » :{" "}
            <a
              href="https://www.freepik.com/author/vectorjuice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              vectorjuice on Freepik
            </a>
          </li>
          <li>Page « services » : en cours</li>
          <li>Page « tarifs » : en cours</li>
          <li>Page « contact » : en cours</li>
        </ul>
      </section>
    </main>
  );
}
