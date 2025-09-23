import type { Block } from 'payload'

export const InsightsListSection: Block = {
  slug: 'insightsListSection',
  interfaceName: 'InsightsListSection',
  labels: {
    singular: 'Insights List Section Block',
    plural: 'Insights List Section Blocks',
  },
  fields: [
    {
      name: 'insights',
      type: 'array',
      required: true,
      admin: {
        description: 'Key insights discovered during analysis',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}

