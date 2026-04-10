/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { userContact } from "@/data/contact.data";
import { cgvMetadata } from "@/seo/cgv.metadata";

export const metadata: Metadata = cgvMetadata;

export default function CGV() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:px-12">
      <h1 className="mb-4 text-3xl font-bold">Conditions Générales de Vente</h1>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Définitions</h2>
        <p className="text-muted-foreground leading-relaxed">
          « le Prestataire » :{" "}
          <strong>
            {userContact.firstname} {userContact.lastname}
          </strong>
          , utilisant pour nom commercial <strong>{userContact.nickname}</strong>, est une
          Entreprise Individuelle sous le statut de
          {userContact.businessStatus}, domicilié au {userContact.address}, Siret n°{" "}
          {userContact.siret}.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Dans les présentes conditions générales de vente, est dénommée le client ou le prospect, «
          le Client ». Les présentes conditions générales de vente sont ci-après dénommées « CGV ».
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          <span className="text-foreground font-medium">Objet :</span> Les présentes CGV ont pour
          objet de définir les droits et obligations du Prestataire et du Client, dans le cadre de
          la vente de prestations de services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">1. Acceptation des CGV</h2>
        <p className="text-muted-foreground leading-relaxed">
          Toute commande passée auprès du Prestataire implique l'acceptation pleine et entière des
          présentes CGV. Celles-ci prévalent sur tout autre document, sauf dérogation expresse
          convenue entre les parties. Le Client reconnaît avoir pris connaissance des CGV avant de
          signer le devis ou tout autre document contractuel.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">2. Prestations</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ces prestations incluent, sans s'y limiter : la création et la refonte de sites web
          (landing page, site vitrine, e-commerce, CMS), la conception d'identité visuelle et de
          charte graphique (logo, typographies, maquettes), l'audit SEO et de visibilité GEO, ainsi
          que le développement d'applications métier sur mesure (application web, API, back-office).
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Le détail des prestations est défini dans un devis accepté par le Client avant le début de
          chaque projet.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">3. Devis et Commande</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">3.1. Devis :</span> Les prestations de
          services font l'objet d'un devis gratuit. Le devis a une durée de validité de 30 jours à
          compter de sa date d'émission. La commande est considérée comme acceptée dès lors que le
          Client a signé le devis ou donné son accord par écrit (courrier électronique ou autre).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">3.2. Commande :</span> Toute commande est
          définitive dès la réception par le Prestataire du devis signé ou de l'acceptation écrite
          du devis. Toute modification ou annulation de la commande par le Client après cette
          acceptation pourra entraîner des frais, qui seront précisés au cas par cas.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">4. Prix et Modalités de Paiement</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">4.1. Prix :</span> Les prix des services
          sont indiqués en euros, hors taxes (TVA non applicable, article 293B du CGI). Le prix
          indiqué sur le devis est ferme et définitif, sauf en cas de modifications substantielles
          demandées par le Client après signature du devis.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">4.2. Paiement :</span> Un acompte de 30 % du
          montant total du devis est exigible à la commande. Le solde est payable à la livraison des
          services, sauf disposition contraire prévue au devis. Le paiement peut être effectué par
          virement bancaire ou tout autre moyen convenu entre les parties.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">4.3. Retard de paiement :</span> Tout retard
          de paiement entraînera, de plein droit, l'application de pénalités de retard calculées sur
          la base de trois fois le taux d'intérêt légal en vigueur, par jour de retard.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">5. Livraison des Prestations</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">5.1. Délais :</span> Le Prestataire s'engage
          à respecter les délais de livraison indiqués sur le devis. Toutefois, les délais sont
          donnés à titre indicatif et peuvent être modifiés en cas de force majeure ou de retard
          imputable au Client (retard dans la transmission des éléments nécessaires par le Client,
          par exemple).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">5.2. Livraison :</span> Les prestations sont
          considérées comme livrées lorsque le Prestataire a remis au Client les éléments convenus
          (site web, maquettes, etc.) sous la forme et dans les conditions définies dans le devis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">6. Modifications et Révisions</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le nombre d'allers-retours inclus est précisé dans le devis ou le forfait retenu (entre 2
          et 4 selon la prestation, illimités pour le forfait Sur-mesure). Tout aller-retour
          supplémentaire au-delà du nombre prévu sera facturé selon les tarifs en vigueur.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          <span className="text-foreground font-medium">Post-livraison :</span> Toute modification
          demandée après la livraison finale fera l'objet d'un devis complémentaire.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">7. Propriété Intellectuelle</h2>
        <p className="text-muted-foreground leading-relaxed">
          Sauf mention contraire dans le devis, le Prestataire cède au Client les droits
          d'exploitation des créations réalisées (droits de reproduction, de représentation,
          d'adaptation) uniquement une fois le paiement total effectué. Le Prestataire conserve
          toutefois le droit moral sur ses créations, et se réserve le droit de mentionner les
          projets réalisés dans son portfolio ou à des fins promotionnelles.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">8. Hébergement et Nom de Domaine</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire peut proposer des services d'hébergement web et d'achat de nom de domaine,
          en partenariat avec des prestataires tiers.
        </p>
        <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <span className="text-foreground font-medium">Responsabilité :</span> Le Prestataire se
            dégage de toute responsabilité en cas de dysfonctionnements ou d'interruptions de
            service liés à l'hébergement ou au nom de domaine, fourni par des tiers.
          </li>
          <li>
            <span className="text-foreground font-medium">Renouvellement :</span> Le Client est
            responsable du renouvellement de son nom de domaine et de son hébergement, sauf accord
            contraire précisé dans le devis.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">9. Maintenance et Support</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire peut proposer des services de maintenance après la mise en ligne du site
          web ou la livraison de la prestation. La maintenance couvre les points suivants :
        </p>
        <ul className="text-muted-foreground mt-3 list-disc space-y-1 pl-5 leading-relaxed">
          <li>
            <span className="text-foreground font-medium">Corrections techniques :</span> Correction
            de bugs ou de dysfonctionnements signalés par le Client.
          </li>
          <li>
            <span className="text-foreground font-medium">Mises à jour mineures :</span> Mise à jour
            de contenu ou de fonctionnalités mineures.
          </li>
        </ul>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Pendant les <strong>30 jours suivant la livraison finale</strong>, le Prestataire corrige
          sans frais supplémentaires tout dysfonctionnement directement imputable à la prestation
          livrée. Au-delà de cette période, la maintenance est disponible à la demande et fera
          l'objet d'un devis complémentaire. Aucun abonnement n'est imposé par défaut.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">10. Obligations et Responsabilités</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">10.1. Obligations du Prestataire :</span> Le
          Prestataire s'engage à fournir les services décrits dans le devis avec le soin et la
          compétence appropriés. Il n'est tenu qu'à une obligation de moyens, et non de résultat,
          sauf stipulation contraire explicite.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">10.2. Obligations du Client :</span> Le
          Client s'engage à fournir au Prestataire tous les documents, informations et accès
          nécessaires à la réalisation des services. Le Client est responsable de la véracité des
          informations fournies.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">10.3. Responsabilité :</span> Le Prestataire
          ne pourra être tenu responsable des dommages indirects tels que la perte de revenus, de
          clients ou de données résultant de l'utilisation des services fournis. La responsabilité
          du Prestataire est en tout état de cause limitée au montant total payé par le Client pour
          les services en cause.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          La responsabilité du Prestataire ne pourra être engagée en cas de défaillance des services
          d'hébergement ou des fournisseurs de noms de domaine, comme précisé dans l'article 8.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">11. Rétractation, Annulation et Résiliation</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">11.1. Rétractation :</span> Conformément aux
          dispositions légales en vigueur, le droit de rétractation de 14 jours est applicable aux{" "}
          <strong>clients consommateurs</strong>. Ce droit ne s'applique pas aux entreprises (B2B).
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">11.2. Annulation :</span> En cas
          d'annulation d'une commande par le Client après validation du devis, les acomptes versés
          ne seront pas remboursés.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">11.3. Résiliation :</span> Si le Client
          résilie le contrat avant la fin du projet, il sera redevable d'une somme correspondant aux
          prestations déjà réalisées à titre de compensation pour les pertes encourues par le
          Prestataire :
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <strong>Si la résiliation intervient avant que 25 % du projet soit réalisé</strong>, le
            Client sera redevable de 30 % du montant total du projet.
          </li>
          <li>
            <strong>Si la résiliation intervient entre 25 % et 50 % de l'avancement</strong>, la
            majoration sera de 50 % du montant total.
          </li>
          <li>
            <strong>Si la résiliation intervient après 50 % de l'avancement</strong>, la totalité du
            montant du projet sera due.
          </li>
        </ul>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Les éléments livrés jusqu'à la résiliation restent la propriété du Prestataire tant que le
          paiement des prestations n'a pas été effectué.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">12. Sous-traitance</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire se réserve le droit de faire appel à des sous-traitants qualifiés pour
          l'exécution de certaines tâches (développement spécifique, animation, etc.), tout en
          restant responsable de la bonne exécution du contrat.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">13. Confidentialité et Non-Divulgation</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire s'engage à respecter la confidentialité des informations transmises par le
          Client et à ne pas les divulguer à des tiers, sauf accord préalable du Client.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          <span className="text-foreground font-medium">Données confidentielles :</span> Les
          éléments fournis par le Client dans le cadre du projet sont strictement confidentiels.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">14. Données Personnelles</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire s'engage à respecter la confidentialité des données personnelles fournies
          par le Client, et à ne les utiliser que dans le cadre strict de la réalisation des
          prestations commandées, conformément aux dispositions du Règlement Général sur la
          Protection des Données (RGPD).
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Les données personnelles collectées sont strictement nécessaires à l'exécution du contrat
          et seront conservées pendant la durée nécessaire à la réalisation des prestations, ainsi
          qu'aux obligations légales liées à la gestion comptable et fiscale.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Conformément au RGPD, le Client dispose d'un droit d'accès, de rectification, de
          suppression, ainsi qu'un droit à la portabilité et à la limitation du traitement de ses
          données. Le Client peut exercer ces droits en envoyant une demande par écrit à{" "}
          <a
            href="mailto:contact@yiroma.fr"
            className="text-foreground underline underline-offset-4"
          >
            contact@yiroma.fr
          </a>
          . Le Prestataire s'engage à répondre dans un délai maximum d'un mois à compter de la
          réception de la demande.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          En cas de litige, le Client a le droit d'introduire une réclamation auprès de la CNIL
          (Commission Nationale de l'Informatique et des Libertés).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">15. Force Majeure</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire ne pourra être tenu responsable en cas de retard ou d'inexécution de ses
          obligations contractuelles dues à des circonstances indépendantes de sa volonté, telles
          que les catastrophes naturelles, les grèves, ou les pannes informatiques.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">16. Litiges et Droit Applicable</h2>
        <p className="text-muted-foreground leading-relaxed">
          Les présentes CGV sont régies par le droit français. En cas de litige, les parties
          s'engagent à rechercher une solution amiable avant de recourir aux tribunaux compétents.
          Si aucune solution amiable n'est trouvée, le litige sera porté devant les tribunaux
          compétents du ressort du siège social du Prestataire.
        </p>
      </section>
    </main>
  );
}
