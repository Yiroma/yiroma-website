/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { userContact } from "@/data/contact.data";
import { privacyMetadata } from "@/seo/privacy.metadata";

export const metadata: Metadata = privacyMetadata;

export default function PolitiqueConfidentialite() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:px-12">
      <h1 className="mb-4 text-3xl font-bold">Politique de confidentialité</h1>
      <p className="text-muted-foreground mb-12 text-sm">Dernière mise à jour : avril 2025</p>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">1. Responsable du traitement</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le responsable du traitement des données personnelles collectées sur ce site est :
        </p>
        <ul className="text-muted-foreground mt-3 space-y-1 leading-relaxed">
          <li>
            <span className="text-foreground font-medium">Nom :</span> {userContact.firstname}{" "}
            {userContact.lastname} ({userContact.nickname})
          </li>
          <li>
            <span className="text-foreground font-medium">Forme juridique :</span>{" "}
            {userContact.businessStatus}
          </li>
          <li>
            <span className="text-foreground font-medium">Adresse :</span> {userContact.address}
          </li>
          <li>
            <span className="text-foreground font-medium">Email :</span>{" "}
            <a
              href={`mailto:${userContact.email}`}
              className="text-foreground underline underline-offset-4"
            >
              {userContact.email}
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">2. Données collectées et finalités</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Les données personnelles collectées sur ce site le sont uniquement dans le cadre des
          finalités suivantes :
        </p>

        <div className="mb-4">
          <h3 className="text-foreground mb-2 font-medium">2.1. Formulaire de contact</h3>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Données :</span> prénom, nom, adresse
            email, numéro de téléphone (optionnel), type de besoin, message.
            <br />
            <span className="text-foreground font-medium">Finalité :</span> répondre à vos demandes
            de contact et de devis.
            <br />
            <span className="text-foreground font-medium">Base légale :</span> intérêt légitime
            (art. 6.1.f RGPD) — traitement nécessaire à la gestion de la relation commerciale
            précontractuelle.
            <br />
            <span className="text-foreground font-medium">Durée de conservation :</span> 3 ans à
            compter du dernier contact.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-foreground mb-2 font-medium">2.2. Statistiques de visite</h3>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Données :</span> pages visitées, durée de
            session, provenance, type d'appareil (données anonymisées ou pseudonymisées).
            <br />
            <span className="text-foreground font-medium">Finalité :</span> mesure d'audience et
            amélioration du site.
            <br />
            <span className="text-foreground font-medium">Base légale :</span> consentement (art.
            6.1.a RGPD) — collecte conditionnée à votre acceptation via le bandeau cookies.
            <br />
            <span className="text-foreground font-medium">Durée de conservation :</span> 13 mois
            maximum (conformément aux recommandations CNIL).
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">3. Sous-traitants et transferts</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Le site fait appel aux sous-traitants suivants, chacun disposant de sa propre politique de
          confidentialité :
        </p>
        <ul className="text-muted-foreground list-disc space-y-3 pl-5 leading-relaxed">
          <li>
            <span className="text-foreground font-medium">EmailJS</span> (États-Unis) — envoi des
            messages du formulaire de contact. Les données transitent par leurs serveurs. EmailJS
            est soumis au Data Privacy Framework UE–États-Unis.
          </li>
          <li>
            <span className="text-foreground font-medium">Google Analytics</span> (États-Unis) —
            mesure d'audience, activé uniquement avec votre consentement. Google LLC est soumis au
            Data Privacy Framework UE–États-Unis.
          </li>
          <li>
            <span className="text-foreground font-medium">Hostinger International Ltd.</span>{" "}
            (Chypre, UE) — hébergement du site. Les données sont stockées dans l'Union européenne.
          </li>
        </ul>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Aucune donnée personnelle n'est vendue ni cédée à des tiers à des fins commerciales.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">4. Cookies</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Ce site utilise deux types de cookies :
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <span className="text-foreground font-medium">Cookies strictement nécessaires :</span>{" "}
            mémorisation de votre choix relatif aux cookies. Aucun consentement requis.
          </li>
          <li>
            <span className="text-foreground font-medium">Cookies de mesure d'audience</span>{" "}
            (Google Analytics) : déposés uniquement après votre consentement explicite via le
            bandeau d'information.
          </li>
        </ul>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Vous pouvez retirer votre consentement à tout moment en cliquant sur "Gérer les cookies"
          dans le pied de page, ou en configurant votre navigateur pour bloquer les cookies tiers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">5. Vos droits</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés, vous
          disposez des droits suivants sur vos données personnelles :
        </p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 leading-relaxed">
          <li>Droit d'accès (art. 15 RGPD)</li>
          <li>Droit de rectification (art. 16 RGPD)</li>
          <li>Droit à l'effacement (art. 17 RGPD)</li>
          <li>Droit à la limitation du traitement (art. 18 RGPD)</li>
          <li>Droit à la portabilité (art. 20 RGPD)</li>
          <li>Droit d'opposition (art. 21 RGPD)</li>
          <li>Droit de retirer votre consentement à tout moment</li>
        </ul>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Pour exercer ces droits, adressez une demande écrite à{" "}
          <a
            href={`mailto:${userContact.email}`}
            className="text-foreground underline underline-offset-4"
          >
            {userContact.email}
          </a>
          . Une réponse vous sera apportée dans un délai maximum d'un mois. En cas de réponse
          insatisfaisante, vous pouvez introduire une réclamation auprès de la{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            CNIL
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">6. Sécurité</h2>
        <p className="text-muted-foreground leading-relaxed">
          Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour protéger
          vos données contre tout accès non autorisé, perte ou divulgation : connexion HTTPS, accès
          restreint aux données, sous-traitants sélectionnés pour leurs garanties de sécurité.
        </p>
      </section>
    </main>
  );
}
