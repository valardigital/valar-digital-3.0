import type { Metadata } from 'next';
import { BLOG_CATEGORY_OPTIONS } from '@/collections/blog/config';
import { fetchBlogListing } from '@/utilities/fetchBlogListing';
import FeaturedBlogsSection from '../components/blog/featuredBlogSection';
import BlogGridSection from '../components/blog/blogGridSection';

const popularTags = BLOG_CATEGORY_OPTIONS.map((opt) => opt.value);

const categories = ['All Types', 'Articles', 'Videos'];

/** Page 1 only — no searchParams so this route can be ISR-cached on client navigation. */
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Valar Digital Blog – Shopify Insights & Strategies',
  description:
    "Valar Digital's Blog covers everything you need to know about Shopify. Learn what's working, improve performance, and grow your e-commerce business.",
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/blog',
  },
  openGraph: {
    title: 'Valar Digital Blog – Shopify Insights & Strategies',
    description:
      "Valar Digital's Blog covers everything you need to know about Shopify. Learn what's working, improve performance, and grow your e-commerce business.",
    url: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/blog',
  },
};

export default async function BlogListingPage() {
  const { featuredPosts, posts, pagination } = await fetchBlogListing(1);

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px]">
      <section>
        <div className="container mx-auto py-6 md:py-10 px-4 md:px-0">
          <div className="text-center text-text-dark">
            <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]">
              What&apos;s Actually Working <br className="hidden md:block" />
              for
              <br className="block md:hidden" /> Shopify Brands, <br className="hidden md:block" />
              And
              <br className="block md:hidden" /> How You Can Use It Too
            </h1>
            <p className="tracking-[0.04rem] leading-[1.5]">
              Smart ideas. Clean execution. No filler.
              <br />
              Just what you need to move faster
              <br className="block md:hidden" /> and grow better.
            </p>
          </div>
        </div>
      </section>

      <FeaturedBlogsSection posts={featuredPosts} />
      <BlogGridSection
        posts={posts}
        categories={categories}
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
