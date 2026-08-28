import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegalParagraph from '@/components/LegalParagraph'
import { TERMS_EFFECTIVE_DATE, TERMS_LAST_UPDATED, TERMS_SECTIONS } from '@/lib/terms-content'

export const metadata: Metadata = {
  title: 'Terms of Service — GoCerise',
  description: 'The terms that govern your use of the GoCerise website, mobile application, and related services.',
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main
        className="legal-page"
        style={{
          background: '#FFFBF0',
          color: '#343434',
          padding: '160px 32px 96px',
        }}
      >
        <article style={{ maxWidth: 760, margin: '0 auto' }}>
          <h1 className="legal-title" style={{ fontSize: 48, fontWeight: 700, margin: 0, lineHeight: 1.15 }}>
            GoCerise Terms of Service
          </h1>

          <div style={{ marginTop: 20, fontSize: 15, color: 'rgba(52,52,52,0.7)' }}>
            <div>Last updated: {TERMS_LAST_UPDATED}</div>
            <div>Effective date: {TERMS_EFFECTIVE_DATE}</div>
          </div>

          <hr style={{ margin: '40px 0', border: 0, borderTop: '1px solid rgba(52,52,52,0.15)' }} />

          {TERMS_SECTIONS.map(section => (
            <section
              key={section.id}
              id={section.id}
              style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40, scrollMarginTop: 120 }}
            >
              {section.heading && (
                <h2 className="legal-heading" style={{ fontSize: 24, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((paragraph, index) => (
                <LegalParagraph key={index} text={paragraph} />
              ))}
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
