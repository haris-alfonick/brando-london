import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import FeatureProduct from "./components/FeatureProduct";
import CategoryList from "./components/categories";
import MensJackets from "./components/MensJackets";
import Womenjackets from "./components/WomenJackets";
import Testimonial from "./components/Testimonial";
import CallUs from "./components/CallUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
     <Navbar />
     <Banner />
     <Slider />
     <section className="relative z-[99] bg-white md:pt-5 md:py-0 py-10 pt-1 px-5">
      <div className="container mx-auto">
        <div className="flex justify-center md:flex-row flex-col md:items-center gap-x-14">
          <div className="md:order-1 order-2">
            <Image
              src="/images/women-image.webp"
              alt="Image"
              width={500}
              height={100}
            />
          </div>
          <div className="md:order-2 order-1 md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#333333] [&_p]:text-base [&_p]:text-[#757575] [&_p]:sm:w-[380px] [&_p]:py-4  [&_p]:pb-6">

            <h2>DESIGNED FOR WOMEN <span className="md:block inline">JUST FOR YOU.</span></h2>
            <p>Lorem Ipsum is simply dummy text of the printings the types industry. Lorem Ipsum has been the industry that standards dummy text ever since the 1500s, when an unknown</p>            
            <Image
              src="/images/women-bag.webp"
              alt="Image"
              width={380}
              height={100}
              className="lg:w-full md:w-[50%] md:block hidden"
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
  );
}
