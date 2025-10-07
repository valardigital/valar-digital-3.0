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
];
