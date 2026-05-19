import type { Metadata } from 'next';
import { TOOL_CATEGORY_OPTIONS } from '@/collections/tools';
import { fetchToolsListing } from '@/utilities/fetchTools';
import FeaturedToolsSection from '../components/tools/featuredToolsSection';
import ToolsGridSection from '../components/tools/toolsGridSection';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Free Shopify Tools — Valar Digital',
  description:
    'Interactive calculators and tools for Shopify brands. Find your true ROAS, unit economics, and more.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/tools',
  },
  openGraph: {
    title: 'Free Shopify Tools — Valar Digital',
    description:
      'Interactive calculators and tools for Shopify brands. Find your true ROAS, unit economics, and more.',
    url: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/tools',
  },
};

const popularTags = TOOL_CATEGORY_OPTIONS.map((opt) => opt.value);

export default async function ToolsListingPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || '1', 10) || 1);
  const { featuredTools, tools, pagination } = await fetchToolsListing(currentPage);

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px]">
      <section>
        <div className="container mx-auto py-6 md:py-10 px-4 md:px-0">
          <div className="text-center text-text-dark">
            <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]">
              Free Tools for
              <br className="hidden md:block" /> Shopify Brands
            </h1>
            <p className="tracking-[0.04rem] leading-[1.5] max-w-2xl mx-auto">
              Calculators and frameworks built from real client work.
              <br />
              Plug in your numbers. Get answers you can act on.
            </p>
          </div>
        </div>
      </section>

      <FeaturedToolsSection tools={featuredTools} />
      <ToolsGridSection
        tools={tools}
        popularTags={popularTags}
        page={pagination.page}
        totalPages={pagination.totalPages}
        totalItems={pagination.totalDocs}
        itemsPerPage={pagination.limit}
      />
    </div>
  );
}
