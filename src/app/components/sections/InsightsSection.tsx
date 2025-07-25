"use client"

import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Button } from '../ui/button';
import thumbnail1 from "../../../assets/images/home/insights-img-1.png";
import thumbnail2 from "../../../assets/images/home/insights-img-2.png";
import thumbnail3 from "../../../assets/images/home/insights-img-3.png";
import play from "../../../assets/images/home/play.svg";
import pause from "../../../assets/images/home/pause.svg";
import Link from 'next/link';

interface ArrowProps {
  onClick?: () => void;
}

const insights = [
  {
    id: 1,
    category: 'Strategy',
    title: 'Why Ecommerce Brands Overthink the Homepage, and What to Fix First',
    description: 'Common assumptions and positions you as pragmatic, not flashy.',
    videoThumb: thumbnail1,
    videoUrl: '/Videos/ample-video.mp4',
    readTime: '12 min read',
    date: 'September 7, 2024'
  },
  {
    id: 2,
    category: 'Conversion',
    title: 'How We Lifted AOV by 16% Without a Single Discount',
    description: 'Strategic approach to increasing average order value through smart UX.',
    videoThumb: thumbnail2,
    videoUrl: '/videos/insight-2.mp4',
    readTime: '16 min Watch',
    date: 'September 7, 2024'
  },
  {
    id: 3,
    category: 'UX Strategy',
    title: 'Subscription UX Isn\'t Just Skips and Pauses',
    description: 'Shows depth of thinking, speaks to brands struggling with wanting sustainable LTV.',
    videoThumb: thumbnail3,
    videoUrl: '/videos/insight-3.mp4',
    readTime: '8 min read',
    date: 'September 7, 2024'
  }
];

const InsightsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

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
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
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

  const togglePlay = (index: number) => {
    const video = document.getElementById(`insight-video-${index}`) as HTMLVideoElement;
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      document.querySelectorAll('[id^="insight-video-"]').forEach((v) => (v as HTMLVideoElement).pause());
      video.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section className="insights-section py-8 md:py-10 bg-white">
      <div className="text-center">
        {/* Header */}
        <div className='px-4'>
          <p className="text-primary text-sm font-medium uppercase mb-4 tracking-[0.02rem]">
            INSIGHTS
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium text-text-dark leading-[1.1] mb-4 md:mb-6">
            Ideas, Experiments,
            <br />
            and Growth Notes
          </h2>
          <p className="text-text-dark mb-6 md:mb-12 tracking-[0.04rem]">
            A behind-the-scenes look at how we think, test, and scale ecommerce brands.
          </p>
        </div>
        {/* Video Slider */}
        <div className="relative mb-18 md:mb-12">
          <Slider {...settings} >
            {insights.map((insight, index) => (
              <div key={insight.id} className="px-4">
                <div
                  className="relative transition-all duration-500">
                  {/* Video */}
                  <div className="relative aspect-[16/10]">
                    <video
                      id={`insight-video-${index}`}
                      poster={insight.videoThumb.src}
                      className="w-full h-full object-cover rounded-[8px]"
                      controls={false}
                      muted
                    >
                      <source src={insight.videoUrl} type="video/mp4" />
                    </video>

                    {/* Gray overlay for non-active slides */}
                    <div
                      className={`
                        absolute inset-0 bg-white/60 transition-opacity duration-500 rounded-md
                        ${currentSlide === index ? 'opacity-0' : 'opacity-100'}
                      `}
                    />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                      <button
                        className="w-14 h-14 bg-white/40 border border-white backdrop-blur-sm rounded-2xl flex items-center justify-center cursor-pointer"
                        onClick={() => togglePlay(index)}
                      >
                        {playingIndex === index ? (
                          <Image src={pause} className='size-6' alt="Play icon" />

                        ) : (
                          <Image src={play} className='size-6' alt="Play icon" />

                        )}
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-4 bg-white text-left">
                    {/* Category Badge */}
                    <div className="mb-6">
                      <span className="bg-primary/5 px-3 py-2 rounded-[4px] border border-border text-sm text-text-dark">
                        {insight.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-text-dark mb-2 line-clamp-2 leading-[1.5]">
                      {insight.title}
                    </h3>
                    <p className="text-text-dark tracking-[0.04rem] mb-3.5 line-clamp-2 leading-[1.5]">
                      {insight.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-text-light tracking-[0.02rem] leading-[1.5]">
                      <span>{insight.readTime}</span>
                      <span className='bg-text-light size-1 rounded-full'></span>
                      <span>{insight.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA Button */}
        <div className='px-4'>
          <Link
            href="#"
          >
            <Button className="w-full md:w-max mx-auto flex items-center gap-2">
              Read More Insights
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h19m-6-6l6 6-6 6" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;