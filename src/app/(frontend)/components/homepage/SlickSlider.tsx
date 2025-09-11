import React from "react";
import sls3 from "@/assets/images/home/sls3.png";
import paddock from "@/assets/images/home/paddock.png";
import nutriburst from "@/assets/images/home/nutriburst.png";
import kair from "@/assets/images/home/kair.png";
import audenza from "@/assets/images/home/audenza-logo.png";
import hanx from "@/assets/images/home/hanx.png";
import pfImage from "@/assets/images/home/pf.png";
import fleet from "@/assets/images/home/logo-fleet.png";
import loveraw from "@/assets/images/home/eatloveraw.png";
import eyecon from "@/assets/images/home/eyecon.png";
import oscar from "@/assets/images/home/oscar.png";
import clasiq from "@/assets/images/home/clasiq.png";
import skinsapiens from "@/assets/images/home/skin-sapiens.png";
import ample from "@/assets/images/home/ample.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SlickSlider: React.FC = () => {
  const pathname = usePathname();
  const isServiceDetailsPage = pathname === '/services';

  const slides = [
    sls3,
    paddock,
    nutriburst,
    kair,
    audenza,
    hanx,
    pfImage,
    fleet,
    loveraw,
    eyecon,
    oscar,
    clasiq,
    skinsapiens,
    ample
  ];

  return (
    <div className="w-full relative">
      <div className="logo-slider">
        <div className="logo-slider-content">
          {/* Duplicate slides multiple times for seamless loop */}
          {[...slides, ...slides, ...slides].map((src, index) => (
            <div key={index} className="logo-slider-item">
              <Image 
                src={src} 
                alt={`Logo ${index % slides.length + 1}`} 
                width={100}
                height={32} 
                className="w-auto h-8" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left fade gradient */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-28 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to right, ${
            isServiceDetailsPage 
              ? '#FCFCFC, #FCFCFC00' 
              : '#ffffff, #ffffff90'
          }, transparent)`
        }}
      ></div>

      {/* Right fade gradient */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-28 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to left, ${
            isServiceDetailsPage 
              ? '#FCFCFC, #FCFCFC00' 
              : '#ffffff, #ffffff90'
          }, transparent)`
        }}
      ></div>
    </div>
  );
};

export default SlickSlider;