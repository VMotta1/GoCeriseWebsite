'use client'

import { useEffect, useState } from 'react'
import LogoSVG from './LogoSVG'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: '24px 32px 0',
        pointerEvents: 'none',
      }}
    >
      <nav
        role="navigation"
        data-scrolled={String(scrolled)}
        style={{
          pointerEvents: 'all',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 100,
          padding: '16px',
          maxWidth: 1216,
          margin: '0 auto',
          transition: 'background 0.45s ease, box-shadow 0.45s ease',
          background: scrolled ? 'rgba(255,251,240,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0px 4px 10px rgba(52,52,52,0.15)' : 'none',
        }}
      >
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
            padding: '6px 12px 6px 6px',
            borderRadius: 999,
            backgroundColor: 'transparent',
            transition: 'background-color 0.25s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <LogoSVG />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a
            href="#how"
            className="nav-link"
            style={{ fontSize: 15, color: '#343434', textDecoration: 'none', padding: '8px 16px', borderRadius: 1000, transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(52,52,52,0.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            How it works
          </a>
          <a
            href="#about"
            className="nav-link"
            style={{ fontSize: 15, color: '#343434', textDecoration: 'none', padding: '8px 16px', borderRadius: 1000, transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(52,52,52,0.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            About us
          </a>
          <a
            href="#waitlist"
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: '#FFFBF0',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: 1000,
              background: '#6A8E24',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Join Waitlist
          </a>
        </div>
      </nav>
    </div>
  )
}