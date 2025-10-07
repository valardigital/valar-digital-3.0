
import type { Field } from 'payload';

export const slugField = (sourceField = 'title', collection?: string): Field[] => [
  {
    name: 'slug',
    type: 'text',
    label: 'URL Slug',
    admin: {
      description: 'Auto-generated from title. You can edit this if needed.',
      position: 'sidebar',
      readOnly: false,
      placeholder: 'Auto-generated from title',
      condition: (data: any) => !!data?.[sourceField],
    },
    hooks: {
      beforeChange: [
        async ({ data, value, originalDoc, req }: { data?: any; value?: unknown; originalDoc?: any; req: any }) => {
          const titleValue: string = typeof data?.[sourceField] === 'string' ? data[sourceField] : '';
          const coalescedValue: string = typeof value === 'string' ? value : '';

          const toSlug = (input: string) =>
            String(input ?? '')
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '');

          // If user provided a value, sanitize and use it
          let base = coalescedValue ? toSlug(coalescedValue) : '';

          // Otherwise generate from title if available
          if (!base && titleValue) base = toSlug(titleValue);

          // If still no base (no title/value), create a provisional unique slug
          if (!base) {
            const ts = new Date();
            const pad = (n: number) => `${n}`.padStart(2, '0');
            const y = ts.getFullYear();
            const m = pad(ts.getMonth() + 1);
            const d = pad(ts.getDate());
            const hh = pad(ts.getHours());
            const mm = pad(ts.getMinutes());
            const ss = pad(ts.getSeconds());
            const rand = Math.random().toString(36).slice(2, 6);
            base = `untitled-${y}${m}${d}-${hh}${mm}${ss}-${rand}`;
          }

          // Ensure uniqueness within the collection by appending counters
          const collectionSlug: string | undefined = collection || req?.collection?.slug;
          if (!collectionSlug || !req?.payload?.find) return base;

          let uniqueSlug = base;
          let counter = 1;
          // Try up to a reasonable number of increments to avoid infinite loops
          // eslint-disable-next-line no-constant-condition
          while (true) {
            const existing = await req.payload.find({
              collection: collectionSlug,
              where: {
                and: [
                  { slug: { equals: uniqueSlug } },
                  ...(originalDoc?.id ? [{ id: { not_equals: originalDoc.id } }] : []),
                ],
              },
              limit: 1,
            });
            if (!existing || (existing.totalDocs ?? 0) === 0) break;
            uniqueSlug = `${base}-${counter++}`;
          }

          return uniqueSlug;
        },
      ],
    },
  },
];
  