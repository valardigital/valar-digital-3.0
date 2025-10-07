
import type { Field } from 'payload';

export const slugField = (sourceField = 'title'): Field[] => [
  {
    name: 'slug',
    type: 'text',
    label: 'URL Slug',
    required: true,
    unique: true,
    admin: {
      description: 'Auto-generated from title. You can edit this if needed.',
      position: 'sidebar',
      readOnly: false,
      placeholder: 'Auto-generated from title',
      condition: (data: any) => !!data?.[sourceField],
    },
    hooks: {
      beforeChange: [
        ({ data, value }: { data?: any; value?: unknown }) => {
          const titleValue: string = typeof data?.[sourceField] === 'string' ? data[sourceField] : '';
          const coalescedValue: string = typeof value === 'string' ? value : '';

          const toSlug = (input: string) =>
            String(input ?? '')
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '');

          // If user provided a value, sanitize and use it
          if (coalescedValue) return toSlug(coalescedValue);

          // Otherwise generate from title if available
          if (titleValue) return toSlug(titleValue);

          // Always return a string to avoid cast errors / circular refs
          return '';
        },
      ],
    },
  },
];
  