import type { LegalSegment } from '@/lib/legal-links'

const LINK_STYLE = {
  color: '#6A8E24',
  fontWeight: 600,
  textDecoration: 'underline',
  textUnderlineOffset: 3,
  wordBreak: 'break-word' as const,
}

/** Renders pre-tokenized legal copy, turning link segments into anchors. */
export default function LegalInline({ segments }: { segments: readonly LegalSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.kind === 'text' ? (
          <span key={index}>{segment.value}</span>
        ) : (
          <a key={index} href={segment.href} style={LINK_STYLE}>
            {segment.value}
          </a>
        ),
      )}
    </>
  )
}
