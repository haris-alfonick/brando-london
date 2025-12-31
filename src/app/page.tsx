export const dynamic = "force-dynamic";

import Image from "next/image";
import dynamicImport from "next/dynamic";
import Navbar from "./components/Navbar/Navbar";
import { ErrorBoundary } from "./components/ErrorBoundary";
import CounterSlider from "./components/CounterSlider";
import Banner from "./components/Banner/page";

// Loading component
const LoadingFallback = () => (
  <div className="h-[400px] bg-gray-100 animate-pulse flex items-center justify-center">
    <div className="text-gray-500">Loading...</div>
  </div>
);

// Lazy load components that are not immediately visible
const Slider = dynamicImport(() => import("./components/Slider"), {
  loading: LoadingFallback,
  ssr: true
});

const FeatureProduct = dynamicImport(() => import("./components/FeatureProduct"), {
  loading: LoadingFallback,
  ssr: true
});

const CategoryList = dynamicImport(() => import("./components/categories"), {
  loading: LoadingFallback,
  ssr: true
});

const StarProducts = dynamicImport(() => import("./components/StarProducts"), {
  loading: LoadingFallback,
  ssr: true
});

// const Womenjackets = dynamicImport(() => import("./components/WomenJackets"), {
//   loading: LoadingFallback,
//   ssr: true
// });

const Testimonial = dynamicImport(() => import("./components/Testimonial"), {
  loading: LoadingFallback,
  ssr: true
});

const CallUs = dynamicImport(() => import("./components/CallUs"), {
  loading: LoadingFallback,
  ssr: true
});

const Contact = dynamicImport(() => import("./components/Contact"), {
  loading: LoadingFallback,
  ssr: true
});

const Footer = dynamicImport(() => import("./components/Footer"), {
  loading: LoadingFallback,
  ssr: true
});

export default function Home() {
  return (
    <ErrorBoundary>
      <div>
        <Navbar />
        {/* <HeroBanner /> GSAP Hero Banner */} 
        <Banner />
        {/* <Slider /> */}
        <StarProducts />  
        {/* <TextSlider /> */}
        <CategoryList />
        <FeatureProduct />
        {/* <Womenjackets /> */}
        <CounterSlider />
         <section className="relative z-[99] bg-white md:py-20 py-10 max-md:pb-2 px-5">
          <div className="container mx-auto">
            <div className="flex justify-center lg:flex-row flex-col h-full lg:gap-x-12 md:gap-x-8 gap-x-0">
              <div className="lg:order-1 order-2">
                <Image
                  src="/images/men-jackets.webp"
                  alt="Men Leather Jacket"
                  width={2000}
                  height={500}
                  className="md:w-[560px] w-full object-cover"
                />
              </div>
              <div className="lg:order-2 order-1 md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:uppercase [&_h2]:font-semibold [&_h2]:text-[#333333] [&_p]:text-base [&_p]:text-[#757575] [&_p]:sm:w-[380px] [&_p]:py-4 [&_p]:pb-6">
                <h2>Aviation Style, <span className="md:block inline">Everyday Comfort.</span></h2>
                <p>Every aviator and flight jacket is crafted with your comfort, confidence, and individuality in mind, delivering the perfect balance of classic aviation style and high-performance function.</p>            
                <Image
                  src="/images/women-jackets.webp"
                  alt="Women Leather Jacket"
                  width={2000}
                  height={500}
                  className="lg:w-[396px] w-full lg:block hidden"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <Testimonial /> */}
        <CallUs />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
