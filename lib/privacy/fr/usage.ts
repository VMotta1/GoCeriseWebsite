import { type LegalSection, paragraph, table } from '@/lib/legal-blocks'

/** Utilisation, communication, transferts d’entreprise et traitement à l’étranger. */
export const USAGE_SECTIONS_FR: readonly LegalSection[] = [
  {
    id: 'how-we-use-information',
    heading: 'Comment nous utilisons les renseignements',
    blocks: [
      table(
        ['Renseignements', 'Provenance', 'Finalité'],
        [
          [
            'Coordonnées, ou l’adresse que vous saisissez',
            'Application',
            'Trouver les épiceries près de vous, établir le prix de votre liste dans ces magasins et tracer les itinéraires routiers',
          ],
          [
            'Termes de recherche de produits et noms d’articles',
            'Application',
            'Retourner les produits correspondants et leurs prix dans les magasins à proximité',
          ],
          [
            'Préférences de bannières de magasins et rayon de recherche',
            'Application',
            'Limiter les résultats aux chaînes et à la distance qui vous intéressent',
          ],
          [
            'Instantané de planification de sortie',
            'Application',
            'Maintenir la cohérence des prix qui vous ont été affichés pendant que vous choisissez un itinéraire, pour un maximum de 15 minutes',
          ],
          [
            'Nom et adresse courriel',
            'Inscription à l’infolettre sur le site Web',
            'Vous envoyer les courriels de l’infolettre que vous avez demandés, et rien d’autre',
          ],
          [
            'Journaux de serveur, y compris l’adresse IP',
            'Application et site Web',
            'Sécurité, prévention des abus, limitation du débit et débogage',
          ],
        ],
      ),
      paragraph(
        'Nous utilisons ces renseignements uniquement aux fins indiquées ci-dessus. Nous ne les utilisons pas à des fins de publicité, de profilage ou de décision automatisée, et nous ne les vendons ni ne les louons à quiconque.',
      ),
    ],
  },
  {
    id: 'who-we-share-with',
    heading: 'Avec qui nous partageons les renseignements',
    blocks: [
      paragraph(
        'Nous ne vendons pas vos renseignements et nous ne les partageons pas avec des courtiers en données ou des annonceurs.',
      ),
      table(
        ['Qui', 'Ce qu’ils reçoivent', 'Pourquoi', 'Relation'],
        [
          [
            'Railway',
            'Tout ce que traitent nos serveurs d’application : coordonnées et termes de recherche dans les journaux de requêtes, instantanés de planification de sorties, contenu de la base de données',
            'Héberge nos serveurs d’application et notre base de données d’épicerie',
            'Fournisseur de services, agissant selon nos instructions',
          ],
          [
            'Tigris Data (par l’entremise de Railway)',
            'Données du catalogue d’épicerie seulement : noms de produits, prix, adresses de magasins. Aucun renseignement sur les utilisateurs',
            'Stockage d’objets pour les données de prix extraites',
            'Fournisseur de services, agissant selon nos instructions',
          ],
          [
            'Vercel',
            'Journaux de requêtes du site Web, y compris les adresses IP',
            'Héberge gocerise.com',
            'Fournisseur de services, agissant selon nos instructions',
          ],
          [
            'Supabase',
            'Le nom et l’adresse courriel des abonnés à l’infolettre, ainsi que l’adresse IP d’où provient l’inscription. Stockés au Canada',
            'Stocke la liste d’envoi',
            'Fournisseur de services, agissant selon nos instructions',
          ],
          [
            'DeepL',
            'Noms de produits de notre catalogue d’épicerie seulement. Jamais de recherches, de contenu de listes ni de localisation',
            'Prétraduction des noms de produits en français',
            'Fournisseur de services, agissant selon nos instructions',
          ],
          [
            'Fournisseur de calcul d’itinéraire',
            'Les coordonnées du point de départ et des arrêts de votre itinéraire, ainsi que l’adresse IP de notre serveur, jamais la vôtre',
            'Calcul des itinéraires routiers',
            'Tiers indépendant',
          ],
          [
            'Google Maps (Android)',
            'Votre localisation, votre adresse IP et des renseignements sur votre appareil, directement depuis votre appareil',
            'Affichage de la carte',
            'Tiers indépendant',
          ],
          [
            'Apple Maps (iOS)',
            'Signaux de localisation et d’appareil, directement depuis votre appareil',
            'Affichage de la carte',
            'Tiers indépendant',
          ],
          [
            'Géocodage Apple / Google',
            'Le texte de l’adresse que vous saisissez',
            'Conversion des adresses en coordonnées',
            'Tiers indépendant',
          ],
          [
            'Serveurs d’images des détaillants en alimentation',
            'Votre adresse IP et les images de produits qui ont été demandées',
            'Diffusion des photos de produits',
            'Tiers indépendant',
          ],
          [
            'Frankfurter',
            'Votre adresse IP. Rien d’autre',
            'Taux de change quotidien CAD→USD',
            'Tiers indépendant',
          ],
        ],
      ),
      paragraph(
        'Nous pouvons également communiquer des renseignements si la loi, une ordonnance d’un tribunal ou une autre procédure judiciaire l’exige, ou pour protéger les droits, la sécurité et la sûreté de GoCerise, de nos utilisateurs ou du public.',
      ),
    ],
  },
  {
    id: 'business-transfers',
    heading: 'Transferts d’entreprise',
    blocks: [
      paragraph(
        'Si GoCerise participe à une fusion, une acquisition, un financement, une réorganisation ou la vente de la totalité ou d’une partie de ses actifs, les renseignements que nous détenons pourraient être transférés dans le cadre de cette opération. Le cas échéant, nous nous efforcerons d’orienter le cessionnaire vers les renseignements d’une manière conforme à la présente politique telle qu’elle était en vigueur au moment où ces renseignements ont été recueillis.',
      ),
    ],
  },
  {
    id: 'international-processing',
    heading: 'Traitement et transferts à l’étranger',
    blocks: [
      paragraph(
        'Nos serveurs d’application et notre base de données sont hébergés par Railway sur une infrastructure située aux États-Unis (us-east4). Les renseignements que nous transmettons à Railway sont décrits à la sous-section « Renseignements recueillis automatiquement ou par des fournisseurs de services ». La base de données active de l’infolettre est configurée dans la région canadienne de Supabase. Nous ne configurons pas intentionnellement cette base de données pour stocker les noms et les adresses courriel de l’infolettre à l’extérieur du Canada. Notre site Web est diffusé par Vercel à partir d’un réseau de diffusion mondial; la page que vous lisez peut donc être livrée depuis un serveur situé à l’extérieur du Canada, et Vercel conserve des journaux de requêtes Web standards, y compris les adresses IP, selon ses propres modalités de conservation. Les coordonnées d’itinéraire sont en outre transmises au service de calcul d’itinéraire nommé à la section « Avec qui nous partageons les renseignements », qui les traite sur des serveurs situés en Suisse et qui est exploité par un organisme établi en Allemagne, assujetti au droit européen de la protection des données. Les services de cartographie, de géocodage, de taux de change et d’images de produits nommés précédemment peuvent également traiter des requêtes à l’extérieur du Canada.',
      ),
      paragraph(
        'Avant de recourir à des fournisseurs qui traitent des renseignements personnels à l’extérieur du Canada, nous évaluons le traitement envisagé, notamment la sensibilité des renseignements, les finalités, les périodes de conservation, les mesures de sécurité et les garanties contractuelles du fournisseur, les lois applicables dans les territoires de destination, et la question de savoir si les sous-traitants du fournisseur entraînent des transferts supplémentaires.',
      ),
    ],
  },
]
