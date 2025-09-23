import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

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
      type: 'richText',
      editor: lexicalEditor(),
      admin: {
        description: 'Caption for the main image',
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