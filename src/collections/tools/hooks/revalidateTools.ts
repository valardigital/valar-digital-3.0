import { getServerSideURL } from '@/utilities/getURL'

export const revalidateTools = async (doc: any, operation: 'create' | 'update' | 'delete') => {
  try {
    const baseUrl = getServerSideURL()
    const paths: string[] = []
    const tags: string[] = []

    if (doc.slug) paths.push(`/tools/${doc.slug}`)
    paths.push('/tools', '/tools/page', '/sitemap.xml')
    tags.push('tools-sitemap')

    if (operation === 'delete') {
      paths.push('/tools', '/tools/page')
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

    console.log(`✅ Requested revalidation for tools ${operation}: ${doc.slug || 'unknown'}`)
  } catch (error) {
    console.error('❌ Error revalidating tools routes:', error)
  }
}
