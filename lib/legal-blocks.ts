/** One bullet in a legal list. `lead` is the bolded phrase that opens the bullet. */
export type LegalListItem = {
  lead?: string
  text: string
}

/** The renderable pieces of a legal document body. */
export type LegalBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: readonly LegalListItem[] }
  | { kind: 'table'; columns: readonly string[]; rows: readonly (readonly string[])[] }

/** A numbered clause, optionally split into lettered/decimal subsections. */
export type LegalSubsection = {
  id: string
  heading: string
  blocks: readonly LegalBlock[]
}

export type LegalSection = {
  id: string
  /** Omitted for a preamble that runs straight into the body. */
  heading?: string
  /** Shown in the table of contents; defaults to `heading`. */
  tocLabel?: string
  blocks: readonly LegalBlock[]
  subsections?: readonly LegalSubsection[]
}

export const paragraph = (text: string): LegalBlock => ({ kind: 'paragraph', text })

export const list = (items: readonly LegalListItem[]): LegalBlock => ({ kind: 'list', items })

export const table = (
  columns: readonly string[],
  rows: readonly (readonly string[])[],
): LegalBlock => ({ kind: 'table', columns, rows })
