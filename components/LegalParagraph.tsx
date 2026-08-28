import { toLegalSegments } from '@/lib/legal-links'

const LINK_STYLE = {
  color: '#6A8E24',
  fontWeight: 600,
  textDecoration: 'underline',
  textUnderlineOffset: 3,
  wordBreak: 'break-word' as const,
}

/** Renders one paragraph of legal copy, linking inline emails and gocerise.com URLs. */
export default function LegalParagraph({ text }: { text: string }) {
  return (
    <p className="legal-body" style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: '#343434' }}>
      {toLegalSegments(text).map((segment, index) =>
        segment.kind === 'text' ? (
          <span key={index}>{segment.value}</span>
        ) : (
          <a key={index} href={segment.href} style={LINK_STYLE}>
            {segment.value}
          </a>
        ),
      )}
    </p>
  )
}
