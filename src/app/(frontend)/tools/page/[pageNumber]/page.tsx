import type { Metadata } from 'next';
import { TOOL_CATEGORY_OPTIONS } from '@/collections/tools';
import { fetchToolsGridOnly } from '@/utilities/fetchTools';
import ToolsGridSection from '../../../components/tools/toolsGridSection';

const GRID_LIMIT = 6;

export async function generateStaticParams() {
  const { getPayload } = await import('payload');
  const configPromise = (await import('@payload-config')).default;
  const payload = await getPayload({ config: configPromise });
  const { totalDocs } = await payload.count({
    collection: 'tools',
    where: { _status: { equals: 'published' } },
    overrideAccess: false,
  });

  const totalPages = Math.ceil(totalDocs / GRID_LIMIT);
  return Array.from({ length: totalPages }, (_, i) => ({ pageNumber: String(i + 1) }));
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
  const { tools, pagination } = await fetchToolsGridOnly(currentPage, GRID_LIMIT);

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px]">
      <ToolsGridSection
        tools={tools}
        popularTags={popularTags}
        page={pagination.page}
        totalPages={pagination.totalPages}
      />
    </div>
  );
}
