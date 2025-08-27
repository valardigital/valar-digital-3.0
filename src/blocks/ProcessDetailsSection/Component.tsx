import type { ProcessDetailsSection as ProcessDetailsSectionProps } from '@/payload-types'
import Image from 'next/image'

type Props = {
  className?: string
} & ProcessDetailsSectionProps

export const ProcessDetailsSection: React.FC<Props> = (block) => {
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
    <section className="bg-background-muted py-8 md:py-16 px-4 md:px-0">
      <div className="container mx-auto text-text-dark">
        <h2 className="font-medium leading-[1.3] text-2xl md:text-[32px]">Every Detail Rebuilt With Care</h2>
        <p className="mt-4 md:mt-6 leading-[1.6] tracking-[0.04rem]">{block.description}</p>
        
        <div className="flex md:flex-row flex-col gap-12 md:gap-14 mt-6 md:mt-14">
          {block.details?.map((detail, index) => (
            <div key={index} className="text-center">
              {detail.image && (
                <div className="relative border border-[#11322C] rounded-[10px] overflow-hidden shadow-[0px_15.76px_28.37px_0px_#8F9DAF40] h-max w-full md:w-max mx-auto">
                  <Image 
                    src={getImageUrl(detail.image)}
                    alt={getImageAlt(detail.image)}
                    width={400} 
                    height={350} 
                    className="h-[350px] w-full md:w-auto" 
                  />
                </div>
              )}
              <p className="mt-6 tracking-[0.04rem]">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 