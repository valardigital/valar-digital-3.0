import type { BeforeAfterSection as BeforeAfterSectionProps } from '@/payload-types'
import Image from 'next/image'
import RichText from '@/components/RichText'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type Props = {
  className?: string
} & BeforeAfterSectionProps

export const BeforeAfterSection: React.FC<Props> = (block) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-0">
        <h2 className="text-left md:text-center font-medium leading-[1.3] text-text-dark text-2xl md:text-[32px]">
          {block.title}
        </h2>
        
        {block.description && (
          <div className="mt-4 md:mt-6 text-left md:text-center tracking-[0.04rem] leading-[1.6]">
            {typeof block.description === 'object' && (block.description as any)?.root ? (
              <RichText data={block.description as unknown as SerializedEditorState} />
            ) : (
              <p>{String(block.description)}</p>
            )}
          </div>
        )}
        
        {block.mainImage && (
          <>
            <div className="mt-6 md:mt-10 mx-auto text-center">
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
              <div className="tracking-[0.04rem] leading-[1.6] text-left md:text-center mt-4 md:mt-8">
                {typeof block.mainImageCaption === 'object' && (block.mainImageCaption as any)?.root ? (
                  <RichText data={block.mainImageCaption as unknown as SerializedEditorState} />
                ) : (
                  <p>{String(block.mainImageCaption)}</p>
                )}
              </div>
            )}
          </>
        )}

        <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-6 mt-6 md:mt-10">
          <div className="flex-1 p-6 md:py-10 md:px-8 bg-background-muted rounded-3xl border border-border space-y-4">
            <h3 className="leading-[1.3] text-2xl font-medium text-text-dark">Before</h3>
            <ul className="list-disc leading-[1.6] tracking-[0.04rem] pl-4 space-y-2">
              {block.before?.map((point, index) => (
                <li key={index}>{typeof point === 'string' ? point : (point as any)?.point}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 p-6 md:py-10 md:px-8 bg-background-muted rounded-3xl border border-border space-y-4">
            <h3 className="leading-[1.3] text-2xl font-medium text-text-dark">After</h3>
            <ul className="list-disc leading-[1.6] tracking-[0.04rem] pl-4 space-y-2">
              {block.after?.map((point, index) => (
                <li key={index}>{typeof point === 'string' ? point : (point as any)?.point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 