'use client'

import Image from 'next/image'
import Link from 'next/link'

type RelatedPost = {
  id: string
  slug: string
  title: string
  excerpt?: string
  image: string
  categories: string[]
  readTime: string
  date: string
}

export function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  if (!posts || posts.length === 0) return null
  return (
    <section className="mx-auto px-4 md:px-0 pb-16">
      <h2 className="text-2xl md:text-[32px] font-medium text-text-dark mb-6 leading-[1.5]">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative w-full h-[200px] md:h-[200px] rounded-lg overflow-hidden mb-3">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex items-center gap-2 mb-2 text-text-light text-sm tracking-[0.025rem]">
                <span>{post.readTime}</span>
                <span className="w-1 h-1 bg-text-light rounded-full" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-base md:text-lg font-medium text-text-dark leading-[1.3] mb-2 line-clamp-2">{post.title}</h3>
              <div className="flex flex-wrap gap-2">
                {post.categories.slice(0, 3).map((cat, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/5 border rounded-[4px] text-sm text-text-dark">{cat}</span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RelatedPosts

