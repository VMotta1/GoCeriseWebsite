import { render, screen } from '@testing-library/react'
import TermsOfServicePage from '@/app/terms-of-service/page'
import { TERMS_SECTIONS } from '@/lib/terms-content'

describe('Terms of Service page', () => {
  it('renders the title and the last updated / effective dates', () => {
    render(<TermsOfServicePage />)
    expect(screen.getByRole('heading', { level: 1, name: 'GoCerise Terms of Service' })).toBeInTheDocument()
    expect(screen.getByText('Last updated: August 28th, 2026')).toBeInTheDocument()
    expect(screen.getByText('Effective date: August 28th, 2026')).toBeInTheDocument()
  })

  it('renders every clause heading', () => {
    render(<TermsOfServicePage />)
    const headings = TERMS_SECTIONS.map(section => section.heading).filter(Boolean) as string[]
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
})
