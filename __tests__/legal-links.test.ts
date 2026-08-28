import { toLegalSegments } from '@/lib/legal-links'

describe('toLegalSegments', () => {
  it('returns a single text segment when there is nothing to link', () => {
    expect(toLegalSegments('You must be at least 14 years old.')).toEqual([
      { kind: 'text', value: 'You must be at least 14 years old.' },
    ])
  })

  it('links an email address without swallowing the trailing period', () => {
    expect(toLegalSegments('Contact us at: help@gocerise.com.')).toEqual([
      { kind: 'text', value: 'Contact us at: ' },
      { kind: 'email', value: 'help@gocerise.com', href: 'mailto:help@gocerise.com' },
      { kind: 'text', value: '.' },
    ])
  })

  it('links a gocerise.com URL with a path', () => {
    expect(toLegalSegments('please go to: www.gocerise.com/privacy.')).toEqual([
      { kind: 'text', value: 'please go to: ' },
      { kind: 'url', value: 'www.gocerise.com/privacy', href: 'https://www.gocerise.com/privacy' },
      { kind: 'text', value: '.' },
    ])
  })

  it('links a bare gocerise.com URL', () => {
    expect(toLegalSegments('post these Terms on www.gocerise.com. We will')).toEqual([
      { kind: 'text', value: 'post these Terms on ' },
      { kind: 'url', value: 'www.gocerise.com', href: 'https://www.gocerise.com' },
      { kind: 'text', value: '. We will' },
    ])
  })

  it('handles multiple links in one paragraph', () => {
    const segments = toLegalSegments('email help@gocerise.com or visit www.gocerise.com/privacy today')
    expect(segments.filter(s => s.kind !== 'text')).toEqual([
      { kind: 'email', value: 'help@gocerise.com', href: 'mailto:help@gocerise.com' },
      { kind: 'url', value: 'www.gocerise.com/privacy', href: 'https://www.gocerise.com/privacy' },
    ])
  })

  it('drops empty segments so no blank nodes are rendered', () => {
    const segments = toLegalSegments('help@gocerise.com')
    expect(segments).toHaveLength(1)
    expect(segments[0].kind).toBe('email')
  })
})
