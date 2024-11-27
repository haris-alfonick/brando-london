"use client"; 
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Testimonial = () => {
  // Configuration for react-multi-carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 3, // Show 5 logos on large screens
    },
    desktop: {
      breakpoint: { max: 1500, min: 992 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="md:pb-20 md:py-12">
      <div className="container mx-auto">
    <div className="relative overflow-hidden w-full bg-white z-[99] [&_img]">
      <div className="text-center [&_h2]:text-3xl [&_h2]:font-semibold [&_p]:text-lg [&_p]:font-medium [&_p]:py-4">
        <h2>From Our Customer</h2>
      </div>
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots={true} // Display dots below the slider
        autoPlay={true} // Auto-play slider
        autoPlaySpeed={2000} // Time between slides in milliseconds
        infinite={true} // Infinite scrolling
        draggable={true} // Allow drag functionality
        centerMode={false} // Center the active item
        focusOnSelect={false} // Allow focus on center item on click
        className="testimonialWrap [&_ul:first-of-type] py-10 pb-16 [&_p]:w-[95%]"
      >
        {/* Logos */}
          <div className="[&_p]:text-[#888] w-[90%] mx-auto relative after:conetnt-{} after:absolute after:w-full after:h-full after:bg-[url(/images/qoma.png)] after:bg-no-repeat after:bg-left-top after:top-0 after:left-0 pl-20 pt-12">
            <p>Lorem Ipsum is simply dummy text of the printings the types industry. Lorem Ipsum has been the industry’s that standards dummy text ever since the 1500s, when an unknown</p>
            <div className="flex justify-start items-center pt-4 gap-x-3 [&>img]:w-[52px] [&>img]:rounded-full [&>img]:border [&>img]:border-[#D9D9D9] [&>img]:p-1
            [&>strong]:relative [&>strong]:block [&>strong]:pl-7 [&>strong]:after:content-{} [&>strong]:after:absolute [&>strong]:after:top-0.5 [&>strong]:after:left-0 [&>strong]:after:bottom-0 [&>strong]:after:m-auto [&>strong]:after:w-5 [&>strong]:after:h-0.5 [&>strong]:after:bg-[#333]
            [&>strong]:text-[#333] [&>strong]:font-semibold [&>strong]:text-sm">
                <Image
                src="/images/150.jpg"
                alt="icon"
                width={100}
                height={100}
                />
                <strong>Christina M./ From Canada</strong>
            </div>
          </div>
          <div className="[&_p]:text-[#888] w-[90%] mx-auto relative after:conetnt-{} after:absolute after:w-full after:h-full after:bg-[url(/images/qoma.png)] after:bg-no-repeat after:bg-left-top after:top-0 after:left-0 pl-20 pt-12">
            <p>Lorem Ipsum is simply dummy text of the printings the types industry. Lorem Ipsum has been the industry’s that standards dummy text ever since the 1500s, when an unknown</p>
            <div className="flex justify-start items-center pt-4 gap-x-3 [&>img]:w-[52px] [&>img]:rounded-full [&>img]:border [&>img]:border-[#D9D9D9] [&>img]:p-1
            [&>strong]:relative [&>strong]:block [&>strong]:pl-7 [&>strong]:after:content-{} [&>strong]:after:absolute [&>strong]:after:top-0.5 [&>strong]:after:left-0 [&>strong]:after:bottom-0 [&>strong]:after:m-auto [&>strong]:after:w-5 [&>strong]:after:h-0.5 [&>strong]:after:bg-[#333]
            [&>strong]:text-[#333] [&>strong]:font-semibold [&>strong]:text-sm">
                <Image
                src="/images/151.jpg"
                alt="icon"
                width={100}
                height={100}
                />
                <strong>Christina M./ From Canada</strong>
            </div>
          </div>
          <div className="[&_p]:text-[#888] w-[90%] mx-auto relative after:conetnt-{} after:absolute after:w-full after:h-full after:bg-[url(/images/qoma.png)] after:bg-no-repeat after:bg-left-top after:top-0 after:left-0 pl-20 pt-12">
            <p>Lorem Ipsum is simply dummy text of the printings the types industry. Lorem Ipsum has been the industry’s that standards dummy text ever since the 1500s, when an unknown</p>
            <div className="flex justify-start items-center pt-4 gap-x-3 [&>img]:w-[52px] [&>img]:rounded-full [&>img]:border [&>img]:border-[#D9D9D9] [&>img]:p-1
            [&>strong]:relative [&>strong]:block [&>strong]:pl-7 [&>strong]:after:content-{} [&>strong]:after:absolute [&>strong]:after:top-0.5 [&>strong]:after:left-0 [&>strong]:after:bottom-0 [&>strong]:after:m-auto [&>strong]:after:w-5 [&>strong]:after:h-0.5 [&>strong]:after:bg-[#333]
            [&>strong]:text-[#333] [&>strong]:font-semibold [&>strong]:text-sm">
                <Image
                src="/images/152.jpg"
                alt="icon"
                width={100}
                height={100}
                />
                <strong>Christina M./ From Canada</strong>
            </div>
          </div>
      </Carousel>
    </div>
    </div>
    </section>
  );
};

export default Testimonial;
