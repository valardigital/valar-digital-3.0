'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { getMediaUrl } from '@/utilities/getMediaUrl'
import Link from 'next/link';
import { Button } from '../ui/button';
import play from "@/assets/images/home/play.svg";
import Pagination from '../shared/Pagination';

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

const types = [
    "All Types",
    "Articles",
    "Videos"
]

interface BlogGridSectionProps {
    posts: BlogPost[];
    categories: string[];
    popularTags: string[];
    page?: number;
    totalPages?: number;
    totalItems?: number;
    itemsPerPage?: number;
}

const BlogGridSection: React.FC<BlogGridSectionProps> = ({
    posts,
    categories,
    popularTags,
    page = 1,
    totalPages = 1,
    totalItems = 0,
    itemsPerPage = 6
}) => {
    const [selectedType, setSelectedType] = useState("All Types");
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [playingId, setPlayingId] = useState<string | null>(null);
    const [email, setEmail] = useState('');

    const normalize = (v: string) => v.toLowerCase();
    const matchesText = (post: BlogPost, query: string) => {
        if (!query) return true;
        const q = normalize(query);
        return (
            normalize(post.title).includes(q) ||
            normalize(post.excerpt).includes(q) ||
            post.categories.some(c => normalize(c).includes(q))
        );
    };

    const byType = selectedType === "All Types" ? posts : posts.filter(post => post.type === selectedType);
    const bySearch = byType.filter(post => matchesText(post, searchQuery));
    const filteredPosts = activeTag ? bySearch.filter(post => matchesText(post, activeTag)) : bySearch;

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Filtering happens reactively from state; nothing else to do here
    };

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    const handleTagClick = (tag: string) => {
        setActiveTag(prev => (prev === tag ? null : tag));
    };

    // Fallback total count if not provided from server
    const effectiveTotalItems = totalItems && totalItems > 0
        ? totalItems
        : Math.max(posts.length, (totalPages || 1) * (itemsPerPage || 6));

    return (
        <>
        <section>
            <div className="container mx-auto py-6 px-4 md:px-0">

                {/* Mobile Search Engine */}
                    <div className="block lg:hidden -mx-4">
                        <div className="space-y-8 bg-white py-6 px-4">

                            {/* Search */}
                            <div className='mb-2'>
                                <h3 className="tracking-[0.025rem] font-medium text-text-dark mb-2">Search</h3>
                                <form onSubmit={handleSearch}>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search blogs..."
                                            className="w-full px-6 py-4 border border-border rounded-[8px] bg-[#F3F6FA4D] text-text-dark placeholder:text-text-light placeholder:font-medium tracking-[0.04rem] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* Popular Tags */}
                            <div className='overflow-x-scroll mt-2 -mx-4 pl-4'>
                                <div className="flex gap-3 tracking-[0.04rem]">
                                    {popularTags.map((tag, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleTagClick(tag)}
                                            className={`px-4 py-2 text-sm rounded-[4px] border transition-colors whitespace-nowrap ${activeTag === tag ? 'bg-primary text-white border-primary' : 'bg-primary/5 text-text-dark border-border hover:bg-primary/8'}`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Category Filter */}
                <div className="mb-6 md:mb-10">
                    <div className="flex flex-wrap gap-2 border-b-1">
                        {types.map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`px-[18px] pb-6 pt-4 transition-colors underline-offset-8 leading-[1.4] tracking-[0.04rem] cursor-pointer ${selectedType === type
                                    ? 'border-primary border-b-1 text-primary font-medium'
                                    : ' text-text-dark'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex gap-8 lg:gap-12 flex-col lg:flex-row">

                    {/* Left Content - Blog Posts */}
                    <div className="flex-1 lg:w-[65%]">

                        {/* Blog Grid */}
                        <div className="space-y-6 md:space-y-10">
                            {filteredPosts.map(post => (
                                <article key={post.id} className="group">
                                    <Link href={`/blog/${post.id}`}>
                                        <div>
                                            <div className="relative w-full h-[220px] sm:h-[350px] lg:h-[490px] mb-4 overflow-hidden rounded-2xl">
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
                                                                    className="w-14 h-14 bg-white/40 border border-white backdrop-blur-sm rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/60 transition-colors"
                                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPlayingId(post.id); }}
                                                                >
                                                                    <Image src={play} className='size-6' alt="Play video" />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-2 md:mb-4 text-text-light text-sm tracking-[0.025rem]">
                                                    <span>{post.readTime}</span>
                                                    <span className="w-1 h-1 bg-text-light rounded-full"></span>
                                                    <span className="text-sm text-text-light">{post.date}</span>
                                                </div>

                                                <h3 className="text-base md:text-[20px] font-medium text-text-dark mb-2 leading-[1.3] tracking-[0.04rem]">
                                                    {post.title}
                                                </h3>

                                                <p className="text-sm md:text-base text-text-dark tracking-[0.04rem] leading-[1.5] line-clamp-2">
                                                    {post.excerpt}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mt-4 text-sm text-text-dark tracking-[0.04rem]">
                                                    {post.categories.map((category, index) => {
                                                        return (
                                                        <span key={index} className="px-3 py-2 bg-primary/5 border rounded-[4px]">
                                                            {category}
                                                        </span>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>

                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="space-y-8 border-border-gradient-image rounded-[8px] bg-white p-6 lg:py-6 lg:px-8 lg:max-w-[424px] lg:shadow-none shadow-[0px_4px_20px_0px_#C8D3EF40]">

                            {/* Search */}
                            <div className='hidden lg:block'>
                                <h3 className="text-xl tracking-[0.025rem] font-medium text-text-dark mb-4">Search</h3>
                                <form onSubmit={handleSearch}>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search blogs..."
                                            className="w-full px-6 py-4 border border-border rounded-[8px] bg-[#F3F6FA4D] text-text-dark placeholder:text-text-light placeholder:font-medium tracking-[0.04rem] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        />
                                    </div>
                                </form>
                            </div>

                            <hr className='my-8 bg-border hidden lg:block' />

                            {/* Popular Tags */}
                            <div className='hidden lg:block'>
                                <h3 className="text-xl tracking-[0.025rem] font-medium text-text-dark mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-3 tracking-[0.04rem]">
                                    {popularTags.map((tag, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleTagClick(tag)}
                                            className={`px-4 py-2 rounded-[4px] border transition-colors cursor-pointer ${activeTag === tag ? 'bg-primary text-white border-primary' : 'bg-primary/5 text-text-dark border-border hover:bg-primary/8'}`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <hr className='my-8 bg-border hidden lg:block' />

                            {/* Newsletter Signup */}
                            <div>
                                <h3 className="text-xl font-medium text-text-dark mb-1 leading-[1.5] tracking-[0.025rem]">Stay Updated</h3>
                                <p className="text-text-light mb-4 leading-[1.4] tracking-[0.04rem]">
                                    Get the latest insights and strategies delivered to your inbox.
                                </p>
                                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        autoComplete='off'
                                        className="w-full px-6 py-4 border border-border rounded-[8px] text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    />
                                    <Button type="submit" className="w-full">
                                        Subscribe
                                    </Button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        
        {/* Pagination */}
        <Pagination
            currentPage={page}
            totalPages={Math.max(1, totalPages)}
            totalItems={effectiveTotalItems}
            itemsPerPage={itemsPerPage}
            baseUrl="/blog"
        />
        </>
    );
};

export default BlogGridSection;