/** A chunk of legal copy: either plain prose or something that should be a link. */
export type LegalSegment =
  | { kind: 'text'; value: string }
  | { kind: 'email'; value: string; href: string }
  | { kind: 'url'; value: string; href: string }

const EMAIL = String.raw`[\w.+-]+@[\w-]+(?:\.[\w-]+)+`
/** Any www-prefixed host, e.g. www.gocerise.com or the regulator at www.priv.gc.ca. */
const WWW_URL = String.raw`www\.[\w-]+(?:\.[\w-]+)+(?:\/[\w-]+)*`
/** Our own domain is also written without the www prefix. */
const BARE_GOCERISE_URL = String.raw`gocerise\.com(?:\/[\w-]+)*`

/** Capturing group so String.split keeps the matches interleaved with the prose. */
const LINKABLE = new RegExp(`(${EMAIL}|${WWW_URL}|${BARE_GOCERISE_URL})`, 'g')

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
 * web addresses written inline in the legal copy into links.
 */
export function toLegalSegments(text: string): readonly LegalSegment[] {
  return text
    .split(LINKABLE)
    .map(toSegment)
    .filter(segment => segment.value.length > 0)
}
