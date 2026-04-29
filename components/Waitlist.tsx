import WaitlistForm from './WaitlistForm'

export default function Waitlist() {
  return (
    <section
      id="waitlist"
      style={{
        width: '100%',
        background: 'linear-gradient(180deg, rgb(214,61,86) 0%, rgb(255,251,240) 100%)',
      }}
    >
      <div
        className="waitlist-inner"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '192px 64px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 128,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
          <h2
            className="section-title"
            style={{ fontWeight: 700, fontSize: 50, color: '#343434', textAlign: 'center' }}
          >
            Join Early Access Waitlist
          </h2>
          <p
            className="section-subtitle"
            style={{ fontSize: 30, color: 'rgba(52,52,52,0.5)', textAlign: 'center' }}
          >
            Be first to try our app and start saving
          </p>
        </div>
        <WaitlistForm />
      </div>
    </section>
  )
}