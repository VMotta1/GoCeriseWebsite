import type { Metadata } from 'next'
import LegalDocumentPage from '@/components/LegalDocumentPage'
import { toMetadataAlternates } from '@/lib/legal-document'
import { PRIVACY_FR } from '@/lib/privacy/fr'

export const metadata: Metadata = {
  title: PRIVACY_FR.metaTitle,
  description: PRIVACY_FR.metaDescription,
  alternates: toMetadataAlternates(PRIVACY_FR),
}

export default function PrivacyFrPage() {
  return <LegalDocumentPage document={PRIVACY_FR} />
}
