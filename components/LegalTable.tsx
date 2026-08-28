import { toLegalSegments } from '@/lib/legal-links'
import LegalInline from './LegalInline'

const BORDER = '1px solid rgba(52,52,52,0.15)'

const CELL_STYLE = {
  padding: '12px 16px',
  borderBottom: BORDER,
  verticalAlign: 'top' as const,
  textAlign: 'left' as const,
}

/** A legal reference table. Scrolls horizontally on narrow screens rather than squashing. */
export default function LegalTable({
  columns,
  rows,
}: {
  columns: readonly string[]
  rows: readonly (readonly string[])[]
}) {
  return (
    <div className="legal-table-scroll" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table
        className="legal-body"
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          minWidth: columns.length > 2 ? 640 : 480,
          fontSize: 15,
          lineHeight: 1.6,
          color: '#343434',
        }}
      >
        <thead>
          <tr>
            {columns.map(column => (
              <th
                key={column}
                scope="col"
                style={{ ...CELL_STYLE, fontWeight: 700, borderBottom: '2px solid rgba(52,52,52,0.3)' }}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={CELL_STYLE}>
                  <LegalInline segments={toLegalSegments(cell)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
