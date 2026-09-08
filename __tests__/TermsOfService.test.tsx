import { render, screen, within } from '@testing-library/react'
import TermsOfServicePage from '@/app/terms-of-service/page'
import { TERMS_EN } from '@/lib/terms/en'

describe('Terms of Service page (English)', () => {
  it('renders the title and the last updated / effective dates', () => {
    render(<TermsOfServicePage />)
    expect(screen.getByRole('heading', { level: 1, name: 'GoCerise Terms of Service' })).toBeInTheDocument()
    expect(screen.getByText('Last updated: August 28th, 2026')).toBeInTheDocument()
    expect(screen.getByText('Effective date: August 28th, 2026')).toBeInTheDocument()
  })

  it('renders every clause heading', () => {
    render(<TermsOfServicePage />)
    const headings = TERMS_EN.sections.map(section => section.heading).filter(Boolean) as string[]
    expect(headings.length).toBeGreaterThan(20)
    headings.forEach(heading => {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    })
  })

  it('renders the governing law clause text', () => {
    render(<TermsOfServicePage />)
    expect(
      screen.getByText(/laws of the Province of Quebec and the federal laws of Canada/),
    ).toBeInTheDocument()
  })

  it('links the privacy policy and support email inline', () => {
    render(<TermsOfServicePage />)
    expect(screen.getAllByRole('link', { name: 'www.gocerise.com/privacy' })[0]).toHaveAttribute(
      'href',
      'https://www.gocerise.com/privacy',
    )
    expect(screen.getAllByRole('link', { name: 'help@gocerise.com' })[0]).toHaveAttribute(
      'href',
      'mailto:help@gocerise.com',
    )
  })

  it('has no table of contents, unlike the longer privacy policy', () => {
    render(<TermsOfServicePage />)
    expect(screen.queryByRole('navigation', { name: 'Table of contents' })).not.toBeInTheDocument()
  })

  it('offers an EN / FR switch that marks the current language', () => {
    render(<TermsOfServicePage />)
    const languages = screen.getByRole('navigation', { name: 'Language' })
    expect(within(languages).getByRole('link', { name: 'en' })).toHaveAttribute('href', '/terms-of-service')
    expect(within(languages).getByRole('link', { name: 'fr' })).toHaveAttribute(
      'href',
      '/fr/terms-of-service',
    )
    expect(within(languages).getByRole('link', { name: 'en' })).toHaveAttribute('aria-current', 'page')
  })
})
