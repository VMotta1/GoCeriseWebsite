import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WaitlistForm from '@/components/WaitlistForm'

jest.mock('../lib/supabase', () => ({
  supabase: {
    from: () => ({ insert: jest.fn().mockResolvedValue({ error: null }) }),
  },
}))

describe('WaitlistForm', () => {
  it('renders name/email inputs and submit button', () => {
    render(<WaitlistForm />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Join Mailing List' })).toBeInTheDocument()
  })

  it('clears inputs on submit', async () => {
    const user = userEvent.setup()
    render(<WaitlistForm />)
    const name = screen.getByPlaceholderText('Your name')
    const email = screen.getByPlaceholderText('Your email')
    await user.type(name, 'Test User')
    await user.type(email, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Join Mailing List' }))
    expect(name).toHaveValue('')
    expect(email).toHaveValue('')
  })

  it('shows toast after submit', async () => {
    const user = userEvent.setup()
    render(<WaitlistForm />)
    await user.type(screen.getByPlaceholderText('Your name'), 'Test User')
    await user.type(screen.getByPlaceholderText('Your email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Join Mailing List' }))
    expect(await screen.findByText("🍒 You're on the list! We'll be in touch.")).toBeInTheDocument()
  })

  it('does not submit when inputs are empty', async () => {
    const user = userEvent.setup()
    render(<WaitlistForm />)
    await user.click(screen.getByRole('button', { name: 'Join Mailing List' }))
    expect(screen.queryByText("🍒 You're on the list! We'll be in touch.")).not.toBeInTheDocument()
  })
})
