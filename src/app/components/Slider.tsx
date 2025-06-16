
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/featureCarousel"
import Image from "next/image";

const Slider = () => {


  return (
    <div className="relative overflow-hidden container mx-auto bg-white md:py-14 py-7 z-[99]">
      <div className="text-center [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold md:[&_p]:text-lg [&_p]:px-5 [&_p]:text-base [&_p]:font-medium [&_p]:py-4">
        <h2>AS FEATURE IN</h2>
        <p>The Perfect Look and perfect Fit. The Perfect Look and perfect Fit</p>
      </div>
      <Carousel className="cursor-pointer">
        <CarouselContent>
        <CarouselItem className="md:basis-[20%] basis-[50%] [&_img]:mx-auto">
            <Image
              src="/images/icon2.png"
              alt="Logo 5"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] [&_img]:mx-auto">
            <Image
              src="/images/icon1.png"
              alt="Logo 1"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] [&_img]:mx-auto">
            <Image
              src="/images/icon2.png"
              alt="Logo 2"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] [&_img]:mx-auto">
            <Image
              src="/images/icon3.png"
              alt="Logo 3"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] [&_img]:mx-auto">
            <Image
              src="/images/icon1.png"
              alt="Logo 4"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] [&_img]:mx-auto">
            <Image
              src="/images/icon2.png"
              alt="Logo 5"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] [&_img]:mx-auto">
            <Image
              src="/images/icon3.png"
              alt="Logo 6"
              width={150}
              height={150}
            />
          </CarouselItem>

        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </div>
  );
};

export default Slider;
