import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import FeatureProduct from "./components/FeatureProduct";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider";
import Image from "next/image";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import CallUs from "./components/CallUs";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
     <Navbar />
     <Banner />
     <Slider />
     <section className="relative z-[99] bg-white pt-5">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-x-14">
          <div className="col-span-6">
            <Image
              src="/images/women-image.webp"
              alt="Image"
              width={500}
              height={100}
            />
          </div>
          <div className="col-span-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#333333] [&_p]:text-base [&_p]:text-[#757575] [&_p]:w-[380px] [&_p]:py-4  [&_p]:pb-6">
            <h2>DESIGNED FOR WOMEN <span className="md:block inline">JUST FOR YOU.</span></h2>
            <p>Lorem Ipsum is simply dummy text of the printings the types industry. Lorem Ipsum has been the industry’s that standards dummy text ever since the 1500s, when an unknown</p>
            <Image
              src="/images/women-bag.webp"
              alt="Image"
              width={400}
              height={100}
            />
          </div>
        </div>
        </div>
     </section>
     <FeatureProduct />
     <BestSeller />
     <Testimonial />
     <CallUs />
     <Contact />
     <Footer />

    </div>
  );
}
