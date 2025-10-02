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

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default buildConfig({
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
            return `/blog/${data.slug}`
          }
          if (collectionConfig?.slug === 'caseStudy') {
            return `/caseStudy/${data.slug}`
          }
          return ''
        },
      },
  },
  collections: [Users, Media, Blog, CaseStudy],
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
  // sharp,
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