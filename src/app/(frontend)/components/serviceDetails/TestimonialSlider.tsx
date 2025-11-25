'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import JackRubin from '@/assets/images/home/Jack-Rubin.png';
import CharlieRubin from '@/assets/images/home/Charlie-Rubin.png';
import SarahWelsh from "@/assets/images/home/Sarah-Welsh.png";
import JamesCissel from "@/assets/images/home/James-Cissel.png";
import RajaDarbari from "@/assets/images/home/Raja-Darbari.png";
import quotes from "@/assets/images/services/quotes.png";
import Link from 'next/link';
import { Button } from '../ui/button';

const testimonials = [
    {
        name: 'Charlie Rubin',
        role: 'Co-Founder, Purdy & Figg',
        quote: "Their expertise in design, UX, and Shopify has been game-changing for our brand. Reliable, capable, and always great to work with.",
        buttonLink: "[Read the Purdy & Figg Case Study]",
        link: '/case-studies/purdy-figg-conversion-optimization',
        avatar: CharlieRubin,
    },
    {
        name: 'Sarah Welsh',
        role: 'Co-Founder & CPO, HANX',
        quote: "Shashi and his team brought our Shopify store to life, from layout to UX. Fast, reliable, and always there when we needed them.",
        buttonLink: "[Read the Hanx Case Study]",
        avatar: SarahWelsh,
    },
    {
        name: 'Jack Rubin',
        role: 'Co-Founder, Purdy & Figg',
        quote: "Working with this team has transformed our online presence. Their attention to detail and user experience expertise is unmatched.",
        buttonLink: "[Read the Purdy & Figg Case Study]",
        link: '/case-studies/purdy-figg-conversion-optimization',
        avatar: JackRubin,
    },
    {
        name: 'James Doe',
        role: 'CEO, SLS3 Brand',
        quote: "The results speak for themselves. Our conversion rate doubled within months of working with them.",
        buttonLink: "[Read the SLS3 Case Study]",
        avatar: JamesCissel,
    },
    {
        name: 'Raja Darbari',
        role: 'CEO, Ample Brand',
        quote: "Professional, efficient, and results-driven. They understood our vision and brought it to life perfectly.",
        buttonLink: "[Read the Ample Case Study]",
        avatar: RajaDarbari,
    }
];

export const TestimonialSlider = () => {
    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <button
                className="absolute right-0 -bottom-15 md:-bottom-19 md:-translate-y-1/2 md:right-65 z-10 flex items-center justify-center cursor-pointer border-[1.5px] md:border-none rounded-[10px] md:bg-transparent bg-white size-10 md:size-12"
                onClick={onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="#1e1e1e">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
                </svg>
            </button>
        );
    };

    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <button
                className="absolute left-0 -bottom-15 md:-bottom-19 md:-translate-y-1/2 md:left-65 z-10 flex items-center justify-center cursor-pointer border-[1.5px] md:border-none rounded-[10px] md:bg-transparent bg-white size-10 md:size-12"
                onClick={onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="#1e1e1e">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
                </svg>
            </button>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dotsClass: 'slick-dots custom-dots',
        centerMode: true,
        centerPadding: '250px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: true,
                    centerPadding: '0',
                },
            },
        ],
    };

    return (
        <>
            {/* Desktop: 2 cards side by side */}
            <div className="hidden md:block">
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[240px] z-50 bg-[linear-gradient(90deg,#FAFBFE_0%,rgba(250,251,254,0)_100%)] pointer-events-none"></div>

                    <div className="absolute right-0 top-0 bottom-0 w-[240px] z-50 bg-[linear-gradient(270deg,#FAFBFE_0%,rgba(250,251,254,0)_100%)] pointer-events-none"></div>
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index}>
                                <div className="bg-white rounded-2xl p-6 border h-full mx-3">
                                    <div className="flex gap-6 items-center">
                                        <div className="flex-1 text-left h-max">
                                            <Image src={quotes} className='size-[30px] mb-3' alt="quotes icon" />
                                            <p className="text-black text-lg leading-[1.5] mb-3 tracking-[0.04rem]">
                                                {testimonial.quote}
                                            </p>
                                            <div className="mb-8 flex flex-row items-center gap-2 leading-[1.5] tracking-[0.04rem]">
                                                <p className="font-medium text-text-dark text-lg">— {testimonial.name}</p>
                                                <p className="text-text-light">{testimonial.role}</p>
                                            </div>
                                            <Link
                                                href={(testimonials[index] as any).link || '#'} >
                                                <Button variant="link" className='font-normal text-primary p-0'>
                                                    {testimonial.buttonLink}
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="w-[204px] h-max rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="size-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Mobile: 1 card at a time */}
            <div className="md:hidden">
                <div className="relative">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index}>
                                <div className="bg-white rounded-2xl px-6 py-9 border text-left min-h-[295px] flex flex-col">
                                    <Image src={quotes} className='size-[30px] mb-3' alt="quotes icon" />
                                    <p className="text-black leading-[1.5] mb-3 tracking-[0.04rem]">
                                        {testimonial.quote}
                                    </p>
                                    <div className="mb-4 leading-[1.5] tracking-[0.04rem]">
                                        <p className="font-medium text-text-dark text-lg">— {testimonial.name}</p>
                                        <p className="text-text-light">{testimonial.role}</p>
                                    </div>
                                    <div className='flex-1 content-end'>
                                    <Link
                                        href={(testimonials[index] as any).link || '#'} >
                                        <Button variant="link" className='font-normal text-primary p-0'>
                                            {testimonial.buttonLink}
                                        </Button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default TestimonialSlider;