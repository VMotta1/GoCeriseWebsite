import { render, screen, within } from '@testing-library/react'
import PrivacyPage from '@/app/privacy/page'
import { PRIVACY_SECTIONS } from '@/lib/privacy'

describe('Privacy Policy page', () => {
  it('renders the title and both dates', () => {
    render(<PrivacyPage />)
    expect(screen.getByRole('heading', { level: 1, name: 'GoCerise Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByText('Effective date: August 28, 2026')).toBeInTheDocument()
    expect(screen.getByText('Last updated: August 28, 2026')).toBeInTheDocument()
  })

  it('renders all 13 numbered sections plus the overview sections', () => {
    render(<PrivacyPage />)
    const headings = PRIVACY_SECTIONS.map(s => s.heading).filter(Boolean) as string[]
    expect(headings).toContain('1. Information we collect')
    expect(headings).toContain('13. Contact us')
    headings.forEach(heading => {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    })
  })

  it('renders the 1.x subsection headings', () => {
    render(<PrivacyPage />)
    expect(screen.getByRole('heading', { level: 3, name: '1.1 The app does not collect account information' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: '1.6 The GoCerise website' })).toBeInTheDocument()
  })

  it('builds a table of contents that links to every section anchor', () => {
    render(<PrivacyPage />)
    const toc = screen.getByRole('navigation', { name: 'Table of contents' })
    expect(within(toc).getByRole('link', { name: 'Introduction' })).toHaveAttribute('href', '#preamble')
    expect(within(toc).getByRole('link', { name: '7. Your rights' })).toHaveAttribute('href', '#your-rights')
  })

  it('renders the retention and sharing tables with their headers', () => {
    render(<PrivacyPage />)
    expect(screen.getAllByRole('columnheader', { name: 'Retention' })).toHaveLength(1)
    expect(screen.getAllByRole('columnheader', { name: 'Relationship' })).toHaveLength(1)
    expect(screen.getByRole('cell', { name: /Object storage for scraped price data/ })).toBeInTheDocument()
  })

  it('links the privacy officer email inline', () => {
    render(<PrivacyPage />)
    expect(screen.getAllByRole('link', { name: 'privacy@gocerise.com' })[0]).toHaveAttribute(
      'href',
      'mailto:privacy@gocerise.com',
    )
  })

  it('states the Law 25 privacy officer and the no-tracking commitment', () => {
    render(<PrivacyPage />)
    expect(screen.getByText(/Act respecting the protection of personal information in the private sector/)).toBeInTheDocument()
    expect(screen.getAllByText(/no cookie banner because there is nothing to consent to/).length).toBeGreaterThan(0)
  })
})
