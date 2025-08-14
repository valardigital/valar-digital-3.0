'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { RichText } from '@/components/RichText';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  featuredImage?: {
    url: string;
    alt: string;
  };
  author?: {
    id: string;
    email: string;
  };
  publishedAt: string;
  status: string;
  slug: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch post by slug from the Payload CMS API
        const response = await fetch(`/api/blog?where[slug][equals]=${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        
        if (data.docs && data.docs.length > 0) {
          setPost(data.docs[0]);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-background-muted mt-[64px] md:mt-[67px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-text-dark">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-background-muted mt-[64px] md:mt-[67px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error || 'Post not found'}</p>
          <a 
            href="/posts"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Posts
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[67px] min-h-screen">
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
          
          {post.author && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-muted">By {post.author.email}</span>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
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
  );
} 