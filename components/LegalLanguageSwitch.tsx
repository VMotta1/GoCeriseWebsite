import type { LegalAlternates, LegalLocale } from '@/lib/legal-document'

const LOCALES: readonly LegalLocale[] = ['en', 'fr']

const linkStyle = (isCurrent: boolean) => ({
  fontSize: 15,
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: 0.5,
  color: isCurrent ? '#343434' : '#6A8E24',
  textDecoration: isCurrent ? 'none' : 'underline',
  textUnderlineOffset: 3,
})

/** EN / FR switch. Both languages stay visible; the current one is marked. */
export default function LegalLanguageSwitch({
  locale,
  alternates,
  label,
}: {
  locale: LegalLocale
  alternates: LegalAlternates
  label: string
}) {
  return (
    <nav aria-label={label} style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexShrink: 0 }}>
      {LOCALES.map((code, index) => (
        <span key={code} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          {index > 0 && <span aria-hidden="true" style={{ color: 'rgba(52,52,52,0.4)' }}>/</span>}
          <a
            href={alternates[code]}
            hrefLang={code}
            aria-current={code === locale ? 'page' : undefined}
            style={linkStyle(code === locale)}
          >
            {code}
          </a>
        </span>
      ))}
    </nav>
  )
}
