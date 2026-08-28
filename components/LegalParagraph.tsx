import { toLegalSegments } from '@/lib/legal-links'
import LegalInline from './LegalInline'

/** Renders one paragraph of legal copy, linking inline emails and gocerise.com URLs. */
export default function LegalParagraph({ text }: { text: string }) {
  return (
    <p className="legal-body" style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: '#343434' }}>
      <LegalInline segments={toLegalSegments(text)} />
    </p>
  )
}
