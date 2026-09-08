import type { Metadata } from 'next'
import LegalDocumentPage from '@/components/LegalDocumentPage'
import { toMetadataAlternates } from '@/lib/legal-document'
import { TERMS_EN } from '@/lib/terms/en'

export const metadata: Metadata = {
  title: TERMS_EN.metaTitle,
  description: TERMS_EN.metaDescription,
  alternates: toMetadataAlternates(TERMS_EN),
}

export default function TermsOfServicePage() {
  return <LegalDocumentPage document={TERMS_EN} />
}
