import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import { ContentWithMedia } from '@/blocks/ContentWithMedia/config'
import { DotSeparator } from '@/blocks/DotSeparator/config'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { TableOfContents } from '@/blocks/TableOfContents/config'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { revalidateBlog } from './hooks/revalidateBlog'


export const BLOG_CATEGORY_OPTIONS = [
  { label: 'AI', value: 'AI' },
  { label: 'Ecommerce', value: 'Ecommerce' },
  { label: 'Human Insights', value: 'Human Insights' },
  { label: 'A/B Testing', value: 'A/B Testing' },
  { label: 'UX', value: 'UX' },
  { label: 'Shopify', value: 'Shopify' },
  { label: 'UX Research', value: 'UX Research' },
  { label: 'AOV', value: 'AOV' },
  { label: 'Conversion', value: 'Conversion' },
  { label: 'Case Study', value: 'Case Study' },
  { label: 'Growth', value: 'Growth' },
  { label: 'Retention', value: 'Retention' },
  { label: 'Product Thinking', value: 'Product Thinking' },
]

const Blog: CollectionConfig = {
  slug: 'blog',
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 100,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'isFeatured', 'categories', 'slug', 'author', '_status'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          collection: 'blog',
          slug: typeof data?.slug === 'string' ? data.slug : '',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        collection: 'blog',
        slug: typeof data?.slug === 'string' ? data.slug : '',
        req,
      }),
  },
  access: {
    read: authenticatedOrPublished,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Blog post title - slug will update automatically',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'type',
              label: 'Post Type',
              type: 'select',
              required: true,
              defaultValue: 'article',
              options: [
                { label: 'Article', value: 'article' },
                { label: 'Video', value: 'video' },
              ],
            },
            {
              name: 'excerpt',
              type: 'textarea',
              required: true,
              maxLength: 200,
              admin: {
                description: 'Brief summary of the blog post',
              },
            },
            {
              name: 'categories',
              label: 'Categories',
              type: 'select',
              hasMany: true,
              admin: {
                description: 'Choose one or more categories for this post',
              },
              options: BLOG_CATEGORY_OPTIONS,
            },
            {
              name: 'videoSource',
              label: 'Video Source',
              type: 'select',
              options: [
                { label: 'Upload', value: 'upload' },
                { label: 'Embed (YouTube/Vimeo/etc.)', value: 'embed' },
              ],
              admin: {
                description: 'Choose how the video is provided',
                condition: (data, siblingData) => {
                  const source = siblingData ?? data
                  return source?.type === 'video'
                },
              },
              validate: (value: unknown, { siblingData }: { siblingData?: any }): true | string => {
                if (siblingData?.type === 'video') {
                  return value ? true : 'Video Source is required for Video posts'
                }
                return true
              },
            },
            {
              name: 'videoUpload',
              label: 'Video Upload',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload a video file. Use a featured image as the poster/thumbnail.',
                condition: (data, siblingData) => {
                  const source = siblingData ?? data
                  return source?.type === 'video' && source?.videoSource === 'upload'
                },
              },
              validate: (value: unknown, { siblingData }: { siblingData?: any }): true | string => {
                if (siblingData?.type === 'video' && siblingData?.videoSource === 'upload') {
                  return value ? true : 'Please upload a video file or switch to Embed'
                }
                return true
              },
            },
            {
              name: 'embedUrl',
              label: 'Embed URL',
              type: 'text',
              admin: {
                description: 'Paste a YouTube/Vimeo/Wistia URL',
                condition: (data, siblingData) => {
                  const source = siblingData ?? data
                  return source?.type === 'video' && source?.videoSource === 'embed'
                },
              },
              validate: (value: unknown, { siblingData }: { siblingData?: any }): true | string => {
                if (siblingData?.type === 'video' && siblingData?.videoSource === 'embed') {
                  if (!value || typeof value !== 'string') return 'Embed URL is required'
                  try {
                    new URL(value as string)
                    return true
                  } catch {
                    return 'Please enter a valid URL'
                  }
                }
                return true
              },
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  BlocksFeature({
                    blocks: [ContentWithMedia, TableOfContents, DotSeparator],
                  }),
                ],
              })}
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Meta Title',
              admin: {
                description: 'Title that appears in search results (recommended: 50-60 characters)',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Meta Description',
              maxLength: 160,
              admin: {
                description: 'Description that appears in search results (recommended: 150-160 characters)',
              },
            },
            {
              name: 'image',
              type: 'upload',
              label: 'Meta Image',
              relationTo: 'media',
              admin: {
                description: 'Image for search results and social sharing (recommended: 1200x630px)',
              },
            },
            {
              name: 'keywords',
              type: 'array',
              label: 'Keywords',
              admin: {
                description: 'Relevant keywords for search engines',
              },
              fields: [
                {
                  name: 'keyword',
                  type: 'text',
                },
              ],
            },
            
          ],
        },
      ],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        readOnly: true,
        description: 'Automatically set to the current user',
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        description: 'When this post should be published',
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'isFeatured',
      label: 'Feature this post',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'If enabled, this post can be shown in the Featured section (max 4 posts)',
      },
      validate: async (
        value: unknown,
        options: any
      ): Promise<true | string> => {
        const { req, id } = options || {}
        if (!value) return true
        try {
          const constraints: any[] = [{ isFeatured: { equals: true } }]
          if (id) constraints.push({ id: { not_equals: id } })
          const result = await req.payload.find({
            collection: 'blog',
            where: { and: constraints },
            limit: 1,
          })
          const total = result?.totalDocs ?? 0
          if (total >= 4) {
            return 'You can only feature up to 4 posts. Unfeature another post first.'
          }
          return true
        } catch (e) {
          return true
        }
      },
    },
    
    // Add slug field system - returns [slugField, slugLockField]
    ...slugField('title'),
  ],
  hooks: {
    beforeChange: [
      ({ data, req }: { data: any; req: any }) => {
        if (req?.user && data && !data.author) {
          data.author = req.user.id
        }
        return data
      },
    ],
    afterChange: [
      ({ doc, operation, req }: { doc: any; operation: 'create' | 'update' | 'delete'; req: any }) => {
        // Revalidate routes when blog content changes
        revalidateBlog(doc, operation)
      },
    ],
    afterDelete: [
      ({ doc, req }: { doc: any; req: any }) => {
        // Revalidate routes when blog is deleted
        revalidateBlog(doc, 'delete')
      },
    ],
  },
}

export default Blog 