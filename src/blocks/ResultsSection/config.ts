import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const ResultsSection: Block = {
  slug: 'resultsSection',
  interfaceName: 'ResultsSection',
  labels: {
    singular: 'Results Section Block',
    plural: 'Results Section Blocks',
  },
  fields: [
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Overall results summary description',
      },
    },
    {
      name: 'detailedResults',
      type: 'array',
      required: true,
      admin: {
        description: 'Detailed breakdown of results with metrics',
      },
      fields: [
        {
          name: 'metric',
          type: 'richText',
          editor: lexicalEditor(),
          required: true,
          admin: {
            description: 'Metric label (rich text, supports emphasis, lists, etc.)',
          },
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor(),
          required: true,
          admin: {
            description: 'Additional context (rich text)',
          },
        },
      ],
    },
  ],
} 