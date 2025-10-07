import { getServerSideURL } from '@/utilities/getURL'

export const revalidateCaseStudy = async (doc: any, operation: 'create' | 'update' | 'delete') => {
  try {
    const baseUrl = getServerSideURL()
    const paths: string[] = []
    const tags: string[] = []

    if (doc.slug) paths.push(`/caseStudy/${doc.slug}`)
    paths.push('/caseStudy', '/sitemap.xml')
    tags.push('case-study-sitemap')

    if (operation === 'delete') {
      paths.push('/caseStudy')
    }

    await fetch(`${baseUrl}/api/revalidate`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-revalidate-secret': process.env.REVALIDATE_SECRET || '',
      },
      body: JSON.stringify({ paths, tags }),
      cache: 'no-store',
    })

    console.log(`✅ Requested revalidation for case study ${operation}: ${doc.slug || 'unknown'}`)
  } catch (error) {
    console.error('❌ Error revalidating case study routes:', error)
  }
}