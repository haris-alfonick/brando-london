import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input' // Shadcn UI Input
import { Textarea } from '@/components/ui/textarea' // Shadcn UI Textarea
import { Button } from '@/components/ui/button' // Shadcn UI Button
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <Navbar />
      <div className='px-5'>
        <div className='container mx-auto'>
          <h2 className='text-center py-5 font-medium text-xl '>
            What can we assist you with today?
          </h2>

          <div className='grid grid-rows-2 grid-cols-12  gap-4 xl:px-32 lg:px-10 md:px-5 px-3 mt-3'>
            <div className="md:col-span-3 col-span-6 border my-auto py-3 lg:pl-[50px] md:pl-[37px] pl-10  bg-[url('/images/image/Truck.png')] bg-no-repeat bg-[left_8px_center]  lg:bg-[length:25px_25px] md:bg-[length:23px_23px] bg-[length:23px_23px]">
              <Link
                href='#'
                className='lg:text-[13px] md:text-[12.5px] text-sm'
              >
                Track Order
              </Link>
            </div>

            <div className="md:col-span-3 col-span-6 border my-auto py-3 lg:pl-[50px] md:pl-[37px] pl-10 bg-[url('/images/image/LockOpen.png')] bg-no-repeat bg-[left_8px_center] lg:bg-[length:25px_25px] md:bg-[length:23px_23px] bg-[length:23px_23px]">
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Reset Password
              </Link>
            </div>

            <div className="md:col-span-3 col-span-6 border my-auto py-3 lg:pl-[50px] md:pl-[37px] pl-10 bg-[url('/images/image/CreditCard.png')] bg-no-repeat bg-[left_8px_center] lg:bg-[length:25px_25px] md:bg-[length:23px_23px] bg-[length:23px_23px]">
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Payment Option
              </Link>
            </div>

            <div className="md:col-span-3 col-span-6 border my-auto py-3 lg:pl-[50px] md:pl-[37px] pl-10 bg-[url('/images/image/User.png')] bg-no-repeat bg-[left_8px_center] lg:bg-[length:25px_25px] md:bg-[length:23px_23px] bg-[length:23px_23px]">
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                User & Account
              </Link>
            </div>

            <div className="md:col-span-3 col-span-6 border my-auto py-3 lg:pl-[50px] md:pl-[37px] pl-10 bg-[url('/images/image/Stack.png')] bg-no-repeat bg-[left_8px_center] lg:bg-[length:25px_25px] md:bg-[length:23px_23px] bg-[length:23px_23px]">
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Wishlist & Compare
              </Link>
            </div>

            <div className="md:col-span-3 col-span-6 border my-auto py-3 lg:pl-[50px] md:pl-[37px] pl-10 bg-[url('/images/image/Notepad.png')] bg-no-repeat bg-[left_8px_center] lg:bg-[length:25px_25px] md:bg-[length:23px_23px] bg-[length:23px_23px]">
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Shipping & Billing
              </Link>
            </div>

            <div className="md:col-span-3 col-span-6 border my-auto py-3 lg:pl-[50px] md:pl-[37px] pl-10 bg-[url('/images/image/CreditCard.png')] bg-no-repeat bg-[left_8px_center] lg:bg-[length:25px_25px] md:bg-[length:23px_23px] bg-[length:23px_23px]">
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Shoping Cart & Wallet
              </Link>
            </div>

            <div className="md:col-span-3 col-span-6 border my-auto py-3 lg:pl-[50px] md:pl-[37px] pl-10 bg-[url('/images/image/Storefront.png')] bg-no-repeat bg-[left_8px_center] lg:bg-[length:25px_25px] md:bg-[length:23px_23px] bg-[length:23px_23px]">
              <Link
                href='#'
                className='lg:text-[14px] md:text-[12.5px] text-sm'
              >
                Sell on Brando
              </Link>
            </div>
          </div>

          <h2 className='text-center font-semibold pt-16 pb-6 text-xl text-[#333333]'>
            Popular Topics
          </h2>
          <ul className='grid grid-cols-12 px-5 md:px-4 gap-3 [&_li]:md:col-span-4 [&_li]:col-span-12 [&_li]:py-[2px] text-[15px] [&_li_a]:text-[#333333] [&_li_a]:lg:text-[15px] [&_li_a]:md:text-[13px] [&_li_a]:text-[15px] [&_li]:list-disc [ gap-x-[13px]'>
            <li>
              <Link href='#'>do I return my item?</Link>
            </li>
            <li>
              <Link href='#'> What are the 'Delivery Timelines'?</Link>
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
          </ul>

          <div className='grid grid-cols-12 md:py-16 py-10'>
            <ul className='md:col-span-5 col-span-12 mb-5 [&_li]:lg:col-span-4 [&_li]:md:col-span-4 [&_li]:col-span-12 [&_li>h3]:font-bold [&_li>h3]:text-[#333333] [&_li>h3]:xl:text-[28px] [&_li>h3]:md-text-[22px] [&_li>h3]:text-[22px] [&_li>h3]:pb-5 [&_li]:lg-mb-5 [&_li]:mb-4 [&_li]:bg-no-repeat [&_li]:bg-[top_2px_left] [&_li>li:nth-child(2)]:pl-10 [&_li>li:nth-child(3)]:pl-10 [&_li>li:nth-child(4)]:pl-10 [&_li]:bg-[length:20px_20px] [&_li>li>a]:lg:text-[14px] [&_li>li>a]:md:text-[14px] [&_li>li>a]:text-[15px] [&_li:nth-child(1)]:lg-pr-[13px] [&_li:nth-child(1)]:2xl-pr-[80px] [&_li>li>a]:block [&_li>li>a]:leading-5 [&_li>h3>span]:md:block [&_li>h3>span]:inline [&_li>h3]:leading-9'>
              <li>
                <h3>
                  Don&apos;t find your answer.
                  <span>Contact with us </span>
                </h3>
                <li className="bg-[url('/images/bxs_phone-call.png')] bg-[length:25px_25px]">
                  <Link href='#'>+1012 3456 789</Link>
                </li>
                <li className="bg-[url('/images/ic_sharp-email.png')]">
                  <Link href='#'>demo@gmail.com</Link>
                </li>
                <li className="bg-[url('/images/carbon_location-filled.png')] bg-[length:20px_3px]">
                  <Link href='#'>
                    132 Dartmouth Street Boston, <br /> Massachusetts 02156
                    United States
                  </Link>
                </li>

                {/* <div> */}
                <div className='mt-5 [&_li]:w-[40px] [&_li]:list-none [&_span]:inline-block [&_span]:pr-4 [&_span>img]:w-[25px] '>
                  <span>
                    <Image
                      src='/images/vector1.png'
                      width={100}
                      height={100}
                      alt=''
                    />
                  </span>
                  <span>
                    <Image
                      src='/images/vector2-1.png'
                      width={100}
                      height={100}
                      alt=''
                    />
                  </span>
                  <span>
                    <Image
                      src='/images/vector3-1.png'
                      width={100}
                      height={100}
                      alt=''
                    />
                  </span>
                </div>
                {/* </div> */}
              </li>
            </ul>

            <div className='md:col-span-5 col-span-12 lg:[&_strong]:text-3xl md:[&_strong]:text-2xl [&_strong]:text-xl'>
              <strong className='text-2xl font-semibold mb-6'>
                Send Us a Message
              </strong>
              <form className='grid grid-cols-1 sm:grid-cols-2 gap-4 [&>label]:text-sm [&_label]:block [&_label]:font-medium [&_label]:mt-1.5 [&_label]:mb-2.5 [&>input]:w-full [&>textarea]:w-full'>
                {/* First Name */}
                <div>
                  <label htmlFor='firstName'>First Name</label>
                  <Input id='firstName' placeholder='John' />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor='lastName'>Last Name</label>
                  <Input id='lastName' placeholder='Doe' />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor='email'>Email Address</label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='JohnDoe@gmail.com'
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor='phone'>Phone Number</label>
                  <Input id='phone' type='tel' placeholder='+1 333 444 5555' />
                </div>

                {/* Message */}
                <div className='sm:col-span-2'>
                  <label htmlFor='message'>Message</label>
                  <Textarea id='message' placeholder='Enter Message' rows={4} />
                </div>

                {/* Submit Button */}
                <div className='sm:col-span-2'>
                  <Button
                    type='submit'
                    className='w-full sm:w-auto font-semibold pb-3 px-8'
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Contact
