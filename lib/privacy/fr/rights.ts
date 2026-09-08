import { type LegalSection, list, paragraph, table } from '@/lib/legal-blocks'

/** Sécurité, conservation, droits, liens externes, enfants, modifications et coordonnées. */
export const RIGHTS_SECTIONS_FR: readonly LegalSection[] = [
  {
    id: 'data-security',
    heading: 'Sécurité des données',
    blocks: [
      paragraph('Nous protégeons les renseignements au moyen de mesures qui comprennent :'),
      list([
        {
          lead: 'Chiffrement en transit.',
          text: 'Toutes les communications entre l’application et nos serveurs, ainsi qu’entre votre navigateur et notre site Web, utilisent le protocole HTTPS/TLS.',
        },
        {
          lead: 'Peu de choses à dérober.',
          text: 'L’application ne détient aucun mot de passe, jeton ni identifiant de compte, et notre base de données d’application ne contient aucun compte d’utilisateur.',
        },
        {
          lead: 'Coordonnées tenues hors des URL lorsque c’est possible.',
          text: 'La planification des sorties et les itinéraires routiers transmettent les coordonnées dans le corps de la requête plutôt que dans l’URL, de sorte qu’elles n’apparaissent pas dans les journaux de requêtes.',
        },
        {
          lead: 'Données de courte durée sur le serveur.',
          text: 'Les instantanés de planification de sortie expirent après 15 minutes et sont purgés automatiquement.',
        },
        {
          lead: 'Un chemin de calcul d’itinéraire protégé.',
          text: 'Le fournisseur de calcul d’itinéraire ne reçoit jamais votre adresse IP ni de renseignements sur votre appareil, seulement les coordonnées relayées par notre serveur.',
        },
        { lead: 'Limitation du débit', text: 'sur les points d’accès publics afin de prévenir les abus.' },
      ]),
      paragraph(
        'Aucune méthode de transmission ou de stockage n’est parfaitement sécuritaire, mais nous nous efforçons de protéger les renseignements au moyen de pratiques conformes aux normes de l’industrie, et vous nous fournissez des renseignements en ayant cela à l’esprit.',
      ),
    ],
  },
  {
    id: 'data-retention',
    heading: 'Conservation des données',
    blocks: [
      table(
        ['Renseignements', 'Conservation'],
        [
          [
            'Listes d’épicerie, historique des sorties, aperçus de dépenses, paramètres',
            'Sur votre appareil seulement, jusqu’à ce que vous les supprimiez ou désinstalliez l’application (l’historique des sorties conserve les 500 sorties les plus récentes)',
          ],
          [
            'Coordonnées et termes de recherche transmis pour une recherche de magasin ou de produit',
            'Non stockés dans notre base de données; traités pour répondre à la requête puis supprimés, à l’exception des journaux de serveur',
          ],
          [
            'Instantané de planification de sortie (coordonnées, noms d’articles, prix candidats)',
            '15 minutes, puis suppression automatique',
          ],
          [
            'Coordonnées transmises au service de calcul d’itinéraire',
            'Régies par les pratiques de conservation de ce fournisseur; nous ne transmettons aucun identifiant avec celles-ci',
          ],
          [
            'Nom et adresse courriel de l’infolettre',
            'Jusqu’à votre désabonnement, après quoi ils sont retirés de la liste',
          ],
          [
            'Mention de votre désabonnement (adresse courriel seulement)',
            'Conservée sur une liste de suppression afin que vous ne receviez plus de courriels, jusqu’à ce que vous nous demandiez de l’effacer',
          ],
          [
            'Preuve de votre consentement (date d’inscription et texte du formulaire)',
            'Conservée pendant la durée de votre abonnement et pendant 3 ans par la suite, afin que nous puissions démontrer que vous avez demandé à recevoir nos communications si nous devions le faire',
          ],
          [
            'Journaux des serveurs d’application, y compris les URL contenant des termes de recherche et des coordonnées',
            'Au plus 30 jours, puis suppression automatique par notre fournisseur d’hébergement',
          ],
          [
            'Journaux de requêtes de la plateforme du fournisseur d’hébergement, y compris les adresses IP d’origine',
            'Au plus 30 jours, puis suppression automatique',
          ],
          [
            'Journaux du serveur Web, y compris les adresses IP',
            'Conservés par Vercel selon ses propres modalités de conservation',
          ],
        ],
      ),
    ],
  },
  {
    id: 'your-rights',
    heading: 'Vos droits',
    blocks: [
      paragraph(
        'Vous avez le droit d’accéder aux renseignements personnels que nous détenons à votre sujet, de les faire rectifier, de les faire supprimer, de retirer votre consentement à leur utilisation et de recevoir une copie des renseignements personnels informatisés que vous nous avez fournis, dans un format structuré et couramment utilisé. Vous pouvez vous désabonner de notre infolettre à tout moment en nous écrivant ou en cliquant sur le lien de désabonnement dans l’un de nos courriels de marketing. Vous pouvez supprimer toutes vos données en supprimant l’application GoCerise, qui stocke toutes vos données localement. Vous pouvez retirer votre consentement au partage de votre localisation ou le refuser entièrement. Pour exercer l’un de ces droits, ou pour poser une question au sujet de la présente politique, écrivez à privacy@gocerise.com. Nous répondrons dans les 30 jours. Si vous estimez que vos droits en matière de vie privée ont été violés, vous pouvez communiquer avec le Commissariat à la protection de la vie privée du Canada à www.priv.gc.ca',
      ),
    ],
  },
  {
    id: 'third-party-links',
    heading: 'Liens vers des tiers',
    blocks: [
      paragraph(
        'GoCerise vous dirige parfois vers une application ou un site Web que nous n’exploitons pas. Lorsque cela se produit, vous quittez notre contrôle et la politique de confidentialité de l’autre service régit ce qu’il recueille. Nous ne recevons aucun rapport sur ce que vous y faites.',
      ),
      paragraph('Cela se produit lorsque :'),
      list([
        {
          lead: 'Vous demandez l’itinéraire vers un magasin.',
          text: 'GoCerise vous propose d’ouvrir Apple Maps, Google Maps ou Waze, et transmet les coordonnées ou le nom du magasin à l’application que vous choisissez. Cette application sait alors où vous vous rendez, selon sa propre politique de confidentialité.',
        },
        {
          lead: 'Vous envoyez des commentaires.',
          text: 'L’application ouvre votre propre application de courriel avec un message adressé à help@gocerise.com. Votre fournisseur de courriel s’en charge; le message ne transite pas par nos serveurs.',
        },
        {
          lead: 'Vous partagez GoCerise avec un ami.',
          text: 'L’application ouvre la feuille de partage de votre appareil, et l’application que vous choisissez traite le message.',
        },
        {
          lead: 'Vous ouvrez un lien depuis l’application,',
          text: 'qui s’ouvre dans le navigateur de votre appareil.',
        },
      ]),
      paragraph(
        'Les images de produits affichées dans l’application sont chargées depuis les serveurs des détaillants en alimentation eux-mêmes, comme il est décrit à la section 4. Nous ne possédons, n’exploitons ni ne contrôlons aucun de ces services, et nous ne sommes pas responsables de la façon dont ils traitent vos renseignements. Nous vous encourageons à consulter leurs politiques de confidentialité et à communiquer directement avec eux pour toute préoccupation concernant leurs pratiques.',
      ),
    ],
  },
  {
    id: 'childrens-privacy',
    heading: 'Protection de la vie privée des enfants',
    blocks: [
      paragraph(
        'GoCerise ne s’adresse pas aux enfants de moins de 14 ans. Nous ne recueillons pas sciemment de renseignements personnels auprès d’enfants. Si vous croyez qu’un enfant nous a transmis des renseignements personnels, ou qu’il a été inscrit à notre infolettre, et que vous souhaitez que ces renseignements soient retirés, communiquez immédiatement avec nous à privacy@gocerise.com et nous les supprimerons.',
      ),
    ],
  },
  {
    id: 'changes-to-policy',
    heading: 'Modifications à la politique',
    blocks: [
      paragraph(
        'Nous pouvons mettre à jour la présente politique de temps à autre. Si nous apportons des changements importants, nous vous en aviserons dans l’application et sur notre site Web avant leur entrée en vigueur, et nous en informerons les abonnés à l’infolettre par courriel. Nous mettrons également à jour les dates au haut de la présente page. Le fait de continuer à utiliser GoCerise après l’entrée en vigueur des changements constitue une acceptation de la politique mise à jour.',
      ),
    ],
  },
  {
    id: 'contact-us',
    heading: 'Nous joindre',
    blocks: [
      paragraph(
        'Pour toute demande relative à la protection de la vie privée, veuillez communiquer avec nous à privacy@gocerise.com. Pour toute autre question, veuillez communiquer avec nous à : help@gocerise.com.',
      ),
      paragraph(
        'Responsable de la protection des renseignements personnels : Jon Barlas, privacy@gocerise.com. En vertu de la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25), cette personne est responsable de la protection des renseignements personnels chez GoCerise.',
      ),
      paragraph('17695969 Canada Inc. Montréal (Québec), Canada.'),
    ],
  },
]
