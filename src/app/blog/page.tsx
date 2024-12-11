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

const Card = ({ imageSrc, altText, title, description }) => (
  <div className="flex-1 max-w-md rounded overflow-hidden shadow-lg bg-white relative">
    <Image
      className="w-full h-80 object-cover rounded-t-lg"
      src={imageSrc}
      alt={altText}
      height={320}
      width={640}
    />
    <div className="absolute bottom-0 px-6 py-4">
      <div className="font-bold text-xl mb-2 text-white">{title}</div>
      <p className="text-white text-base">{description}</p>
    </div>
  </div>
);

const TrendingCard = ({ imageSrc, altText, title, author, date, readTime }) => (
  <div className="flex-1 max-w-[280px] rounded overflow-hidden shadow-lg bg-white relative">
    <Image
      className="w-full h-80 object-cover rounded-t-lg"
      src={imageSrc}
      alt={altText}
      height={256}
      width={256}
    />
    <div className="absolute bottom-0 px-4 py-2">
      <button className="bg-white text-black border-none text-xs px-3 py-2 text-sm font-bold">
        LEATHER MANUAL
      </button>
      <div className="font-bold text-xl mb-1 text-white">{title}</div>
      <div className="flex text-[0.7rem] text-white justify-between">
        <p>
          By <span className="font-bold">{author}</span>
        </p>
        <p>{date}</p>
        <p>{readTime}</p>
      </div>
    </div>
  </div>
);

export default function Blog() {
  // Getting current date and formatting
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <>
      <Navbar />

      {/* Top cards */}
      <div className="flex justify-between space-x-6 pt-10 pb-16">
        <Card
          imageSrc="/images/blogtop1.png"
          altText="Image 1"
          title="Leather Manual"
          description="How to select the appropriate color of a jacket"
        />
        <Card
          imageSrc="/images/blogtop2.png"
          altText="Image 2"
          title="Leather Manual"
          description="How to select the appropriate color of a jacket"
        />
        <Card
          imageSrc="/images/blogtop3.png"
          altText="Image 3"
          title="Leather Manual"
          description="How to select the appropriate color of a jacket"
        />
      </div>

      {/* Trending cards with title */}
      {/* Title */}
      <div className="flex justify-between items-center pt-10 px-44">
        <h1 className="text-black text-3xl font-bold">Trending News</h1>
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
      {/* Trending Cards */}
      <div className="flex justify-center px-0 pt-8 pb-16 space-x-10">
        <TrendingCard
          imageSrc="/images/blogtrend1.png"
          altText="Image 1"
          title="What is Full Grown Leather? A Comprehensive Guide"
          author="Sammy Brian"
          date={formattedDate}
          readTime="10 Min Read"
        />
        <TrendingCard
          imageSrc="/images/blogtrend2.png"
          altText="Image 2"
          title="What is Full Grown Leather? A Comprehensive Guide"
          author="Sammy Brian"
          date={formattedDate}
          readTime="10 Min Read"
        />
        <TrendingCard
          imageSrc="/images/blogtrend3.png"
          altText="Image 3"
          title="What is Full Grown Leather? A Comprehensive Guide"
          author="Sammy Brian"
          date={formattedDate}
          readTime="10 Min Read"
        />
      </div>

      {/* mid banner */}
      <div className="relative flex justify-center items-center p-4 py-8">
        <Image
          src="/images/blog-mid-banner.png"
          alt="Description of image"
          className="rounded-lg"
          height={320}
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
              <img src="/images/blog/rectangle01.png" alt="" />
              <strong>
                How to Select the Appropriate Color of a Leather Jacket?
              </strong>
              <div
                className=" [&_span]:bg-no-repeat [&_span]:xl-bg-[length:16px_16px] [&_span]:lg:bg-[length:13px_13px] [&_span]:md:bg-[length:10px_10px] [&_span]:bg-[length:14px_14px] [&_span]:bg-[center_left]  [&_span]:mr-4 [&_span]:lg:mr-3 [&_span]:md:mr-[5px] [&_span]:xl:pl-6  [&_span]:lg:pl-4 [&_span]:md:pl-3 [&_span]:pl-6 [&_span]:xl:text-[15px] [&_span]:lg:text-[12.5px]
              [&_span]:md:text-[10px] [&_span]:text-[14px]
              [&_span]:text-[#333333]"
              >
                <span className="bg-[url('/images/blog/By-1.png')]">
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
                industry. Lorem Ipsum has been the industry's standard dummy
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
