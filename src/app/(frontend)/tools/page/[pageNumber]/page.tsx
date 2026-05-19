import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { TOOL_CATEGORY_OPTIONS } from '@/collections/tools';
import { fetchToolsGridOnly, TOOLS_GRID_LIMIT } from '@/utilities/fetchTools';
import ToolsGridSection from '../../../components/tools/toolsGridSection';

export const revalidate = 60;

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const { totalDocs } = await payload.count({
    collection: 'tools',
    where: { _status: { equals: 'published' } },
    overrideAccess: false,
  });

  const totalPages = Math.ceil(totalDocs / TOOLS_GRID_LIMIT);
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    pageNumber: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pageNumber: string }>;
}): Promise<Metadata> {
  const { pageNumber } = await params;
  const page = parseInt(pageNumber, 10);

  return {
    title: `Tools - Page ${page}`,
    description: `Browse all free Shopify tools - Page ${page}`,
    openGraph: {
      title: `Tools - Page ${page}`,
      description: `Browse all free Shopify tools - Page ${page}`,
    },
  };
}

const popularTags = TOOL_CATEGORY_OPTIONS.map((opt) => opt.value);

export default async function ToolsPaginationPage({
  params,
}: {
  params: Promise<{ pageNumber: string }>;
}) {
  const { pageNumber } = await params;
  const currentPage = Math.max(1, parseInt(pageNumber, 10) || 1);

  if (currentPage <= 1) {
    redirect('/tools');
  }

  const { tools, pagination } = await fetchToolsGridOnly(currentPage);

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px]">
      <ToolsGridSection
        tools={tools}
        popularTags={popularTags}
        page={pagination.page}
        totalPages={pagination.totalPages}
        totalItems={pagination.totalDocs}
        itemsPerPage={pagination.limit}
        paginationMode="path"
      />
    </div>
  );
}
