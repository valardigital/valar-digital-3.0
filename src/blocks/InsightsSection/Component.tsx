import type { InsightsSection as InsightsSectionProps } from '@/payload-types'
import Image from 'next/image'
import brain from '@/assets/images/growth/brain.svg'
import questionMark from '@/assets/images/caseStudy/question-mark.png'
import RichText from '@/components/RichText'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import styles from './InsightsSection.module.css'

type Props = {
  className?: string
} & InsightsSectionProps

export const InsightsSection: React.FC<Props> = (block) => {
  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <h4 className="leading-[1.3] text-primary uppercase font-medium">Where we started</h4>
        <div className="flex md:flex-row flex-col mt-6 md:gap-12 gap-4">
          <h2 className="text-2xl md:text-[32px] leading-[1.3] flex-1 font-medium">{block.title}</h2>
          <div className={`text-text-light flex-1 tracking-[0.04rem] leading-[1.6] ${styles.richTextContainer}`}>
            {typeof block.description === 'object' && (block.description as any)?.root ? (
              <RichText data={block.description as unknown as SerializedEditorState} />
            ) : (
              <p>{String(block.description)}</p>
              
            )}
          </div>
        </div>
        
        {block.mainImage && (
          <>
            <div className="mt-10 mx-auto">
              <Image 
                src={
                  typeof block.mainImage === 'object' && (block.mainImage as any)?.url
                    ? ((block.mainImage as any).url as string)
                    : (typeof block.mainImage === 'string' ? block.mainImage : '')
                } 
                alt={typeof block.mainImage === 'string' ? '' : block.mainImage.alt || ''} 
                width={800} 
                height={600} 
                className="size-full" 
              />
            </div>
            {block.mainImageCaption && (
              <p className="text-center tracking-[0.04rem] text-sm md:text-base mt-8 md:mt-0">
                {block.mainImageCaption}
              </p>
            )}
          </>
        )}

        <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-6 mt-10">
          <div className="flex-1 p-6 md:py-10 md:px-8 bg-background-muted rounded-3xl border border-border space-y-4">
            <div className="flex items-center justify-center size-13 bg-white rounded-[4px] border mb-4">
              <Image src={brain} alt="Brain icon" width={100} height={100} className="size-7" />
            </div>
            <h3 className="leading-[1.3] text-2xl font-medium text-text-dark">What We Already Knew</h3>
            <ul className="list-disc leading-[1.6] tracking-[0.04rem] pl-4 space-y-2 text-text-dark">
              {block.whatWeKnew?.map((point, index) => (
                <li key={index}>{typeof point === 'string' ? point : (point as any)?.point}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 py-10 px-8 bg-background-muted rounded-3xl border border-border space-y-4">
            <div className="flex items-center justify-center size-13 bg-white rounded-[4px] border mb-4">
              <Image src={questionMark} alt="Question mark icon" width={100} height={100} className="size-7" />
            </div>
            <h3 className="leading-[1.3] text-2xl font-medium text-text-dark">What We Needed to Learn</h3>
            <ul className="list-disc leading-[1.6] tracking-[0.04rem] pl-4 space-y-2 text-text-dark">
              {block.whatWeNeededToLearn?.map((point, index) => (
                <li key={index}>{typeof point === 'string' ? point : (point as any)?.point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Insights moved to separate InsightsListSection block */}
      </div>
    </section>
  )
} 