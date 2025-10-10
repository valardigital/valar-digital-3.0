import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const RichTextSection: Block = {
  slug: 'richTextSection',
  interfaceName: 'RichTextSection',
  labels: {
    singular: 'Rich Text Block',
    plural: 'Rich Text Blocks',
  },
  fields: [
    {
      name: 'backgroundColor',
      type: 'select',
      required: true,
      defaultValue: 'white',
      admin: {
        description: 'Background color for the rich text section',
      },
      options: [
        { label: 'White', value: 'white' },
        { label: 'Muted', value: 'muted' },
      ],
    },
    {
      type: 'richText',
      name: 'content',
      required: true,
      editor: lexicalEditor(),
    },
  ],
}


