import type { LegalDocument } from '@/lib/legal-document'
import { COLLECTION_SECTIONS } from './en/collection'
import { USAGE_SECTIONS } from './en/usage'
import { RIGHTS_SECTIONS } from './en/rights'

export const PRIVACY_EN: LegalDocument = {
  locale: 'en',
  title: 'GoCerise Privacy Policy',
  metaTitle: 'Privacy Policy — GoCerise',
  metaDescription:
    'What GoCerise collects, how it is used, who it is shared with, and the rights you have over it.',
  dateLines: ['Last updated: August 31, 2026', 'Effective date: August 31, 2026'],
  alternates: { en: '/privacy', fr: '/fr/privacy' },
  showTableOfContents: true,
  sections: [...COLLECTION_SECTIONS, ...USAGE_SECTIONS, ...RIGHTS_SECTIONS],
  labels: {
    tocHeading: 'On this page',
    tocAriaLabel: 'Table of contents',
    backHome: 'Back to home',
    languageSwitch: 'Language',
  },
}
