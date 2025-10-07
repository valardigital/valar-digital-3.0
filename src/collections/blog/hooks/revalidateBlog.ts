import { getServerSideURL } from '@/utilities/getURL'

export const revalidateBlog = async (doc: any, operation: 'create' | 'update' | 'delete') => {
  try {
    const baseUrl = getServerSideURL()
    const paths: string[] = []
    const tags: string[] = []

    if (doc.slug) paths.push(`/blog/${doc.slug}`)
    paths.push('/blog', '/blog/page', '/sitemap.xml')
    tags.push('blog-sitemap')

    if (operation === 'delete') {
      paths.push('/blog', '/blog/page')
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

    console.log(`✅ Requested revalidation for blog ${operation}: ${doc.slug || 'unknown'}`)
  } catch (error) {
    console.error('❌ Error revalidating blog routes:', error)
  }
}