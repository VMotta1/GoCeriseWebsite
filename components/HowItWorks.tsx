import Carousel from './Carousel'

const STEPS = [
  {
    title: 'Create a list',
    desc: 'Create a list, name it, search and add items, and customize your list',
    image: '/assets/screen-create-list.png',
    alt: 'Create a list screen',
  },
  {
    title: 'Plan your trip',
    desc: 'Set location, choose shopping radius, and select how we find your deals',
    image: '/assets/screen-plan-trip.png',
    alt: 'Plan your trip screen',
  },
  {
    title: 'Cherry pick deals',
    desc: 'Let the app do the work and find the best deals based on your preferences',
    image: '/assets/screen-optimized-route.png',
    alt: 'Cherry pick deals screen',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="how-section"
      style={{
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        padding: '128px 64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 64,
        background: '#FFFBF0',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
        <h2
          className="section-title"
          style={{ fontWeight: 700, fontSize: 50, lineHeight: '100%', color: '#343434', textAlign: 'center' }}
        >
          How it works
        </h2>
        <p
          className="section-subtitle"
          style={{ fontSize: 30, lineHeight: '100%', color: 'rgba(52,52,52,0.5)', textAlign: 'center' }}
        >
          Compare prices across stores and find the best route in seconds
        </p>
      </div>
      <Carousel steps={STEPS} />
    </section>
  )
}