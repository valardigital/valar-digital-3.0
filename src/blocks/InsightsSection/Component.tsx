import type { InsightsSection as InsightsSectionProps } from '@/payload-types'
import Image from 'next/image'
import brain from '@/assets/images/growth/brain.svg'
import questionMark from '@/assets/images/caseStudy/question-mark.png'

type Props = {
  className?: string
} & InsightsSectionProps

export const InsightsSection: React.FC<Props> = (block) => {
  // Helper function to safely get image URL
  const getImageUrl = (image: any): string => {
    if (!image) return ''
    
    // If it's already a string URL, return it
    if (typeof image === 'string') return image
    
    // If it's an object with url property, return the url
    if (typeof image === 'object' && image?.url) {
      return image.url as string
    }
    
    // If it's an object but no url, try to access it safely
    if (typeof image === 'object') {
      // Try different possible property names
      const possibleUrls = ['url', 'src', 'image', 'file']
      for (const prop of possibleUrls) {
        if (image[prop] && typeof image[prop] === 'string') {
          return image[prop] as string
        }
      }
    }
    
    return ''
  }

  // Helper function to safely get image alt text
  const getImageAlt = (image: any): string => {
    if (!image) return ''
    
    if (typeof image === 'string') return ''
    
    if (typeof image === 'object') {
      return image.alt || image.title || image.caption || ''
    }
    
    return ''
  }

  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <h4 className="leading-[1.3] text-primary uppercase font-medium">Where we started</h4>
        <div className="flex md:flex-row flex-col mt-6 md:gap-12 gap-4">
          <h2 className="text-2xl md:text-[32px] leading-[1.3] flex-1 font-medium">To fix the experience, we had to understand what was broken</h2>
          <p className="text-text-light flex-1 tracking-[0.04rem] leading-[1.6]">
            {block.description}
          </p>
        </div>
        
        {block.mainImage && (
          <>
            <div className="mt-10 mx-auto">
              <Image 
                src={getImageUrl(block.mainImage)}
                alt={getImageAlt(block.mainImage)}
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

        {block.insights?.map((insight, index) => (
          <div key={index} className={`${index % 2 === 0 ? 'bg-background-muted' : 'bg-white'}`}>
            <div className="container mx-auto flex md:flex-row flex-col items-center gap-7 md:gap-10 py-8 md:py-10 px-4 md:px-0">
              {index % 2 === 0 ? (
                <>
                  <div className="flex-1">
                    <h5 className="leading-[1.3] text-primary uppercase font-medium">Insight {index + 1}</h5>
                    <h3 className="text-text-dark font-medium text-2xl mt-4 md:mt-6 mb-4 capitalize">{insight.title}</h3>
                    <p className="text-text-light tracking-[0.04rem] leading-[1.6]">{insight.description}</p>
                  </div>
                  {insight.image && (
                    <div>
                      <Image 
                        src={getImageUrl(insight.image)}
                        alt={getImageAlt(insight.image)}
                        width={400} 
                        height={300} 
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
                        src={getImageUrl(insight.image)}
                        alt={getImageAlt(insight.image)}
                        width={400} 
                        height={300} 
                        className="size-full" 
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h5 className="leading-[1.3] text-primary uppercase font-medium">Insight {index + 1}</h5>
                    <h3 className="text-text-dark font-medium text-2xl mt-4 md:mt-6 mb-4 capitalize">{insight.title}</h3>
                    <p className="text-text-light tracking-[0.04rem] leading-[1.6]">{insight.description}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 