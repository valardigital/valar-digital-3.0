import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const InsightsSection: Block = {
  slug: 'insightsSection',
  interfaceName: 'InsightsSection',
  labels: {
    singular: 'Insights Section Block',
    plural: 'Insights Section Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Main heading for the insights section',
      },
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
      admin: {
        description: 'Main description explaining the analysis approach',
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