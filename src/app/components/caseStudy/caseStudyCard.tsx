import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface CaseStudyMetric {
    icon?: React.ReactNode;
    value: string;
    description: string;
}

interface CaseStudyCardProps {
    image: string | StaticImageData;
    imageAlt: string;
    tags: string[];
    title: string;
    description: string;
    metrics: CaseStudyMetric[];
    className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
    image,
    imageAlt,
    tags,
    title,
    description,
    metrics,
    className = '',
}) => {

    return (
        <Link href="/caseStudy/details" className={`grid grid-cols-1 lg:grid-cols-2 p-4 border rounded-2xl md:rounded-[40px] gap-6 md:gap-8 items-center bg-white shadow-[0px_4px_0px_0px_#F0F5FC] group ${className}`}>

            <div className="order-1 relative group overflow-hidden">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden">
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={600}
                        height={400}
                        className="w-full max-h-[311px] md:max-h-[337px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Button container with proper corner curves */}
                <div className='absolute right-0 bottom-0 bg-white rounded-tl-[12px] rounded-br-2xl md:rounded-br-3xl transition-transform duration-300 ease-out transform translate-y-full group-hover:translate-y-0'>
                    <div className="pt-2 pl-2">
                        <Button variant="outline" size="lg" className='rounded-[12px] transition-all duration-200 hover:shadow-md'>
                            View In Detail
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h19m-6-6l6 6-6 6" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>


            <div className="order-1 lg:order-2">

                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-[6px] bg-primary/5 rounded-[4px] text-sm text-text-dark border border-border"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-[20px] md:text-2xl font-medium text-text-dark mb-2 leading-[1.6]">
                    {title}
                </h3>

                <p className="text-text-dark mb-6 md:mb-12 tracking-[0.04rem] leading-[1.5]">
                    {description}
                </p>

                <div className="flex gap-4 md:gap-6 flex-wrap">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex items-start gap-1">
                            <div className="w-5 h-5 rounded-full bg-[#292D32] flex items-center justify-center mt-0.5 shrink-0 mr-1">
                                <svg
                                    className="w-3 h-3 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <span className="text-text-dark whitespace-nowrap">
                                    {metric.value}
                                </span>
                                <span className="text-text-light ml-2">
                                    {metric.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default CaseStudyCard;