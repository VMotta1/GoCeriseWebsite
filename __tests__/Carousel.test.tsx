import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Carousel from '@/components/Carousel'

const steps = [
  { title: 'Create a list', desc: 'Create a list, name it, search and add items, and customize your list', image: '/assets/screen-create-list.png', alt: 'Create a list screen' },
  { title: 'Plan your trip', desc: 'Set location, choose shopping radius, and select how we find your deals', image: '/assets/screen-plan-trip.png', alt: 'Plan your trip screen' },
  { title: 'Cherry pick deals', desc: 'Let the app do the work and find the best deals based on your preferences', image: '/assets/screen-optimized-route.png', alt: 'Cherry pick deals screen' },
]

describe('Carousel', () => {
  beforeEach(() => jest.useFakeTimers())
  afterEach(() => jest.useRealTimers())

  it('renders all 3 step card titles', () => {
    render(<Carousel steps={steps} />)
    expect(screen.getByText('Create a list')).toBeInTheDocument()
    expect(screen.getByText('Plan your trip')).toBeInTheDocument()
    expect(screen.getByText('Cherry pick deals')).toBeInTheDocument()
  })

  it('first slide is active by default', () => {
    render(<Carousel steps={steps} />)
    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveStyle({ opacity: '1' })
    expect(images[1]).toHaveStyle({ opacity: '0' })
  })

  it('clicking a step card activates that slide', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    render(<Carousel steps={steps} />)
    await user.click(screen.getByText('Plan your trip'))
    const images = screen.getAllByRole('img')
    expect(images[1]).toHaveStyle({ opacity: '1' })
  })

  it('next arrow advances to slide 2', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    render(<Carousel steps={steps} />)
    await user.click(screen.getByLabelText('Next'))
    expect(screen.getAllByRole('img')[1]).toHaveStyle({ opacity: '1' })
  })

  it('prev arrow wraps from slide 0 to slide 2', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    render(<Carousel steps={steps} />)
    await user.click(screen.getByLabelText('Previous'))
    expect(screen.getAllByRole('img')[2]).toHaveStyle({ opacity: '1' })
  })

  it('auto-advances every 4 seconds', () => {
    render(<Carousel steps={steps} />)
    act(() => jest.advanceTimersByTime(4000))
    expect(screen.getAllByRole('img')[1]).toHaveStyle({ opacity: '1' })
  })
})