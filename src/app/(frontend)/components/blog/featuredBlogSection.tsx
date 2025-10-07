'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { getMediaUrl } from '@/utilities/getMediaUrl'
import Link from 'next/link';
import play from "@/assets/images/home/play.svg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string | StaticImageData;
  categories: string[];
  readTime: string;
  date: string;
  featured?: boolean;
  hasVideo: boolean;
  videoPageUrl: string;
  type?: string;
  videoUploadUrl?: string | null;
  embedUrl?: string | null;
}

interface FeaturedBlogsSectionProps {
  posts: BlogPost[];
}

const FeaturedBlogsSection: React.FC<FeaturedBlogsSectionProps> = ({ posts }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const mainFeaturedPost = posts[0];
  const sidebarPosts = posts.slice(1, 4);

  return (
    <div className="container mx-auto md:py-10 py-6 px-4 md:px-0">
      <h2 className="text-lg md:text-[32px] font-medium text-text-dark mb-6 leading-[1.5]">Featured Blogs</h2>

      <div className="flex gap-8 flex-col lg:flex-row items-stretch">
        {/* Main Featured Post - Left Side */}
        <div className="flex-1">
          {mainFeaturedPost && (
            <article className="group">
              <Link href={`/blog/${mainFeaturedPost.id}`}>
                <div className=''>
                  <div className="relative w-full h-[200px] md:h-[350px] mb-4 overflow-hidden rounded-lg">
                    {mainFeaturedPost.hasVideo && playingId === mainFeaturedPost.id && (mainFeaturedPost.videoUploadUrl || mainFeaturedPost.embedUrl) ? (
                      mainFeaturedPost.videoUploadUrl ? (
                        <video
                          controls
                          playsInline
                          poster={typeof mainFeaturedPost.image === 'string' ? getMediaUrl(mainFeaturedPost.image) : undefined}
                          className="absolute inset-0 w-full h-full object-cover bg-black"
                          src={mainFeaturedPost.videoUploadUrl}
                        />
                      ) : (
                        <iframe
                          src={mainFeaturedPost.embedUrl as string}
                          title={mainFeaturedPost.title}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )
                    ) : (
                      <>
                        <Image
                          src={typeof mainFeaturedPost.image === 'string' ? getMediaUrl(mainFeaturedPost.image) : mainFeaturedPost.image}
                          alt={mainFeaturedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {mainFeaturedPost.hasVideo && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              className="w-14 h-14 bg-white/40 border border-white backdrop-blur-sm rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/60 transition-colors"
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPlayingId(mainFeaturedPost.id); }}
                            >
                              <Image src={play} className='size-6' alt="Play video" />
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className='grid'>
                    <div className="flex items-center gap-2 mb-2 md:mb-4 text-text-light text-sm tracking-[0.025rem]">
                      <span>{mainFeaturedPost.readTime}</span>
                      <span className="w-1 h-1 bg-text-light rounded-full"></span>
                      <span className="text-sm text-text-light">{mainFeaturedPost.date}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 text-sm text-text-dark tracking-[0.04rem] order-3 lg:order-0 mt-4 lg:mt-0">
                      {mainFeaturedPost.categories.map((category, index) => {
                        return (
                          <span key={index} className="px-3 py-2 bg-primary/5 border rounded-[4px]">
                            {category}
                          </span>
                        )
                      })}
                    </div>

                    <h3 className="md:text-2xl md:text-[20px] font-medium text-text-dark mb-2 leading-[1.3] tracking-[0.04rem]">
                      {mainFeaturedPost.title}
                    </h3>

                    <p className="text-sm md:text-base text-text-dark tracking-[0.04rem] leading-[1.5] line-clamp-2">
                      {mainFeaturedPost.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          )}
        </div>

        <div className="space-y-4 md:space-y-[28px] lg:max-w-[500px]">
          {sidebarPosts.map(post => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.id}`}>
                <div className="flex gap-3 md:gap-6">
                  <div className="relative h-[110px] md:h-[160px] w-[40%] md:aspect-[5/4] md:shrink-0 overflow-hidden rounded-lg">
                    {post.hasVideo && playingId === post.id && (post.videoUploadUrl || post.embedUrl) ? (
                      post.videoUploadUrl ? (
                        <video
                          controls
                          playsInline
                          poster={typeof post.image === 'string' ? getMediaUrl(post.image) : undefined}
                          className="absolute inset-0 w-full h-full object-cover bg-black"
                          src={post.videoUploadUrl}
                        />
                      ) : (
                        <iframe
                          src={post.embedUrl as string}
                          title={post.title}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )
                    ) : (
                      <>
                        <Image
                          src={typeof post.image === 'string' ? getMediaUrl(post.image) : post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.hasVideo && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              className="w-10 h-10 md:w-14 md:h-14 bg-white/40 border border-white backdrop-blur-sm rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/60 transition-colors"
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPlayingId(post.id); }}
                            >
                              <Image src={play} className='size-5 md:size-6' alt="Play video" />
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 text-text-light text-sm tracking-[0.025rem]">
                      <span>{post.readTime}</span>
                      <span className="w-1 h-1 bg-text-light rounded-full"></span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-medium text-sm md:text-basetext-text-dark leading-[1.3] line-clamp-2 mb-2 md:mb-[2px] tracking-[0.04rem]">
                      {post.title}
                    </h3>

                    <p className="hidden md:line-clamp-2 text-sm text-text-dark mb-2 md:mb-3 tracking-[0.04rem]">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 text-sm text-text-dark tracking-[0.04rem]">
                      {/* Desktop: Show 2 categories */}
                      {post.categories.slice(0, 2).map((category, index) => (
                        <span key={index} className="hidden md:inline-block px-3 py-1 md:py-2 bg-primary/5 border rounded-[4px]">
                          {category}
                        </span>
                      ))}
                      {post.categories.length > 2 && (
                        <span className="hidden md:inline-block px-3 py-2 bg-primary/5 border rounded-[4px]">
                          +{post.categories.length - 2}
                        </span>
                      )}

                      {/* Mobile: Show 1 category */}
                      {post.categories.slice(0, 1).map((category, index) => (
                        <span key={index} className="md:hidden px-3 py-2 bg-primary/5 border rounded-[4px]">
                          {category}
                        </span>
                      ))}
                      {post.categories.length > 1 && (
                        <span className="md:hidden px-3 py-2 bg-primary/5 border rounded-[4px]">
                          +{post.categories.length - 1}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogsSection;


