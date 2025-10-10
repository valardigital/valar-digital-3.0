import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const HeroSection: Block = {
  slug: 'heroSection',
  interfaceName: 'HeroSection',
  labels: {
    singular: 'Hero Section Block',
    plural: 'Hero Section Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
      admin: {
        description: 'Main title for the case study',
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
    // Optional label overrides for left info card
    {
      name: 'clientLabel',
      type: 'text',
      required: false,
      defaultValue: 'Client',
      admin: { description: 'Override label for Client' },
    },
    {
      name: 'industryLabel',
      type: 'text',
      required: false,
      defaultValue: 'Industry',
      admin: { description: 'Override label for Industry' },
    },
    {
      name: 'scopeLabel',
      type: 'text',
      required: false,
      defaultValue: 'Scope',
      admin: { description: 'Override label for Scope' },
    },
    {
      name: 'timeframeLabel',
      type: 'text',
      required: false,
      defaultValue: 'Timeframe',
      admin: { description: 'Override label for Timeframe' },
    },
    {
      name: 'client',
      type: 'text',
      required: true,
      admin: {
        description: 'Client company name',
      },
    },
    {
      name: 'industry',
      type: 'text',
      required: true,
      admin: {
        description: 'Industry or business category',
      },
    },
    {
      name: 'scope',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Services provided and scope of work',
      },
    },
    {
      name: 'timeframe',
      type: 'text',
      required: true,
      admin: {
        description: 'Project duration (e.g., "8 weeks")',
      },
    },
    {
      name: 'challenge',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
      admin: {
        description: 'The main challenge the client faced',
      },
    },
    {
      name: 'solution',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
      admin: {
        description: 'What we did to solve the challenge',
      },
    },
  ],
} 