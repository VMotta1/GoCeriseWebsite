/** A chunk of legal copy: either plain prose or something that should be a link. */
export type LegalSegment =
  | { kind: 'text'; value: string }
  | { kind: 'email'; value: string; href: string }
  | { kind: 'url'; value: string; href: string }

const EMAIL = String.raw`[\w.+-]+@[\w-]+(?:\.[\w-]+)+`
const GOCERISE_URL = String.raw`www\.gocerise\.com(?:\/[\w-]+)*`

/** Capturing group so String.split keeps the matches interleaved with the prose. */
const LINKABLE = new RegExp(`(${EMAIL}|${GOCERISE_URL})`, 'g')

const isEmail = (value: string): boolean => value.includes('@')

const toSegment = (value: string, index: number): LegalSegment => {
  // String.split with one capturing group puts matches at odd indexes.
  if (index % 2 === 0) return { kind: 'text', value }
  return isEmail(value)
    ? { kind: 'email', value, href: `mailto:${value}` }
    : { kind: 'url', value, href: `https://${value}` }
}

/**
 * Splits a paragraph into renderable segments, turning email addresses and
 * gocerise.com URLs written inline in the legal copy into links.
 */
export function toLegalSegments(text: string): readonly LegalSegment[] {
  return text
    .split(LINKABLE)
    .map(toSegment)
    .filter(segment => segment.value.length > 0)
}
