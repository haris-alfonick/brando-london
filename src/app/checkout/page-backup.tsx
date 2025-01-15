import BreadCrumbs from '../components/breadcrumbs'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import BillingInformation from './billingInformation'
import PaymentOptions from './paymentOptions'
import AdditionalInformation from './additionalInformation'
import OrderSummary from './orderSummary'

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs page='' />
      <div className='lg:px-6 px-4 md:py-16 py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 md:gap-x-10 max-md:gap-y-6'>
            <div className='col-span-12 lg:col-span-8 md:col-span-7 space-y-5'>
              {/* <div className='flex justify-between lg:items-center items-start lg:flex-row flex-col max-lg:gap-y-1 [&>div]:flex [&>div]:justify-start [&>div]:items-center [&_div>svg]:w-[18px] [&_div>svg]:h-3.5 [&_a]:underline [&_a]:text-[#333333] [&_a]:pl-1 [&_a]:text-[13.5px] [&_span]:text-[13.5px] [&_span]:text-[#666666] [&_span]:pl-1.5'>
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
              </div> */}

              <BillingInformation />
              <PaymentOptions />
              <AdditionalInformation />

              
            </div>
            <div className='col-span-12 lg:col-span-4 md:col-span-5 space-y-6'>
              <OrderSummary />

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
