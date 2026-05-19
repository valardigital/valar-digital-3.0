import { getMediaUrl } from '@/utilities/getMediaUrl';

export type BlogCardData = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  categories: string[];
  readTime: string;
  date: string;
  featured?: boolean;
  hasVideo: boolean;
  videoUploadUrl: string | null;
  embedUrl: string | null;
  videoPageUrl: string;
  type: string;
};

const LISTING_SELECT = {
  title: true,
  slug: true,
  excerpt: true,
  featuredImage: true,
  categories: true,
  type: true,
  videoSource: true,
  videoUpload: true,
  embedUrl: true,
  isFeatured: true,
  publishedAt: true,
  updatedAt: true,
} as const;

export { LISTING_SELECT };

export function readTimeFromExcerpt(excerpt: string | undefined, type?: string | null): string {
  const words = (excerpt || '').trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min ${type === 'video' ? 'watch' : 'read'}`;
}

export function formatBlogDate(dateSrc?: string | null): string {
  if (!dateSrc) return '';
  const d = new Date(dateSrc);
  const month = d.toLocaleString('en-US', { month: 'long' });
  const day = d.getDate();
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
}

export function mapBlogDocToCard(doc: any): BlogCardData | null {
  const imageUrlRaw =
    typeof doc.featuredImage === 'object' && doc.featuredImage?.url ? doc.featuredImage.url : null;
  const imageUrl = imageUrlRaw ? getMediaUrl(imageUrlRaw as string) : null;
  if (!imageUrl || !doc.slug) return null;

  const typeLabel = doc.type === 'video' ? 'Videos' : 'Articles';
  const hasUploadVideo =
    doc.type === 'video' &&
    doc.videoSource === 'upload' &&
    typeof doc.videoUpload === 'object' &&
    doc.videoUpload?.url;
  const hasEmbedVideo = doc.type === 'video' && doc.videoSource === 'embed' && !!doc.embedUrl;
  const videoUploadUrl = hasUploadVideo ? getMediaUrl(doc.videoUpload.url as string) : null;

  return {
    id: doc.slug as string,
    title: doc.title as string,
    excerpt: doc.excerpt as string,
    image: imageUrl,
    categories: Array.isArray(doc.categories) ? doc.categories : [],
    readTime: readTimeFromExcerpt(doc.excerpt, doc.type),
    date: formatBlogDate(doc.updatedAt || doc.publishedAt),
    featured: Boolean(doc.isFeatured),
    hasVideo: Boolean(hasUploadVideo || hasEmbedVideo),
    videoUploadUrl,
    embedUrl: hasEmbedVideo ? (doc.embedUrl as string) : null,
    videoPageUrl: doc.type === 'video' && doc.slug ? `/blog/${doc.slug}` : '#',
    type: typeLabel,
  };
}
