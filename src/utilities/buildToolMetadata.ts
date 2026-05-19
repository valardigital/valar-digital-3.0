import type { Metadata } from 'next';
import type { Tool } from '@/payload-types';
import { getServerSideURL } from '@/utilities/getURL';

const SITE_NAME = 'Valar Digital';
const DEFAULT_OG_IMAGE = '/Images/valar_logo.png?v=4';

/** Defaults for the ROAS calculator (matches original standalone tool). */
export const ROAS_CALCULATOR_META = {
  title: 'The True ROAS Calculator — by Valar Digital',
  description:
    'Find your true break-even ROAS and the target MER your Shopify brand actually needs. Built by Valar Digital.',
  openGraphDescription:
    "Most brands don't know their break-even ROAS. Plug in your numbers and find out in 60 seconds.",
} as const;

function resolveAbsoluteUrl(pathOrUrl: string | undefined, siteUrl: string): string | undefined {
  if (!pathOrUrl) return undefined;
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  const base = siteUrl.replace(/\/$/, '');
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

function getMediaUrlFromRelation(media: unknown): string | undefined {
  if (media && typeof media === 'object' && 'url' in media && typeof (media as { url?: string }).url === 'string') {
    return (media as { url: string }).url;
  }
  return undefined;
}

function getRoasDefaults(tool: Tool) {
  if (tool.toolComponent === 'roas-calculator' || tool.slug === 'roas-calculator') {
    return ROAS_CALCULATOR_META;
  }
  return null;
}

export function buildToolMetadata(tool: Tool, slug: string): Metadata {
  const siteUrl = getServerSideURL();
  const canonicalPath = `/tools/${slug}`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  const roasDefaults = getRoasDefaults(tool);

  const metaTitle = tool.meta?.title?.trim() || null;
  const metaDescription = tool.meta?.description?.trim() || null;

  const title = metaTitle || roasDefaults?.title || tool.title;
  const description =
    metaDescription || roasDefaults?.description || tool.excerpt || undefined;

  const ogDescription = metaDescription || roasDefaults?.openGraphDescription || description;

  const metaImageUrl = getMediaUrlFromRelation(tool.meta?.image);
  const featuredImageUrl = getMediaUrlFromRelation(tool.featuredImage);
  const imagePath = metaImageUrl || featuredImageUrl || DEFAULT_OG_IMAGE;

  const ogImageAbs = resolveAbsoluteUrl(imagePath, siteUrl);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description: ogDescription,
      images: ogImageAbs
        ? [
            {
              url: ogImageAbs,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: ogDescription,
      images: ogImageAbs ? [ogImageAbs] : undefined,
    },
  };
}
