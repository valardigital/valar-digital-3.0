'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

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
];

const TestimonialSlider = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // md
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // sm
        settings: { slidesToShow: 1 },
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
      document.querySelectorAll('video').forEach((v) => v.pause()); // pause others
      video.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-600 uppercase">Happy Clients</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Don’t take our word for it!
          <br />
          Hear it from our partners.
        </h2>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              {/* Video element */}
              <video
                id={`video-${idx}`}
                poster={t.videoThumb}
                className="object-cover w-full h-[500px]"
                controls={false}
              >
                <source src={t.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Avatar */}
              <div className="absolute top-4 left-4">
                <Image src={t.avatar} alt="Avatar" width={40} height={40} className="rounded-full border" />
              </div>

              {/* Play/Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-black/60 p-3 rounded-full text-white"
                  onClick={() => togglePlay(idx)}
                >
                  {playingIndex === idx ? <FaPause /> : <FaPlay />}
                </button>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-semibold">{t.name}</p>
                <p className="text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <p className="text-gray-700 text-lg mb-6">
          We’ve helped brands double conversions, lift AOV, <br />
          and build smarter systems. Ready to see what we can do for you?
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Schedule A Call →
          </a>
          <a
            href="#"
            className="border border-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-md transition hover:bg-gray-100"
          >
            Get Free Growth Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
