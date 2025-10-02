import { notFound } from 'next/navigation'
import RichText from '@/components/RichText'
import { RenderBlocks } from '@/blocks'
import CTASection from '@/app/(frontend)/components/shared/CTASection'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import type { Metadata } from 'next'
import { getServerSideURL } from '@/utilities/getURL'

// Generate static params for all case studies
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const caseStudies = await payload.find({
    collection: 'caseStudy',
    where: { _status: { equals: 'published' } },
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  });

  return caseStudies.docs.map(({ slug }) => ({ slug }));
}

const getCaseStudy = cache(async (slug: string, draft: boolean) => {
  try {
    const payload = await getPayload({ config: configPromise })
    const res = await payload.find({
      collection: 'caseStudy',
      where: { slug: { equals: slug } },
      overrideAccess: draft,
      draft,
      depth: 2,
      limit: 1,
    })
    return res.docs?.[0] || null
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
})

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { isEnabled: draft } = await draftMode()
  const caseStudy = await getCaseStudy(slug, draft)
  
  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px]">
      <LivePreviewListener />
      {caseStudy.content && (
        Array.isArray((caseStudy as any).content) ? (
          // Blocks-based content
          <RenderBlocks blocks={(caseStudy as any).content} />
        ) : (
          // Legacy richText content
          <RichText data={caseStudy.content as any} />
        )
      )}
      <CTASection />
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { isEnabled: draft } = await draftMode()
  const caseStudy = await getCaseStudy(slug, draft)

  if (!caseStudy) return {}

  const siteUrl = getServerSideURL()
  const canonicalPath = `/caseStudy/${slug}`
  
  // Fetch meta data from Payload CMS
  const metaTitle = (caseStudy as any)?.meta?.title
  const metaDescription = (caseStudy as any)?.meta?.description
  const metaImage = (caseStudy as any)?.meta?.image
  const metaKeywords = (caseStudy as any)?.meta?.keywords
  
  // Use CMS meta data, fallback to case study data
  const title = metaTitle || caseStudy.title
  const description = metaDescription || caseStudy.description || undefined
  
  // Handle meta image
  let ogImage: string | undefined
  if (metaImage && typeof metaImage === 'object' && 'url' in metaImage && metaImage.url) {
    ogImage = metaImage.url as string
  } else if (caseStudy.featuredImage && typeof caseStudy.featuredImage === 'object' && 'url' in caseStudy.featuredImage && caseStudy.featuredImage.url) {
    ogImage = caseStudy.featuredImage.url as string
  }
  
  const ogImageAbs = ogImage && (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`)
  
  // Handle keywords array from CMS
  const keywords = Array.isArray(metaKeywords)
    ? metaKeywords.map((k: any) => k?.keyword).filter(Boolean).join(', ')
    : undefined

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${siteUrl}${canonicalPath}`,
    },
    openGraph: {
      type: 'article',
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
  }
} 