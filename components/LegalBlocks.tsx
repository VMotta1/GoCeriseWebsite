import type { LegalBlock } from '@/lib/legal-blocks'
import LegalParagraph from './LegalParagraph'
import LegalList from './LegalList'
import LegalTable from './LegalTable'

const renderBlock = (block: LegalBlock, index: number) => {
  switch (block.kind) {
    case 'paragraph':
      return <LegalParagraph key={index} text={block.text} />
    case 'list':
      return <LegalList key={index} items={block.items} />
    case 'table':
      return <LegalTable key={index} columns={block.columns} rows={block.rows} />
  }
}

/** Renders a run of legal blocks in document order. */
export default function LegalBlocks({ blocks }: { blocks: readonly LegalBlock[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>{blocks.map(renderBlock)}</div>
  )
}
