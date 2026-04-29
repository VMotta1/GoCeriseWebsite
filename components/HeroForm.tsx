'use client'

import { useState } from 'react'
import Toast from './Toast'

export default function HeroForm() {
  const [email, setEmail] = useState('')
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setEmail('')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3500)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          borderRadius: 1500,
          boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
          padding: 8,
          width: 342,
          height: 50,
        }}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'Inter, sans-serif',
            fontSize: 15,
            color: '#343434',
            padding: '0 16px',
          }}
        />
        <button
          type="submit"
          style={{
            flexShrink: 0,
            background: '#6A8E24',
            color: '#FFFBF0',
            border: 'none',
            borderRadius: 1000,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 15,
            padding: '8px 16px',
            height: 34,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Join Waitlist
        </button>
      </form>
      <Toast show={showToast} message="🍒 You're on the list! We'll be in touch." />
    </>
  )
}