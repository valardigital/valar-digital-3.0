import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
    image: string | StaticImageData;
    imageAlt: string;
    title: string;
    description?: string;
    tags?: string[];
    readTime?: string;
    date?: string;
    href?: string;
    variant?: 'default' | 'featured' | 'compact';
    showDescription?: boolean;
    showTags?: boolean;
    imageHeight?: string;
    hasVideo?: boolean;
    playIcon?: string | StaticImageData;
    className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    image,
    imageAlt,
    title,
    description,
    tags = [],
    readTime,
    date,
    href = '#',
    variant = 'default',
    showDescription = true,
    showTags = true,
    imageHeight,
    hasVideo = false,
    playIcon,
    className = ''
}) => {
    // Different height classes based on variant
    const getImageHeight = () => {
        if (imageHeight) return imageHeight;

        switch (variant) {
            case 'featured':
                return 'h-[200px] md:h-[370px]';
            case 'compact':
                return 'h-[160px] md:h-[200px]';
            default:
                return 'h-[180px] md:h-[250px]';
        }
    };

    // Different text sizes based on variant
    const getTitleClasses = () => {
        switch (variant) {
            case 'featured':
                return 'text-2xl md:text-[20px] font-medium';
            case 'compact':
                return 'text-lg md:text-xl font-medium';
            default:
                return 'text-xl md:text-2xl font-medium';
        }
    };

    return (
        <Link href={href} className={`group block ${className}`}>
            <div className="h-full">
                {/* Image Container */}
                <div className={`relative w-full ${getImageHeight()} mb-6 overflow-hidden rounded-xl`}>
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Play Button - only show if it's a video */}
                    {hasVideo && playIcon && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-14 h-14 bg-white/40 border border-white backdrop-blur-sm rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/60 transition-colors">
                                <Image src={playIcon} className="size-6" alt="Play video" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="grid">
                    {/* Meta Info */}
                    {(readTime || date) && (
                        <div className="flex items-center gap-2 mb-2 text-text-light text-sm tracking-[0.025rem]">
                            {readTime && <span>{readTime}</span>}
                            {readTime && date && <span className="w-1 h-1 bg-text-light rounded-full"></span>}
                            {date && <span>{date}</span>}
                        </div>
                    )}

                    {/* Title */}
                    <h3 className={`${getTitleClasses()} text-text-dark mb-3 leading-[1.3] tracking-[0.04rem]`}>
                        {title}
                    </h3>

                    {/* Tags */}
                    {showTags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4 text-sm text-text-dark tracking-[0.04rem] order-3 lg:order-0 mt-4 lg:mt-0">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-primary/5 border rounded-[4px]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;