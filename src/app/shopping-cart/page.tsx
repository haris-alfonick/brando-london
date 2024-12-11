import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const TableDemo = () => {
  return (
    <>
      <Navbar />
      <div className='md:px-0 px-5'>
        <div className='container mx-auto sm:px-12 md:px-16 pb-8'>
          <div className='grid grid-cols-12 gap-6 pt-24'>
            <div className='col-span-12 lg:col-span-8'>
              <div className='border border-gray-300 rounded-lg p-6'>
                <h5 className='text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4'>
                  Shopping Cart
                </h5>
                <div className="grid grid-cols-12 bg-gray-100 py-3 px-4 border-b [&_p]:max-[485px]:text-xs">
                  <div className="col-span-5 sm:text-base sm:col-span-4 md:col-span-6 lg:col-span-6">
                    <p className="font-medium text-gray-700 text-sm sm:text-base">
                      Products
                    </p>
                  </div>
                  <div className='col-span-2 text-center sm:text-base sm:col-span-2 md:col-span-2 lg:col-span-2'>
                    <p className='font-medium text-gray-700 text-sm sm:text-base'>
                      Price
                    </p>
                  </div>
                  <div className='col-span-2 text-center sm:text-base sm:col-span-3 md:col-span-2 lg:col-span-2'>
                    <p className='font-medium text-gray-700 text-sm sm:text-base'>
                      Quantity
                    </p>
                  </div>
                  <div className='col-span-3 text-right sm:text-base sm:col-span-3 md:col-span-2 lg:col-span-2'>
                    <p className='font-medium text-gray-700 text-sm sm:text-base'>
                      Sub-Total
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 py-4 px-4 items-center border-b gap-x-5 [&_p]:text-gray-700 [&_p]:text-sm max-[485px]:gap-y-3">
                  <div className="max-[640px]:col-span-12 sm:col-span-6 flex sm:items-center items-left gap-4 sm:flex-row max-[485px]:col-span-12 ">
                    <div className="[&_svg]:w-5 [&_svg]:h-5">
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                    <img src="/images/jacket.webp" alt="Product" className="w-12 h-14 corner"/>
                    <p className="text-sm sm:text-base sm:leading-5 !leading-4">
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-center max-[485px]:flex-row flex-col max-[485px]:col-span-4">
                    <p>$687.00</p>
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-center max-[640px]:item-right flex items-center justify-center gap-2 max-[485px]:col-span-4">
                      <p>Counter</p>
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-right max-[485px]:col-span-4">
                    <p>$687.00</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 py-4 px-4 items-center border-b gap-x-5 [&_p]:text-gray-700 [&_p]:text-sm max-[485px]:gap-y-3">
                  <div className="max-[640px]:col-span-12 sm:col-span-6 flex sm:items-center items-left gap-4 sm:flex-row max-[485px]:col-span-12 ">
                    <div className="[&_svg]:w-5 [&_svg]:h-5">
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                    <img src="/images/jacket.webp" alt="Product" className="w-12 h-14 corner"/>
                    <p className="text-sm sm:text-base sm:leading-5 !leading-4">
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-center max-[485px]:flex-row flex-col max-[485px]:col-span-4">
                    <p>$687.00</p>
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-center max-[640px]:item-right flex items-center justify-center gap-2 max-[485px]:col-span-4">
                      <p>Counter</p>
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-right max-[485px]:col-span-4">
                    <p>$687.00</p>
                  </div>
                </div>

                <div
                  className="flex flex-wrap gap-4 justify-between items-center pt-6 
                [&_button]:w-full [&_button]:sm:w-auto [&_button]:md:w-auto [&_button]:border-2 [&_button]:border-gray-600 [&_button]:hover:bg-gray-100 [&_button]:text-sm [&_button]:px-6 [&_button]:py-2 [&_button]:dark:bg-gray-800 [&_button]:dark:text-white [&_button]:corner-lg [&_button]:font-medium [&_button]:text-gray-900 [&_button]:bg-white [&_button:nth-child(1)]:pl-10 [&_button:nth-child(1)]:bg-[url('/images/ArrowLeft.webp')] 
                [&_button:nth-child(1)]:sm:bg-[left_18px_top_9px] [&_button:nth-child(1)]:bg-no-repeat [&_button:nth-child(1)]:bg-[length:18px_18px] 
                [&_button:nth-child(1)]:bg-[left_204px_top_9px]
                [&_button:nth-child(1)]:max-sm:bg-[left_72px_top_9px]"
                >
                  <button type='button'>Return to Shop</button>

                  <button type='button'>Update Cart</button>
                </div>
              </div>
            </div>
            <div className='col-span-12 lg:col-span-4 space-y-6'>
              <div
                className="border border-gray-300 rounded-lg sm:p-6 p-4 shadow-sm 
                [&_button]:bg-[url('/images/ArrowRight.webp')] 
                [&_button]:bg-no-repeat 
                [&_button]:pr-15 
                [&_button]:bg-[length:22px_22px]
                [&_button]:sm:bg-[right_139px_top_13px]
                [&_button]:md:bg-[right_196px_top_13px]
                [&_button]:lg:bg-[right_17px_top_14px]
                [&_button]:xl:bg-[right_74px_top_13px]
                [&_button]:max-sm:bg-[right_40px_top_13px]
                [&_button]:mt-6 [&_button]:w-full [&_button]:text-white [&_button]:bg-[#333333] [&_button]:hover:bg-gray-800 [&_button]:focus:outline-none [&[&_button]:font-medium
                [&_button]:corner-lg [&_button]:px-6 [&_button]:py-3
                ">
                <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4">
                  Cart Totals
                </h5>
                <div className='space-y-3 text-sm sm:text-base'>
                  <div className='flex justify-between border-t pt-3'>
                    <p className='text-gray-700'>Sub-total</p>
                    <p className='text-gray-700'>$320</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-700'>Shipping</p>
                    <p className='text-gray-700'>Free</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-700'>Discount</p>
                    <p className='text-gray-700'>$24</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-700'>Tax</p>
                    <p className='text-gray-700'>$61.99</p>
                  </div>
                  <div className='flex justify-between border-t pt-3'>
                    <p className='text-gray-900 font-semibold'>Total</p>
                    <p className='text-gray-900 font-semibold'>$357.99</p>
                  </div>
                </div>
                <button
                  type="button"> Proceed to Checkout </button>
              </div>

              <div className='border border-gray-300 rounded-lg p-6 shadow-sm'>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TableDemo
