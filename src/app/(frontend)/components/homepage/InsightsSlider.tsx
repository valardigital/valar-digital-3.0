"use client"

import React, { useState, memo, useCallback } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Button } from '../ui/button';
import play from "@/assets/images/home/play.svg";
import Link from 'next/link';
import { getMediaUrl } from '@/utilities/getMediaUrl';

interface ArrowProps {
  onClick?: () => void;
}

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

interface InsightsSliderProps {
  blogs: BlogPost[];
}

const InsightsSlider = memo(({ blogs }: InsightsSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomPrevArrow = ({ onClick }: ArrowProps) => (
    <button
      className="absolute left-4 md:left-24 -bottom-17 md:bottom-1/2 -translate-y-1/2 z-10 size-8 md:size-12 bg-white border border-border md:border-none rounded-md flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 md:size-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="#1e1e1e">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
      </svg>
    </button>
  );

  const CustomNextArrow = ({ onClick }: ArrowProps) => (
    <button
      className="absolute right-4 md:right-24 -bottom-17 md:bottom-1/2 -translate-y-1/2 z-10 size-8 md:size-12 bg-white border border-border md:border-none  rounded-md flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 md:size-6" fill="none" viewBox="0 0 24 24" stroke="#1e1e1e">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
      </svg>
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    focusOnSelect: true,
    beforeChange: useCallback((_current: number, next: number) => setCurrentSlide(next), []),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
          dotsClass: 'slick-dots custom-dots',
        }
      }
    ]
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!blogs || blogs.length === 0) {
    return (
      <div className="px-4">
        <p className="text-text-light">No featured insights available at the moment.</p>
      </div>
    );
  }

  return (
    <>
      {/* Featured Blogs Slider */}
      <div className="relative mb-18 md:mb-12">
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={blog.id} className="px-4">
              <div className="relative transition-all duration-500">
                {/* Image/Video Thumbnail */}
                <div className="relative aspect-[16/10]">
                  <Image
                    src={blog.featuredImage?.url ? getMediaUrl(blog.featuredImage.url) : '/placeholder-image.jpg'}
                    alt={blog.featuredImage?.alt || blog.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover rounded-[8px]"
                    loading="lazy"
                  />

                  {/* Gray overlay for non-active slides */}
                  <div
                    className={`
                      absolute inset-0 bg-white/60 transition-opacity duration-500 rounded-md
                      ${currentSlide === index ? 'opacity-0' : 'opacity-100'}
                    `}
                  />

                  {/* Play Button - only show if it's a video */}
                  {blog.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link href={`/blog/${blog.slug}`}>
                        <button className="w-10 md:w-14 h-10 md:h-14 bg-white/40 border border-white backdrop-blur-sm rounded-[12px] md:rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/60 transition-colors">
                          <Image src={play} className='size-4 md:size-6' alt="Play video" />
                        </button>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="pt-4 bg-white text-left">
                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className="bg-primary/5 px-3 py-2 rounded-[4px] border border-border text-sm text-text-dark">
                      {blog.categories?.[0] || 'Insight'}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-text-dark mb-2 line-clamp-2 leading-[1.5]">
                    <Link href={`/blog/${blog.slug}`} className="hover:text-primary transition-colors">
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-text-dark tracking-[0.04rem] mb-3.5 line-clamp-1 leading-[1.5]">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-text-light tracking-[0.02rem] leading-[1.5]">
                    <span>{blog.readTime}</span>
                    <span className='bg-text-light size-1 rounded-full'></span>
                    <span>{formatDate(blog.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* CTA Button */}
      <div className='px-4'>
        <Link href="/blog">
          <Button className="w-full md:w-max mx-auto flex items-center gap-2">
            Read More Insights
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h19m-6-6l6 6-6 6" />
            </svg>
          </Button>
        </Link>
      </div>
    </>
  );
});

InsightsSlider.displayName = 'InsightsSlider';

export default InsightsSlider;
