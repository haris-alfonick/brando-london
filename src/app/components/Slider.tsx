
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
        <p>The world knows us for our expertise — that is why they recognize our efforts.</p>
      </div>
      <Carousel className="cursor-pointer">
        <CarouselContent>
        <CarouselItem className="md:basis-[20%] basis-[50%] h-fit m-auto [&_img]:mx-auto">
            <Image
              src="/images/icon2.png"
              alt="Logo 5"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] h-fit m-auto [&_img]:mx-auto">
            <Image
              src="/images/bloom-logo.png"
              alt="Bloomberg"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] h-fit m-auto [&_img]:mx-auto">
            <Image
              src="/images/forbes-logo1.png"
              alt="Forbes"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] h-fit m-auto [&_img]:mx-auto">
            <Image
              src="/images/inc-logo.png"
              alt="Inc. Magazine"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] h-fit m-auto [&_img]:mx-auto">
            <Image
              src="/images/insider-logo.png"
              alt="Business Insider"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] h-fit m-auto [&_img]:mx-auto">
            <Image
              src="/images/icon2.png"
              alt="Logo 2"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] h-fit m-auto [&_img]:mx-auto">
            <Image
              src="/images/icon3.png"
              alt="Logo 3"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] h-fit m-auto [&_img]:mx-auto">
            <Image
              src="/images/icon1.png"
              alt="Logo 4"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] h-fit m-auto [&_img]:mx-auto">
            <Image
              src="/images/icon2.png"
              alt="Logo 5"
              width={150}
              height={150}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-[20%] basis-[50%] h-fit m-auto [&_img]:mx-auto">
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
