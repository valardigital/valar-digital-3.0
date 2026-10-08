import type { Block } from 'payload'

export const DataTable: Block = {
  slug: 'dataTable',
  interfaceName: 'DataTable',
  labels: {
    singular: 'Table',
    plural: 'Tables',
  },
  fields: [
    {
      name: 'caption',
      type: 'text',
      admin: {
        description: 'Optional caption shown above the table',
      },
    },
    {
      name: 'headers',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      admin: {
        description: 'Column headers (left to right)',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'rows',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Row',
        plural: 'Rows',
      },
      admin: {
        description: 'Add rows in order. Each row should have one cell per column.',
      },
      fields: [
        {
          name: 'cells',
          type: 'array',
          required: true,
          minRows: 1,
          labels: {
            singular: 'Cell',
            plural: 'Cells',
          },
          fields: [
            {
              name: 'content',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Table styles',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'bordered',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show borders',
        },
        {
          name: 'striped',
          type: 'checkbox',
          defaultValue: false,
          label: 'Striped rows',
        },
        {
          name: 'compact',
          type: 'checkbox',
          defaultValue: false,
          label: 'Compact padding',
        },
        {
          name: 'fullWidth',
          type: 'checkbox',
          defaultValue: true,
          label: 'Full width',
        },
        {
          name: 'stickyHeader',
          type: 'checkbox',
          defaultValue: false,
          label: 'Sticky header',
        },
        {
          name: 'headerBackground',
          type: 'select',
          defaultValue: 'muted',
          label: 'Header background',
          options: [
            { label: 'Default (white)', value: 'default' },
            { label: 'Muted', value: 'muted' },
            { label: 'Primary', value: 'primary' },
            { label: 'Dark', value: 'dark' },
          ],
        },
        {
          name: 'textAlign',
          type: 'select',
          defaultValue: 'left',
          label: 'Cell text alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
      ],
    },
  ],
}
