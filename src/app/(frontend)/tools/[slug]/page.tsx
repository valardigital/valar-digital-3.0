import { cache } from 'react';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LivePreviewListener } from '@/components/LivePreviewListener';
import ToolRenderer from '../../components/tools/ToolRenderer';
type Args = {
  params: Promise<{ slug?: string }>;
};

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const tools = await payload.find({
    collection: 'tools',
    where: { _status: { equals: 'published' } },
    limit: 500,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  });

  return tools.docs.map(({ slug }) => ({ slug }));
}

export default async function ToolDetailPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise;
  const { isEnabled: draft } = await draftMode();
  const tool = await getToolBySlug(slug as string, draft);

  if (!tool) return notFound();

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px] min-h-screen">
      <LivePreviewListener />
      <ToolRenderer toolComponent={tool.toolComponent as string} />
    </div>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise;
  const { isEnabled: draft } = await draftMode();
  const tool = await getToolBySlug(slug as string, draft);

  if (!tool) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com';
  const canonicalPath = `/tools/${slug}`;

  const metaTitle = (tool as any)?.meta?.title;
  const metaDescription = (tool as any)?.meta?.description;
  const metaImage = (tool as any)?.meta?.image;

  const title = metaTitle || tool.title;
  const description = metaDescription || tool.excerpt || undefined;

  let ogImage: string | undefined;
  if (metaImage && typeof metaImage === 'object' && 'url' in metaImage && metaImage.url) {
    ogImage = metaImage.url as string;
  } else if (
    tool.featuredImage &&
    typeof tool.featuredImage === 'object' &&
    'url' in tool.featuredImage &&
    tool.featuredImage.url
  ) {
    ogImage = tool.featuredImage.url as string;
  }

  const ogImageAbs = ogImage && (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`);

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${canonicalPath}`,
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}${canonicalPath}`,
      title,
      description,
      images: ogImageAbs ? [{ url: ogImageAbs }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImageAbs ? [ogImageAbs] : undefined,
    },
  };
}

const getToolBySlug = cache(async (slug: string, draft: boolean) => {
  const payload = await getPayload({ config: configPromise });
  const res = await payload.find({
    collection: 'tools',
    where: { slug: { equals: slug } },
    overrideAccess: draft,
    draft,
    depth: 2,
    limit: 1,
  });
  return res.docs[0] || null;
});
