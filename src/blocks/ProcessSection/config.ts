import type { Block } from 'payload'

export const ProcessSection: Block = {
  slug: 'processSection',
  interfaceName: 'ProcessSection',
  labels: {
    singular: 'Process Section Block',
    plural: 'Process Section Blocks',
  },
  fields: [
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Summary of the process and changes made',
      },
    },
  ],
} 