import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const WishList = () => {
  return (
    <>
      <Navbar />
      <div className='md:px-0 px-5'>
        <div className='container mx-auto sm:px-12 md:px-16 pb-8'>
          <div className='grid grid-cols-12 gap-6 pt-24'>
            <div className='col-span-12'>
              <div className='border border-gray-300 rounded-lg p-6'>
                <h5 className='text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4'>
                  Wishlist
                </h5>
                <div className="grid grid-cols-12 bg-gray-100 py-3 px-4 border-b [&_p]:max-[485px]:text-xs">
                  <div className="col-span-4 sm:text-base sm:col-span-4 md:col-span-4 lg:col-span-4">
                    <p className="font-medium text-gray-700 text-sm sm:text-base">
                      Products
                    </p>
                  </div>
                  <div className='col-span-2 text-center sm:text-base sm:col-span-2 md:col-span-2 lg:col-span-2'>
                    <p className='font-medium text-gray-700 text-sm sm:text-base'>
                      Price
                    </p>
                  </div>
                  <div className='col-span-2 text-center sm:text-base sm:col-span-2 md:col-span-2 lg:col-span-2'>
                    <p className='font-medium text-gray-700 text-sm sm:text-base'>
                      Stock Status
                    </p>
                  </div>
                  <div className='col-span-4 text-right sm:text-base sm:col-span-4 md:col-span-4 lg:col-span-4'>
                    <p className='font-medium text-gray-700 text-sm sm:text-base'>
                      Actions
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 py-4 px-4 items-center border-b gap-x-5 [&_p]:text-gray-700 [&_p]:text-sm">
                  <div className="max-[640px]:col-span-12 col-span-6 sm:col-span-4 flex sm:items-center items-left gap-4 sm:flex-row max-[485px]:col-span-12 ">
                    
                    <img src="/images/jacket.webp" alt="Product" className="w-12 h-14 corner"/>
                    <p className="text-sm sm:text-base sm:leading-5 !leading-4">
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>
                  <div className="col-span-1 sm:col-span-2 text-center max-[485px]:flex-row flex-col ">
                    <p>$687.00</p>
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-center max-[640px]:item-right flex items-center justify-center gap-2">
                      <p>Counter</p>
                  </div>
                  <div className="col-span-3 sm:col-span-4 text-right">
                    <p className='col-span2'>$687.00</p>
                    <div className="[&_svg]:w-5 [&_svg]:h-5 'col-span2'" >
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
