
import React from "react";
import LogoSlider from "react-slick";

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
  };

  const slides = [
    "/images/sls3.png",
    "/images/paddock.png",
    "/images/nutriburst.png",
    "/images/pf.png",
    "/images/zima.png",
  ];

  return (
    <div className="w-full px-4">
      <LogoSlider {...settings}>
        {slides.map((src, index) => (
          <div key={index} className="px-5">
            <img src={src} alt={`Slide ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </LogoSlider>
    </div>
  );
};

export default SlickSlider;
