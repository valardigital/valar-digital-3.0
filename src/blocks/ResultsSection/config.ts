import type { Block } from 'payload'

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
          name: 'percentage',
          type: 'text',
          required: true,
          admin: {
            description: 'Metric value (e.g., "23%", "5x")',
          },
        },
        {
          name: 'metric',
          type: 'text',
          required: true,
          admin: {
            description: 'Metric label (e.g., "reduction in churn")',
          },
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          admin: {
            description: 'Additional context for the metric',
          },
        },
      ],
    },
  ],
} 