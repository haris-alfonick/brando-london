"use client"; 
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Slider = () => {
  // Configuration for react-multi-carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5, // Show 5 logos on large screens
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative overflow-hidden w-full bg-white md:py-14 z-[99] [&_img]">
      <div className="text-center [&_h2]:text-3xl [&_h2]:font-semibold [&_p]:text-lg [&_p]:font-medium [&_p]:py-4">
        <h2>AS FEATURE IN</h2>
        <p>The Perfect Look and perfect Fit. The Perfect Look and perfect Fit</p>
      </div>
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots={true} // Display dots below the slider
        autoPlay={true} // Auto-play slider
        autoPlaySpeed={2000} // Time between slides in milliseconds
        infinite={true} // Infinite scrolling
        draggable={true} // Allow drag functionality
        centerMode={true} // Center the active item
        focusOnSelect={false} // Allow focus on center item on click
        className="[&>ul]:items-center [&_ul:first-of-type]:gap-x-7 pt-8 pb-16"
      >
        {/* Logos */}
          <Image
            src="/images/icon1.png"
            alt="Logo 1"
            width={180}
            height={100}
          />     
          <Image
            src="/images/icon2.png"
            alt="Logo 2"
            width={180}
            height={100}
          />
          <Image
            src="/images/icon3.png"
            alt="Logo 3"
            width={180}
            height={100}
          />  
          <Image
            src="/images/icon1.png"
            alt="Logo 4"
            width={180}
            height={100}
          />
          <Image
            src="/images/icon2.png"
            alt="Logo 5"
            width={180}
            height={100}
          />
          <Image
            src="/images/icon3.png"
            alt="Logo 6"
            width={180}
            height={100}
          />
      </Carousel>
    </div>
  );
};

export default Slider;
