import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — GoCerise',
  description: 'GoCerise privacy policy.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '160px 32px 96px',
          background: '#FFFBF0',
          color: '#343434',
        }}
      >
        <h1 style={{ fontSize: 48, fontWeight: 700, margin: 0 }}>Privacy Policy</h1>
        <p style={{ fontSize: 20, maxWidth: 560, marginTop: 24, lineHeight: 1.5 }}>
          We&apos;re putting the finishing touches on our privacy policy. Check back soon.
        </p>
        <a
          href="/"
          style={{
            marginTop: 40,
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
      </main>
      <Footer />
    </>
  )
}
