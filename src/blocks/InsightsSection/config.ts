import type { Block } from 'payload'

export const InsightsSection: Block = {
  slug: 'insightsSection',
  interfaceName: 'InsightsSection',
  labels: {
    singular: 'Insights Section Block',
    plural: 'Insights Section Blocks',
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Main description explaining the analysis approach',
      },
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Main image showing the starting point',
      },
    },
    {
      name: 'mainImageCaption',
      type: 'text',
      admin: {
        description: 'Caption for the main image',
      },
    },
    {
      name: 'whatWeKnew',
      type: 'array',
      required: true,
      admin: {
        description: 'Points about what was already known',
      },
      fields: [
        {
          name: 'point',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'whatWeNeededToLearn',
      type: 'array',
      required: true,
      admin: {
        description: 'Points about what needed to be learned',
      },
      fields: [
        {
          name: 'point',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
} 