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
      {/* <section className='sm:py-3'>
        <Slider />
      </section> */}
      <section className='px-5 mb-10'>
        <div className="container mx-auto">
          <div className="min-[1300px]:max-w-[1100px] m-auto grid grid-cols-1 justify-items-center gap-y-10 items-center gap-x-14 sm:[&_h2]:text-4xl [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#282828] [&_p]:text-[#888] sm:[&_p]:text-lg [&_p]:text-base [&_p]:pt-3">
            <div>
              <h2 className='mt-10'>Our Story </h2>
              <p>We are delighted to welcome you all to our store for the best leather jacket collection. It is your premium destination, offering a sophisticated collection of fashion and ease, with functional treats. We are a brand of our words, with years of experience across 135+ countries, serving 23,000 customers, connecting with 352,000 customers, and receiving 39,000 satisfied reviews. </p>
              <h2 className='mt-5'>Our Mission and Vision </h2>
              <p>Our entire collection is trendy and in line with current trends. So that our valued customers always stay connected to the fashion world.</p>
              <p>On the other hand, we have a team of experts who design exceptional outfits with precise attention to detail at cost-effective prices and the finest craftsmanship. And we are successfully achieving our goal and seeing our vision coming to life.</p>
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
          <div className="min-[1300px]:max-w-[1100px] m-auto grid grid-cols-1 justify-items-center gap-y-10 items-center gap-x-14 sm:[&_h2]:text-4xl [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#282828] [&_p]:text-[#888] sm:[&_p]:text-lg [&_p]:text-base [&_p]:pt-3 [&_h3]:mt-5 [&_h3]:text-xl">
            
              <div>
                <h2 className='pb-5'>What Makes Our Collection Unique?</h2>
                <div>
                  <Image
                  src="/images/about-2.webp"
                  alt="image"
                  width={2000}
                  height={100}
                  className='sm:h-96 h-56 object-cover'
                  />
                </div>
                <p>
                  We offer a premium-quality leather jacket collection, made from cowhide,
                  sheepskin, and goatskin. Our store offers men's vintage and suede jackets,
                  women's leather and vintage jackets.
                </p>

                <p>
                  Beyond this, we also have a collection of bomber jackets, flight jackets,
                  biker jackets and pilot jackets.
                </p>

                <p>
                  We aim to style every outfit with utmost care and attention, with precise
                  styles and a bold look. This helps reflect your individuality and personality
                  well.
                </p>

                <h3>Our Work Ethics</h3>
                <p>
                  Our customers' trust in us reflects our work ethic, as evidenced by the
                  top-tier collection they access. We ensure that we provide our customers with
                  products that offer comfort, sustainability, durability, and reliability.
                </p>

                <p>
                  In addition, we manufacture our products with genuine leather that is ageless
                  and shines even brighter over time, helping us keep our customers for the long
                  run.
                </p>

                <h3>Our Brand Values the Velocity and Audience</h3>
                <p>
                  Volume over velocity best defines our brand. We believe in assurance,
                  reliable outfits that ensure our customers' satisfaction and needs. Leather
                  is a material suitable for both genders and ideal for every age group.
                </p>

                <p>
                  It offers style, comfort, and a sophisticated, timeless look with a bold
                  personality. It aligns with the age group, which is why we have chosen this
                  appealing fabric to design our entire collection to meet our audience's
                  needs.
                </p>

                <p>
                  Our closet includes biker, bomber, aviator, and vintage jackets for both men
                  and women for every occasion. Also, it is a worthy winter investment that can
                  bring elegance and grace to life.
                </p>

                <h3>Our Faithfulness to Our Customers</h3>
                <p>
                  For Brando London, transparency and clarity matter most for a strong
                  foundation. We believe in consistent effort and dedication to serve our
                  customers every time they visit us. Therefore, we have been working with an
                  expert team to deliver quality and satisfaction to our buyers.
                </p>

                <p>
                  Consequently, we have created a firm, impactful privacy policy to ensure the
                  security of our valued customers' and visitors' data and information.
                  Moreover, we have engaged a trusted third party to handle shipping methods to
                  ensure your safety.
                </p>

                <h3>Our Save Shipping Approach</h3>
                <p>
                  We have chosen secure payment and shipping partners to ease everything for
                  you. Our shipping partners are trusted, and we ensure you receive your order
                  on time. However, to avoid late deliveries and issues, please provide us with
                  accurate and complete information.
                </p>

                <p>
                  We offer different shipping options to make it easier for you. Consequently,
                  you can avail of our express shipping for urgent deliveries without any
                  hassle and chaos.
                </p>

                <h3>Our Cultural Heritage and Lifestyle</h3>
                <p>
                  We are not just a brand with good-quality products, but a group of people who
                  value, cherish, and celebrate them. We are a group of hardworking people who
                  pour our love, time, passion, and dedication into our store, collection, and
                  people, serving them to the best of our ability.
                </p>

                <p>
                  Our team includes all those dedicated and committed humans who have given
                  their best shot to bring our brand into the limelight. To turn a vision and a
                  dream into reality.
                </p>

                <h3>Where Fashion Meets Practical Tactics</h3>
                <p>
                  Start your fashion journey today with our stylish, practical clothing line
                  to step into a fashion legacy made from genuine leather. Our store and
                  wardrobe are just a click away, ready to elevate your closet feel.
                </p>

                <p>
                  Our top picks are waiting for you all to grace them with your presence and to
                  appeal to them. Hence, to enhance your charming personality with elegance and
                  grace, step into our store and shop for the best.
                </p>
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
