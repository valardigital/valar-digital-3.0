import { unstable_cache } from 'next/cache';
import { draftMode } from 'next/headers';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import {
  LISTING_SELECT,
  mapBlogDocToCard,
  type BlogCardData,
} from '@/utilities/mapBlogToCard';

export const BLOG_GRID_LIMIT = 6;

async function fetchBlogListingData(page: number, draft: boolean) {
  const payload = await getPayload({ config: configPromise });

  const publishedWhere = { _status: { equals: 'published' as const } };
  const featuredWhere = draft
    ? { isFeatured: { equals: true } }
    : { ...publishedWhere, isFeatured: { equals: true } };
  const gridWhere = draft ? {} : publishedWhere;

  const [featuredRes, postsRes] = await Promise.all([
    payload.find({
      collection: 'blog',
      where: featuredWhere,
      sort: '-publishedAt',
      limit: 4,
      draft,
      overrideAccess: draft,
      depth: 1,
      select: LISTING_SELECT,
    }),
    payload.find({
      collection: 'blog',
      where: gridWhere,
      sort: '-publishedAt',
      limit: BLOG_GRID_LIMIT,
      page,
      draft,
      overrideAccess: draft,
      depth: 1,
      select: LISTING_SELECT,
    }),
  ]);

  const featuredPosts = (featuredRes.docs || [])
    .map(mapBlogDocToCard)
    .filter(Boolean) as BlogCardData[];

  const posts = (postsRes.docs || []).map(mapBlogDocToCard).filter(Boolean) as BlogCardData[];

  const totalDocs = postsRes?.totalDocs ?? 0;
  const limit = postsRes?.limit ?? BLOG_GRID_LIMIT;
  const totalPages = Math.max(1, Math.ceil(totalDocs / limit));
  const currentPage = postsRes?.page ?? page;

  return {
    featuredPosts,
    posts,
    pagination: { page: currentPage, totalPages, totalDocs, limit },
  };
}

const getCachedBlogListing = unstable_cache(
  async (page: number) => fetchBlogListingData(page, false),
  ['blog-listing'],
  { revalidate: 60, tags: ['blogs'] },
);

export async function fetchBlogListing(page: number) {
  const { isEnabled: draft } = await draftMode();
  if (draft) return fetchBlogListingData(page, true);
  return getCachedBlogListing(page);
}

export async function fetchBlogGridOnly(page: number) {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload({ config: configPromise });
  const publishedWhere = { _status: { equals: 'published' as const } };
  const gridWhere = draft ? {} : publishedWhere;

  const postsRes = await payload.find({
    collection: 'blog',
    where: gridWhere,
    sort: '-publishedAt',
    limit: BLOG_GRID_LIMIT,
    page,
    draft,
    overrideAccess: draft,
    depth: 1,
    select: LISTING_SELECT,
  });

  const posts = (postsRes.docs || []).map(mapBlogDocToCard).filter(Boolean) as BlogCardData[];
  const totalDocs = postsRes?.totalDocs ?? 0;
  const limit = postsRes?.limit ?? BLOG_GRID_LIMIT;
  const totalPages = Math.max(1, Math.ceil(totalDocs / limit));

  return {
    posts,
    pagination: { page: postsRes?.page ?? page, totalPages, totalDocs, limit },
  };
}
