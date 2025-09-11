import type { Block } from 'payload'

export const OutcomeSection: Block = {
  slug: 'outcomeSection',
  interfaceName: 'OutcomeSection',
  labels: {
    singular: 'Outcome Section Block',
    plural: 'Outcome Section Blocks',
  },
  fields: [
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Summary of the overall outcome',
      },
    },
    {
      name: 'keyResults',
      type: 'array',
      required: true,
      admin: {
        description: 'Key results and metrics',
      },
      fields: [
        {
          name: 'percentage',
          type: 'text',
          required: true,
          admin: {
            description: 'Result value (e.g., "23%", "5x")',
          },
        },
        {
          name: 'metric',
          type: 'text',
          required: true,
          admin: {
            description: 'Result label (e.g., "reduction in churn")',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Detailed description of the result',
          },
        },
      ],
    },
    {
      name: 'takeaways',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Key takeaways and lessons learned',
      },
    },
  ],
} 