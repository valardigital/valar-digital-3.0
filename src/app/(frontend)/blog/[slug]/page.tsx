import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { RichText } from '@/components/RichText'
import type { Metadata } from 'next'
import { getServerSideURL } from '@/utilities/getURL'
import { cache } from 'react'
import { RenderBlocks } from '@/blocks'
import arrowLeft from "@/assets/images/arrow-left-blog.svg";
import RelatedPosts from '@/app/(frontend)/components/blog/RelatedPosts'
import { getMediaUrl } from '@/utilities/getMediaUrl'

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
  const { isEnabled: draft } = await draftMode()
  const post = await getPostBySlug(slug as string, draft)

  if (!post) return notFound()

  const isVideo = post.type === 'video'
  const readTime = computeReadTime(post.content, isVideo)
  const displayDate = (() => {
    const src: string | undefined = (post as any)?.updatedAt || (post as any)?.publishedAt || (post as any)?.createdAt
    if (!src) return ''
    const dateObj = new Date(src)
    const month = dateObj.toLocaleString('en-US', { month: 'long' })
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    return `${month} ${day}, ${year}`
  })()

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px] min-h-screen">
      <LivePreviewListener />
      <div className="mx-auto md:px-0 px-6 pt-6 max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-text-dark tracking-[0.04rem] hover:font-medium transition-colors"
        >
          <Image src={arrowLeft} className="size-5.5" alt="Arrow right icon" />
          Back to Blogs
        </Link>
      </div>

      <article className="blogDetailsPage mx-auto px-4 lg:px-0 pt-6 md:py-8 max-w-4xl">
        {/* Featured Media */}
        <div className="relative w-full lg:h-[500px] md:mb-8 mb-6 rounded-lg overflow-hidden">
          {isVideo ? (
            (post.videoSource === 'upload' && post.videoUpload && typeof post.videoUpload === 'object' && 'url' in post.videoUpload && post.videoUpload.url) ? (
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
              (post.featuredImage && typeof post.featuredImage === 'object' && 'url' in post.featuredImage && post.featuredImage.url) ? (
                <Image src={getMediaUrl(post.featuredImage.url as string)} alt={((post.featuredImage as any)?.alt as string) || post.title} fill className="object-cover !relative" />
              ) : null
            )
          ) : (
            post.featuredImage && typeof post.featuredImage === 'object' && 'url' in post.featuredImage && post.featuredImage.url ? (
              <Image src={getMediaUrl((post.featuredImage as any).url as string)} alt={((post.featuredImage as any)?.alt as string) || post.title} fill className="object-cover !relative" priority />
            ) : null
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold text-text-dark mb-2 md:mb-6 leading-[1.3] md:leading-tight">{post.title}</h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 mb-0 md:mb-8">
          <span className="text-sm text-text-light">{readTime}</span>
          <span className="text-text-light">•</span>
          <time className="text-sm text-text-light">{displayDate}</time>
        </div>

        {/* Content (hidden for videos) */}
        {!isVideo && (
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-text-dark leading-relaxed">
              {(post as any).layout && (post as any).layout.length > 0 ? (
                <RenderBlocks blocks={(post as any).layout} />
              ) : (
                post.content && <RichText data={post.content} />
              )}
            </div>
          </div>
        )}

        {/* Categories row */}
        {/* <div className="flex items-center gap-2 py-6 border-t-1 border-b-1">
          {Array.isArray(post.categories) && post.categories.map((cat: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-primary/5 border rounded-[4px] text-text-dark">{cat}</span>
          ))}
        </div> */}

        {/* Related Posts */}
        <RelatedPosts posts={await getRelatedPosts(slug as string)} />
      </article>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise
  const { isEnabled: draft } = await draftMode()
  const post = await getPostBySlug(slug as string, draft)

  if (!post) return {}

  const siteUrl = getServerSideURL()
  const canonicalPath = `/blog/${slug}`
  const canonical = canonicalPath
  const title = (post as any)?.meta?.title || post.title
  const description = (post as any)?.meta?.description || post.excerpt || undefined
  let ogImage: string | undefined
  const metaImage = (post as any)?.meta?.image
  if (metaImage && typeof metaImage === 'object' && 'url' in metaImage && metaImage.url) {
    ogImage = metaImage.url as string
  } else if (post.featuredImage && typeof post.featuredImage === 'object' && 'url' in post.featuredImage && post.featuredImage.url) {
    ogImage = post.featuredImage.url as string
  }
  const ogImageAbs = ogImage && (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`)
  const keywords = Array.isArray((post as any)?.meta?.keywords)
    ? (post as any).meta.keywords.map((k: any) => k?.keyword).filter(Boolean).join(', ')
    : undefined

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${siteUrl}${canonical}`,
    },
    openGraph: {
      type: 'article',
      url: `${siteUrl}${canonicalPath}`,
      title,
      description,
      images: ogImageAbs ? [{ url: ogImageAbs }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImageAbs ? [ogImageAbs] : undefined,
    },
  }
}

// Shared, cached fetch so page and metadata do not issue duplicate DB calls per-request
const getPostBySlug = cache(async (slug: string, draft: boolean) => {
  const payload = await getPayload({ config: configPromise })
  const res = await payload.find({
    collection: 'blog',
    where: { slug: { equals: slug } },
    overrideAccess: draft,
    draft,
    depth: 2,
    limit: 1,
  })
  return res.docs[0] || null
})

// Server helper to get 3 related posts by categories (fallback to random)
async function getRelatedPosts(slug: string) {
  const payload = await getPayload({ config: configPromise })
  const current = await payload.find({ collection: 'blog', where: { slug: { equals: slug } }, limit: 1 }).then(r => r.docs[0])
  const categories: string[] = Array.isArray(current?.categories) ? current.categories : []

  // Try to fetch with overlapping categories
  const where: any = {
    and: [
      { _status: { equals: 'published' } },
      { slug: { not_equals: slug } },
    ],
  }
  if (categories.length > 0) {
    where.and.push({ categories: { in: categories } })
  }

  let res = await payload.find({ collection: 'blog', where, limit: 6, sort: '-publishedAt' })
  let docs = res.docs
  if (!docs || docs.length === 0) {
    // Fallback random 6 then pick 3
    res = await payload.find({ collection: 'blog', where: { _status: { equals: 'published' } }, limit: 6, sort: '-publishedAt' })
    docs = res.docs
  }

  const shuffled = [...(docs || [])].sort(() => Math.random() - 0.5).slice(0, 3)
  const compute = (d: any) => {
    const imageUrl = typeof d.featuredImage === 'object' && d.featuredImage?.url ? d.featuredImage.url : ''
    const text = JSON.stringify(d.content ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ')
    const words = text.trim().split(' ').filter(Boolean).length
    const minutes = Math.max(1, Math.ceil(words / 200))
    return {
      id: d.id,
      slug: d.slug,
      title: d.title,
      excerpt: d.excerpt,
      image: imageUrl,
      categories: Array.isArray(d.categories) ? d.categories : [],
      readTime: `${minutes} min ${d.type === 'video' ? 'watch' : 'read'}`,
      date: (d.updatedAt || d.publishedAt)
        ? (() => {
            const dateObj = new Date(d.updatedAt || d.publishedAt);
            const month = dateObj.toLocaleString('en-US', { month: 'long' });
            const day = dateObj.getDate();
            const year = dateObj.getFullYear();
            return `${month} ${day}, ${year}`;
          })()
        : '',
    }
  }
  return shuffled.map(compute)
}

