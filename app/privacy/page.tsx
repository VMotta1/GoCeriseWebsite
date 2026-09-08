import type { Metadata } from 'next'
import LegalDocumentPage from '@/components/LegalDocumentPage'
import { toMetadataAlternates } from '@/lib/legal-document'
import { PRIVACY_EN } from '@/lib/privacy/en'

export const metadata: Metadata = {
  title: PRIVACY_EN.metaTitle,
  description: PRIVACY_EN.metaDescription,
  alternates: toMetadataAlternates(PRIVACY_EN),
}

export default function PrivacyPage() {
  return <LegalDocumentPage document={PRIVACY_EN} />
}
