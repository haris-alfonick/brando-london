import Link from 'next/link'
import Image from 'next/image'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-[#333] px-5'>
      <div className='grid grid-cols-12 lg:gap-y-0 gap-y-8 py-16 border-b border-b-[#525151] [&_p]:w-full [&_p]:pt-5 [&_p]:text-white gap-x-5 [&_p]:text-sm [&_a]:text-white [&_a]:text-sm [&_a]:block [&_a]:pb-2 [&_strong]:text-white [&_strong]:font-medium sm:[&_strong]:text-base [&_strong]:text-lg [&_strong]:pb-3.5 [&_strong]:block'>
        <div className='lg:col-span-3 col-span-12 [&_p]:lg:w-[80%] [&_p]:sm:w-[44%]'>
          <Link href='/'>
            <Image
              src='/images/logo-white.png'
              alt='Footer Logo'
              width={165}
              height={100}
            />
          </Link>
          <p>
            Brando London is the finest Leather Brand in England, Our Specialisation Begins from 1970 in Leather Jackets Coats and Bags. We are now step into online market where we provides our premium Leather products to our customers.
          </p>
          <ul className='flex w-fit justify-start mt-5 space-x-4 [&_img]:transition-transform [&_img]:duration-300 [&_img]:ease-in-out [&_img:hover]:scale-110'>
            <li>
              <Link href='https://www.facebook.com/brandolondonoffical/' target='_blank'>
                <Image
                  src='/images/_Facebook.png'
                  width={28}
                  height={28}
                  alt='Facebbok'
                />
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/brando_landon/' target='_blank'>
                <Image
                  src='/images/_Instagram.png'
                  width={28}
                  height={28}
                  alt='Instagram'
                />
              </Link>
            </li>
            
          </ul>
        </div>
        <div className='lg:col-span-2 sm:col-span-2 col-span-6 max-[475px]:col-span-12'>
          <strong>Information</strong>
          <div className='footerNav'>
            <Link href='/'>Home</Link>
            <Link href='/about-us'>About Us</Link>
            <Link href='/faq'>FAQ</Link>
            <Link href='/contact'>Contact Us</Link>
            {/* <Link href='#'>Blog</Link> */}
          </div>
        </div>
        <div className='lg:col-span-2 sm:col-span-3 col-span-6 max-[475px]:col-span-12'>
          <strong>Categories</strong>
          <div className='footerNav'>
            <Link href='/mens-leather-jackets'>Men Leather Jackets</Link>
            <Link href='/mens-vintage-leather-jackets'>Men Vintage Jacket</Link>
            <Link href='/mens-suede-leather-jackets'>
              Men Suede Leather Jackets
            </Link>
            <Link href='womens-leather-jackets'>Women Leather Jackets</Link>
            <Link href='/womens-vintage-leather-jackets'>
              Women Vintage Jackets
            </Link>
          </div>
        </div>
        <div className='lg:col-span-2 sm:col-span-3 col-span-6 max-[475px]:col-span-12'>
          <strong>Support</strong>
          <div className='footerNav'>
            <Link href='/terms-and-condition'>Terms & Condition</Link>
            <Link href='/shipping-policy'>Shipping Policy</Link>
            <Link href='/return-and-exchange-policy'>Return & Exchange Policy</Link>
            <Link href='/order-cancellation-policy'>Order Cancellation Policy</Link>
            <Link href='/privacy-policy'>Privacy Policy</Link>
            <Link href='/payment-policy'>Payment Policy</Link>
            <Link href='/refund-policy'>Refund Policy</Link>
          </div>
        </div>
        <div className='lg:col-span-3 sm:col-span-4 col-span-6 max-[475px]:col-span-12'>
          {/* <strong>Subscribe Now</strong>
          <div className='relative p-0.5 flex items-center space-x-2 border bg-white !rounded-sm md:w-full w-[290px]'>
            <Input
              type='email'
              placeholder='Your Email'
              className='border-none shadow-none text-sm focus-visible:ring-0 pt-0.5 px-2.5 w-full'
            />
            <Button
              type='submit'
              variant='outline'
              className='border-none !bg-[#333] px-3.5 text-sm !text-white max-[485px]:static absolute right-0.5 !rounded-sm'
            >
              Subscribe
            </Button>
          </div> */}
          <strong>Business Information</strong>
          <p className='flex items-center gap-x-3 !pt-0'><FontAwesomeIcon icon={faLocationDot} color='#fff' size='lg' width={18} height={16} /><span className='location leading-6 text-white !text-[15px]'>14 Lindsay Court, <span className="lg:block inline">Shepperton, TW17 8AF</span></span></p>
          <p className='flex items-center gap-x-3 !pt-2.5'><FontAwesomeIcon icon={faEnvelope} color='#fff' size='lg' width={18} height={16} /><Link className='mail !text-[15px] !pb-0 hover:text-[#d13636]' href="mailto:sales@brandolondon.com">sales@brandolondon.com</Link></p>
          <p className='flex items-center gap-x-3 !pt-3'><FontAwesomeIcon icon={faPhone} color='#fff' size='lg' width={18} height={16} /><Link className='tel !text-[15px] !pb-0 hover:text-[#d13636]' href="tel:447796079986">+44 7796 079986</Link></p>

        </div>
      </div>
      <div className='text-white text-sm py-5 [&_strong]:font-semibold text-center'>
        <span>
          © {currentYear} <Link className='text-[#d13636] hover:text-white' href='/'>Brando London.</Link>
          <strong> All right reserved</strong>
        </span>
      </div>
    </footer>
  )
}
export default Footer
