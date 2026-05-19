import { getMediaUrl } from '@/utilities/getMediaUrl';

export const TOOL_LISTING_SELECT = {
  title: true,
  slug: true,
  excerpt: true,
  featuredImage: true,
  categories: true,
  durationLabel: true,
  isFeatured: true,
  publishedAt: true,
  updatedAt: true,
  createdAt: true,
  toolComponent: true,
} as const;

export type ToolCardData = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  categories: string[];
  durationLabel: string;
  date: string;
  featured?: boolean;
  toolComponent: string;
};

export function formatToolDate(dateSrc?: string | null): string {
  if (!dateSrc) return '';
  const d = new Date(dateSrc);
  const month = d.toLocaleString('en-US', { month: 'long' });
  const day = d.getDate();
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
}

export function mapToolDocToCard(doc: any): ToolCardData | null {
  const imageUrlRaw =
    typeof doc.featuredImage === 'object' && doc.featuredImage?.url ? doc.featuredImage.url : null;
  const imageUrl = imageUrlRaw ? getMediaUrl(imageUrlRaw as string) : null;
  if (!imageUrl || !doc.slug) return null;

  return {
    id: doc.slug as string,
    title: doc.title as string,
    excerpt: doc.excerpt as string,
    image: imageUrl,
    categories: Array.isArray(doc.categories) ? doc.categories : [],
    durationLabel: (doc.durationLabel as string) || 'Free tool',
    date: formatToolDate(doc.updatedAt || doc.publishedAt || doc.createdAt),
    featured: Boolean(doc.isFeatured),
    toolComponent: doc.toolComponent as string,
  };
}
