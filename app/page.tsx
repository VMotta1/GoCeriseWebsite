import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Curtain — slides over sticky hero via CSS z-index stacking */}
      <div style={{ position: 'relative', zIndex: 2, background: '#FFFBF0' }}>
        <HowItWorks />
        <Waitlist />
        <Footer />
      </div>
    </>
  )
}