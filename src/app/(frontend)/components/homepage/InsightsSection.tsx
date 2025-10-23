import React from 'react';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { getMediaUrl } from '@/utilities/getMediaUrl';
import InsightsSlider from './InsightsSlider';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage?: {
    url: string;
    alt?: string;
  };
  categories?: string[];
  readTime?: string;
  publishedAt: string;
  hasVideo?: boolean;
  videoUploadUrl?: string;
  embedUrl?: string;
  type?: string;
}

const InsightsSection = async () => {
  let featuredBlogs: BlogPost[] = [];

  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: 'blog',
      where: { 
        _status: { equals: 'published' },
        isFeatured: { equals: true }
      },
      limit: 6,
      sort: '-publishedAt',
    });

    featuredBlogs = result.docs.map((post: any) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt || '',
      slug: post.slug,
      featuredImage: post.featuredImage,
      categories: post.categories || [],
      readTime: '5 min read', // Default since readTime isn't in the schema
      publishedAt: post.publishedAt || post.createdAt,
      hasVideo: post.type === 'video',
      videoUploadUrl: post.videoUpload?.url,
      embedUrl: post.embedUrl,
      type: post.type,
    }));
  } catch (error) {
    console.error('Error fetching featured blogs:', error);
  }

  return (
    <section className="insights-section py-8 md:py-10 bg-white">
      <div className="text-center">
        {/* Header */}
        <div className='px-4'>
          <p className="text-primary text-sm font-medium uppercase mb-4 tracking-[0.02rem]">
            INSIGHTS
          </p>
          <h2 className="text-[28px] lg:text-5xl font-medium text-text-dark leading-[1.1] mb-4 md:mb-6">
            Ideas, Experiments,
            <br />
            and Growth Notes
          </h2>
          <p className="text-text-dark mb-6 md:mb-12 tracking-[0.04rem]">
            A behind-the-scenes look at how we think, test, and scale ecommerce brands.
          </p>
        </div>
        
        {/* Featured Blogs Slider */}
        <InsightsSlider blogs={featuredBlogs} />
      </div>
    </section>
  );
};

export default InsightsSection;