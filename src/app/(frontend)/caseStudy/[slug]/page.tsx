import { notFound } from 'next/navigation'
import RichText from '@/components/RichText'
import CTASection from '@/app/(frontend)/components/shared/CTASection'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'


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
    <div className="bg-background-muted mt-[64px] md:mt-[67px]">
      <LivePreviewListener />
      {caseStudy.content && (
        <RichText data={caseStudy.content} />
      )}
      <CTASection />
    </div>
  )
} 