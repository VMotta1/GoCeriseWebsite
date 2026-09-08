import type { LegalDocument } from '@/lib/legal-document'
import { TERMS_EFFECTIVE_DATE_FR, TERMS_LAST_UPDATED_FR, TERMS_SECTIONS_FR } from './fr-content'
import { toLegalSections } from './document'

export const TERMS_FR: LegalDocument = {
  locale: 'fr',
  title: 'Conditions d’utilisation de GoCerise',
  metaTitle: 'Conditions d’utilisation — GoCerise',
  metaDescription:
    'Les conditions qui régissent votre utilisation du site Web, de l’application mobile et des services connexes de GoCerise.',
  dateLines: [
    `Dernière mise à jour : ${TERMS_LAST_UPDATED_FR}`,
    `Date d’entrée en vigueur : ${TERMS_EFFECTIVE_DATE_FR}`,
  ],
  alternates: { en: '/terms-of-service', fr: '/fr/terms-of-service' },
  showTableOfContents: false,
  sections: toLegalSections(TERMS_SECTIONS_FR),
  labels: {
    tocHeading: 'Sur cette page',
    tocAriaLabel: 'Table des matières',
    backHome: 'Retour à l’accueil',
    languageSwitch: 'Langue',
  },
}
