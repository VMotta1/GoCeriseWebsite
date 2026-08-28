import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('links Terms of Service to /terms-of-service', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toHaveAttribute(
      'href',
      '/terms-of-service',
    )
  })

  it('links Privacy Policy to /privacy', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy')
  })
})
