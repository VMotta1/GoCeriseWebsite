import type { LegalDocument } from '@/lib/legal-document'
import { TERMS_EFFECTIVE_DATE, TERMS_LAST_UPDATED, TERMS_SECTIONS } from './en-content'
import { toLegalSections } from './document'

export const TERMS_EN: LegalDocument = {
  locale: 'en',
  title: 'GoCerise Terms of Service',
  metaTitle: 'Terms of Service — GoCerise',
  metaDescription:
    'The terms that govern your use of the GoCerise website, mobile application, and related services.',
  dateLines: [`Last updated: ${TERMS_LAST_UPDATED}`, `Effective date: ${TERMS_EFFECTIVE_DATE}`],
  alternates: { en: '/terms-of-service', fr: '/fr/terms-of-service' },
  showTableOfContents: false,
  sections: toLegalSections(TERMS_SECTIONS),
  labels: {
    tocHeading: 'On this page',
    tocAriaLabel: 'Table of contents',
    backHome: 'Back to home',
    languageSwitch: 'Language',
  },
}
