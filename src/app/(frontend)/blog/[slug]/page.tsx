import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { headers as getHeaders } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { RichText } from '@/components/RichText'

type Args = {
  params: Promise<{ slug?: string }>
}

function computeReadTime(data: unknown, isVideo: boolean): string {
  try {
    const text = JSON.stringify(data ?? '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
    const words = text.trim().split(' ').filter(Boolean).length
    const minutes = Math.max(1, Math.ceil(words / 200))
    return `${minutes} min ${isVideo ? 'watch' : 'read'}`
  } catch {
    return isVideo ? '1 min watch' : '1 min read'
  }
}

export default async function BlogPostPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const headers = await getHeaders()
  const payload = await getPayload({ config: configPromise })
  const { user } = await payload.auth({ headers })

  const post = await payload
    .find({
      collection: 'blog',
      where: { slug: { equals: slug } },
      overrideAccess: Boolean(user),
      draft: Boolean(user),
    })
    .then((res) => res.docs[0])

  if (!post) return notFound()

  const isVideo = post.type === 'video'
  const readTime = computeReadTime(post.content, isVideo)

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[67px] min-h-screen">
      <LivePreviewListener />

      <article className="container mx-auto py-6 md:py-10 px-4 md:px-0">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <Link href="/blog" className="text-sm text-text-muted hover:text-text-dark">← Back to Blog</Link>
          </div>

          <div className="mb-6">
            <div className="relative w-full h-[200px] md:h-[380px] rounded-xl overflow-hidden">
              {isVideo ? (
                <>
                  {(post.videoSource === 'upload' && post.videoUpload && typeof post.videoUpload === 'object' && 'url' in post.videoUpload && post.videoUpload.url) ? (
                    <video
                      controls
                      playsInline
                      poster={post.featuredImage && typeof post.featuredImage === 'object' && 'url' in post.featuredImage ? (post.featuredImage.url as string) : undefined}
                      className="absolute inset-0 w-full h-full object-cover bg-black"
                      src={post.videoUpload.url as string}
                    />
                  ) : post.videoSource === 'embed' && post.embedUrl ? (
                    <iframe
                      src={post.embedUrl as string}
                      title={post.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    post.featuredImage && typeof post.featuredImage === 'object' && 'url' in post.featuredImage && post.featuredImage.url ? (
                      <Image
                        src={post.featuredImage.url as string}
                        alt={(post.featuredImage.alt as string) || post.title}
                        fill
                        className="object-cover"
                      />
                    ) : null
                  )}
                </>
              ) : (
                post.featuredImage && typeof post.featuredImage === 'object' && 'url' in post.featuredImage && post.featuredImage.url ? (
                  <Image
                    src={post.featuredImage.url as string}
                    alt={(post.featuredImage.alt as string) || post.title}
                    fill
                    className="object-cover"
                  />
                ) : null
              )}
            </div>
          </div>

          <header className="mb-6">
            <h1 className="text-2xl md:text-4xl font-medium text-text-dark leading-tight mb-3">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm text-text-light">
              <span>{readTime}</span>
              <span className="w-1 h-1 rounded-full bg-text-light inline-block" />
              {post.publishedAt && (
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              )}
            </div>
          </header>

          <div className="prose max-w-none">
            {post.content ? (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <RichText data={post.content} />
              </div>
            ) : (
              <div className="bg-white p-6 rounded-xl shadow-sm text-text-muted text-center">
                No content available for this post.
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
            <div className="flex gap-2 text-xs text-text-muted">
              {Array.isArray(post.categories) && post.categories.map((cat: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-primary/5 border rounded-[4px] text-text-dark">{cat}</span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

