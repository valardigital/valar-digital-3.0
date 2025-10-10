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
      type: 'richText',
      name: 'content',
      required: true,
      editor: lexicalEditor(),
    },
  ],
}


