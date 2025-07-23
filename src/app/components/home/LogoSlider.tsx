
import React from "react";
import LogoSlider from "react-slick";
import sls3 from "../../../assets/images/sls3.png";
import paddock from "../../../assets/images/paddock.png";
import nutriburst from "../../../assets/images/nutriburst.png";
import kair from "../../../assets/images/kair.png";
import audenza from "../../../assets/images/audenza-logo.png";
import hanx from "../../../assets/images/hanx.png";
import pfImage from "../../../assets/images/pf.png";
import fleet from "../../../assets/images/logo-fleet.png";
import loveraw from "../../../assets/images/eatloveraw.png";
import eyecon from "../../../assets/images/eyecon.png";
import oscar from "../../../assets/images/oscar.png";
import clasiq from "../../../assets/images/clasiq.png";
import skinsapiens from "../../../assets/images/skin-sapiens.png";
import ample from "../../../assets/images/ample.png";
import Image from "next/image";

const SlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, cssEase: 'linear',
    arrows: false,
    variableWidth: true,
  };

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
      <LogoSlider {...settings} className="h-8">
        {slides.map((src, index) => (
          <div key={index} className="px-[29px] h-8"> 
            <Image src={src} alt={`Slide ${index}`} width={100} 
            height={32} className="w-auto h-8" />
          </div>
        ))}
      </LogoSlider>

       {/* Left fade gradient */}
    <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-10"></div>
    
    {/* Right fade gradient */}
    <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default SlickSlider;
