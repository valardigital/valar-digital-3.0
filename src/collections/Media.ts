import { CollectionConfig } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    formatOptions: { format: 'webp' }, // default for processed images

    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
        formatOptions: { format: 'webp' },
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
        formatOptions: { format: 'webp' },
      },
      {
        name: 'tablet',
        width: 1024,
        position: 'centre',
        formatOptions: { format: 'webp' },
      },
    ],

    adminThumbnail: 'thumbnail',

    // ✅ only process "real" images — GIFs excluded
    mimeTypes: [
      'image/jpeg',
      'image/png',
      'image/webp',
      'video/*',   // still allow video uploads
      'image/gif', // explicitly allow GIFs, but no sharp processing
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, operation }: { doc: any; operation: 'create' | 'update' | 'delete' }) => {
        try {
          // Revalidate global surfaces that commonly reference media
          revalidateTag('media')
          revalidatePath('/blog')
          revalidatePath('/caseStudy')
          revalidatePath('/')
          
          console.log(`✅ Revalidated media routes for ${operation}: ${doc.filename || 'unknown'}`)
        } catch (error) {
          console.error('❌ Error revalidating media routes:', error)
        }
      },
    ],
    afterDelete: [
      ({ doc }: { doc: any }) => {
        try {
          // Revalidate global surfaces when media is deleted
          revalidateTag('media')
          revalidatePath('/blog')
          revalidatePath('/caseStudy')
          revalidatePath('/')
          
          console.log(`✅ Revalidated media routes for delete: ${doc.filename || 'unknown'}`)
        } catch (error) {
          console.error('❌ Error revalidating media routes:', error)
        }
      },
    ],
  },
}

export default Media
