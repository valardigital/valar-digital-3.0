import { notFound } from 'next/navigation'
import RichText from '@/components/RichText'
import CTASection from '@/app/(frontend)/components/shared/CTASection'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'

const getCaseStudy = cache(async (slug: string) => {
  try {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({ config: configPromise })
    
    // When in draft mode, we want to fetch the draft version
    // When not in draft mode, we only want published content
    const result = await payload.find({
      collection: 'caseStudy',
      draft, // true in draft mode, false otherwise
      overrideAccess: draft, // Override access control in draft mode
      depth: 5, // Ensure media relationships are resolved
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    const caseStudy = result.docs?.[0] || null
    
    // Serialize the Payload object to a plain object
    if (caseStudy) {
      return JSON.parse(JSON.stringify(caseStudy))
    }
    
    return null
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
})

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)
  
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