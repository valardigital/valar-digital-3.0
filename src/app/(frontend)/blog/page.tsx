import { getPayload } from 'payload';
import configPromise from '@payload-config';
import FeaturedBlogsSection from '../components/blog/featuredBlogSection';
import BlogGridSection from '../components/blog/blogGridSection';
import { draftMode } from 'next/headers'
import { getMediaUrl } from '@/utilities/getMediaUrl'

async function fetchBlogs(page: number) {
  const payload = await getPayload({ config: configPromise });
  const { isEnabled: draft } = await draftMode()

  // Featured posts (max 4)
  const featuredRes = await payload.find({
    collection: 'blog',
    where: draft ? { isFeatured: { equals: true } } : {
      _status: { equals: 'published' },
      isFeatured: { equals: true },
    },
    sort: '-publishedAt',
    limit: 4,
    draft,
    overrideAccess: draft,
    depth: 2,
  });

  // All posts for grid
  const postsRes: any = await payload.find({
    collection: 'blog',
    where: draft ? {} : { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 6,
    page,
    draft,
    overrideAccess: draft,
    depth: 2,
  });

  const computeReadTime = (data: unknown, type: string | undefined): string => {
    try {
      const text = JSON.stringify(data ?? '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ');
      const words = text.trim().split(' ').filter(Boolean).length;
      const minutes = Math.max(1, Math.ceil(words / 200));
      return `${minutes} min ${type === 'video' ? 'watch' : 'read'}`;
    } catch {
      return type === 'video' ? '1 min watch' : '1 min read';
    }
  };

  const mapDocToCard = (doc: any) => {
    const imageUrlRaw = typeof doc.featuredImage === 'object' && doc.featuredImage?.url ? doc.featuredImage.url : null;
    const imageUrl = imageUrlRaw ? getMediaUrl(imageUrlRaw as string) : null;
    if (!imageUrl) return null; // Ensure image exists to avoid UI break
    const typeLabel = doc.type === 'video' ? 'Videos' : 'Articles';
    const hasUploadVideo = doc.type === 'video' && doc.videoSource === 'upload' && typeof doc.videoUpload === 'object' && doc.videoUpload?.url
    const hasEmbedVideo = doc.type === 'video' && doc.videoSource === 'embed' && !!doc.embedUrl
    const videoUploadUrl = hasUploadVideo ? getMediaUrl((doc.videoUpload.url as string)) : null
    return {
      id: doc.slug, // used in components' href; /blog/[slug] route will handle
      title: doc.title,
      excerpt: doc.excerpt,
      image: imageUrl,
      categories: Array.isArray(doc.categories) ? doc.categories : [],
      readTime: computeReadTime(doc.content, doc.type),
      date: doc.publishedAt ? new Date(doc.publishedAt).toLocaleDateString() : '',
      featured: Boolean(doc.isFeatured),
      hasVideo: Boolean(hasUploadVideo || hasEmbedVideo),
      videoUploadUrl,
      embedUrl: hasEmbedVideo ? (doc.embedUrl as string) : null,
      videoPageUrl: doc.type === 'video' && doc.slug ? `/blog/${doc.slug}` : '#',
      type: typeLabel,
    } as any;
  };

  const featuredPosts = (featuredRes.docs || [])
    .map(mapDocToCard)
    .filter(Boolean) as any[];

  const posts = (postsRes.docs || [])
    .map(mapDocToCard)
    .filter(Boolean) as any[];

  const totalDocs = postsRes?.totalDocs ?? 0;
  const limit = postsRes?.limit ?? 6;
  const totalPages = Math.max(1, Math.ceil(totalDocs / limit));
  const currentPage = postsRes?.page ?? page;

  return { featuredPosts, posts, pagination: { page: currentPage, totalPages } };
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
    <div className="bg-background-muted mt-[64px] md:mt-[80px]">
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