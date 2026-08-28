import type { LegalListItem } from '@/lib/legal-blocks'
import { toLegalSegments } from '@/lib/legal-links'
import LegalInline from './LegalInline'

/** Bulleted legal copy, with an optional bolded lead-in phrase per bullet. */
export default function LegalList({ items }: { items: readonly LegalListItem[] }) {
  return (
    <ul
      className="legal-body"
      style={{
        margin: 0,
        paddingLeft: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        fontSize: 17,
        lineHeight: 1.7,
        color: '#343434',
      }}
    >
      {items.map((item, index) => (
        <li key={index}>
          {item.lead && <strong style={{ fontWeight: 700 }}>{item.lead} </strong>}
          <LegalInline segments={toLegalSegments(item.text)} />
        </li>
      ))}
    </ul>
  )
}
