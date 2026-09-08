import FaqItem from './FaqItem'
import { FAQ_ITEMS } from '@/lib/faq-content'

export default function Faq() {
  return (
    <section id="faq" className="faq-section">
      <h2 className="section-title">Frequently asked questions</h2>
      <div className="faq-list">
        {FAQ_ITEMS.map(item => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
