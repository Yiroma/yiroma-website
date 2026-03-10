import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yiroma — Conditions Générales de Vente",
  description:
    "Conditions générales de vente de Yiroma : prestations, tarifs, paiement, livraison, propriété intellectuelle et données personnelles.",
  robots: { index: false, follow: false },
};

export default function CGV() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:px-12">
      <h1 className="mb-4 text-3xl font-bold">Conditions Générales de Vente</h1>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Définitions</h2>
        <p className="text-muted-foreground leading-relaxed">
          &laquo;&nbsp;le Prestataire&nbsp;&raquo; : <strong>Romaric YI</strong>, utilisant pour nom
          commercial <strong>Yiroma</strong>, est une Entreprise Individuelle sous le statut de
          Micro-entreprise, domicilié au 10 Bis, Chemin des Levrettes, 45110 Châteauneuf-sur-Loire,
          FRANCE, Siret n° 984 160 515 00016.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Dans les présentes conditions générales de vente, est dénommée le client ou le prospect,
          &laquo;&nbsp;le Client&nbsp;&raquo;. Les présentes conditions générales de vente sont
          ci-après dénommées &laquo;&nbsp;CGV&nbsp;&raquo;.
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
          Toute commande passée auprès du Prestataire implique l&apos;acceptation pleine et entière
          des présentes CGV. Celles-ci prévalent sur tout autre document, sauf dérogation expresse
          convenue entre les parties. Le Client reconnaît avoir pris connaissance des CGV avant de
          signer le devis ou tout autre document contractuel.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">2. Prestations</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ces prestations incluent, sans s&apos;y limiter, le développement web (incluant entre
          autres la création de sites internet), le web design (incluant entre autres la création
          d&apos;identité graphique), le référencement SEO et l&apos;audit de visibilité (SEO/GEO),
          ainsi que le développement d&apos;applications métier sur mesure.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Le détail des prestations est défini dans un devis accepté par le Client avant le début de
          chaque projet.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">3. Devis et Commande</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">3.1. Devis —</span> Les prestations de
          services font l&apos;objet d&apos;un devis gratuit. Le devis a une durée de validité de 30
          jours à compter de sa date d&apos;émission. La commande est considérée comme acceptée dès
          lors que le Client a signé le devis ou donné son accord par écrit (courrier électronique
          ou autre).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">3.2. Commande —</span> Toute commande est
          définitive dès la réception par le Prestataire du devis signé ou de l&apos;acceptation
          écrite du devis. Toute modification ou annulation de la commande par le Client après cette
          acceptation pourra entraîner des frais, qui seront précisés au cas par cas.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">4. Prix et Modalités de Paiement</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">4.1. Prix —</span> Les prix des services
          sont indiqués en euros, hors taxes (TVA non applicable, article 293B du CGI). Le prix
          indiqué sur le devis est ferme et définitif, sauf en cas de modifications substantielles
          demandées par le Client après signature du devis.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">4.2. Paiement —</span> Un acompte de 30 % du
          montant total du devis est exigible à la commande. Le solde est payable à la livraison des
          services, sauf disposition contraire prévue au devis. Le paiement peut être effectué par
          virement bancaire ou tout autre moyen convenu entre les parties.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">4.3. Retard de paiement —</span> Tout retard
          de paiement entraînera, de plein droit, l&apos;application de pénalités de retard
          calculées sur la base de trois fois le taux d&apos;intérêt légal en vigueur, par jour de
          retard.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">5. Livraison des Prestations</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">5.1. Délais —</span> Le Prestataire
          s&apos;engage à respecter les délais de livraison indiqués sur le devis. Toutefois, les
          délais sont donnés à titre indicatif et peuvent être modifiés en cas de force majeure ou
          de retard imputable au Client (retard dans la transmission des éléments nécessaires par le
          Client, par exemple).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">5.2. Livraison —</span> Les prestations sont
          considérées comme livrées lorsque le Prestataire a remis au Client les éléments convenus
          (site web, maquettes, etc.) sous la forme et dans les conditions définies dans le devis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">6. Modifications et Révisions</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire inclut 2 tours de révisions dans le prix initial des prestations. Toute
          demande de révision supplémentaire sera facturée selon les tarifs en vigueur.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          <span className="text-foreground font-medium">Post-livraison :</span> Toute modification
          demandée après la livraison finale fera l&apos;objet d&apos;un devis complémentaire.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">7. Propriété Intellectuelle</h2>
        <p className="text-muted-foreground leading-relaxed">
          Sauf mention contraire dans le devis, le Prestataire cède au Client les droits
          d&apos;exploitation des créations réalisées (droits de reproduction, de représentation,
          d&apos;adaptation) uniquement une fois le paiement total effectué. Le Prestataire conserve
          toutefois le droit moral sur ses créations, et se réserve le droit de mentionner les
          projets réalisés dans son portfolio ou à des fins promotionnelles.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">8. Hébergement et Nom de Domaine</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire peut proposer des services d&apos;hébergement web et d&apos;achat de nom de
          domaine, en partenariat avec des prestataires tiers.
        </p>
        <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <span className="text-foreground font-medium">Responsabilité :</span> Le Prestataire se
            dégage de toute responsabilité en cas de dysfonctionnements ou d&apos;interruptions de
            service liés à l&apos;hébergement ou au nom de domaine, fourni par des tiers.
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
          Ces services sont inclus pendant 1 mois après la livraison. Au-delà, ces services sont
          disponibles à la demande et feront l&apos;objet d&apos;un devis complémentaire. Aucun
          abonnement de maintenance n&apos;est imposé par défaut.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">10. Obligations et Responsabilités</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">10.1. Obligations du Prestataire —</span> Le
          Prestataire s&apos;engage à fournir les services décrits dans le devis avec le soin et la
          compétence appropriés. Il n&apos;est tenu qu&apos;à une obligation de moyens, et non de
          résultat, sauf stipulation contraire explicite.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">10.2. Obligations du Client —</span> Le
          Client s&apos;engage à fournir au Prestataire tous les documents, informations et accès
          nécessaires à la réalisation des services. Le Client est responsable de la véracité des
          informations fournies.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">10.3. Responsabilité —</span> Le Prestataire
          ne pourra être tenu responsable des dommages indirects tels que la perte de revenus, de
          clients ou de données résultant de l&apos;utilisation des services fournis. La
          responsabilité du Prestataire est en tout état de cause limitée au montant total payé par
          le Client pour les services en cause.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          La responsabilité du Prestataire ne pourra être engagée en cas de défaillance des services
          d&apos;hébergement ou des fournisseurs de noms de domaine, comme précisé dans
          l&apos;article 8.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">11. Rétractation, Annulation et Résiliation</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">11.1. Rétractation —</span> Conformément aux
          dispositions légales en vigueur, le droit de rétractation de 14 jours est applicable aux{" "}
          <strong>clients consommateurs</strong>. Ce droit ne s&apos;applique pas aux entreprises
          (B2B).
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">11.2. Annulation —</span> En cas
          d&apos;annulation d&apos;une commande par le Client après validation du devis, les
          acomptes versés ne seront pas remboursés.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          <span className="text-foreground font-medium">11.3. Résiliation —</span> Si le Client
          résilie le contrat avant la fin du projet, il sera redevable d&apos;une somme
          correspondant aux prestations déjà réalisées à titre de compensation pour les pertes
          encourues par le Prestataire :
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <strong>Si la résiliation intervient avant que 25 % du projet soit réalisé</strong>, le
            Client sera redevable de 30 % du montant total du projet.
          </li>
          <li>
            <strong>Si la résiliation intervient entre 25 % et 50 % de l&apos;avancement</strong>,
            la majoration sera de 50 % du montant total.
          </li>
          <li>
            <strong>Si la résiliation intervient après 50 % de l&apos;avancement</strong>, la
            totalité du montant du projet sera due.
          </li>
        </ul>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Les éléments livrés jusqu&apos;à la résiliation restent la propriété du Prestataire tant
          que le paiement des prestations n&apos;a pas été effectué.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">12. Sous-traitance</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire se réserve le droit de faire appel à des sous-traitants qualifiés pour
          l&apos;exécution de certaines tâches (développement spécifique, animation, etc.), tout en
          restant responsable de la bonne exécution du contrat.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">13. Confidentialité et Non-Divulgation</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire s&apos;engage à respecter la confidentialité des informations transmises
          par le Client et à ne pas les divulguer à des tiers, sauf accord préalable du Client.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          <span className="text-foreground font-medium">Données confidentielles :</span> Les
          éléments fournis par le Client dans le cadre du projet sont strictement confidentiels.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">14. Données Personnelles</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire s&apos;engage à respecter la confidentialité des données personnelles
          fournies par le Client, et à ne les utiliser que dans le cadre strict de la réalisation
          des prestations commandées, conformément aux dispositions du Règlement Général sur la
          Protection des Données (RGPD).
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Les données personnelles collectées sont strictement nécessaires à l&apos;exécution du
          contrat et seront conservées pendant la durée nécessaire à la réalisation des prestations,
          ainsi qu&apos;aux obligations légales liées à la gestion comptable et fiscale.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          Conformément au RGPD, le Client dispose d&apos;un droit d&apos;accès, de rectification, de
          suppression, ainsi qu&apos;un droit à la portabilité et à la limitation du traitement de
          ses données. Le Client peut exercer ces droits en envoyant une demande par écrit à{" "}
          <a
            href="mailto:contact@yiroma.fr"
            className="text-foreground underline underline-offset-4"
          >
            contact@yiroma.fr
          </a>
          . Le Prestataire s&apos;engage à répondre dans un délai maximum d&apos;un mois à compter
          de la réception de la demande.
        </p>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          En cas de litige, le Client a le droit d&apos;introduire une réclamation auprès de la CNIL
          (Commission Nationale de l&apos;Informatique et des Libertés).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">15. Force Majeure</h2>
        <p className="text-muted-foreground leading-relaxed">
          Le Prestataire ne pourra être tenu responsable en cas de retard ou d&apos;inexécution de
          ses obligations contractuelles dues à des circonstances indépendantes de sa volonté,
          telles que les catastrophes naturelles, les grèves, ou les pannes informatiques.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">16. Litiges et Droit Applicable</h2>
        <p className="text-muted-foreground leading-relaxed">
          Les présentes CGV sont régies par le droit français. En cas de litige, les parties
          s&apos;engagent à rechercher une solution amiable avant de recourir aux tribunaux
          compétents. Si aucune solution amiable n&apos;est trouvée, le litige sera porté devant les
          tribunaux compétents du ressort du siège social du Prestataire.
        </p>
      </section>
    </main>
  );
}
