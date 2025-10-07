import type { CollectionConfig } from 'payload';
import { ContentWithMedia } from '@/blocks/ContentWithMedia/config';
import { DotSeparator } from '@/blocks/DotSeparator/config';
import { TableOfContents } from '@/blocks/TableOfContents/config';
import { BlocksFeature, lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical';
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished';
import { generatePreviewPath } from '@/utilities/generatePreviewPath';
import { revalidateBlog } from './hooks/revalidateBlog';
import { SEOFields } from '@/fields/seoFields';
import { slugField } from '@/fields/slugField';

export const BLOG_CATEGORY_OPTIONS = [
  { label: 'AI', value: 'AI' },
  { label: 'Ecommerce', value: 'Ecommerce' },
  { label: 'Human Insights', value: 'Human Insights' },
  { label: 'A/B Testing', value: 'A/B Testing' },
  { label: 'UX', value: 'UX' },
  { label: 'Shopify', value: 'Shopify' },
  { label: 'UX Research', value: 'UX Research' },
  { label: 'AOV', value: 'AOV' },
  { label: 'Conversion', value: 'Conversion' },
  { label: 'Case Study', value: 'Case Study' },
  { label: 'Growth', value: 'Growth' },
  { label: 'Retention', value: 'Retention' },
  { label: 'Product Thinking', value: 'Product Thinking' },
];

const Blog: CollectionConfig = {
  slug: 'blog',
  versions: {
    drafts: {
      autosave: { interval: 100 },
      schedulePublish: true,
    },
    maxPerDoc: 100,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'isFeatured', 'categories', 'slug', 'author', '_status'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          collection: 'blog',
          slug: data?.slug || '',
          req,
        }),
    },
  },
  access: {
    read: authenticatedOrPublished,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'Blog post title' },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            { name: 'featuredImage', type: 'upload', relationTo: 'media' },
            {
              name: 'type',
              label: 'Post Type',
              type: 'select',
              required: true,
              defaultValue: 'article',
              options: [
                { label: 'Article', value: 'article' },
                { label: 'Video', value: 'video' },
              ],
            },
            {
              name: 'excerpt',
              type: 'textarea',
              required: true,
              maxLength: 200,
              admin: { description: 'Brief summary of the blog post' },
            },
            {
              name: 'categories',
              label: 'Categories',
              type: 'select',
              hasMany: true,
              options: BLOG_CATEGORY_OPTIONS,
              admin: { description: 'Choose one or more categories for this post' },
            },
            {
              name: 'videoSource',
              label: 'Video Source',
              type: 'select',
              options: [
                { label: 'Upload', value: 'upload' },
                { label: 'Embed (YouTube/Vimeo/etc.)', value: 'embed' },
              ],
              admin: {
                description: 'Choose how the video is provided',
                condition: (data: any) => data?.type === 'video',
              },
              validate: (value: unknown, { siblingData }: { siblingData: any }) => {
                if (siblingData?.type === 'video') return value ? true : 'Video Source is required for Video posts';
                return true;
              },
            },
            {
              name: 'videoUpload',
              label: 'Video Upload',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload a video file. Use a featured image as poster/thumbnail.',
                condition: (data: any) => data?.type === 'video' && data?.videoSource === 'upload',
              },
              validate: (value: unknown, { siblingData }: { siblingData: any }) => {
                if (siblingData?.type === 'video' && siblingData?.videoSource === 'upload') return value ? true : 'Please upload a video file or switch to Embed';
                return true;
              },
            },
            {
              name: 'embedUrl',
              label: 'Embed URL',
              type: 'text',
              admin: {
                description: 'Paste a YouTube/Vimeo/Wistia URL',
                condition: (data: any) => data?.type === 'video' && data?.videoSource === 'embed',
              },
              validate: (value: unknown, { siblingData }: { siblingData: any }) => {
                if (siblingData?.type === 'video' && siblingData?.videoSource === 'embed') {
                  if (!value || typeof value !== 'string') return 'Embed URL is required';
                  try { new URL(value); return true; } catch { return 'Please enter a valid URL'; }
                }
                return true;
              },
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  BlocksFeature({ blocks: [ContentWithMedia, TableOfContents, DotSeparator] }),
                  FixedToolbarFeature(),
                ],
              }),
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: SEOFields,
        },
      ],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: { readOnly: true, position: 'sidebar', description: 'Automatically set to current user' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'isFeatured',
      label: 'Feature this post',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Max 4 posts can be featured' },
      validate: async (value, { req, id }) => {
        if (!value) return true;
        const constraints: any[] = [{ isFeatured: { equals: true } }];
        if (id) constraints.push({ id: { not_equals: id } });
        const result = await req.payload.find({ collection: 'blog', where: { and: constraints }, limit: 1 });
        if ((result?.totalDocs ?? 0) >= 4) return 'You can only feature up to 4 posts. Unfeature another first.';
        return true;
      },
    },
    // Slug field with scoped uniqueness to this collection
    ...slugField('title', 'blog'),
  ],
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        if (req?.user && data && !data.author) data.author = req.user.id;
        return data;
      },
    ],
    afterChange: [({ doc, operation }) => revalidateBlog(doc, operation)],
    afterDelete: [({ doc }) => revalidateBlog(doc, 'delete')],
  },
};

export default Blog;
