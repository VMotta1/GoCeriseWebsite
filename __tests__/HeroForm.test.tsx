import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeroForm from '@/components/HeroForm'

jest.mock('../lib/supabase', () => ({
  supabase: {
    from: () => ({ insert: jest.fn().mockResolvedValue({ error: null }) }),
  },
}))

describe('HeroForm', () => {
  it('renders name/email inputs and submit button', () => {
    render(<HeroForm />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Join' })).toBeInTheDocument()
  })

  it('clears inputs on submit', async () => {
    const user = userEvent.setup()
    render(<HeroForm />)
    const name = screen.getByPlaceholderText('Name')
    const email = screen.getByPlaceholderText('Email')
    await user.type(name, 'Test User')
    await user.type(email, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Join' }))
    expect(name).toHaveValue('')
    expect(email).toHaveValue('')
  })

  it('shows toast after submit', async () => {
    const user = userEvent.setup()
    render(<HeroForm />)
    await user.type(screen.getByPlaceholderText('Name'), 'Test User')
    await user.type(screen.getByPlaceholderText('Email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Join' }))
    expect(await screen.findByText("🍒 You're on the list! We'll be in touch.")).toBeInTheDocument()
  })

  it('does not submit when inputs are empty', async () => {
    const user = userEvent.setup()
    render(<HeroForm />)
    await user.click(screen.getByRole('button', { name: 'Join' }))
    expect(screen.queryByText("🍒 You're on the list! We'll be in touch.")).not.toBeInTheDocument()
  })
})
