import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateCaseStudy = async (doc: any, operation: 'create' | 'update' | 'delete') => {
  try {
    // Always revalidate the specific case study
    if (doc.slug) {
      revalidatePath(`/caseStudy/${doc.slug}`)
    }

    // Revalidate listing page
    revalidatePath('/caseStudy')

    // Revalidate sitemap
    revalidatePath('/sitemap.xml')
    revalidateTag('case-study-sitemap')

    // For updates/deletes, also revalidate the old slug if it changed
    if (operation === 'update' && doc._status === 'published') {
      // The case study is published, ensure it's accessible
      revalidatePath(`/caseStudy/${doc.slug}`)
    }

    if (operation === 'delete') {
      // Case study was deleted, ensure it's removed from listings
      revalidatePath('/caseStudy')
    }

    console.log(`✅ Revalidated case study routes for ${operation}: ${doc.slug || 'unknown'}`)
  } catch (error) {
    console.error('❌ Error revalidating case study routes:', error)
  }
}