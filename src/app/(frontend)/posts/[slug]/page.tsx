import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { headers as getHeaders } from 'next/headers'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import Image from 'next/image'
import { RichText } from '@/components/RichText'

type Args = {
  params: Promise<{ slug?: string }>
}

export default async function BlogPostPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const headers = await getHeaders()
  const payload = await getPayload({ config: configPromise })
  const { user } = await payload.auth({ headers })

  const post = await payload.find({
    collection: 'blog',
    where: {
      slug: {
        equals: slug,
      },
    },
    overrideAccess: Boolean(user),
    draft: Boolean(user),
  }).then(res => res.docs[0])

  if (!post) return notFound()

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[67px] min-h-screen">
      {/* Live Preview Listener */}
      <LivePreviewListener />
      
      <article className="container mx-auto py-6 md:py-10 px-4 md:px-0">
        {/* Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 text-sm rounded-full ${
              post.status === 'published' 
                ? 'bg-green-100 text-green-800' 
                : post.status === 'draft' 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {post.status}
            </span>
            {post.publishedAt && (
              <span className="text-sm text-text-muted">
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-medium text-text-dark mb-4 leading-tight">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              {post.excerpt}
            </p>
          )}
          
          {post.author && typeof post.author === 'object' && 'email' in post.author && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-muted">By {post.author.email}</span>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.featuredImage && typeof post.featuredImage === 'object' && 'url' in post.featuredImage && post.featuredImage.url && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={post.featuredImage.url as string}
                alt={(post.featuredImage.alt as string) || post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {post.content ? (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <RichText data={post.content} />
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-text-muted text-center py-8">
                No content available for this post.
                <br />
                Add content in the Payload CMS admin panel.
              </p>
            </div>
          )}
        </div>

        {/* Back to Posts */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/posts"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Posts
          </a>
        </div>
      </article>
    </div>
  )
} 