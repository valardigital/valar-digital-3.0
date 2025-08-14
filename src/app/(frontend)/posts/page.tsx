'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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

// Test post data for demonstration
const testPost: BlogPost = {
  id: 'test-1',
  title: 'Sample Blog Post - Test Data',
  excerpt: 'This is a sample blog post to demonstrate how the posts page will look. In a real implementation, this would be fetched from your Payload CMS blog collection. Create some blog posts in the admin panel to see real content here.',
  status: 'published',
  publishedAt: new Date().toISOString(),
  slug: 'sample-blog-post',
  author: {
    id: 'test-author',
    email: 'admin@example.com'
  }
};

export default function PostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch posts from the Payload CMS API
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.docs || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        // If there's an error, show the test post instead
        setPosts([testPost]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="bg-background-muted mt-[64px] md:mt-[67px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-text-dark">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-muted mt-[64px] md:mt-[67px] min-h-screen">
      {/* Hero Section */}
      <section>
        <div className="container mx-auto py-6 md:py-10 px-4 md:px-0">
          <div className="text-center text-text-dark">
            <h1 className="text-[28px] md:text-5xl font-medium mb-2 md:mb-6 leading-[1.2]">
              Blog Posts
            </h1>
            <p className="tracking-[0.04rem] leading-[1.5]">
              Latest insights and articles from our team
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-0">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-dark text-lg mb-4">No posts found</p>
              <p className="text-text-muted mb-8">Create some blog posts in the admin panel to see them here.</p>
              
              {/* Show test post for demonstration */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Demo Mode</h3>
                  <p className="text-blue-700 text-sm mb-4">
                    This is a test post to show how the page will look with real content.
                  </p>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          {testPost.status}
                        </span>
                        <span className="text-xs text-text-muted">
                          {new Date(testPost.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-text-dark mb-3">
                        {testPost.title}
                      </h2>
                      <p className="text-text-muted text-sm mb-4">
                        {testPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-muted">
                          By {testPost.author?.email}
                        </span>
                        <span className="text-blue-600 text-sm font-medium">
                          Test Post
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {post.featuredImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        post.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : post.status === 'draft' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {post.status}
                      </span>
                      {post.publishedAt && (
                        <span className="text-xs text-text-muted">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-text-dark mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-text-muted text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      {post.author && (
                        <span className="text-xs text-text-muted">
                          By {post.author.email}
                        </span>
                      )}
                      <a 
                        href={`/posts/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 