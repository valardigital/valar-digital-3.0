import type { Metadata } from 'next';
import { TOOL_CATEGORY_OPTIONS } from '@/collections/tools';
import { fetchToolsListing } from '@/utilities/fetchTools';
import FeaturedToolsSection from '../components/tools/featuredToolsSection';
import ToolsGridSection from '../components/tools/toolsGridSection';

/** Page 1 only — no searchParams so this route can be ISR-cached on client navigation. */
export const revalidate = 60;

const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com';
const toolsListingUrl = `${siteUrl}/tools`;

export const metadata: Metadata = {
  title: 'Free Ecommerce Tools for Shopify Brands | Valar Digital',
  description:
    'Free calculators and tools built for ecommerce brands. Measure true profitability, calculate break-even ROAS, and make smarter decisions with real unit economics.',
  alternates: {
    canonical: toolsListingUrl,
  },
  openGraph: {
    type: 'website',
    siteName: 'Valar Digital',
    title: 'Free Ecommerce Tools for Shopify Brands | Valar Digital',
    description:
      'Free calculators and tools built for ecommerce brands. Measure true profitability, calculate break-even ROAS, and make smarter decisions with real unit economics.',
    url: toolsListingUrl,
    images: [
      {
        url: `${siteUrl}/Images/valar_logo.png?v=4`,
        width: 1200,
        height: 630,
        alt: 'Valar Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Ecommerce Tools for Shopify Brands | Valar Digital',
    description:
      'Free calculators and tools built for ecommerce brands. Measure true profitability, calculate break-even ROAS, and make smarter decisions with real unit economics.',
    images: [`${siteUrl}/Images/valar_logo.png?v=4`],
  },
};

const popularTags = TOOL_CATEGORY_OPTIONS.map((opt) => opt.value);

export default async function ToolsListingPage() {
  const { featuredTools, tools, pagination } = await fetchToolsListing(1);

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px]">
      <section>
        <div className="container mx-auto py-6 md:py-10 px-4 md:px-0">
          <div className="text-center text-text-dark">
            <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]">
              Real Tools. Real Numbers.
              <br />
              Better Decisions.
            </h1>
            <p className="tracking-[0.04rem] leading-[1.5] max-w-2xl mx-auto">
              A collection of free tools designed to help ecommerce brands measure profitability,
              <br />
              improve efficiency, and scale with confidence.
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
        paginationMode="path"
      />
    </div>
  );
}
