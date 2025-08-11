import React from 'react';
import Image, { StaticImageData } from 'next/image';

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
        <div className={`grid grid-cols-1 lg:grid-cols-2 p-4 border rounded-2xl md:rounded-[40px] gap-6 md:gap-8 items-center bg-white shadow-[0px_4px_0px_0px_#F0F5FC] ${className}`}>

            <div className="order-1">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden">
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={600}
                        height={400}
                        className="w-full mx-h-[311px] md:max-h-[337px] object-cover"
                    />
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
        </div>
    );
};

export default CaseStudyCard;