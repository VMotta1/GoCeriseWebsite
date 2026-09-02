import type { LegalSection } from '@/lib/legal-blocks'
import { COLLECTION_SECTIONS } from './collection'
import { USAGE_SECTIONS } from './usage'
import { RIGHTS_SECTIONS } from './rights'

export const PRIVACY_LAST_UPDATED = 'August 31, 2026'
export const PRIVACY_EFFECTIVE_DATE = 'August 31, 2026'

export const PRIVACY_SECTIONS: readonly LegalSection[] = [
  ...COLLECTION_SECTIONS,
  ...USAGE_SECTIONS,
  ...RIGHTS_SECTIONS,
]
