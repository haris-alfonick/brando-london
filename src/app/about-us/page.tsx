import Image from 'next/image'
import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import StatsBlock from '../components/stats'
import Slider from '../components/Slider'

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='About Us' />
      <div className='relative'>
        <Image
        src="/images/about-header.webp"
        alt="Image"
        width={2000}
        height={100}
        className='w-full sm:h-96 h-56 object-cover'
        />
        <div className='w-full h-full absolute top-0 bg-primary/55'></div>
        <h1 className='absolute top-0 bottom-0 left-0 right-0 m-auto font-medium sm:text-6xl text-4xl text-white uppercase w-fit h-fit'>About Us</h1>
      </div>
      <section className='sm:py-3'>
        <Slider />
      </section>
      <section className='px-5 mb-10'>
        <div className="container mx-auto">
          <div className="min-[1300px]:max-w-[1100px] m-auto grid grid-cols-1 justify-items-center text-center gap-y-10 items-center gap-x-14 sm:[&_h2]:text-4xl [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:text-[#282828] [&_p]:text-[#888] sm:[&_p]:text-lg [&_p]:text-base [&_p]:pt-3">
            <div>
              <h2>WHY CHOOSE US</h2>
              <p>We offer a wide range of stylish leather jackets that perfectly blend affordability and quality. Our dedicated marketing team constantly explores the latest fashion trends to meet the preferences of our global customers. With thousands of products available, we provide designs, sizes, and colors to suit every taste. Each jacket reflects our commitment to excellent value and customer satisfaction. Whether you&apos;re looking for timeless classics or modern trends, we have something for everyone. Choose us for quality, variety, and style at an unbeatable price.</p>
            </div>
            <div>
              <Image
               src="/images/why-selet-us.webp"
               alt="image"
               width={2000}
               height={100}
               className='sm:h-96 h-56 object-cover'
               />
            </div>
          </div>
        </div>
      </section>
      <StatsBlock />
      <section className='sm:py-10 py-10 pb-0 px-5'>
        <div className="container mx-auto">
          <div className="min-[1300px]:max-w-[1100px] m-auto grid grid-cols-1 justify-items-center text-center gap-y-10 items-center gap-x-14 sm:[&_h2]:text-4xl [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:text-[#282828] [&_p]:text-[#888] sm:[&_p]:text-lg [&_p]:text-base [&_p]:pt-3">
            
              <div>
                <h2 className='pb-5'>Timeless Leather Jackets</h2>
                <div>
                  <Image
                  src="/images/about-2.webp"
                  alt="image"
                  width={2000}
                  height={100}
                  className='sm:h-96 h-56 object-cover'
                  />
                </div>
                <p>Leather jackets have always been a symbol of timeless style and sophistication. At TGL, we bring you premium-quality jackets that stand the test of time, blending durability with unmatched fashion. Each piece in our collection is designed to complement your unique personality while ensuring maximum comfort. Whether you prefer a classic look or a modern twist, our variety of styles, colors, and sizes has something for everyone. Crafted with precision and care, our jackets are made to last and create an impression wherever you go. Affordable and luxurious, they redefine fashion for every budget. Choose TGL to elevate your wardrobe with timeless elegance.</p>
              </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* I am working on a wordpress woocommerce website, using flatsome theme
      I am proding mobile repair service
      I have 2 locations Seattle and Bellevue

      what senario is that user comes to the website and select device repair like iPhone 14 pro max
      he/she has option to wather to book an appointment if nears to location, or mail the device to the address for repair

      Now the question is that when user add to cart "iPhone 14 pro max screen repair" on product page
      and redirected to cart page 
      now I want them to give them 3 options "Choose location 1", "Choose location 2", or mail it in

      as per their selection I want to procceed further

      if select location 1 or 2 means he/she wanted to book an appointment 
      then display them a page with 10:00 am to 6:30 pm time slot with 30min gap and date selection as well
      disable time slot if someone already selected e.g. if someone selected 11:30am on 2nd feb 2025 time slot then it sould be disabled for other users on perticular date only
      how to achove above approach, what is the best method
      then procceed further

      if select mail it in don't display appointment system  */}
    </>
  )
}

export default AboutUs;
