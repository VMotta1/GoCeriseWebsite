import Navbar from './Navbar'
import Footer from './Footer'
import LegalBlocks from './LegalBlocks'
import LegalTableOfContents from './LegalTableOfContents'
import LegalLanguageSwitch from './LegalLanguageSwitch'
import type { LegalDocument } from '@/lib/legal-document'

/** Renders a legal document in either language. All copy comes from the document. */
export default function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <Navbar />
      <main className="legal-page" style={{ background: '#FFFBF0', color: '#343434', padding: '160px 32px 96px' }}>
        <article lang={document.locale} style={{ maxWidth: 760, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <h1 className="legal-title" style={{ fontSize: 48, fontWeight: 700, margin: 0, lineHeight: 1.15 }}>
              {document.title}
            </h1>
            <LegalLanguageSwitch
              locale={document.locale}
              alternates={document.alternates}
              label={document.labels.languageSwitch}
            />
          </div>

          <div style={{ marginTop: 20, fontSize: 15, color: 'rgba(52,52,52,0.7)' }}>
            {document.dateLines.map(line => (
              <div key={line}>{line}</div>
            ))}
          </div>

          {document.showTableOfContents && (
            <LegalTableOfContents
              sections={document.sections}
              heading={document.labels.tocHeading}
              ariaLabel={document.labels.tocAriaLabel}
            />
          )}

          <hr style={{ margin: '40px 0', border: 0, borderTop: '1px solid rgba(52,52,52,0.15)' }} />

          {document.sections.map(section => (
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
            {document.labels.backHome}
          </a>
        </article>
      </main>
      <Footer />
    </>
  )
}
