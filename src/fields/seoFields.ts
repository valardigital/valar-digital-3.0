import { MetaTitleField, MetaImageField, MetaDescriptionField, OverviewField, PreviewField } from '@payloadcms/plugin-seo/fields';
import type { Field } from 'payload';

export const SEOFields: Field[] = [
  OverviewField({
    titlePath: 'meta.metaTitle',
    descriptionPath: 'meta.description',
    imagePath: 'meta.image',
  }),
  MetaTitleField({}),
  MetaImageField({ relationTo: 'media' }),
  MetaDescriptionField({}),
  PreviewField({
    hasGenerateFn: true,
    titlePath: 'meta.metaTitle',
    descriptionPath: 'meta.description',
  }),
  {
    name: 'jsonLd',
    type: 'textarea',
    label: 'JSON-LD (Schema.org)',
    admin: {
      description:
        'Paste full JSON-LD for this page (Organization, Article, BreadcrumbList, etc.). It is injected into the page head as application/ld+json. Leave empty to skip.',
      rows: 18,
    },
    validate: (value: unknown) => {
      if (!value || typeof value !== 'string' || !value.trim()) return true
      try {
        JSON.parse(value)
        return true
      } catch {
        return 'Must be valid JSON'
      }
    },
  },
];
