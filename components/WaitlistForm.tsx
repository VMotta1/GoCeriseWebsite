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
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="waitlist-form"
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          borderRadius: 1500,
          boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
          padding: 16,
          width: 860,
          height: 100,
          gap: 0,
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
        <div style={{ width: 1, height: 40, background: '#e0e0e0', flexShrink: 0 }} />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          className="waitlist-input"
          style={inputStyle}
        />
        <button
          type="submit"
          className="waitlist-btn"
          style={{
            flexShrink: 0,
            background: '#6A8E24',
            color: '#FFFBF0',
            border: 'none',
            borderRadius: 1000,
            fontFamily: 'Inter, sans-serif',
            fontSize: 30,
            padding: '16px 32px',
            height: 68,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(2px)',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <span style={{ position: 'relative', top: -4 }}>Join Waitlist</span>
        </button>
      </form>
      {showToast && <Toast show={showToast} message="🍒 You're on the list! We'll be in touch." />}
    </>
  )
}