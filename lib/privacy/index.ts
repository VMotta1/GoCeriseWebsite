import type { LegalSection } from '@/lib/legal-blocks'
import { OVERVIEW_SECTIONS } from './overview'
import { COLLECTION_SECTION } from './collection'
import { USAGE_SECTIONS } from './usage'
import { SHARING_SECTIONS } from './sharing'
import { RIGHTS_SECTIONS } from './rights'

export const PRIVACY_EFFECTIVE_DATE = 'August 28, 2026'
export const PRIVACY_LAST_UPDATED = 'August 28, 2026'

export const PRIVACY_SECTIONS: readonly LegalSection[] = [
  ...OVERVIEW_SECTIONS,
  COLLECTION_SECTION,
  ...USAGE_SECTIONS,
  ...SHARING_SECTIONS,
  ...RIGHTS_SECTIONS,
]
