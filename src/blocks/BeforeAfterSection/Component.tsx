import type { BeforeAfterSection as BeforeAfterSectionProps } from '@/payload-types'
import Image from 'next/image'

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
              <p className="tracking-[0.04rem] leading-[1.6] text-left md:text-center mt-4 md:mt-8">
                {block.mainImageCaption}
              </p>
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