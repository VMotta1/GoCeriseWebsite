/** Terms clauses are plain prose, so a clause is just a heading and its paragraphs. */
export type TermsSection = {
  /** Stable anchor id used for deep-linking to a clause. */
  id: string
  /** Omitted for the preamble, which has no heading. */
  heading?: string
  paragraphs: readonly string[]
}
