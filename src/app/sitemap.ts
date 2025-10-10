import type { MetadataRoute } from 'next';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://v2.valardigital.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config: configPromise });

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/services',
    '/contact',
    '/growth',
    '/privacyPolicy',
    '/cookiePolicy',
    '/blog',
    '/case-studies',
    // Services detail routes
    '/services/shopify-design',
    '/services/shopify-development',
    '/services/shopify-app-development',
    '/services/shopify-migration',
    '/services/shopify-marketing',
    '/services/shopify-audit',
    '/services/conversion-rate-optimization',
    '/services/headless-commerce',
    '/services/website-speed-optimization',
    '/services/branding-creative',
    '/services/integration',
  ].map((path) => ({
    url: `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`,
    changeFrequency: 'weekly',
  }));

  // Dynamic blog posts
  const blogRes = await payload.find({
    collection: 'blog',
    where: { _status: { equals: 'published' } },
    limit: 500,
    sort: '-updatedAt',
  });
  const blogItems: MetadataRoute.Sitemap = (blogRes?.docs || [])
    .filter((d: any) => d?.slug)
    .map((doc: any) => ({
      url: `${BASE_URL}/blog/${doc.slug}`,
      lastModified: doc.updatedAt || doc.publishedAt || doc.createdAt || undefined,
      changeFrequency: 'monthly',
    }));

  // Dynamic case studies
  const csRes = await payload.find({
    collection: 'caseStudy',
    where: { _status: { equals: 'published' } },
    limit: 500,
    sort: '-updatedAt',
  });
  const caseStudyItems: MetadataRoute.Sitemap = (csRes?.docs || [])
    .filter((d: any) => d?.slug)
    .map((doc: any) => ({
      url: `${BASE_URL}/case-studies/${doc.slug}`,
      lastModified: doc.updatedAt || doc.publishedAt || doc.createdAt || undefined,
      changeFrequency: 'monthly',
    }));

  return [...staticRoutes, ...blogItems, ...caseStudyItems];
}


