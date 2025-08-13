import { CollectionConfig } from 'payload/types'
import { slugField } from '@/fields/slug'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import CaseStudyContent from '@/app/blocks/CaseStudyContent/config'

const Blog: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'author', 'status', 'publishedAt'],
  },
  access: {
    read: () => true,
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
              name: 'excerpt',
              type: 'textarea',
              required: true,
              maxLength: 200,
              admin: {
                description: 'Brief summary of the blog post',
              },
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  BlocksFeature({
                    blocks: [CaseStudyContent],
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
            {
              name: 'canonicalUrl',
              type: 'text',
              label: 'Canonical URL',
              admin: {
                description: 'Preferred URL for this page (leave empty to use default)',
              },
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
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      defaultValue: 'draft',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    // Add slug field system - returns [slugField, slugLockField]
    ...slugField('title'),
  ],
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        // Auto-fill author with current logged-in user
        if (req.user && !data.author) {
          data.author = req.user.id
        }
        
        return data
      },
    ],
  },
}

export default Blog 