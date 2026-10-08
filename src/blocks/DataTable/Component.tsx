import styles from './DataTable.module.css'

export type DataTableProps = {
  id?: string
  caption?: string | null
  headers?: { label: string; id?: string | null }[] | null
  rows?: {
    cells?: { content: string; id?: string | null }[] | null
    id?: string | null
  }[] | null
  bordered?: boolean | null
  striped?: boolean | null
  compact?: boolean | null
  fullWidth?: boolean | null
  stickyHeader?: boolean | null
  headerBackground?: 'default' | 'muted' | 'primary' | 'dark' | null
  textAlign?: 'left' | 'center' | 'right' | null
  className?: string
}

const headerBgClass: Record<NonNullable<DataTableProps['headerBackground']>, string> = {
  default: styles.headerDefault,
  muted: styles.headerMuted,
  primary: styles.headerPrimary,
  dark: styles.headerDark,
}

const alignClass: Record<NonNullable<DataTableProps['textAlign']>, string> = {
  left: styles.alignLeft,
  center: styles.alignCenter,
  right: styles.alignRight,
}

export const DataTable: React.FC<DataTableProps> = (block) => {
  const headers = block.headers?.filter((h) => h?.label) ?? []
  const rows = block.rows ?? []

  if (headers.length === 0 && rows.length === 0) return null

  const columnCount = Math.max(
    headers.length,
    ...rows.map((row) => row.cells?.length ?? 0),
    1,
  )

  const tableClassName = [
    styles.table,
    block.fullWidth !== false ? styles.fullWidth : '',
    block.bordered !== false ? styles.bordered : '',
    block.striped ? styles.striped : '',
    block.compact ? styles.compact : '',
    block.stickyHeader ? styles.stickyHeader : '',
    headerBgClass[block.headerBackground || 'muted'],
    alignClass[block.textAlign || 'left'],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={`py-4 md:py-8 md:px-0 px-4 ${block.className || ''}`}>
      <div className="container mx-auto">
        <div className={styles.wrap}>
          {block.caption ? <p className={styles.caption}>{block.caption}</p> : null}
          <table className={tableClassName}>
            {headers.length > 0 ? (
              <thead>
                <tr>
                  {Array.from({ length: columnCount }).map((_, i) => (
                    <th key={headers[i]?.id ?? `h-${i}`}>{headers[i]?.label ?? ''}</th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={row.id ?? `r-${rowIndex}`}>
                  {Array.from({ length: columnCount }).map((_, cellIndex) => (
                    <td key={row.cells?.[cellIndex]?.id ?? `c-${rowIndex}-${cellIndex}`} className={styles.cell}>
                      {row.cells?.[cellIndex]?.content ?? ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
