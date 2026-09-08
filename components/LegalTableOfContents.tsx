import type { LegalSection } from '@/lib/legal-blocks'

const toEntries = (sections: readonly LegalSection[]) =>
  sections
    .map(section => ({ id: section.id, label: section.tocLabel ?? section.heading }))
    .filter((entry): entry is { id: string; label: string } => Boolean(entry.label))

/** "On this page" index for documents long enough that jumping to a clause matters. */
export default function LegalTableOfContents({
  sections,
  heading,
  ariaLabel,
}: {
  sections: readonly LegalSection[]
  heading: string
  ariaLabel: string
}) {
  return (
    <nav
      aria-label={ariaLabel}
      style={{ marginTop: 40, padding: '24px 28px', borderRadius: 20, background: 'rgba(154,192,77,0.18)' }}
    >
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>{heading}</div>
      <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {toEntries(sections).map(entry => (
          <li key={entry.id}>
            <a href={`#${entry.id}`} style={{ fontSize: 15, color: '#343434', textDecoration: 'none', lineHeight: 1.5 }}>
              {entry.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
