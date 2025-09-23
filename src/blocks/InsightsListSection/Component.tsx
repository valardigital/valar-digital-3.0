import type { InsightsListSection as InsightsListSectionProps } from '@/payload-types'
import Image from 'next/image'

type Props = {
  className?: string
} & InsightsListSectionProps

export const InsightsListSection: React.FC<Props> = (block) => {
  return (
    <section>
      {block.insights?.map((insight, index) => (
        <div key={index} className={`${index % 2 === 0 ? 'bg-background-muted' : 'bg-white'}`}>
          <div className="container mx-auto flex md:flex-row flex-col items-center gap-7 md:gap-10 py-8 md:py-10 px-4 md:px-0">
            {index % 2 === 0 ? (
              <>
                <div className="flex-1">
                  <h5 className="leading-[1.3] text-primary uppercase font-medium">Insight {index + 1}</h5>
                  <h3 className="text-text-dark font-medium text-2xl mt-4 md:mt-6 mb-4 capitalize">{insight.title}</h3>
                  <p className="tracking-[0.04rem] text-text-light leading-[1.6]">{insight.description}</p>
                </div>
                {insight.image && (
                  <div className='border border-[#11322C] rounded-[10px] overflow-hidden w-[50%] shadow-[0px_15.76px_28.37px_0px_#8F9DAF40]'>
                    <Image 
                      src={
                        typeof insight.image === 'object' && (insight.image as any)?.url
                          ? ((insight.image as any).url as string)
                          : (typeof insight.image === 'string' ? insight.image : '')
                      } 
                      alt={typeof insight.image === 'string' ? '' : insight.image.alt || ''} 
                      width={1087} 
                      height={1004} 
                      className="size-full" 
                    />
                  </div>
                )}
              </>
            ) : (
              <>
                {insight.image && (
                  <div className="border border-[#11322C] rounded-[10px] overflow-hidden w-[50%] shadow-[0px_15.76px_28.37px_0px_#8F9DAF40]">
                    <Image 
                      src={
                        typeof insight.image === 'object' && (insight.image as any)?.url
                          ? ((insight.image as any).url as string)
                          : (typeof insight.image === 'string' ? insight.image : '')
                      } 
                      alt={typeof insight.image === 'string' ? '' : insight.image.alt || ''} 
                      width={400} 
                      height={300} 
                      className="size-full" 
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h5 className="leading-[1.3] text-primary uppercase font-medium">Insight {index + 1}</h5>
                  <h3 className="text-text-dark font-medium text-2xl mt-4 md:mt-6 mb-4 capitalize">{insight.title}</h3>
                  <p className="tracking-[0.04rem] text-text-light leading-[1.6]">{insight.description}</p>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}

