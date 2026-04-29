import HeroForm from './HeroForm'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: "url('/assets/hero-gradient.png') center/cover no-repeat",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 64,
          padding: '0 20px',
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontWeight: 700,
            lineHeight: '105%',
            textAlign: 'center',
            color: '#fff',
            maxWidth: 800,
          }}
        >
          Cherry pick your grocery prices
        </h1>
        <HeroForm />
      </div>
    </section>
  )
}