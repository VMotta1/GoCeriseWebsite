'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Step {
  title: string
  desc: string
  image: string
  alt: string
}

interface CarouselProps {
  steps: Step[]
}

const arrowStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  opacity: 0.6,
  transition: 'opacity 0.2s',
  flexShrink: 0,
}

export default function Carousel({ steps }: CarouselProps) {
  const [active, setActive] = useState(0)
  const total = steps.length

  const goToSlide = (n: number) => setActive(((n % total) + total) % total)

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % total), 4000)
    return () => clearInterval(timer)
  }, [total])

  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        className="carousel-inner"
        style={{ display: 'flex', alignItems: 'center', width: 970, gap: 64, position: 'relative' }}
      >
        {/* Step cards */}
        <div
          className="steps-col"
          style={{ display: 'flex', flexDirection: 'column', gap: 64, width: 384, flexShrink: 0 }}
        >
          {steps.map((step, i) => (
            <div
              key={step.title}
              onClick={() => goToSlide(i)}
              style={{
                borderRadius: 30,
                background: '#FFFBF0',
                boxShadow: '0px 4px 10px rgba(52,52,52,0.15)',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                cursor: 'pointer',
                minHeight: 168,
                opacity: i === active ? 1 : 0.4,
                transition: 'opacity 0.25s ease',
              }}
            >
              <div
                className="step-card-title"
                style={{ fontWeight: 700, fontSize: 30, color: '#343434', lineHeight: '100%' }}
              >
                {step.title}
              </div>
              <div style={{ fontSize: 15, lineHeight: '150%', color: '#343434' }}>{step.desc}</div>
            </div>
          ))}
        </div>

        {/* Phone column — arrows flank the phone image so they work on all screen sizes */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {/* Prev arrow */}
            <button
              onClick={() => goToSlide(active - 1)}
              aria-label="Previous"
              style={arrowStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 4L7 10L13 16" stroke="#343434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Phone image */}
            <div
              className="phone-wrap"
              style={{ position: 'relative', width: 310, height: 649 }}
            >
              {steps.map((step, i) => (
                <Image
                  key={step.image}
                  src={step.image}
                  alt={step.alt}
                  width={310}
                  height={649}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    opacity: i === active ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: i === active ? 'auto' : 'none',
                  }}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={() => goToSlide(active + 1)}
              aria-label="Next"
              style={arrowStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="#343434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: '#343434',
                  opacity: i === active ? 1 : 0.2,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'opacity 0.2s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}