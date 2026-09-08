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

  it('shows both store badges, Apple above Android', () => {
    const { container } = render(<Footer />)
    const alts = Array.from(container.querySelectorAll('img')).map(img => img.getAttribute('alt'))
    expect(alts).toEqual(['Download on the App Store', 'Get it on Google Play'])
  })

  it('places the badges between the Contact and Legal columns', () => {
    const { container } = render(<Footer />)
    const text = container.textContent ?? ''
    const badges = container.querySelector('.footer-badges')
    expect(badges).toBeInTheDocument()
    expect(text.indexOf('Contact')).toBeLessThan(text.indexOf('Legal & Support'))
    const columns = Array.from(container.querySelectorAll('.footer-links > *'))
    expect(columns.indexOf(badges as Element)).toBe(1)
    expect(columns).toHaveLength(3)
  })

  it('scales the Google badge up to offset the clear space baked into its canvas', () => {
    const { container } = render(<Footer />)
    const [apple, google] = Array.from(container.querySelectorAll('img'))
    // Sizing lives in globals.css; the intrinsic props carry the same ratio,
    // so a mismatch here means the two have drifted apart.
    expect(apple).toHaveAttribute('height', '52')
    // 52 / 0.672 content fraction, so both badges read at the same visible height
    expect(google).toHaveAttribute('height', '77')
    expect(apple).toHaveClass('footer-badge-apple')
    expect(google).toHaveClass('footer-badge-google')
  })
})
