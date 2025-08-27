import { notFound } from 'next/navigation'
import RichText from '@/components/RichText'
import CTASection from '@/app/(frontend)/components/shared/CTASection'
import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { headers as getHeaders } from 'next/headers'


const getCaseStudy = cache(async (slug: string) => {
  try {
    const payload = await getPayload({ config: configPromise })
    const headers = await getHeaders()
    const auth = headers ? await payload.auth({ headers }) : { user: undefined as any }
    const res = await payload.find({
      collection: 'caseStudy',
      where: { slug: { equals: slug } },
      overrideAccess: Boolean((auth as any)?.user),
      draft: Boolean((auth as any)?.user),
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
  const caseStudy = await getCaseStudy(slug)
  
  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[67px]">
      {caseStudy.content && (
        <RichText data={caseStudy.content} />
      )}
      <CTASection />
    </div>
  )
} 