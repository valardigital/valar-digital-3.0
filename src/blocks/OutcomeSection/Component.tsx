import React from 'react'
import type { OutcomeSection as OutcomeSectionProps } from '@/payload-types'
import RichText from '@/components/RichText'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import styles from './OutcomeSection.module.css'

type Props = {
  className?: string
} & OutcomeSectionProps

export const OutcomeSection: React.FC<Props> = (block) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-0 space-y-8 md:space-y-12">
        <div className="space-y-4">
          <h2 className="uppercase text-text-dark text-2xl md:text-[32px] font-medium">Outcome</h2>
          
          <div className={`text-text-light tracking-[0.04rem] leading-[1.6] ${styles.richTextContainer}`}>
            {typeof block.summary === 'object' && (block.summary as any)?.root ? (
              <RichText data={block.summary as unknown as SerializedEditorState} />
            ) : (
              <p>{String(block.summary)}</p>
            )}
          </div>
        </div>

        {Array.isArray(block.keyResults) && block.keyResults.length > 0 && (
          <div className="border border-border rounded-3xl p-6 flex md:flex-row flex-col">
            {block.keyResults.map((result, index) => (
              <React.Fragment key={index}>
                <div>
                  <div className="bg-primary/5 py-2 px-4 mb-4 rounded-[8px] leading-[1.5]">
                    <h3 className="text-[28px] font-medium leading-8">
                      {result.percentage}<br/>
                      <span className="font-normal text-xl">{result.metric}</span>
                    </h3>
                  </div>
                  <div className={`text-text-light tracking-[0.04rem] leading-[1.6] ${styles.richTextContainer}`}>
                    {typeof result.description === 'object' && (result.description as any)?.root ? (
                      <RichText data={result.description as unknown as SerializedEditorState} />
                    ) : (
                      <p>{String(result.description)}</p>
                    )}
                  </div>
                </div>
                {index < (block.keyResults.length || 0) - 1 && (
                  <div className="my-[28px] md:mx-8 relative after:content-[''] after:absolute after:left-0 after:right-0 md:after:top-0 md:after:bottom-0 after:h-[1px] md:after:h-full after:w-full md:after:w-[1px] after:bg-border" />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="space-y-4">
          <h2 className="uppercase text-text-dark text-2xl md:text-[32px] font-medium">TAKEAWAYS</h2>
          <div className={`text-text-dark tracking-[0.04rem] leading-[1.6] ${styles.richTextContainer}`}>
            {typeof block.takeaways === 'object' && (block.takeaways as any)?.root ? (
              <RichText data={block.takeaways as unknown as SerializedEditorState} />
            ) : (
              <p>{String(block.takeaways)}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 