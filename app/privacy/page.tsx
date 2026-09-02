import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegalBlocks from '@/components/LegalBlocks'
import { PRIVACY_EFFECTIVE_DATE, PRIVACY_LAST_UPDATED, PRIVACY_SECTIONS } from '@/lib/privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy — GoCerise',
  description:
    'What GoCerise collects, how it is used, who it is shared with, and the rights you have over it.',
}

const TOC_ENTRIES = PRIVACY_SECTIONS.map(section => ({
  id: section.id,
  label: section.tocLabel ?? section.heading,
})).filter((entry): entry is { id: string; label: string } => Boolean(entry.label))

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page" style={{ background: '#FFFBF0', color: '#343434', padding: '160px 32px 96px' }}>
        <article style={{ maxWidth: 760, margin: '0 auto' }}>
          <h1 className="legal-title" style={{ fontSize: 48, fontWeight: 700, margin: 0, lineHeight: 1.15 }}>
            GoCerise Privacy Policy
          </h1>

          <div style={{ marginTop: 20, fontSize: 15, color: 'rgba(52,52,52,0.7)' }}>
            <div>Last updated: {PRIVACY_LAST_UPDATED}</div>
            <div>Effective date: {PRIVACY_EFFECTIVE_DATE}</div>
          </div>

          <nav
            aria-label="Table of contents"
            style={{
              marginTop: 40,
              padding: '24px 28px',
              borderRadius: 20,
              background: 'rgba(154,192,77,0.18)',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>On this page</div>
            <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {TOC_ENTRIES.map(entry => (
                <li key={entry.id}>
                  <a
                    href={`#${entry.id}`}
                    style={{ fontSize: 15, color: '#343434', textDecoration: 'none', lineHeight: 1.5 }}
                  >
                    {entry.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <hr style={{ margin: '40px 0', border: 0, borderTop: '1px solid rgba(52,52,52,0.15)' }} />

          {PRIVACY_SECTIONS.map(section => (
            <section
              key={section.id}
              id={section.id}
              style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48, scrollMarginTop: 120 }}
            >
              {section.heading && (
                <h2 className="legal-heading" style={{ fontSize: 26, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                  {section.heading}
                </h2>
              )}

              <LegalBlocks blocks={section.blocks} />
            </section>
          ))}

          <a
            href="/"
            style={{
              display: 'inline-block',
              marginTop: 16,
              fontSize: 15,
              fontWeight: 700,
              color: '#FFFBF0',
              textDecoration: 'none',
              padding: '12px 24px',
              borderRadius: 1000,
              background: '#6A8E24',
            }}
          >
            Back to home
          </a>
        </article>
      </main>
      <Footer />
    </>
  )
}
