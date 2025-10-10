import { CollectionConfig } from 'payload'
import { getServerSideURL } from '@/utilities/getURL'

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    // Removed formatOptions to prevent Sharp processing
    // formatOptions: { format: 'webp' }, // default for processed images

    // Disabled imageSizes to prevent Sharp processing
    // imageSizes: [
    //   {
    //     name: 'thumbnail',
    //     width: 400,
    //     height: 300,
    //     position: 'centre',
    //     formatOptions: { format: 'webp' },
    //   },
    //   {
    //     name: 'card',
    //     width: 768,
    //     height: 1024,
    //     position: 'centre',
    //     formatOptions: { format: 'webp' },
    //   },
    //   {
    //     name: 'tablet',
    //     width: 1024,
    //     position: 'centre',
    //     formatOptions: { format: 'webp' },
    //   },
    // ],

    // adminThumbnail: 'thumbnail',

    // ✅ Allow all file types without processing
    mimeTypes: [
      'image/*',   // All image types including GIFs
      'video/*',   // All video types
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
      async ({ doc, operation }: { doc: any; operation: 'create' | 'update' | 'delete' }) => {
        try {
          const baseUrl = getServerSideURL()
          const paths = ['/blog', '/case-studies', '/']
          const tags = ['media']

          await fetch(`${baseUrl}/api/revalidate`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'x-revalidate-secret': process.env.REVALIDATE_SECRET || '',
            },
            body: JSON.stringify({ paths, tags }),
            cache: 'no-store',
          })

          console.log(`✅ Requested revalidation for media ${operation}: ${doc.filename || 'unknown'}`)
        } catch (error) {
          console.error('❌ Error revalidating media routes:', error)
        }
      },
    ],
    afterDelete: [
      async ({ doc }: { doc: any }) => {
        try {
          const baseUrl = getServerSideURL()
          const paths = ['/blog', '/case-studies', '/']
          const tags = ['media']

          await fetch(`${baseUrl}/api/revalidate`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'x-revalidate-secret': process.env.REVALIDATE_SECRET || '',
            },
            body: JSON.stringify({ paths, tags }),
            cache: 'no-store',
          })

          console.log(`✅ Requested revalidation for media delete: ${doc.filename || 'unknown'}`)
        } catch (error) {
          console.error('❌ Error revalidating media routes:', error)
        }
      },
    ],
  },
}

export default Media
