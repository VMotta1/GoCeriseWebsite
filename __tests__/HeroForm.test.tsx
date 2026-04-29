import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeroForm from '@/components/HeroForm'

describe('HeroForm', () => {
  it('renders email input and submit button', () => {
    render(<HeroForm />)
    expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Join Waitlist' })).toBeInTheDocument()
  })

  it('clears input on submit', async () => {
    const user = userEvent.setup()
    render(<HeroForm />)
    const input = screen.getByPlaceholderText('Enter your email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Join Waitlist' }))
    expect(input).toHaveValue('')
  })

  it('shows toast after submit', async () => {
    const user = userEvent.setup()
    render(<HeroForm />)
    await user.type(screen.getByPlaceholderText('Enter your email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Join Waitlist' }))
    expect(screen.getByText("🍒 You're on the list! We'll be in touch.")).toBeInTheDocument()
  })

  it('does not submit when input is empty', async () => {
    const user = userEvent.setup()
    render(<HeroForm />)
    await user.click(screen.getByRole('button', { name: 'Join Waitlist' }))
    expect(screen.queryByText("🍒 You're on the list! We'll be in touch.")).not.toBeInTheDocument()
  })
})