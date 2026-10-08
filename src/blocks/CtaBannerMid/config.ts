import type { Block } from 'payload'

export const CtaBannerMid: Block = {
  slug: 'ctaBannerMid',
  interfaceName: 'CtaBannerMid',
  labels: {
    singular: 'CTA Banner (Mid-page)',
    plural: 'CTA Banners (Mid-page)',
  },
  fields: [
    {
      name: 'badgeValue',
      type: 'text',
      defaultValue: '30',
      admin: { description: 'Large number in the badge (e.g. 30)' },
    },
    {
      name: 'badgeUnit',
      type: 'text',
      defaultValue: 'MIN',
      admin: { description: 'Small label under the badge number' },
    },
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Free growth session',
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Not sure where to start? Talk it through with our team.',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: '30 minutes, your store, clear next steps. No obligation.',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      defaultValue: 'Book a call',
    },
    {
      name: 'buttonUrl',
      type: 'text',
      defaultValue: '/#calendar',
      admin: { description: 'CTA link (defaults to site calendar)' },
    },
  ],
}
