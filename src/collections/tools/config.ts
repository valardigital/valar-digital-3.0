import type { CollectionConfig } from 'payload';
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished';
import { generatePreviewPath } from '@/utilities/generatePreviewPath';
import { SEOFields } from '@/fields/seoFields';
import { slugField } from '@/fields/slugField';
import { revalidateTools } from './hooks/revalidateTools';

export const TOOL_CATEGORY_OPTIONS = [
  { label: 'Unit Economics', value: 'Unit Economics' },
  { label: 'Growth', value: 'Growth' },
  { label: 'Shopify', value: 'Shopify' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Analytics', value: 'Analytics' },
];

export const TOOL_COMPONENT_OPTIONS = [
  { label: 'Custom HTML (paste body + CSS + JS)', value: 'custom-html' },
  { label: 'True ROAS Calculator (built-in)', value: 'roas-calculator' },
] as const;

const isCustomHtml = (data: { toolComponent?: string }) => data?.toolComponent === 'custom-html';

export type ToolComponentType = (typeof TOOL_COMPONENT_OPTIONS)[number]['value'];

const Tools: CollectionConfig = {
  slug: 'tools',
  labels: {
    singular: 'Tool',
    plural: 'Tools',
  },
  versions: {
    drafts: {
      autosave: { interval: 100 },
      schedulePublish: true,
    },
    maxPerDoc: 100,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'toolComponent', 'isFeatured', 'categories', 'slug', '_status'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          collection: 'tools',
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
      admin: { description: 'Tool name shown on listing and detail pages' },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: { description: 'Thumbnail for the tools listing grid' },
            },
            {
              name: 'excerpt',
              type: 'textarea',
              required: true,
              maxLength: 200,
              admin: { description: 'Short description for listing cards' },
            },
            {
              name: 'toolComponent',
              label: 'Tool Type',
              type: 'select',
              required: true,
              defaultValue: 'custom-html',
              options: [...TOOL_COMPONENT_OPTIONS],
              admin: {
                description:
                  'Custom HTML: paste your tool markup in the fields below. Built-in: uses a pre-built React tool. Site header and footer are added automatically.',
              },
            },
            {
              name: 'customHtml',
              label: 'HTML (body content)',
              type: 'textarea',
              admin: {
                description:
                  'Paste the inner body HTML only (no site header/footer). You may include <style> and <script> tags here—they will be extracted automatically.',
                condition: isCustomHtml,
                rows: 16,
              },
              validate: (value: unknown, { siblingData }: { siblingData: { toolComponent?: string } }) => {
                if (siblingData?.toolComponent === 'custom-html') {
                  if (!value || typeof value !== 'string' || !value.trim()) {
                    return 'HTML content is required for custom tools';
                  }
                }
                return true;
              },
            },
            {
              name: 'customCss',
              label: 'CSS (optional)',
              type: 'textarea',
              admin: {
                description: 'Optional CSS. Paste rules only, or full <style>...</style> blocks.',
                condition: isCustomHtml,
                rows: 12,
              },
            },
            {
              name: 'customJs',
              label: 'JavaScript (optional)',
              type: 'textarea',
              admin: {
                description:
                  'Optional JavaScript. Paste script content only, or full <script>...</script> blocks. Runs after the HTML is mounted.',
                condition: isCustomHtml,
                rows: 12,
              },
            },
            {
              name: 'durationLabel',
              label: 'Duration Label',
              type: 'text',
              defaultValue: 'Free tool',
              admin: {
                description: 'Shown on cards, e.g. "5 min" or "Free calculator"',
              },
            },
            {
              name: 'categories',
              label: 'Categories',
              type: 'select',
              hasMany: true,
              options: TOOL_CATEGORY_OPTIONS,
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
      label: 'Feature this tool',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Max 4 tools can be featured on the listing page' },
      validate: async (value, { req, id }) => {
        if (!value) return true;
        const constraints: any[] = [{ isFeatured: { equals: true } }];
        if (id) constraints.push({ id: { not_equals: id } });
        const result = await req.payload.find({ collection: 'tools', where: { and: constraints }, limit: 1 });
        if ((result?.totalDocs ?? 0) >= 4) {
          return 'You can only feature up to 4 tools. Unfeature another first.';
        }
        return true;
      },
    },
    ...slugField('title', 'tools'),
  ],
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        if (req?.user && data && !data.author) data.author = req.user.id;
        return data;
      },
    ],
    afterChange: [({ doc, operation }) => revalidateTools(doc, operation)],
    afterDelete: [({ doc }) => revalidateTools(doc, 'delete')],
  },
};

export default Tools;
