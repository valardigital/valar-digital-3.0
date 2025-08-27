import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'
import { s3Storage } from '@payloadcms/storage-s3'
import Users from './src/collections/Users'
import Media from './src/collections/Media'
import { Blog } from './src/collections/blog'
import { CaseStudy } from './src/collections/caseStudy'
import { authenticatedOrPublished } from './src/access/authenticatedOrPublished'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(__dirname), },
    livePreview: {
      collections: ['blog', 'caseStudy'],
      breakpoints: [
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 1080,
        },
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
      ],
      url: ({ collectionConfig, data }) => {
        if (collectionConfig?.slug === 'blog') {
          return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/blog/${data.slug}`
        }
        if (collectionConfig?.slug === 'caseStudy') {
          return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/caseStudy/${data.slug}`
        }
        return ''
      },
    },
  },
  collections: [
    Users,
    {
      ...Media,
      access: {
        // Allow public read access to media files
        read: () => true,
        // Only allow authenticated users to create/update/delete
        create: ({ req: { user } }) => Boolean(user),
        update: ({ req: { user } }) => Boolean(user),
        delete: ({ req: { user } }) => Boolean(user),
      },
    },
    {
      ...Blog,
      access: {
        read: authenticatedOrPublished,
        create: ({ req: { user } }) => Boolean(user),
        update: ({ req: { user } }) => Boolean(user),
        delete: ({ req: { user } }) => Boolean(user),
      },
    },
    {
      ...CaseStudy,
      access: {
        read: authenticatedOrPublished,
        create: ({ req: { user } }) => Boolean(user),
        update: ({ req: { user } }) => Boolean(user),
        delete: ({ req: { user } }) => Boolean(user),
      },
    },
  ],
  cors: ['http://localhost:3000',process.env.DOMAIN_NAME || ''],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    // autoPluralization: true,
    // connectOptions: {},
    // disableIndexHints: false,
    // ensureIndexes: true,
    // migrationDir: path.resolve(__dirname, 'migrations'),
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    s3Storage({
      bucket: process.env.S3_BUCKET || '',
      collections: {
        media: {
          prefix: 'media',
          // Use presigned URLs for large video files only
          signedDownloads: {
            shouldUseSignedURL: ({ filename }) => filename.toLowerCase().endsWith('.mp4'),
          },
        },
      },
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || 'us-east-1',
      },
    }),
  ],
})