import type { Block } from 'payload'

export const ProcessDetailsSection: Block = {
  slug: 'processDetailsSection',
  interfaceName: 'ProcessDetailsSection',
  labels: {
    singular: 'Process Details Section Block',
    plural: 'Process Details Section Blocks',
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Description of the process improvements',
      },
    },
    {
      name: 'details',
      type: 'array',
      admin: {
        description: 'Detailed process steps with images',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Step title',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Step description',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Image showing the process step',
          },
        },
      ],
    },
  ],
} 