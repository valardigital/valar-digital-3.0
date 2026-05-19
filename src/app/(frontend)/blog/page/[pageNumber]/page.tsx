import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { BLOG_CATEGORY_OPTIONS } from '@/collections/blog/config';
import { BLOG_GRID_LIMIT, fetchBlogGridOnly } from '@/utilities/fetchBlogListing';
import BlogGridSection from '../../../components/blog/blogGridSection';

const popularTags = BLOG_CATEGORY_OPTIONS.map((opt) => opt.value);

const categories = ['All Types', 'Articles', 'Videos'];

export const revalidate = 60;

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const { totalDocs } = await payload.count({
    collection: 'blog',
    where: { _status: { equals: 'published' } },
    overrideAccess: false,
  });

  const totalPages = Math.ceil(totalDocs / BLOG_GRID_LIMIT);
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
    title: `Blog - Page ${page}`,
    description: `Browse all blog posts - Page ${page}`,
    openGraph: {
      title: `Blog - Page ${page}`,
      description: `Browse all blog posts - Page ${page}`,
    },
  };
}

export default async function BlogPaginationPage({
  params,
}: {
  params: Promise<{ pageNumber: string }>;
}) {
  const { pageNumber } = await params;
  const currentPage = Math.max(1, parseInt(pageNumber, 10) || 1);

  if (currentPage <= 1) {
    redirect('/blog');
  }

  const { posts, pagination } = await fetchBlogGridOnly(currentPage);

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px]">
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
