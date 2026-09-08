import type { LegalDocument } from '@/lib/legal-document'
import { COLLECTION_SECTIONS_FR } from './fr/collection'
import { USAGE_SECTIONS_FR } from './fr/usage'
import { RIGHTS_SECTIONS_FR } from './fr/rights'

export const PRIVACY_FR: LegalDocument = {
  locale: 'fr',
  title: 'Politique de confidentialité de GoCerise',
  metaTitle: 'Politique de confidentialité — GoCerise',
  metaDescription:
    'Ce que GoCerise recueille, comment ces renseignements sont utilisés, avec qui ils sont partagés et les droits dont vous disposez à leur égard.',
  dateLines: ['Dernière mise à jour : 31 août 2026', 'Date d’entrée en vigueur : 31 août 2026'],
  alternates: { en: '/privacy', fr: '/fr/privacy' },
  showTableOfContents: true,
  sections: [...COLLECTION_SECTIONS_FR, ...USAGE_SECTIONS_FR, ...RIGHTS_SECTIONS_FR],
  labels: {
    tocHeading: 'Sur cette page',
    tocAriaLabel: 'Table des matières',
    backHome: 'Retour à l’accueil',
    languageSwitch: 'Langue',
  },
}
