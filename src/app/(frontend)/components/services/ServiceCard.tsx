import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface ServiceCardProps {
    image: string | StaticImageData;
    imageAlt: string;
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonHref: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    image,
    imageAlt,
    title,
    description,
    features,
    buttonText,
    buttonHref,
}) => {
    return (
        <div className="rounded-2xl border border-border bg-white flex flex-col">
            {/* Card Image */}
            <div className="aspect-[13/10] rounded-t-2xl overflow-hidden">
                <Image
                    src={image}
                    alt={imageAlt}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className='p-6 text-left tracking-[0.04rem] text-text-dark flex flex-col flex-1'>
                {/* Title */}
                <h3 className="text-2xl font-medium mb-3 leading-[1.5]">
                    {title}
                </h3>

                {/* Description */}
                <p className="mb-4 md:mb-6 leading-[1.6]">
                    {description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#292D32] flex items-center justify-center mt-0.5 shrink-0">
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
                            <span>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Button */}
                <div className='flex-1 mt-auto content-end'>
                <Link href={buttonHref}>
                    <Button className="text-primary underline font-medium p-0" variant="link">
                        {buttonText}
                    </Button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;