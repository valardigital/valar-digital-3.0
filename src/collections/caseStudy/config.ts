import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import { HeroSection } from '@/blocks/HeroSection/config'
import { ResultsSection } from '@/blocks/ResultsSection/config'
import { InsightsSection } from '@/blocks/InsightsSection/config'
import { ProcessSection } from '@/blocks/ProcessSection/config'
import { BeforeAfterSection } from '@/blocks/BeforeAfterSection/config'
import { ProcessDetailsSection } from '@/blocks/ProcessDetailsSection/config'
import { OutcomeSection } from '@/blocks/OutcomeSection/config'
import { ContentWithMedia } from '@/blocks/ContentWithMedia/config'
import { DotSeparator } from '@/blocks/DotSeparator/config'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { TableOfContents } from '@/blocks/TableOfContents/config'

const CaseStudy: CollectionConfig = {
  slug: 'caseStudy',
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
    defaultColumns: ['title', 'isFeatured', 'slug', '_status'],
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
        description: 'Case study title - slug will update automatically',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Overview',
          fields: [
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Main image for the case study card and detail page',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              maxLength: 300,
              admin: {
                description: 'Brief summary for the case study card',
              },
            },
            {
              name: 'tags',
              label: 'Tags',
              type: 'select',
              hasMany: true,
              required: true,
              admin: {
                description: 'Choose one or more tags for this case study',
              },
              options: [
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
                { label: 'Agency Life', value: 'Agency Life' },
                { label: 'Lean UX', value: 'Lean UX' },
                { label: 'Minimalism', value: 'Minimalism' },
                { label: 'Dev Strategy', value: 'Dev Strategy' },
                { label: 'Founders', value: 'Founders' },
                { label: 'Product Thinking', value: 'Product Thinking' },
                { label: 'Checkout', value: 'Checkout' },
              ],
            },
            {
              name: 'metrics',
              type: 'array',
              required: true,
              admin: {
                description: 'Key performance metrics and results',
              },
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Metric value (e.g., "23%", "5x")',
                  },
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Metric label (e.g., "reduction in churn")',
                  },
                },
                {
                  name: 'description',
                  type: 'text',
                  admin: {
                    description: 'Additional context for the metric',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  BlocksFeature({
                    blocks: [
                      HeroSection,
                      ResultsSection,
                      InsightsSection,
                      ProcessSection,
                      BeforeAfterSection,
                      ProcessDetailsSection,
                      OutcomeSection,
                      ContentWithMedia,
                      TableOfContents,
                      DotSeparator,
                    ],
                  }),
                ],
              })
            },
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
    // Removed Featured flag as not needed for case studies
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        description: 'When this case study should be published',
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    // Add slug field system - returns [slugField, slugLockField]
    ...slugField('title'),
  ],
  hooks: {
    beforeChange: [
      ({ data, req }: { data: any; req: any }) => {
        // Add any custom logic here if needed
        return data
      },
    ],
  },
}

export default CaseStudy 