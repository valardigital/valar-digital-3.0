import type { Block } from 'payload'

export const BeforeAfterSection: Block = {
  slug: 'beforeAfterSection',
  interfaceName: 'BeforeAfterSection',
  labels: {
    singular: 'Before After Section Block',
    plural: 'Before After Section Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Section title',
      },
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Main image showing the improvement',
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
      name: 'before',
      type: 'array',
      required: true,
      admin: {
        description: 'Points about the before state',
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
      name: 'after',
      type: 'array',
      required: true,
      admin: {
        description: 'Points about the after state',
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