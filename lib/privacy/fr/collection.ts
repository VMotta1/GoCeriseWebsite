import { type LegalSection, list, paragraph } from '@/lib/legal-blocks'

/** Préambule et les quatre clauses sur ce que nous recueillons. */
export const COLLECTION_SECTIONS_FR: readonly LegalSection[] = [
  {
    id: 'preamble',
    tocLabel: 'Introduction',
    blocks: [
      paragraph(
        '17695969 Canada Inc., faisant affaire sous le nom de GoCerise (« GoCerise », « gocerise », « nous » ou « notre »), exploite l’application mobile et le site Web GoCerise (collectivement, le « Service »). La présente politique de confidentialité explique comment nous recueillons, utilisons, communiquons et protégeons vos renseignements lorsque vous utilisez notre Service.',
      ),
      paragraph(
        'Protéger votre vie privée est important pour nous. C’est pourquoi l’application mobile GoCerise ne comporte aucun compte ni aucune connexion. Il n’y a pas d’écran d’inscription, pas de mot de passe et pas d’authentification par les réseaux sociaux. Vos listes et l’historique de votre magasinage sont stockés sur votre téléphone, et non sur nos serveurs.',
      ),
      paragraph(
        'Veuillez lire attentivement la présente politique de confidentialité. En accédant au Service ou en l’utilisant, vous consentez aux pratiques décrites dans la présente politique. Si vous n’y consentez pas, n’utilisez pas le Service.',
      ),
    ],
  },
  {
    id: 'no-account-required',
    heading: 'Aucun compte requis',
    blocks: [
      paragraph(
        'Nous ne créons pas de comptes d’utilisateur et nous n’associons pas intentionnellement l’activité dans l’application à une personne nommément désignée. Toutefois, nos fournisseurs de services peuvent traiter des renseignements techniques, tels que les adresses IP, les chemins de requête et les horodatages, comme il est décrit ci-dessous. L’application n’envoie pas intentionnellement d’identifiant de compte, d’identifiant publicitaire, d’identifiant d’appareil ni d’identifiant d’installation avec ses requêtes.',
      ),
    ],
  },
  {
    id: 'information-you-provide',
    heading: 'Renseignements que vous fournissez ou choisissez d’enregistrer',
    blocks: [
      list([
        {
          lead: 'Renseignements de magasinage :',
          text: 'listes d’épicerie, noms de listes, produits, quantités, prix, historique des sorties de magasinage et renseignements sur les économies que vous choisissez de saisir ou d’enregistrer.',
        },
        {
          lead: 'Renseignements de localisation :',
          text: 'coordonnées GPS lorsque vous accordez l’autorisation de localisation, ou coordonnées dérivées d’une adresse ou d’un code postal que vous saisissez.',
        },
        {
          lead: 'Renseignements de recherche et de planification :',
          text: 'recherches de produits, recherches de magasins, préférences de magasins sélectionnées, rayon de recherche, langue, ainsi que les articles et les quantités utilisés pour la planification des sorties.',
        },
        {
          lead: 'Paramètres :',
          text: 'langue, devise, progression du tutoriel, choix de consentement à la localisation et autres préférences de l’application.',
        },
        {
          lead: 'Commentaires et correspondance :',
          text: 'messages ou autres renseignements que vous nous envoyez, y compris les renseignements contenus dans les courriels de soutien.',
        },
        {
          lead: 'Renseignements liés à l’infolettre :',
          text: 'votre nom et votre adresse courriel si vous vous abonnez par l’entremise de notre site Web.',
        },
      ]),
    ],
  },
  {
    id: 'information-collected-automatically',
    heading: 'Renseignements recueillis automatiquement ou par des fournisseurs de services',
    blocks: [
      list([
        {
          lead: 'Renseignements techniques :',
          text: 'adresse IP, date et heure de la requête, chemin de la requête, code de réponse, temps de réponse, renseignements sur le navigateur ou l’application, et autres renseignements consignés par nos fournisseurs d’hébergement et d’infrastructure.',
        },
        {
          lead: 'Renseignements de sécurité et de diagnostic :',
          text: 'renseignements utilisés pour prévenir les abus, appliquer les limites de débit, résoudre les erreurs et protéger l’application et le site Web.',
        },
        {
          lead: 'Renseignements sur le site Web :',
          text: 'renseignements techniques sur les visites de notre site Web, y compris les renseignements traités par le fournisseur d’hébergement du site Web.',
        },
        {
          lead: 'Renseignements transmis à des services tiers :',
          text: 'renseignements envoyés aux fournisseurs de cartographie, de géocodage, de calcul d’itinéraire, de taux de change, d’images de produits, de courriel, d’hébergement et autres, lorsque cela est nécessaire pour fournir la fonctionnalité demandée.',
        },
      ]),
    ],
  },
  {
    id: 'information-stored-locally',
    heading: 'Renseignements stockés localement sur votre appareil',
    blocks: [
      paragraph(
        'L’application stocke certains renseignements localement, notamment les listes d’épicerie, l’historique des sorties de magasinage, les calculs de dépenses, les recherches d’adresse ou de code postal, les préférences de magasins, les paramètres et les données de taux de change. Ces renseignements ne sont pas stockés sur nos serveurs d’application, sauf si la présente politique le prévoit expressément. Les sauvegardes d’appareil, les services du système d’exploitation et d’autres applications peuvent traiter les renseignements stockés localement selon leurs propres paramètres et politiques.',
      ),
    ],
  },
]
