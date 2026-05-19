import { cache } from 'react';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { Tool } from '@/payload-types';
import { LivePreviewListener } from '@/components/LivePreviewListener';
import ToolRenderer from '../../components/tools/ToolRenderer';
import { buildToolMetadata } from '@/utilities/buildToolMetadata';
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
      <ToolRenderer
        toolComponent={tool.toolComponent as string}
        customHtml={tool.customHtml}
        customCss={tool.customCss}
        customJs={tool.customJs}
      />
    </div>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise;
  const { isEnabled: draft } = await draftMode();
  const tool = await getToolBySlug(slug as string, draft);

  if (!tool) return {};

  return buildToolMetadata(tool as Tool, slug as string);
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
