import { render, screen, within } from '@testing-library/react'
import PrivacyPage from '@/app/privacy/page'
import { PRIVACY_SECTIONS } from '@/lib/privacy'

describe('Privacy Policy page', () => {
  it('renders the title and both dates', () => {
    render(<PrivacyPage />)
    expect(screen.getByRole('heading', { level: 1, name: 'GoCerise Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByText('Last updated: August 31, 2026')).toBeInTheDocument()
    expect(screen.getByText('Effective date: August 31, 2026')).toBeInTheDocument()
  })

  it('renders every clause heading', () => {
    render(<PrivacyPage />)
    const headings = PRIVACY_SECTIONS.map(s => s.heading).filter(Boolean) as string[]
    expect(headings).toContain('No Account Required')
    expect(headings).toContain('Data Retention')
    expect(headings).toContain('Contact Us')
    headings.forEach(heading => {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    })
  })

  it('builds a table of contents that links to every section anchor', () => {
    render(<PrivacyPage />)
    const toc = screen.getByRole('navigation', { name: 'Table of contents' })
    expect(within(toc).getByRole('link', { name: 'Introduction' })).toHaveAttribute('href', '#preamble')
    expect(within(toc).getByRole('link', { name: 'Your Rights' })).toHaveAttribute('href', '#your-rights')
    expect(within(toc).getAllByRole('link')).toHaveLength(PRIVACY_SECTIONS.length)
  })

  it('renders the three reference tables with their headers', () => {
    render(<PrivacyPage />)
    expect(screen.getAllByRole('table')).toHaveLength(3)
    expect(screen.getAllByRole('columnheader', { name: 'Retention' })).toHaveLength(1)
    expect(screen.getAllByRole('columnheader', { name: 'Relationship' })).toHaveLength(1)
    expect(screen.getByRole('cell', { name: /Object storage for scraped price data/ })).toBeInTheDocument()
  })

  it('links emails and the privacy commissioner site inline', () => {
    render(<PrivacyPage />)
    expect(screen.getAllByRole('link', { name: 'privacy@gocerise.com' })[0]).toHaveAttribute(
      'href',
      'mailto:privacy@gocerise.com',
    )
    expect(screen.getByRole('link', { name: 'www.priv.gc.ca' })).toHaveAttribute('href', 'https://www.priv.gc.ca')
  })

  it('states the Law 25 privacy officer and the no-accounts commitment', () => {
    render(<PrivacyPage />)
    expect(
      screen.getByText(/Act respecting the protection of personal information in the private sector/),
    ).toBeInTheDocument()
    expect(screen.getByText(/no accounts and no sign-in/)).toBeInTheDocument()
  })
})
