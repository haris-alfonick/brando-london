import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Blog() {
  // Getting current date and formatting
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  const TopImages = [
    {
      src: "/images/blogtop1.png",
      alt: "Image 1",
      title: "Leather Manual",
      description: "How to select the appropriate color of a jacket",
      author: "Sammy Brian",
      date: formattedDate,
      readTime: "10 Min Read",
    },
    {
      src: "/images/blogtop3.png",
      alt: "Image 1",
      title: "Leather Manual",
      description: "How to select the appropriate color of a jacket",
      author: "Sammy Brian",
      date: formattedDate,
      readTime: "10 Min Read",
    },
    {
      src: "/images/blogtop1.png",
      alt: "Image 1",
      title: "Leather Manual",
      description: "How to select the appropriate color of a jacket",
      author: "Sammy Brian",
      date: formattedDate,
      readTime: "10 Min Read",
    },
    {
      src: "/images/blogtop3.png",
      alt: "Image 1",
      title: "Leather Manual",
      description: "How to select the appropriate color of a jacket",
      author: "Sammy Brian",
      date: formattedDate,
      readTime: "10 Min Read",
    },
  ];

  //images for carousal
  const images = [
    {
      src: "/images/blogtrend1.png",
      alt: "Image 1",
      title: "What is Full Grown Leather? A Comprehensive Guide",
      author: "Sammy Brian",
      date: formattedDate,
      readTime: "10 Min Read",
    },
    {
      src: "/images/blogtrend2.png",
      alt: "Image 2",
      title: "What is Full Grown Leather? A Comprehensive Guide",
      author: "Sammy Brian",
      date: formattedDate,
      readTime: "10 Min Read",
    },
    {
      src: "/images/blogtrend3.png",
      alt: "Image 3",
      title: "What is Full Grown Leather? A Comprehensive Guide",
      author: "Sammy Brian",
      date: formattedDate,
      readTime: "10 Min Read",
    },
    {
      src: "/images/blogtrend2.png",
      alt: "Image 2",
      title: "What is Full Grown Leather? A Comprehensive Guide",
      author: "Sammy Brian",
      date: formattedDate,
      readTime: "10 Min Read",
    },
    {
      src: "/images/blogtrend1.png",
      alt: "Image 1",
      title: "What is Full Grown Leather? A Comprehensive Guide",
      author: "Sammy Brian",
      date: formattedDate,
      readTime: "10 Min Read",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Top cards */}

      <div className="flex justify-between space-x-6 pt-10 pb-16">
        {/*left image*/}
        <div className="flex-1 max-w-md rounded overflow-hidden shadow-lg bg-white relative">
          <Image
            className="w-full h-80 object-cover rounded-t-lg"
            src="/images/blogtop1.png"
            alt="Image 1"
            height={320}
            width={640}
          />
          <div className="absolute bottom-0 px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">
              Leather Manual
            </div>
            <p className="text-white text-base">
              How to select the appropriate color of a jacket
            </p>
            <button>press</button>
          </div>
        </div>

        {/*mid image*/}
        <div className="flex-1 max-w-md rounded overflow-hidden shadow-lg bg-white relative">
          <Image
            className="w-full h-80 object-cover rounded-t-lg"
            src="/images/blogtop2.png"
            alt="Image 2"
            height={320}
            width={640}
          />
          <div className="absolute bottom-0 px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">
              Leather Manual
            </div>
            <p className="text-white text-base">
              How to select the appropriate color of a jacket
            </p>
            <button>press</button>
          </div>
        </div>

        {/*right image*/}
        <div className="flex-1 max-w-md rounded overflow-hidden shadow-lg bg-white relative">
          <Image
            className="w-full h-80 object-cover rounded-t-lg"
            src="/images/blogtop3.png"
            alt="Image 3"
            height={320}
            width={640}
          />
          <div className="absolute bottom-0 px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">
              Leather Manual
            </div>
            <p className="text-white text-base">
              How to select the appropriate color of a jacket
            </p>
            <button>press</button>
          </div>
        </div>
      </div>

      {/*Top cards carousal currently unused */}
      <div>
        <Carousel>
          <CarouselContent className="mx-auto">
            {TopImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative">
                  <Image
                    className=""
                    src={image.src}
                    alt={image.alt}
                    height={256}
                    width={256}
                  />
                  <div className="absolute bottom-0 px-4 py-2">
                    <button className="bg-white text-black border-none text-xs px-3 py-2 font-bold">
                      LEATHER MANUAL
                    </button>
                    <div className="font-bold text-white">{image.title}</div>
                    <div className="flex text-[0.65rem] text-white justify-between">
                      <p>
                        By <span className="font-bold">{image.author}</span>
                      </p>
                      <p>{image.date}</p>
                      <p>{image.readTime}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Trending cards with title */}
      {/* Title */}
      <div className="flex justify-between items-center pt-10 px-44 pb-10">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
          Trending News
        </h1>
        <div className="flex-grow border-t border-gray-300 mx-4"></div>
        <div className="flex items-center">
          <Image
            src="/images/arrow-left.png"
            alt="Left Arrow"
            width={24}
            height={24}
            className="arrow-left mr-2"
          />
          <Image
            src="/images/arrow-right.png"
            alt="Right Arrow"
            width={24}
            height={24}
            className="arrow-right"
          />
        </div>
      </div>

      <div className="mx-auto sm:max-w-[600px] lg:max-w-[860px]">
        <Carousel>
          <CarouselContent className="flex">
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex-1 relative">
                  <Image
                    className="w-full h-40 md:h-60 lg:h-80 object-cover rounded-t-lg"
                    src={image.src}
                    alt={image.alt}
                    height={256}
                    width={256}
                  />
                  <div className="absolute bottom-0 px-4 py-2">
                    <button className="bg-white text-black border-none text-xs px-3 py-2 font-bold">
                      LEATHER MANUAL
                    </button>
                    <div className="font-bold text-xl mb-1 text-white">
                      {image.title}
                    </div>
                    <div className="flex text-[0.65rem] text-white justify-between">
                      <p>
                        By <span className="font-bold">{image.author}</span>
                      </p>
                      <p>{image.date}</p>
                      <p>{image.readTime}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* mid banner */}
      <div className="relative flex justify-center items-center p-4 py-8 pt-16">
        <Image
          src="/images/blog-mid-banner.png"
          alt="banner image"
          height={250}
          width={930}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="flex justify-between w-full max-w-[930px] px-4">
            <Link className="text-3xl font-bold leading-none" href="#">
              <Image
                src="/images/logo-white.png"
                alt="logo"
                className="w-36 sm:w-40 md:w-52"
                width={145}
                height={100}
              />
            </Link>
            <p className="text-2xl font-bold">Design Your Own Custom Jacket</p>
            <button className="bg-white text-black text-sm px-8 py-2 font-bold">
              Customize now
            </button>
          </div>
        </div>
      </div>

      {/* latest post */}

      <div className="w-[74%] mx-auto">
        <div className="grid grid-cols-12 gap-x-7">
          {/* 70% Child Div */}
          <div className="col-span-12 md:col-span-8">
            <div className=" [&_strong]:font-bold [&_strong]:my-3 [&_img]:w-[100%] [&_strong]:text-[#333333] [&_strong]:lg:text-[26px] [&_strong]:md:text-[22px] [&_strong]:block [&_strong]:text-[21px] [&_p]:pt-3 [&_p]:text-[#888888] [&_p]:text-[15px]">
              <Image
              src="/images/blog/rectangle01.png" 
              alt="image"
              width={100}
              height={100} 
              />
              <strong>
                How to Select the Appropriate Color of a Leather Jacket?
              </strong>
              <div
                className=" [&_span]:bg-no-repeat [&_span]:xl-bg-[length:16px_16px] [&_span]:lg:bg-[length:13px_13px] [&_span]:md:bg-[length:10px_10px] [&_span]:bg-[length:14px_14px] [&_span]:bg-[center_left]  [&_span]:mr-4 [&_span]:lg:mr-3 [&_span]:md:mr-[5px] [&_span]:xl:pl-6  [&_span]:lg:pl-4 [&_span]:md:pl-3 [&_span]:pl-6 [&_span]:xl:text-[15px] [&_span]:lg:text-[12.5px]
              [&_span]:md:text-[10px] [&_span]:text-[14px]
              [&_span]:text-[#333333]"
              >
                <span className="bg-[url(/images/blog/By-1.png)]">
                  Sammy Brian
                </span>
                <span className="bg-[url('/images/blog/uil_calender-2.png')]">
                  Nov, 13 2024
                </span>
                <span className="bg-[url('/images/blog/icon-park-outline_time-3.png')]">
                  10 Min Read
                </span>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* 30% Child Div */}
          <div className="col-span-12 md:col-span-4">
            {/* Empty filhaal k liye */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
