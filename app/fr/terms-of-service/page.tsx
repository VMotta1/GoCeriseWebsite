import type { Metadata } from 'next'
import LegalDocumentPage from '@/components/LegalDocumentPage'
import { toMetadataAlternates } from '@/lib/legal-document'
import { TERMS_FR } from '@/lib/terms/fr'

export const metadata: Metadata = {
  title: TERMS_FR.metaTitle,
  description: TERMS_FR.metaDescription,
  alternates: toMetadataAlternates(TERMS_FR),
}

export default function TermsOfServiceFrPage() {
  return <LegalDocumentPage document={TERMS_FR} />
}
