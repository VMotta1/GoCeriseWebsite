import { render, screen, within } from '@testing-library/react'
import PrivacyFrPage from '@/app/fr/privacy/page'
import TermsFrPage from '@/app/fr/terms-of-service/page'
import { PRIVACY_FR } from '@/lib/privacy/fr'
import { TERMS_FR } from '@/lib/terms/fr'
import { PRIVACY_EN } from '@/lib/privacy/en'
import { TERMS_EN } from '@/lib/terms/en'

describe('French privacy policy', () => {
  it('renders the French title, dates, and language switch', () => {
    render(<PrivacyFrPage />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Politique de confidentialité de GoCerise' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Dernière mise à jour : 31 août 2026')).toBeInTheDocument()
    expect(screen.getByText('Date d’entrée en vigueur : 31 août 2026')).toBeInTheDocument()
    const languages = screen.getByRole('navigation', { name: 'Langue' })
    expect(within(languages).getByRole('link', { name: 'en' })).toHaveAttribute('href', '/privacy')
    expect(within(languages).getByRole('link', { name: 'fr' })).toHaveAttribute('aria-current', 'page')
  })

  it('renders every clause heading in French', () => {
    render(<PrivacyFrPage />)
    const headings = PRIVACY_FR.sections.map(s => s.heading).filter(Boolean) as string[]
    expect(headings).toContain('Aucun compte requis')
    expect(headings).toContain('Conservation des données')
    expect(headings).toContain('Nous joindre')
    headings.forEach(heading => {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    })
  })

  it('keeps the three tables, with French column headers', () => {
    render(<PrivacyFrPage />)
    expect(screen.getAllByRole('table')).toHaveLength(3)
    expect(screen.getAllByRole('columnheader', { name: 'Conservation' })).toHaveLength(1)
    expect(screen.getAllByRole('columnheader', { name: 'Relation' })).toHaveLength(1)
  })

  it('marks the article as French for assistive technology', () => {
    const { container } = render(<PrivacyFrPage />)
    expect(container.querySelector('article')).toHaveAttribute('lang', 'fr')
  })

  it('has a French table of contents', () => {
    render(<PrivacyFrPage />)
    const toc = screen.getByRole('navigation', { name: 'Table des matières' })
    expect(within(toc).getAllByRole('link')).toHaveLength(PRIVACY_FR.sections.length)
  })
})

describe('French terms of service', () => {
  it('renders the French title, dates, and language switch', () => {
    render(<TermsFrPage />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Conditions d’utilisation de GoCerise' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Dernière mise à jour : 28 août 2026')).toBeInTheDocument()
    const languages = screen.getByRole('navigation', { name: 'Langue' })
    expect(within(languages).getByRole('link', { name: 'en' })).toHaveAttribute('href', '/terms-of-service')
    expect(within(languages).getByRole('link', { name: 'fr' })).toHaveAttribute('aria-current', 'page')
  })

  it('points the privacy cross-reference at the French policy', () => {
    render(<TermsFrPage />)
    expect(screen.getByRole('link', { name: 'www.gocerise.com/fr/privacy' })).toHaveAttribute(
      'href',
      'https://www.gocerise.com/fr/privacy',
    )
  })
})

describe('the two languages stay structurally in step', () => {
  it('privacy has the same clause count and anchor ids in both languages', () => {
    expect(PRIVACY_FR.sections.map(s => s.id)).toEqual(PRIVACY_EN.sections.map(s => s.id))
  })

  it('terms has the same clause count and anchor ids in both languages', () => {
    expect(TERMS_FR.sections.map(s => s.id)).toEqual(TERMS_EN.sections.map(s => s.id))
  })

  it('every clause carries the same block shape in both languages', () => {
    const shape = (doc: typeof PRIVACY_EN) => doc.sections.map(s => s.blocks.map(b => b.kind).join(','))
    expect(shape(PRIVACY_FR)).toEqual(shape(PRIVACY_EN))
    expect(shape(TERMS_FR)).toEqual(shape(TERMS_EN))
  })

  it('both languages link the same pair of alternates', () => {
    expect(PRIVACY_FR.alternates).toEqual(PRIVACY_EN.alternates)
    expect(TERMS_FR.alternates).toEqual(TERMS_EN.alternates)
  })

  it('tables have matching column and row counts in both languages', () => {
    const tables = (doc: typeof PRIVACY_EN) =>
      doc.sections.flatMap(s => s.blocks.filter(b => b.kind === 'table')).map(t => ({
        columns: t.columns.length,
        rows: t.rows.length,
        cells: t.rows.map(r => r.length),
      }))
    expect(tables(PRIVACY_FR)).toEqual(tables(PRIVACY_EN))
  })

  it('lists have matching bullet counts in both languages', () => {
    const bullets = (doc: typeof PRIVACY_EN) =>
      doc.sections.flatMap(s => s.blocks.filter(b => b.kind === 'list')).map(l => l.items.length)
    expect(bullets(PRIVACY_FR)).toEqual(bullets(PRIVACY_EN))
  })
})
