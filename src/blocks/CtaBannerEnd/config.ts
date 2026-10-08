import type { Block } from 'payload'

export const CtaBannerEnd: Block = {
  slug: 'ctaBannerEnd',
  interfaceName: 'CtaBannerEnd',
  labels: {
    singular: 'CTA Banner (End-page)',
    plural: 'CTA Banners (End-page)',
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Desktop content',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'desktopEyebrow',
          type: 'text',
          defaultValue: 'Your next step',
        },
        {
          name: 'desktopHeading',
          type: 'text',
          defaultValue: 'Ready to turn more visitors into customers?',
        },
        {
          name: 'desktopIntro',
          type: 'textarea',
          defaultValue:
            "Book a free 30-minute session with our Shopify and CRO specialists. Bring your questions, and we'll bring the plan.",
        },
        {
          name: 'steps',
          type: 'array',
          minRows: 3,
          maxRows: 3,
          defaultValue: [
            {
              number: '01',
              title: 'Pick a time',
              description: 'Choose a slot that suits you and tell us a little about your store.',
            },
            {
              number: '02',
              title: 'Meet the team',
              description:
                "A focused 30-minute video call on your goals, your funnel and what's in the way.",
            },
            {
              number: '03',
              title: 'Leave with a plan',
              description:
                'Clear, prioritised next steps, yours to keep whether or not we work together.',
            },
          ],
          fields: [
            { name: 'number', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        {
          name: 'desktopButtonLabel',
          type: 'text',
          defaultValue: 'Book your free 30-min session',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Mobile content',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'mobileEyebrow',
          type: 'text',
          defaultValue: 'Free · 30 minutes',
        },
        {
          name: 'mobileHeading',
          type: 'text',
          defaultValue: 'Get expert eyes on your store.',
        },
        {
          name: 'mobileIntro',
          type: 'textarea',
          defaultValue:
            'Book a 30-minute session with the Valar Ecom team and leave with a clear plan to grow.',
        },
        {
          name: 'checks',
          type: 'array',
          defaultValue: [
            { text: 'Where your store is losing sales' },
            { text: 'Quick wins you can act on this month' },
            { text: 'Honest advice, whether or not we work together' },
          ],
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        {
          name: 'mobileButtonLabel',
          type: 'text',
          defaultValue: 'Book my session',
        },
      ],
    },
    {
      name: 'buttonUrl',
      type: 'text',
      defaultValue: '/#calendar',
      admin: { description: 'CTA link (defaults to site calendar)' },
    },
  ],
}
