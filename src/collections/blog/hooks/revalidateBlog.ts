import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateBlog = async (doc: any, operation: 'create' | 'update' | 'delete') => {
  try {
    // Always revalidate the specific blog post
    if (doc.slug) {
      revalidatePath(`/blog/${doc.slug}`)
    }

    // Revalidate listing pages
    revalidatePath('/blog')
    revalidatePath('/blog/page')

    // Revalidate sitemap
    revalidatePath('/sitemap.xml')
    revalidateTag('blog-sitemap')

    // For updates/deletes, also revalidate the old slug if it changed
    if (operation === 'update' && doc._status === 'published') {
      // The post is published, ensure it's accessible
      revalidatePath(`/blog/${doc.slug}`)
    }

    if (operation === 'delete') {
      // Post was deleted, ensure it's removed from listings
      revalidatePath('/blog')
      revalidatePath('/blog/page')
    }

    console.log(`✅ Revalidated blog routes for ${operation}: ${doc.slug || 'unknown'}`)
  } catch (error) {
    console.error('❌ Error revalidating blog routes:', error)
  }
}