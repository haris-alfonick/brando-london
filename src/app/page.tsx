import Image from "next/image";
import dynamic from 'next/dynamic';
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/Banner/page";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Loading component
const LoadingFallback = () => (
  <div className="h-[400px] bg-gray-100 animate-pulse flex items-center justify-center">
    <div className="text-gray-500">Loading...</div>
  </div>
);

// Lazy load components that are not immediately visible
const Slider = dynamic(() => import("./components/Slider"), {
  loading: LoadingFallback,
  ssr: true
});

const FeatureProduct = dynamic(() => import("./components/FeatureProduct"), {
  loading: LoadingFallback,
  ssr: true
});

const CategoryList = dynamic(() => import("./components/categories"), {
  loading: LoadingFallback,
  ssr: true
});

const MensJackets = dynamic(() => import("./components/MensJackets"), {
  loading: LoadingFallback,
  ssr: true
});

const Womenjackets = dynamic(() => import("./components/WomenJackets"), {
  loading: LoadingFallback,
  ssr: true
});

const Testimonial = dynamic(() => import("./components/Testimonial"), {
  loading: LoadingFallback,
  ssr: true
});

const CallUs = dynamic(() => import("./components/CallUs"), {
  loading: LoadingFallback,
  ssr: true
});

const Contact = dynamic(() => import("./components/Contact"), {
  loading: LoadingFallback,
  ssr: true
});

const Footer = dynamic(() => import("./components/Footer"), {
  loading: LoadingFallback,
  ssr: true
});

export default function Home() {
  return (
    <ErrorBoundary>
      <div>
        <Navbar />
        <HeroBanner />
        <Slider />
        <section className="relative z-[99] bg-white md:pt-5 md:py-0 py-10 pt-1 px-5">
          <div className="container mx-auto">
            <div className="flex justify-center md:flex-row flex-col h-full lg:gap-x-12 md:gap-x-8 gap-x-0">
              <div className="md:order-1 order-2">
                <Image
                  src="/images/men-image-1.webp"
                  alt="Men Leather Jacket"
                  width={1000}
                  height={2000}
                  className="md:w-[485px] w-full h-full object-cover"
                />
              </div>
              <div className="md:order-2 order-1 md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#333333] [&_p]:text-base [&_p]:text-[#757575] [&_p]:sm:w-[380px] [&_p]:py-4 [&_p]:pb-6">
                <h2>DESIGNED FOR JACKETS <span className="md:block inline">JUST FOR YOU.</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printings the types industry. Lorem Ipsum has been the industry that standards dummy text ever since the 1500s, when an unknown</p>            
                <Image
                  src="/images/women-image-1.webp"
                  alt="Women Leather Jacket"
                  width={2000}
                  height={1000}
                  className="w-full md:block hidden"
                />
              </div>
            </div>
          </div>
        </section>
        <FeatureProduct />
        <CategoryList />
        <MensJackets />
        <Womenjackets />
        <Testimonial />
        <CallUs />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
