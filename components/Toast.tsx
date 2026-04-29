'use client'

interface ToastProps {
  show: boolean
  message: string
}

export default function Toast({ show, message }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 32,
        left: '50%',
        transform: show ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(100px)',
        background: '#343434',
        color: '#FFFBF0',
        borderRadius: 1000,
        padding: '14px 28px',
        fontSize: 15,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
        zIndex: 999,
        whiteSpace: 'nowrap',
        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        pointerEvents: 'none',
      }}
    >
      {message}
    </div>
  )
}