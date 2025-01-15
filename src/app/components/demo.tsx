"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  useEffect(() => {
    let scrollDirection: string | null = null; // Variable to track scroll direction

    // Function to handle scroll direction and trigger animations
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

    // Function to run animation based on scroll direction
    const runScrollAnimation = (direction: string) => {
      if (direction === "down") {
        gsap.to(".parent1 .child1 img", {
          translateY: "0px", // Move down
          duration: 1.5,
          ease: "power1.out",
        });
        gsap.to(".parent1 .child2 img", {
          translateY: "300px", // Move down
          duration: 1.5,
          ease: "power1.out",
        });
        gsap.to(".parent2 .child1 img", {
          translateY: "-500px", // Move up
          duration: 1,
          ease: "power1.out",
        });
        gsap.to(".parent2 .child2 img", {
          translateY: "-500px", // Move up
          duration: 1.5,
          ease: "power1.out",
        });
      } else if (direction === "up") {
        gsap.to(".parent1 .child1 img", {
          translateY: "-500px", // Move up
          duration: 1.5,
          ease: "power1.out",
        });
        gsap.to(".parent1 .child2 img", {
          translateY: "-500px", // Move up
          duration: 1.5,
          ease: "power1.out",
        });
        gsap.to(".parent2 .child1 img", {
          translateY: "500px", // Move down
          duration: 1.5,
          ease: "power1.out",
        });
        gsap.to(".parent2 .child2 img", {
          translateY: "500px", // Move down
          duration: 1.5,
          ease: "power1.out",
        });
      }
    };

    // Attach scroll event listener
    window.addEventListener("wheel", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="section flex justify-center items-center overflow-hidden max-h-[500px]">
      {/* Parent 1 */}
      <div className="parent1 flex flex-col items-center justify-center">
        <div className="child1">
          <img
            src="/images/banner1.webp"
            alt="Image 1"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="child2">
          <img
            src="/images/banner3.webp"
            alt="Image 2"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Parent 2 */}
      <div className="parent2 flex flex-col items-center justify-center">
        <div className="child1">
          <img
            src="/images/banner2.webp"
            alt="Image 3"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="child2">
          <img
            src="/images/banner4.webp"
            alt="Image 4"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
