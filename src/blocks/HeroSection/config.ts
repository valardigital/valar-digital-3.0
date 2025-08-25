import type { Block } from 'payload'

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
      type: 'text',
      required: true,
      admin: {
        description: 'Main title for the case study',
      },
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
      type: 'textarea',
      required: true,
      admin: {
        description: 'The main challenge the client faced',
      },
    },
    {
      name: 'solution',
      type: 'textarea',
      required: true,
      admin: {
        description: 'What we did to solve the challenge',
      },
    },
  ],
} 