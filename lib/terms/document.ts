import type { LegalSection } from '@/lib/legal-blocks'
import { paragraph } from '@/lib/legal-blocks'
import type { TermsSection } from './section'

/** Terms clauses carry prose only, so each paragraph becomes a paragraph block. */
export const toLegalSections = (sections: readonly TermsSection[]): readonly LegalSection[] =>
  sections.map(section => ({
    id: section.id,
    heading: section.heading,
    blocks: section.paragraphs.map(paragraph),
  }))
