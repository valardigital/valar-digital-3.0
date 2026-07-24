"use client";

import React, { memo } from "react";
import sls3 from "@/assets/images/home/sls3.png";
import nutriburst from "@/assets/images/home/nutriburst.png";
import hanx from "@/assets/images/home/hanx.png";
import pfImage from "@/assets/images/home/pf.png";
import fleet from "@/assets/images/home/logo-fleet.png";
import eyecon from "@/assets/images/home/eyecon.png";
import ample from "@/assets/images/home/ample.png";
import zimadental from "@/assets/images/home/zima-dental-logo.png";
import r180 from "@/assets/images/home/r180.png";
import blueVoucher from "@/assets/images/home/blue-voucher.png";
import philippaherbert from "@/assets/images/home/philippa-herbert.png"
import superfoodio from "@/assets/images/home/superfoodio.png";
import rheal from "@/assets/images/home/rheal.png";
import tws from "@/assets/images/home/tws.png";
import soto from "@/assets/images/home/soto.png";
import omi from "@/assets/images/home/omi.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SlickSlider: React.FC = memo(() => {
  const pathname = usePathname();
  const isServiceDetailsPage = pathname === '/services';

  const slides = [
    pfImage,
    zimadental,
    omi,
    rheal,
    sls3,
    nutriburst,
    r180,
    philippaherbert,
    blueVoucher,
    hanx,
    fleet,
    eyecon,
    ample,
    superfoodio,
    tws,
    soto,
  ];

  return (
    <div className="w-full relative">
      <div className="logo-slider">
        <div className="logo-slider-content">
          {[0, 1].map((track) => (
            <div
              key={track}
              className="logo-slider-track"
              aria-hidden={track === 1}
            >
              {slides.map((src, index) => (
                <div key={`${track}-${index}`} className="logo-slider-item">
                  <Image
                    src={src}
                    alt={track === 0 ? `Logo ${index + 1}` : ""}
                    width={100}
                    height={32}
                    className="w-auto h-8"
                    loading="eager"
                    draggable={false}
                  />
                </div>
              ))}
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
});

export default SlickSlider;