import { getPayload } from 'payload';
import configPromise from '@payload-config';
import FeaturedBlogsSection from '../components/blog/featuredBlogSection';
import BlogGridSection from '../components/blog/blogGridSection';
import { draftMode } from 'next/headers';

async function fetchBlogs(page: number) {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise });

  // Featured posts (max 4)
  const featuredRes = await payload.find({
    collection: 'blog',
    where: {
      _status: { equals: 'published' },
      isFeatured: { equals: true },
    },
    sort: '-publishedAt',
    draft, // true in draft mode, false otherwise
    overrideAccess: draft, // Override access control in draft mode
    depth: 5, // Ensure media relationships are resolved
    limit: 4,
  });

  // All posts for grid
  const postsRes: any = await payload.find({
    collection: 'blog',
    where: {
      _status: { equals: 'published' },
    },
    sort: '-publishedAt',
    draft, // true in draft mode, false otherwise
    overrideAccess: draft, // Override access control in draft mode
    depth: 5, // Ensure media relationships are resolved
    limit: 6,
    page,
  });

  // Serialize the Payload objects to plain objects
  const featuredPosts = featuredRes.docs.map((post: any) => JSON.parse(JSON.stringify(post)))
  const allPosts = postsRes.docs.map((post: any) => JSON.parse(JSON.stringify(post)))

  const totalDocs = postsRes?.totalDocs ?? 0;
  const limit = postsRes?.limit ?? 6;
  const totalPages = Math.max(1, Math.ceil(totalDocs / limit));
  const currentPage = postsRes?.page ?? page;

  return {
    featuredPosts,
    posts: allPosts,
    totalPages,
    totalDocs,
    pagination: { page: currentPage, totalPages }
  };
}

const popularTags = [
  'GrowthStrategy',
  'Retention',
  'Funnel Design',
  'Lean UX',
  'UX Audit',
  'ShopifyTips',
  'Liquid Code',
  'AI UX',
  'AI Insights',
  'CaseStudy',
  'Real Results'
];

const categories = [
  'All Types',
  'Articles',
  'Videos'
]

export default async function BlogListingPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || '1', 10) || 1);
  const { featuredPosts, posts, pagination } = await fetchBlogs(currentPage);

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[67px]">
      {/* Hero Section */}
      <section>
        <div className="container mx-auto py-6 md:py-10 px-4 md:px-0">
          <div className="text-center text-text-dark">
            <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]">
              What's Actually Working<br />
              for Shopify Brands,<br />
              And How You Can Use It Too
            </h1>
            <p className="tracking-[0.04rem] leading-[1.5]">
              Smart ideas. Clean execution. No filler.<br className='hidden md:block' />
              Just what you need to move faster and grow better.
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
      />
    </div>
  );
}