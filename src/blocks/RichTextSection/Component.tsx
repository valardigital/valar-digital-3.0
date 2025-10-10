import RichText from '@/components/RichText'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import styles from './RichTextSection.module.css'

type Props = {
  className?: string
  content?: SerializedEditorState | string
}

export const RichTextSection: React.FC<Props> = (block) => {
  return (
    <section className="py-4 md:py-8 md:px-0 px-4">
      <div className="container mx-auto text-text-dark">
        {typeof block.content === 'object' && (block.content as any)?.root ? (
          <RichText data={block.content as unknown as SerializedEditorState} className={`${styles.richText} tracking-[0.04rem] leading-[1.6]`} />
        ) : (
          <p className={`${styles.richText} tracking-[0.04rem] leading-[1.6]`}>{String(block.content ?? '')}</p>
        )}
      </div>
    </section>
  )
}


