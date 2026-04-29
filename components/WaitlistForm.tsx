'use client'

import { useState } from 'react'
import Toast from './Toast'
import { supabase } from '@/lib/supabase'

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || !email) return
    await supabase.from('waitlist').insert({ name, email })
    setName('')
    setEmail('')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3500)
  }

  const inputStyle: React.CSSProperties = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'Inter, sans-serif',
    fontSize: 30,
    color: '#343434',
    padding: '0 32px',
    minWidth: 0,
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="waitlist-form"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          width: 860,
        }}
      >
        {/* Input pill */}
        <div
          className="waitlist-inputs"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            borderRadius: 1500,
            boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
            padding: '0 8px',
            height: 100,
            minWidth: 0,
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="name"
            className="waitlist-input"
            style={inputStyle}
          />
          <div className="waitlist-divider" style={{ width: 1, height: 40, background: '#e0e0e0', flexShrink: 0 }} />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            className="waitlist-input"
            style={inputStyle}
          />
        </div>

        {/* Button pill — same height as input pill */}
        <button
          type="submit"
          className="waitlist-btn"
          style={{
            flexShrink: 0,
            background: '#6A8E24',
            color: '#FFFBF0',
            border: 'none',
            borderRadius: 1500,
            fontFamily: 'Inter, sans-serif',
            fontSize: 30,
            padding: '0 40px',
            height: 100,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Join Waitlist
        </button>
      </form>
      {showToast && <Toast show={showToast} message="🍒 You're on the list! We'll be in touch." />}
    </>
  )
}