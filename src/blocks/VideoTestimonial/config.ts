import type { Block } from 'payload'

export const VideoTestimonial: Block = {
  slug: 'videoTestimonial',
  interfaceName: 'VideoTestimonial',
  labels: {
    singular: 'Video Testimonial',
    plural: 'Video Testimonials',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Upload an MP4 (or other video) from Media',
            width: '50%',
          },
        },
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Custom poster / branded frame shown before play',
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Client testimonial',
      admin: {
        description: 'Small eyebrow above the quote (e.g. “In their words”)',
      },
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short pull quote — one or two sentences from the video',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'speakerName',
          type: 'text',
          required: true,
          admin: { width: '50%', description: 'e.g. Jack Rubin' },
        },
        {
          name: 'speakerRole',
          type: 'text',
          admin: { width: '50%', description: 'e.g. Co-Founder' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'company',
          type: 'text',
          admin: { width: '50%', description: 'e.g. Purdy & Figg' },
        },
        {
          name: 'companyLogo',
          type: 'upload',
          relationTo: 'media',
          admin: { width: '50%', description: 'Optional company logo' },
        },
      ],
    },
  ],
}
