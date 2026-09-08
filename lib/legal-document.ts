import type { LegalSection } from './legal-blocks'

export type LegalLocale = 'en' | 'fr'

/** Where each language version of a document lives. Also feeds the hreflang tags. */
export type LegalAlternates = Record<LegalLocale, string>

/** UI strings around the document body, so the page component holds no copy. */
export type LegalDocumentLabels = {
  tocHeading: string
  /** Accessible name for the index landmark. */
  tocAriaLabel: string
  backHome: string
  /** Accessible name for the EN / FR switch. */
  languageSwitch: string
}

/** A complete legal page: its chrome, its metadata, and its clauses. */
export type LegalDocument = {
  locale: LegalLocale
  title: string
  metaTitle: string
  metaDescription: string
  /** Pre-composed lines under the title, e.g. "Last updated: August 31, 2026". */
  dateLines: readonly string[]
  /** Long documents get an "on this page" index; short ones do not. */
  showTableOfContents: boolean
  alternates: LegalAlternates
  sections: readonly LegalSection[]
  labels: LegalDocumentLabels
}

/** Metadata alternates, built from the document so the two never drift apart. */
export const toMetadataAlternates = (document: LegalDocument) => ({
  canonical: document.alternates[document.locale],
  languages: { en: document.alternates.en, fr: document.alternates.fr },
})
