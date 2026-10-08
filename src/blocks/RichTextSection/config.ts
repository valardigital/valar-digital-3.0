import type { Block } from 'payload'
import { CtaBannerEnd } from '@/blocks/CtaBannerEnd/config'
import { CtaBannerMid } from '@/blocks/CtaBannerMid/config'
import { DataTable } from '@/blocks/DataTable/config'
import { lexicalWithTableAndBlocks } from '@/fields/lexicalWithTable'

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
      editor: lexicalWithTableAndBlocks([DataTable, CtaBannerMid, CtaBannerEnd]),
    },
  ],
}
