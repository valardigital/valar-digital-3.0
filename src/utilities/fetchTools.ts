import { unstable_cache } from 'next/cache';
import { draftMode } from 'next/headers';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import {
  mapToolDocToCard,
  TOOL_LISTING_SELECT,
  type ToolCardData,
} from '@/utilities/mapToolToCard';

export const TOOLS_GRID_LIMIT = 6;

async function fetchToolsListingData(page: number, draft: boolean) {
  const payload = await getPayload({ config: configPromise });

  const publishedWhere = { _status: { equals: 'published' as const } };
  const featuredWhere = draft
    ? { isFeatured: { equals: true } }
    : { ...publishedWhere, isFeatured: { equals: true } };
  const gridWhere = draft ? {} : publishedWhere;

  const [featuredRes, toolsRes] = await Promise.all([
    payload.find({
      collection: 'tools',
      where: featuredWhere,
      sort: '-publishedAt',
      limit: 4,
      draft,
      overrideAccess: draft,
      depth: 1,
      select: TOOL_LISTING_SELECT,
    }),
    payload.find({
      collection: 'tools',
      where: gridWhere,
      sort: '-publishedAt',
      limit: TOOLS_GRID_LIMIT,
      page,
      draft,
      overrideAccess: draft,
      depth: 1,
      select: TOOL_LISTING_SELECT,
    }),
  ]);

  const featuredTools = (featuredRes.docs || [])
    .map(mapToolDocToCard)
    .filter(Boolean) as ToolCardData[];

  const tools = (toolsRes.docs || []).map(mapToolDocToCard).filter(Boolean) as ToolCardData[];

  const totalDocs = toolsRes?.totalDocs ?? 0;
  const limit = toolsRes?.limit ?? TOOLS_GRID_LIMIT;
  const totalPages = Math.max(1, Math.ceil(totalDocs / limit));
  const currentPage = toolsRes?.page ?? page;

  return {
    featuredTools,
    tools,
    pagination: { page: currentPage, totalPages, totalDocs, limit },
  };
}

const getCachedToolsListing = unstable_cache(
  async (page: number) => fetchToolsListingData(page, false),
  ['tools-listing'],
  { revalidate: 60, tags: ['tools'] },
);

export async function fetchToolsListing(page: number) {
  const { isEnabled: draft } = await draftMode();
  if (draft) return fetchToolsListingData(page, true);
  return getCachedToolsListing(page);
}

export async function fetchToolsGridOnly(page: number) {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload({ config: configPromise });
  const publishedWhere = { _status: { equals: 'published' as const } };
  const gridWhere = draft ? {} : publishedWhere;

  const toolsRes = await payload.find({
    collection: 'tools',
    where: gridWhere,
    sort: '-publishedAt',
    limit: TOOLS_GRID_LIMIT,
    page,
    draft,
    overrideAccess: draft,
    depth: 1,
    select: TOOL_LISTING_SELECT,
  });

  const tools = (toolsRes.docs || []).map(mapToolDocToCard).filter(Boolean) as ToolCardData[];
  const totalDocs = toolsRes?.totalDocs ?? 0;
  const limit = toolsRes?.limit ?? TOOLS_GRID_LIMIT;
  const totalPages = Math.max(1, Math.ceil(totalDocs / limit));

  return {
    tools,
    pagination: { page: toolsRes?.page ?? page, totalPages, totalDocs, limit },
  };
}
