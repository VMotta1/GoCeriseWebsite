import { render, screen } from '@testing-library/react'
import Faq from '@/components/Faq'
import Page from '@/app/page'
import { FAQ_ITEMS } from '@/lib/faq-content'

describe('FAQ section', () => {
  it('renders the heading', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { level: 2, name: 'Frequently asked questions' })).toBeInTheDocument()
  })

  it('renders every question and answer', () => {
    render(<Faq />)
    expect(FAQ_ITEMS).toHaveLength(8)
    FAQ_ITEMS.forEach(item => {
      expect(screen.getByText(item.question)).toBeInTheDocument()
      expect(screen.getByText(item.answer)).toBeInTheDocument()
    })
  })

  it('keeps the questions in the order they are authored', () => {
    const { container } = render(<Faq />)
    const rendered = Array.from(container.querySelectorAll('summary span')).map(el => el.textContent)
    expect(rendered).toEqual(FAQ_ITEMS.map(item => item.question))
  })

  it('uses native details/summary so it works without JavaScript', () => {
    const { container } = render(<Faq />)
    const details = container.querySelectorAll('details')
    expect(details).toHaveLength(FAQ_ITEMS.length)
    details.forEach(detail => {
      expect(detail.querySelector('summary')).toBeInTheDocument()
      expect(detail).not.toHaveAttribute('open')
    })
  })

  it('gives each question a stable anchor id', () => {
    const { container } = render(<Faq />)
    FAQ_ITEMS.forEach(item => {
      expect(container.querySelector(`details#${item.id}`)).toBeInTheDocument()
    })
  })
})

describe('homepage layout', () => {
  it('places the FAQ after How it works and before the mailing list', () => {
    const { container } = render(<Page />)
    const ids = Array.from(container.querySelectorAll('section[id]')).map(section => section.id)
    expect(ids.indexOf('faq')).toBeGreaterThan(ids.indexOf('how'))
    expect(ids.indexOf('faq')).toBeLessThan(ids.indexOf('waitlist'))
  })
})
