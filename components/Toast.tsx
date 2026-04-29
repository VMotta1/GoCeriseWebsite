'use client'

interface ToastProps {
  show: boolean
  message: string
}

export default function Toast({ show, message }: ToastProps) {
  if (!show) return null

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#343434',
        color: '#FFFBF0',
        borderRadius: 1000,
        padding: '12px 24px',
        fontSize: 15,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        boxShadow: '0px 4px 16px rgba(0,0,0,0.25)',
        zIndex: 1000,
        whiteSpace: 'nowrap',
      }}
    >
      {message}
    </div>
  )
}