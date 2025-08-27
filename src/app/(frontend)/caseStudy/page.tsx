import CaseStudyCard from "../components/caseStudy/caseStudyCard";
import CTASection from "../components/shared/CTASection";
// No helpers needed; mirror blog: use the media.url directly
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'
import { draftMode } from 'next/headers'

const getCaseStudies = cache(async () => {
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
      sort: '-publishedAt',
      limit: 50,
    })
    
    const caseStudies = result.docs || []
    
    // Serialize the Payload objects to plain objects
    return caseStudies.map(caseStudy => JSON.parse(JSON.stringify(caseStudy)))
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
})

export default async function CaseStudy() {
    const caseStudies = await getCaseStudies()

    const ArrowDownIcon = () => (
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
    );

    const ArrowUpIcon = () => (
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </div>
    );

    return (
        <div className='bg-background-muted mt-[64px] md:mt-[67px]'>
            <div className="container mx-auto">
                <div className="text-text-dark text-center py-6 md:py-10">
                    <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]">Case Studies That<br />Speak for Themselves</h1>
                    <p className="leading-[1.5] tracking-[0.04rem]">Discover how we've helped Shopify brands transform their customer experience, optimize<br className="hidden md:block" /> conversions, and scale their revenue through strategic design and development.</p>
                </div>
                <div className="pt-6 pb-10 space-y-6 md:space-y-10 md:px-0 px-4">
                    {caseStudies.map((caseStudy: any) => (
                        <CaseStudyCard
                            key={caseStudy.id}
                            image={(typeof caseStudy.featuredImage === 'object' && caseStudy.featuredImage?.url)
                              ? (caseStudy.featuredImage.url as string)
                              : (typeof caseStudy.featuredImage === 'string' ? caseStudy.featuredImage : '')}
                            imageAlt={caseStudy.featuredImage?.alt || caseStudy.title}
                            tags={(Array.isArray(caseStudy.tags) 
                              ? caseStudy.tags.map((t: any) => typeof t === 'string' ? t : (t?.tag ?? '')).filter(Boolean)
                              : [])}
                            title={caseStudy.title}
                            description={caseStudy.description}
                            metrics={caseStudy.metrics?.map((metric: any) => ({
                                icon: metric.value.includes('↓') ? <ArrowDownIcon /> : <ArrowUpIcon />,
                                value: metric.value,
                                description: metric.description || ''
                            })) || []}
                            slug={caseStudy.slug}
                        />
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
