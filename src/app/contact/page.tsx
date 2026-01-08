import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import BreadCrumbs from '../components/breadcrumbs'
import ContactForm from '../components/ContactForm'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Contact' />
      <div className='px-5'>
        <div className='container mx-auto'>
          {/* <h2 className='text-center py-5 font-medium text-xl '>
            What can we assist you with today?
          </h2>

          <div className='grid grid-rows-2 grid-cols-12 gap-4 xl:px-32 lg:px-10 md:px-5 px-3 mt-3 [&>div>svg]:w-5 [&>div>svg]:h-[18px] [&>div>svg]:max-[425px]:w-[18px] [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:gap-x-3  [&>div>a]:max-[425px]:text-[11px]'>
            <div className='md:col-span-3 col-span-6 border my-auto py-3'>
              <FontAwesomeIcon icon={faTruckFast} />
              <Link
                href='#'
                className='lg:text-[13px] md:text-[12.5px] text-sm'
              >
                Track Order
              </Link>
            </div>

            <div className='md:col-span-3 col-span-6 border my-auto py-3'>
              <FontAwesomeIcon icon={faUnlockKeyhole} />
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Reset Password
              </Link>
            </div>

            <div className='md:col-span-3 col-span-6 border my-auto py-3'>
            <FontAwesomeIcon icon={faCreditCard} />
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Payment Option
              </Link>
            </div>

            <div className='md:col-span-3 col-span-6 border my-auto py-3'>
            <FontAwesomeIcon icon={faUser} />
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                User & Account
              </Link>
            </div>

            <div className='md:col-span-3 col-span-6 border my-auto py-3'>
            <FontAwesomeIcon icon={faLayerGroup} />
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Wishlist & Compare
              </Link>
            </div>

            <div className='md:col-span-3 col-span-6 border my-auto py-3'>
            <FontAwesomeIcon icon={faClipboard} />
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Shipping & Billing
              </Link>
            </div>

            <div className='md:col-span-3 col-span-6 border my-auto py-3'>
            <FontAwesomeIcon icon={faMoneyCheck} />
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Shoping Cart & Wallet
              </Link>
            </div>

            <div className='md:col-span-3 col-span-6 border my-auto py-3'>
            <FontAwesomeIcon icon={faStore} />
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Sell on Brando
              </Link>
            </div>
          </div> */}

          {/* <h2 className='text-center font-semibold pt-16 pb-6 text-xl text-[#333333]'>
            Popular Topics
          </h2>
          <ul className='grid grid-cols-12 px-5 md:px-4 gap-3 [&_li]:md:col-span-4 [&_li]:col-span-12 [&_li]:py-[2px] text-[15px] [&_li_a]:text-[#333333] [&_li_a]:lg:text-[15px] [&_li_a]:md:text-[13px] [&_li_a]:text-[15px] [&_li]:list-disc [ gap-x-[13px]'>
            <li>
              <Link href='#'>do I return my item?</Link>
            </li>
            <li>
              <Link href='#'> What are the Delivery Timelines?</Link>
            </li>
            <li>
              <Link href='#'>How to cancel Brando Order?</Link>
            </li>
            <li>
              <Link href='#'>What is Brando Returns Policy?</Link>
            </li>
            <li>
              <Link href='#'>What payment do you accept?</Link>
            </li>
            <li>
              <Link href='#'>Ask the Digital and Device Community</Link>
            </li>
            <li>
              <Link href='#'>How long is the refund process?</Link>
            </li>
            <li>
              <Link href='#'>
                What is the Voucher & Gift Offer in this Campaign?
              </Link>
            </li>
            <li>
              <Link href='#'>How to change size of product i ordered?</Link>
            </li>
          </ul> */}

          <div className='grid grid-cols-12 md:py-16 py-10'>
            <ul className='md:col-span-5 col-span-12 mb-5 [&_li]:lg:col-span-4 [&_li]:md:col-span-4 [&_li]:col-span-12 [&>h3]:font-semibold [&>h3]:text-[#333333] [&>h3]:xl:text-3xl [&>h3]:text-2xl [&>h3]:pb-7 [&_li]:lg-mb-5 [&_li]:mb-4 [&_li]:bg-no-repeat [&_li]:bg-[top_left] [&>li]:pl-8 [&_li]:bg-[length:20px_20px] [&>li>a]:md:text-sm [&>li>a]:text-[15px] [&_li:nth-child(1)]:2xl-pr-[80px] [&>li>a]:text-[#333333] [&>li>a]:block [&>h3>span]:md:block [&>h3>span]:inline [&>h3]:leading-9 [&>h3]:max-sm:leading-8'>
              <h3>
                Don&apos;t find your answer. <span>Contact with us </span>
              </h3>
              <li className="bg-[url('/images/bxs_phone-call.png')] bg-[length:25px_25px]">
                <Link href='tel:447796079986'>+44 7796 079986</Link>
              </li>
              <li className="bg-[url('/images/ic_sharp-email.png')]">
                <Link href='mailto:sales@brandolondon.com'>sales@brandolondon.com</Link>
              </li>
              <li className="bg-[url('/images/carbon_location-filled.png')] bg-[length:20px_3px]">
                <Link href='#'>
                 17 Vanbrugh Drive, Walton-on-Thames, <span className='lg:block inline'>Surrey, KT12 2YQ, United Kingdom</span>
                </Link>
              </li>

              {/* <div> */}
              <div className='mt-6 [&_svg]:cursor-pointer [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-in-out [&_img:hover]:scale-110 space-x-2
              '>
                <Link href="https://www.facebook.com/brandolondonoffical/" target='_blank'><FontAwesomeIcon icon={faFacebook} width={24} height={24} size='xl' color='#333' /></Link>
                <Link href="https://www.instagram.com/brando__london" target='_blank'><FontAwesomeIcon icon={faInstagram} width={24} height={24} size='xl' color='#333' /></Link>
              </div>
              {/* </div> */}
            </ul>
            <div className='lg:col-span-5 md:col-span-6 col-span-12 md:ml-auto mr-0'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Contact
