import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import { mapToolDocToCard, type ToolCardData } from '@/utilities/mapToolToCard';

const GRID_LIMIT = 6;

export async function fetchToolsListing(page: number) {
  const payload = await getPayload({ config: configPromise });
  const { isEnabled: draft } = await draftMode();

  const publishedWhere = { _status: { equals: 'published' as const } };
  const featuredWhere = draft
    ? { isFeatured: { equals: true } }
    : { ...publishedWhere, isFeatured: { equals: true } };

  const [featuredRes, toolsRes] = await Promise.all([
    payload.find({
      collection: 'tools',
      where: featuredWhere,
      sort: '-publishedAt',
      limit: 4,
      draft,
      overrideAccess: draft,
      depth: 1,
    }),
    payload.find({
      collection: 'tools',
      where: draft ? {} : publishedWhere,
      sort: '-publishedAt',
      limit: GRID_LIMIT,
      page,
      draft,
      overrideAccess: draft,
      depth: 1,
    }),
  ]);

  const featuredTools = (featuredRes.docs || [])
    .map(mapToolDocToCard)
    .filter(Boolean) as ToolCardData[];

  const tools = (toolsRes.docs || []).map(mapToolDocToCard).filter(Boolean) as ToolCardData[];

  const totalDocs = toolsRes?.totalDocs ?? 0;
  const limit = toolsRes?.limit ?? GRID_LIMIT;
  const totalPages = Math.max(1, Math.ceil(totalDocs / limit));
  const currentPage = toolsRes?.page ?? page;

  return {
    featuredTools,
    tools,
    pagination: { page: currentPage, totalPages, totalDocs, limit },
  };
}

export async function fetchToolsGridOnly(page: number, limit = GRID_LIMIT) {
  const payload = await getPayload({ config: configPromise });
  const { isEnabled: draft } = await draftMode();

  const toolsRes = await payload.find({
    collection: 'tools',
    where: draft ? {} : { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit,
    page,
    draft,
    overrideAccess: draft,
    depth: 2,
  });

  const tools = (toolsRes.docs || []).map(mapToolDocToCard).filter(Boolean) as ToolCardData[];
  const totalDocs = toolsRes?.totalDocs ?? 0;
  const pageLimit = toolsRes?.limit ?? limit;
  const totalPages = Math.max(1, Math.ceil(totalDocs / pageLimit));

  return {
    tools,
    pagination: { page: toolsRes?.page ?? page, totalPages },
  };
}
