import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const WishList = () => {
  return (
    <>
      <Navbar />
      <div className='px-5'>
        <div className='container mx-auto sm:px-12 md:px-16 pb-8'>
          <div className='grid grid-cols-12 gap-6 pt-24'>
            <div className='col-span-12'>
              <div className='border border-gray-300 rounded-lg p-6'>
                <h5 className='text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4'>
                  Wishlist
                </h5>
                <div className="grid grid-cols-12 [&_p]:max-[485px]:text-xs bg-gray-100 py-3 px-4 border-b [&_p]:font-medium [&_p]:text-gray-700 [&_p]:text-sm [&_p]:sm:text-base">
                  <div className="max-[780px]:col-span-3 col-span-4 md:col-span-4 sm:text-base lg:col-span-4">
                    <p>Products</p>
                  </div>
                  <div className="max-[780px]:col-span-2 col-span-2 md:col-span-2 sm:text-base text-center lg:col-span-2">
                    <p>Price</p>
                  </div>
                  <div className="max-[780px]:col-span-3 col-span-2 md:col-span-3 sm:text-base text-center lg:col-span-3">
                    <p>Stock Status</p>
                  </div>
                  <div className="max-[780px]:col-span-4 col-span-4 md:col-span-3 md:px-4 sm:text-base lg:col-span-3">
                    <p>Actions</p>
                  </div>
                </div>


                <div className="grid grid-cols-12 py-4 px-4 items-center border-b gap-x-5 gap-y-3">
                  <div className="max-[375px]:col-span-12 max-[468px]:col-span-12 max-[780px]:col-span-4 col-span-4 max-[640px]:col-span-12 max-[485px]:col-span-12 md:col-span-12 lg:col-span-4 sm:col-span-12 flex sm:items-center items-left gap-4 sm:flex-row [&_p]:text-gray-700 [&_p]:text-sm-marker">
                    <img src="/images/jacket.webp" alt="Product" className="w-12 h-14 corner" />
                    <p className="text-sm sm:text-base sm:leading-5 !leading-4">
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>
                  <div className="max-[375px]:col-span-12 max-[780px]:col-span-2 max-[468px]:col-span-2 col-span-2 max-[640px]:col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 max-[485px]:flex-row flex-col text-center">
                    <span className='text-slate-500 line-through'>$1299</span>
                    <span>$999</span>
                  </div>
                  <div className=" max-[375px]:col-span-12 max-[780px]:col-span-3  max-[468px]:col-span-4 col-span-2 max-[640px]:col-span-3 sm:col-span-3 max-[640px]:item-right md:col-span-3 lg:col-span-3 text-center flex items-center justify-center gap-2 [&_span]:text-[#2db224] [&_span]:uppercase">
                    <span>in stock</span>
                  </div>
                  <div className="max-[375px]:col-span-12 max-[375px]:items-center max-[780px]:col-span-4 max-[468px]:col-span-6 sm:[&_button]:w-full md:justify-center lg:justify-center col-span-4 max-[640px]:col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3 sm:justify-items-center flex gap-x-4 [&_button]:bg-[url('/images/ShoppingCartSimple.webp')] [&_button]:bg-no-repeat lg:[&_button]:bg-[right_10px_center] sm:[&_button]:bg-[right_12px_center] [&_button]:bg-[length:18px_18px] [&_button]:bg-[right_2px_center] [&_button]:uppercase md:[&_button]:pr-6 lg:[&_button]:pr-10 [&_button]:pl-4 [&_button]:py-3 [&_button]:text-[12px] [&_button]:px-8">
                    <button type="button" className="bg-[#333333] text-white font-medium">
                      Add to card
                    </button>
                    <div className="[&_svg]:w-5 [&_svg]:h-5 pt-2 justify-items-center">
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                  </div>

                </div>
           </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WishList
