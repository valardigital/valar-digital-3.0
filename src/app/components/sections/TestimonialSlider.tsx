'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import play from "../../../assets/images/home/play.svg";
import pause from "../../../assets/images/home/pause.svg";
import jacob from "../../../assets/images/home/jacob.png";

const testimonials = [
  {
    name: 'Jack Rubin',
    role: 'Co-Founder, Purdy & Figg',
    videoThumb: '/images/Jack-Rubin.png',
    avatar: '/images/s-Jack-Rubin.png',
    videoUrl: '/videos/jack-video.mp4',
  },
  {
    name: 'Charlie Rubin',
    role: 'Co-Founder, Purdy & Figg',
    videoThumb: '/images/Charlie-Rubin.png',
    avatar: '/images/s-Charlie-Rubin.png',
    videoUrl: '/videos/charlie-video.mp4',
  },
  {
    name: 'Sarah Welsh',
    role: 'Co-Founder & CPO, HANX',
    videoThumb: '/images/Sarah-Welsh.png',
    avatar: '/images/s-Sarah-Welsh.png',
    videoUrl: '/videos/hanx-video.mp4',
  },
  {
    name: 'James Doe',
    role: 'CEO, SLM Brand',
    videoThumb: '/images/James-Cissel.png',
    avatar: '/images/s-James-Cissel.png',
    videoUrl: '/videos/sls3-video.mp4',
  },
  {
    name: 'Raja Darbari',
    role: 'CEO, Ample Brand',
    videoThumb: '/images/Raja-Darbari.png',
    avatar: '/images/s-Raja-Darbari.png',
    videoUrl: '/videos/ample-video.mp4',
  },
  {
    name: 'Jacob Jones',
    role: 'E-commerce Lead, Company name',
    avatar: jacob,
    testimonialText: 'The Valar team integrated so seamlessly, it genuinely felt like they were part of our in-house crew. From day one, they understood our goals, moved quickly, and delivered with precision. It’s rare to find a team this aligned and proactive.',
    isTextTestimonial: true
  }
];

const TestimonialSlider = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-5 md:right-25 -bottom-19 md:-bottom-14 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer border-[1.5px] md:border-none rounded-[10px] size-10 md:size-max"
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
        className="absolute left-5 -bottom-19 md:-bottom-14 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer border-[1.5px] md:border-none rounded-[10px] size-10 md:size-max"
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
    infinite: false,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    variableWidth: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const togglePlay = (index: number) => {
    const video = document.getElementById(`video-${index}`) as HTMLVideoElement;
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      document.querySelectorAll('video').forEach((v) => v.pause());
      video.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section className='testimonial-slider py-8 md:py-10 bg-[#F8F8F8] overflow-hidden'>
      {/* Header */}
      <div className="container mx-auto mb-6 md:mb-10 md:px-0 px-4">
        <p className="text-primary text-sm font-medium uppercase mb-4 tracking-[0.02rem] text-center md:text-left">
          Happy Clients
        </p>
        <h2 className="text-[28px] md:text-5xl font-medium text-text-dark leading-[1.2] text-center md:text-left">
          Don't take our word for it!
          <br />
          Hear it from our partners.
        </h2>
      </div>

      {/* Slider */}
      <div className="mb-20 md:mb-14">
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <div className="relative rounded-3xl md:rounded-4xl overflow-hidden shadow-[0px_4px_0px_0px_#F0F5FC] max-w-[376px]">

                {/* Conditional rendering: Video or Text testimonial */}
                {t.isTextTestimonial ? (
                  // Text Testimonial Layout
                  <div className="bg-white h-[482px] md:h-[500px] flex flex-col justify-between p-6 md:p-10">
                    {/* Avatar at top */}
                    <div className="flex items-start">
                      <Image
                        src={t.avatar}
                        alt="Avatar"
                        width={56}
                        height={56}
                        className="rounded-[3.73px]"
                      />
                    </div>

                    {/* Testimonial text in middle */}
                    <div className="flex-1 flex items-start mt-6">
                      <p className="text-text-dark leading-[1.5] tracking-[0.04rem]">
                        "{t.testimonialText}"
                      </p>
                    </div>

                    {/* Name and role at bottom */}
                    <div className="text-left">
                      <p className="text-[22px] md:text-xl font-cursive font-medium mb-1 text-text-dark">{t.name}</p>
                      <p className="text-sm tracking-[0.04rem] text-text-light">{t.role}</p>
                    </div>
                  </div>
                ) : (
                  // Video Testimonial Layout (your existing code)
                  <>
                    {/* Video element */}
                    <video
                      id={`video-${idx}`}
                      poster={t.videoThumb}
                      className="object-cover w-full h-[482px] md:h-[500px]"
                      controls={false}
                    >
                      <source src={t.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,rgba(0,0,0,0)_66.29%,rgba(0,0,0,0.4)_95.64%)]" />

                    {/* Avatar */}
                    <div className="absolute top-6 md:top-10 left-6 md:left-10">
                      <Image
                        src={t.avatar}
                        alt="Avatar"
                        width={56}
                        height={56}
                        className="rounded-[3.73px]"
                      />
                    </div>

                    {/* Play Button - Center */}
                    {playingIndex !== idx && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          className="bg-[linear-gradient(0deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2)),linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))] p-4 rounded-2xl text-white backdrop-blur-3xl cursor-pointer"
                          onClick={() => togglePlay(idx)}
                        >
                          <Image src={play} className='size-6' alt="Play icon" />
                        </button>
                      </div>
                    )}

                    {/* Pause Button - Bottom Right */}
                    {playingIndex === idx && (
                      <div className="absolute bottom-6 right-6">
                        <button
                          className="bg-[linear-gradient(0deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2)),linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))] p-4 rounded-2xl text-white backdrop-blur-3xl cursor-pointer"
                          onClick={() => togglePlay(idx)}
                        >
                          <Image src={pause} className='size-6' alt="Pause icon" />
                        </button>
                      </div>
                    )}

                    {/* Text Overlay */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-[22px] md:text-xl font-cursive font-medium mb-1">{t.name}</p>
                      <p className="text-sm tracking-[0.04rem]">{t.role}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* CTA Section */}
      <div className="text-center px-4">
        <p className="text-text-dark text-base md:text-xl mb-6 tracking-[0.04rem]">
          We've helped brands double conversions, lift AOV,
          <br className="hidden md:block" />
          and build smarter systems. Ready to see what we can do for you?
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-2">
          <Link href="#">
            <Button className="w-full md:w-[266px] flex items-center justify-center gap-2">
              Schedule A Call
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h19m-6-6l6 6-6 6" />
              </svg>
            </Button>
          </Link>
          <Link href="#">
            <Button variant="secondary" className="w-full md:w-[266px]">
              Get Free Growth Report
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;