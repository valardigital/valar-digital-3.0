import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import Users from './src/collections/Users'
import Media from './src/collections/Media'
import { Blog } from './src/collections/blog'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(__dirname), },
    livePreview: {
        collections: ['blog'],
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
        url: ({ collectionConfig, data }) => `/${collectionConfig?.slug === 'blog' ? data.slug !== 'home' ? data.slug : '' : '' }`,
      },
  },
  collections: [Users, Media, Blog],
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
    // cloudStoragePlugin({
    //   collections: {
    //     media: {
    //       prefix: 'media',
    //     },
    //   },
    // }),
    // storage-adapter-placeholder
  ],
})