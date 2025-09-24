import { getPayload } from 'payload';
import configPromise from '@payload-config';
import BlogGridSection from '../../components/blog/blogGridSection';
import { draftMode } from 'next/headers'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { BLOG_CATEGORY_OPTIONS } from '@/collections/blog/config'
import { Metadata } from 'next';

async function fetchBlogs(page: number) {
  const payload = await getPayload({ config: configPromise });
  const { isEnabled: draft } = await draftMode()

  // All posts for grid
  const postsRes: any = await payload.find({
    collection: 'blog',
    where: draft ? {} : { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 12, // Keep in sync with generateStaticParams
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
      date: (doc.updatedAt || doc.publishedAt)
        ? (() => {
            const d = new Date(doc.updatedAt || doc.publishedAt);
            const month = d.toLocaleString('en-US', { month: 'long' });
            const day = d.getDate();
            const year = d.getFullYear();
            return `${month} ${day}, ${year}`;
          })()
        : '',
      featured: Boolean(doc.isFeatured),
      hasVideo: Boolean(hasUploadVideo || hasEmbedVideo),
      videoUploadUrl,
      embedUrl: hasEmbedVideo ? (doc.embedUrl as string) : null,
      videoPageUrl: doc.type === 'video' && doc.slug ? `/blog/${doc.slug}` : '#',
      type: typeLabel,
    } as any;
  };

  const posts = (postsRes.docs || [])
    .map(mapDocToCard)
    .filter(Boolean) as any[];

  const totalDocs = postsRes?.totalDocs ?? 0;
  const limit = postsRes?.limit ?? 12;
  const totalPages = Math.max(1, Math.ceil(totalDocs / limit));
  const currentPage = postsRes?.page ?? page;

  return { posts, pagination: { page: currentPage, totalPages } };
}

// Generate static params for all paginated blog pages
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const { totalDocs } = await payload.count({ 
    collection: 'blog', 
    where: { _status: { equals: 'published' } },
    overrideAccess: false 
  });

  const totalPages = Math.ceil(totalDocs / 12); // Keep in sync with the page query limit
  return Array.from({ length: totalPages }, (_, i) => ({ pageNumber: String(i + 1) }));
}

const popularTags = BLOG_CATEGORY_OPTIONS.map(opt => opt.value)

const categories = [
  'All Types',
  'Articles',
  'Videos'
]

export async function generateMetadata({ params }: { params: Promise<{ pageNumber: string }> }): Promise<Metadata> {
  const { pageNumber } = await params;
  const page = parseInt(pageNumber, 10);
  
  return {
    title: `Blog - Page ${page}`,
    description: `Browse all blog posts - Page ${page}`,
    openGraph: {
      title: `Blog - Page ${page}`,
      description: `Browse all blog posts - Page ${page}`,
    },
  };
}

export default async function BlogPaginationPage({ params }: { params: Promise<{ pageNumber: string }> }) {
  const { pageNumber } = await params;
  const currentPage = Math.max(1, parseInt(pageNumber, 10) || 1);
  const { posts, pagination } = await fetchBlogs(currentPage);

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px]">
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