"use client"; // For client-side rendering in Next.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const bannerRef = useRef(null);
  const child1Ref = useRef(null);
  const child2Ref = useRef(null);

  useEffect(() => {
    const child1Images = child1Ref.current.querySelectorAll("img");
    const child2Images = child2Ref.current.querySelectorAll("img");

    // GSAP Animations
    gsap.fromTo(
      child1Images,
      { y: 0, opacity: 1 },
      {
        y: -300,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true, // Smooth scrolling effect
          pin: true, // Pins the section
        },
      }
    );

    gsap.fromTo(
      child2Images,
      { y: 0, opacity: 1 },
      {
        y: 300,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative h-screen bg-gray-100 w-full flex items-center justify-center overflow-visible"
    >
      {/* Child 1 */}
      <div ref={child1Ref} className="flex w-full flex-col items-cente">
        <Image
          src="/images/banner1.webp"
          alt="Image 1"
          width={100}
          height={100}
          className="h-screen w-full object-cover"
        />
        <Image
          src="/images/banner2.webp"
          alt="Image 2"
          width={100}
          height={100}
          className="h-screen w-full object-cover"
        />
      </div>

      {/* Child 2 */}
      <div ref={child2Ref} className="flex w-full flex-col items-center ">
        <Image
          src="/images/banner3.webp"
          alt="Image 3"
          width={100}
          height={100}
          className="h-screen w-full object-cover"
        />
        <Image
          src="/images/banner4.webp"
          alt="Image 4"
          width={100}
          height={100}
          className="h-screen w-full object-cover"
        />
      </div>
    </section>
  );
}
