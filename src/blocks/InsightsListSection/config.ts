import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const InsightsListSection: Block = {
  slug: 'insightsListSection',
  interfaceName: 'InsightsListSection',
  labels: {
    singular: 'List Section',
    plural: 'List Sections',
  },
  fields: [
    {
      name: 'startBackground',
      type: 'select',
      required: true,
      defaultValue: 'muted',
      admin: {
        description: 'Background color for the first item',
      },
      options: [
        { label: 'Muted', value: 'muted' },
        { label: 'White', value: 'white' },
      ],
    },
    {
      name: 'textColor',
      type: 'select',
      required: true,
      defaultValue: 'light',
      admin: {
        description: 'Text color for descriptions',
      },
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Primary', value: 'primary' },
        { label: 'Muted', value: 'muted' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      admin: {
        description: 'Key insights discovered during analysis',
      },
      hooks: {
        afterRead: [({ value, data }) => {
          // Backward compatibility: map legacy `insights` to `items`
          if (!value && data && (data as any).insights) {
            return (data as any).insights
          }
          return value
        }]
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: false,
          admin: {
            description: 'Optional small heading above the title',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
          editor: lexicalEditor(),
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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}

