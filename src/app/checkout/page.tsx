import Link from 'next/link'
import Image from 'next/image'
import BreadCrumbs from '../components/breadcrumbs'
import Navbar from '../components/Navbar/Navbar'
import { faPersonWalkingArrowLoopLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Country } from '../components/FormField/country/page'
import { Region } from '../components/FormField/Region/page'
import { City } from '../components/FormField/city/page'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import Footer from '../components/Footer'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { faPaypal, faStripe } from '@fortawesome/free-brands-svg-icons'

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs />
      <div className='lg:px-6 px-4 md:py-16 py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 md:gap-x-10 max-md:gap-y-6'>
            <div className='col-span-12 lg:col-span-8 md:col-span-7 space-y-5'>
              <div className='flex justify-between lg:items-center items-start lg:flex-row flex-col max-lg:gap-y-1 [&>div]:flex [&>div]:justify-start [&>div]:items-center [&_div>svg]:w-[18px] [&_div>svg]:h-3.5 [&_a]:underline [&_a]:text-[#333333] [&_a]:pl-1 [&_a]:text-[13.5px] [&_span]:text-[13.5px] [&_span]:text-[#666666] [&_span]:pl-1.5'>
                <div>
                  <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} />
                  <span>Returning Customer?</span>
                  <Link href=''>Click here to Login</Link>
                </div>
                <div>
                  <FontAwesomeIcon icon={faWindowMaximize} />
                  <span>Have a Coupon?</span>
                  <Link href=''>Click here to enter your code</Link>
                </div>
              </div>

              <div className='grid grid-cols-12 gap-x-5 gap-y-5 p-6 border rounded-xl [&_h3]:text-[#333333] [&_h3]:text-xl [&_h3]:font-medium [&>div>label]:block [&>div>label]:text-[#333333] [&>div>label]:mb-2.5'>
                <h3 className='col-span-12'>Billing Information</h3>
                <div className='col-span-6'>
                  <Label htmlFor='name'>Name</Label>
                  <Input type='text' id='name' />
                </div>
                <div className='col-span-6'>
                  <Label htmlFor='email'>Email Address</Label>
                  <Input type='email' id='email' />
                </div>
                <div className='col-span-12'>
                  <Label htmlFor='address'>Address</Label>
                  <Input type='text' id='address' />
                </div>
                <div className='lg:col-span-3 col-span-6'>
                  <Label htmlFor='number'>Country</Label>
                  <Country />
                </div>
                <div className='lg:col-span-3 col-span-6'>
                  <Label htmlFor='number'>Region/State</Label>
                  <Region />
                </div>
                <div className='lg:col-span-3 col-span-6'>
                  <Label htmlFor='number'>City</Label>
                  <City />
                </div>
                <div className='lg:col-span-3 col-span-6'>
                  <Label htmlFor='zipCode'>Zip Code</Label>
                  <Input type='tel' id='zipCode' />
                </div>
                <div className='col-span-12'>
                  <Label htmlFor='number'>Phone Number</Label>
                  <Input type='tel' id='number' />
                </div>
                <div className='col-span-12 flex justify-start items-center gap-x-2.5 [&>label]:!mb-0 [&>label]:font-medium [&>label]:cursor-pointer [&>label]:text-[13px] [&>label]:tracking-normal [&>label]:!text-[#999999] [&>button]:w-5 [&>button]:h-[18px] [&>button]:pb-[4px] [&>button]:rounded-[2px] [&>button]:border-[#999999] [&>button]:border-[1.5px]'>
                  <Checkbox id='ship' />
                  <label htmlFor='ship'>Ship into different address</label>
                </div>
              </div>

              <div className='grid grid-cols-12 gap-x-5 gap-y-5 p-6 border rounded-xl [&_h3]:text-[#333333] [&_h3]:text-xl [&_h3]:font-medium [&>div>label]:block [&>div>label]:text-[#333333] [&>div>label]:mb-2.5'>
                <h3 className='col-span-12'>Payment Option</h3>
                <div className='col-span-12'>
                  <RadioGroup
                    className='flex gap-x-10 border py-4 px-5 rounded-lg [&>div]:flex [&>div]:flex-col [&>div]:gap-y-1.5 [&>div]:justify-center [&>div]:items-center [&_div:nth-child(1)_svg]:w-6 [&_div>svg]:h-9 [&_div:nth-child(2)_svg]:w-12 [&>div>span]:text-sm [&>div>span]:pb-1 [&>div>span]:text-[#333333]'
                    defaultValue='paypalCard'
                  >
                    <div>
                      <FontAwesomeIcon icon={faPaypal} />
                      <span>Paypal</span>
                      <RadioGroupItem value='paypalCard' id='paypalCard' />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faStripe} />
                      <span>Stripe</span>
                      <RadioGroupItem value='stripeCard' id='stripeCard' />
                    </div>
                  </RadioGroup>
                </div>
                <div className='col-span-12'>
                  <Label htmlFor='cardName'>Name on Card</Label>
                  <Input type='text' id='cardName' />
                </div>
                <div className='col-span-12'>
                  <Label htmlFor='cardNumber'>Card Number</Label>
                  <Input type='tel' id='cardNumber' />
                </div>
                <div className='col-span-6'>
                  <Label htmlFor='name'>Expire Date</Label>
                  <Input type='date' id='name' />
                </div>
                <div className='col-span-6'>
                  <Label htmlFor='cvc'>CVC</Label>
                  <Input type='tel' id='cvc' />
                </div>
              </div>

              <div className='grid grid-cols-12 gap-x-5 gap-y-5 p-6 border rounded-xl [&_h3]:text-[#333333] [&_h3]:text-xl [&_h3]:font-medium [&>div>label]:block [&>div>label]:text-[#333333] [&>div>label]:mb-2.5'>
                <h3 className='col-span-12'>Additional Information</h3>
                <div className='col-span-12'>
                  <Label htmlFor='name'>
                    Order Notes{' '}
                    <span className='text-gray-400'>(Optional)</span>{' '}
                  </Label>
                  <Textarea
                    placeholder='Type your message here.'
                    id='message'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-12 lg:col-span-4 md:col-span-5 space-y-6'>
              <div
                className="border border-gray-300 rounded-lg sm:p-6 p-4 shadow-sm 
                [&_button]:bg-[url('/images/ArrowRight.webp')] 
                [&_button]:bg-no-repeat 
                [&_button]:pr-15 
                [&_button]:bg-[length:22px_22px]
                [&_button]:sm:bg-[right_139px_top_13px]
                [&_button]:md:bg-[right_196px_top_13px]
                [&_button]:lg:bg-[right_17px_top_14px]
                [&_button]:xl:bg-[right_70px_top_13px]
                [&_button]:2xl:bg-[right_95px_top_13px]
                [&_button]:max-sm:bg-[right_40px_top_13px]
                [&_button]:mt-6 [&_button]:w-full [&_button]:text-white [&_button]:bg-[#333333] [&_button]:hover:bg-gray-800 [&_button]:uppercase [&_button]:tracking-wide  [&_button]:focus:outline-none [&_button]:font-medium
                [&_button]:rounded [&_button]:px-6 [&_button]:py-3"
              >
                <h3 className='text-base sm:text-lg font-medium tracking-tight text-[#333333] '>
                  Order Summary
                </h3>
                <div className=' py-3 pb-4 flex flex-col gap-y-2.5 [&>div]:flex [&>div]:justify-start [&>div]:items-center [&>div]:gap-x-3.5 [&_div>p]:text-sm [&_div>p]:leading-4 [&_div>p]:text-[#333333]  [&>div>div>span:nth-child(2)]:text-sm [&>div>div>span:nth-child(2)]:text-[#888888] [&>div>div>span:nth-child(3)]:text-sm [&>div>div>span:nth-child(3)]:text-[#333333] [&>div>div>span:nth-child(3)]:pl-1 [&>div>div>span]:font-medium'>
                  <div>
                    <Image
                      src='/images/jacket.webp'
                      alt='image'
                      width={55}
                      height={100}
                    />
                    <div>
                      <p>Edward Cafe Racer Black Leather Jacket</p>
                      <span>1 x</span>
                      <span>$229.00</span>
                    </div>
                  </div>
                  <div>
                    <Image
                      src='/images/jacket.webp'
                      alt='image'
                      width={55}
                      height={100}
                    />
                    <div>
                      <p>Edward Cafe Racer Black Leather Jacket</p>
                      <span>3 x</span>
                      <span>$229.00</span>
                    </div>
                  </div>
                </div>
                <div className='space-y-2 text-sm sm:text-base [&_p]:text-[#888888] [&_p]:text-sm [&_span]:text-[#333333] [&_span]:text-sm [&>div]:flex [&>div]:justify-between [&>div]:items-center'>
                  <div>
                    <p>Sub-total</p>
                    <span>$320</span>
                  </div>
                  <div>
                    <p>Shipping</p>
                    <span>Free</span>
                  </div>
                  <div>
                    <p>Discount</p>
                    <span>$24</span>
                  </div>
                  <div>
                    <p>Tax</p>
                    <span>$61.99</span>
                  </div>
                  <div className='border-t pt-3'>
                    <p className='font-semibold'>Total</p>
                    <span className='font-semibold'>$357.99</span>
                  </div>
                </div>
                <button type='button'>Place Order </button>
              </div>

              {/* <div className='border border-gray-300 rounded-lg p-6 shadow-sm'>
                <h5 className='text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4'>
                  Coupon Code
                </h5>
                <input
                  type='text'
                  placeholder='Enter Coupon Code'
                  className='mt-4 w-full bg-gray-50 border border-gray-300 rounded-lg text-sm p-3 focus:outline-none focus:ring-2 focus:ring-gray-300'
                />
                <button
                  type='button'
                  className='mt-4 w-40 text-white bg-gray-900 hover:bg-gray-800 focus:outline-none font-medium corner-lg text-sm px-6 py-3'
                >
                  Apply Coupon
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Checkout
