import { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
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
  access: {
    // Allow public read access to media files
    read: () => true,
    // Only allow authenticated users to create/update/delete
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
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
}

export default Media
