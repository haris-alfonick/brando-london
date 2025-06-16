"use client";

import { useEffect } from "react";
import gsap from "gsap";
import "./style.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroBanner = () => {
  const router = useRouter()
  useEffect(() => {
    let scrollDirection: string | null = null; // Track last scroll direction

    const handleScroll = (e: { deltaY: number; }) => {
      if (e.deltaY > 0) {
        // Scrolling Down
        if (scrollDirection !== "down") {
          scrollDirection = "down";
          runScrollAnimation("down");
        }
      } else {
        // Scrolling Up
        if (scrollDirection !== "up") {
          scrollDirection = "up";
          runScrollAnimation("up");
        }
      }
    };

    const runScrollAnimation = (direction: string) => {
      if (direction === "down") {
        // Scroll Down Animation
        gsap.to(".parent1 .child", {
          y: "0%",
          duration: 2,
          ease: "power1.out",
        });
        gsap.to(".parent2 .child", {
          y: "-100%",
          duration: 2,
          ease: "power1.out",
        });
      } else if (direction === "up") {
        // Scroll Up Animation
        gsap.to(".parent1 .child", {
          y: "-100%",
          duration: 2,
          ease: "power1.out",
        });
        gsap.to(".parent2 .child", {
          y: "0%",
          duration: 2,
          ease: "power1.out",
        });
      }
    };

    // Attach the event listener
    window.addEventListener("wheel", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="section hidden md:flex justify-center h-screen overflow-hidden">
        {/* Parent 1 */}
        <div className="parent1 flex flex-col">
          <div className="child child1" style={{transform: "translate(0px, -100%)",}}>
            <Image
              src="/images/banner1.webp"
              alt="Image 1"
              className="w-full h-full object-cover"
              width={2000}
              height={100}
            />
          </div>
          <div className="child" style={{transform: "translate(0px, -100%)",}}>
            <Image
              src="/images/banner3.webp"
              alt="Image 2"
              className="w-full h-full object-cover"
              width={2000}
              height={100}
            />
          </div>
        </div>

        {/* Parent 2 */}
        <div className="parent2 flex flex-col">
          <div className="child">
            <Image
              src="/images/banner4.webp"
              alt="Image 3"
              className="w-full h-full object-cover"
              width={2000}
              height={100}
            />
          </div>
          <div className="child">
            <Image
              src="/images/banner2.webp"
              alt="Image 4"
              className="w-full h-full object-cover"
              width={2000}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="bgMobile relative md:absolute h-fit bottom-0 top-0 left-0 right-0 m-auto md:max-w-[700px] max-w-full md:py-0 sm:py-20 py-12 pt-28 md:bg-none bg-no-repeat bg-cover bg-center sm:px-0 px-1.5 text-center [&>h1]:text-[#282828] sm:[&>h1]:text-[42px] [&>h1]:text-2xl [&>h1]:leading-tight [&>h1]:font-bold [&>h1]:uppercase [&>p]:font-semibold [&>p]:text-[#5f5f5f] [&>p]:py-5 [&>p]:pb-8 [&>p]:leading-6 sm:[&>p]:w-[415px] [&>p]:w-full [&>p]:m-auto [&>p]:text-lg [&_button]:bg-[#282828] [&_button]:text-white sm:[&_button]:w-44 [&_button]:w-32 sm:[&_button]:text-lg [&_button]:py-2.5 [&_button]:rounded-md">   
        <h1>Explore the latest Trends<span className="block">and timeless classics</span></h1>
        <p className="md:block hidden">Fashion is part of the daily air and it changes all the time with all events. Tou can even see the approaching of a revolution in clothes.</p>
        <div className="flex justify-center gap-x-3 max-md:pt-5">
          <button onClick={() => router.push('mens-leather-jackets')} className="!bg-white !text-[#282828]">Men</button>
          <button onClick={() => router.push('womens-leather-jackets')} className="cursor-pointer">Women</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
