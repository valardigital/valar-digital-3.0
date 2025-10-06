import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

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
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
      admin: {
        description: 'Summary of the overall outcome',
      },
      hooks: {
        afterRead: [({ value }) => {
          if (typeof value === 'string') {
            return {
              root: {
                type: 'root',
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    version: 1,
                    format: '',
                    indent: 0,
                    direction: 'ltr',
                    children: [
                      {
                        type: 'text',
                        version: 1,
                        text: value,
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: ''
                      }
                    ]
                  }
                ],
                format: '',
                indent: 0,
                direction: 'ltr'
              }
            }
          }
          return value
        }]
      }
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
          type: 'richText',
          editor: lexicalEditor(),
          required: true,
          admin: {
            description: 'Detailed description of the result',
          },
          hooks: {
            afterRead: [({ value }) => {
              if (typeof value === 'string') {
                return {
                  root: {
                    type: 'root',
                    version: 1,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        format: '',
                        indent: 0,
                        direction: 'ltr',
                        children: [
                          {
                            type: 'text',
                            version: 1,
                            text: value,
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: ''
                          }
                        ]
                      }
                    ],
                    format: '',
                    indent: 0,
                    direction: 'ltr'
                  }
                }
              }
              return value
            }]
          }
        },
      ],
    },
    {
      name: 'takeaways',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
      admin: {
        description: 'Key takeaways and lessons learned',
      },
      hooks: {
        afterRead: [({ value }) => {
          if (typeof value === 'string') {
            return {
              root: {
                type: 'root',
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    version: 1,
                    format: '',
                    indent: 0,
                    direction: 'ltr',
                    children: [
                      {
                        type: 'text',
                        version: 1,
                        text: value,
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: ''
                      }
                    ]
                  }
                ],
                format: '',
                indent: 0,
                direction: 'ltr'
              }
            }
          }
          return value
        }]
      }
    },
  ],
} 