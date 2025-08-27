import type { ContentWithMedia as ContentWithMediaProps } from '@/payload-types'
import Image from 'next/image'
import {RichText} from '@/components/RichText'

type Props = {
  className?: string
} & ContentWithMediaProps

export const ContentWithMedia: React.FC<Props> = (block) => {
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
      const possibleUrls = ['url', 'src', 'image', 'file', 'thumbnailURL']
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

  // Helper function to safely get image dimensions
  const getImageDimensions = (image: any) => {
    if (!image || typeof image !== 'object') {
      return { width: 640, height: 360 }
    }
    
    return {
      width: image.width || 640,
      height: image.height || 360
    }
  }

  if (block.textPosition === 'Left') {
    return <section>
      {block.content && <RichText data={block.content} />}
      {block.image && (
        <Image 
          src={getImageUrl(block.image)} 
          alt={getImageAlt(block.image)}
          width={getImageDimensions(block.image).width} 
          height={getImageDimensions(block.image).height}
        />
      )}
    </section>
  } else if (block.textPosition === 'Right') {
    return <section>
      {block.image && (
        <Image 
          src={getImageUrl(block.image)} 
          alt={getImageAlt(block.image)}
          width={getImageDimensions(block.image).width} 
          height={getImageDimensions(block.image).height}
        />
      )}
      {block.content && <RichText data={block.content} />}
    </section>
  }
}
