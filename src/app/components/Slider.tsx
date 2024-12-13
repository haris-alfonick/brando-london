"use client"; 
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Slider = () => {
  // Configuration for react-multi-carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1250 },
      items: 6, // Show 5 logos on large screens
    },
    desktop: {
      breakpoint: { max: 1250, min: 992 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 992, min: 640 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 500 },
      items: 2,
    },
    smallScreen: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative overflow-hidden w-full bg-white md:py-14 py-7 z-[99] [&_img]">
      <div className="text-center [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold md:[&_p]:text-lg [&_p]:px-5 [&_p]:text-base [&_p]:font-medium [&_p]:py-4">
        <h2>AS FEATURE IN</h2>
        <p>The Perfect Look and perfect Fit. The Perfect Look and perfect Fit</p>
      </div>
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots={true} // Display dots below the slider
        autoPlay={false} // Auto-play slider
        autoPlaySpeed={2000} // Time between slides in milliseconds
        infinite={true} // Infinite scrolling
        draggable={true} // Allow drag functionality
        centerMode={true} // Center the active item
        focusOnSelect={false} // Allow focus on center item on click
        className="[&>ul]:items-center [&_ul:first-of-type_li_img]:w-[auto] [&_ul:first-of-type_li_img]:h-[40px] [&_ul:first-of-type]:gap-x-7 pt-8 pb-16"
      >
        {/* Logos */}
          <Image
            src="/images/icon1.png"
            alt="Logo 1"
            width={100}
            height={100}
          />     
          <Image
            src="/images/icon2.png"
            alt="Logo 2"
            width={100}
            height={100}
          />
          <Image
            src="/images/icon3.png"
            alt="Logo 3"
            width={100}
            height={100}
          />  
          <Image
            src="/images/icon1.png"
            alt="Logo 4"
            width={100}
            height={100}
          />
          <Image
            src="/images/icon2.png"
            alt="Logo 5"
            width={100}
            height={100}
          />
          <Image
            src="/images/icon3.png"
            alt="Logo 6"
            width={100}
            height={100}
          />
      </Carousel>
    </div>
  );
};

export default Slider;
