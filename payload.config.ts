import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import Users from './src/collections/Users'
import Media from './src/collections/Media'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(__dirname), },
  },
  collections: [Users, Media],
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