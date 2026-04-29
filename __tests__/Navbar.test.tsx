import { render, screen, act } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders nav links and CTA', () => {
    render(<Navbar />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Join Waitlist')).toBeInTheDocument()
  })

  it('toggles scrolled state when scrollY exceeds 85% of viewport height', () => {
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true })
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav.getAttribute('data-scrolled')).toBe('false')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 700, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(nav.getAttribute('data-scrolled')).toBe('true')
  })
})