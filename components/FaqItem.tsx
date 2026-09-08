import type { FaqItem as FaqItemData } from '@/lib/faq-content'

/** One question. Native <details> so it opens without JavaScript and is keyboard-operable. */
export default function FaqItem({ item }: { item: FaqItemData }) {
  return (
    <details id={item.id} className="faq-item">
      <summary className="faq-question">
        <span className="faq-question-text">{item.question}</span>
        <svg className="faq-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="#343434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="faq-answer">{item.answer}</p>
    </details>
  )
}
