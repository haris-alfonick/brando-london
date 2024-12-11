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
              <div className='border border-gray-300 rounded-lg [&>h3]:text-lg [&>h3]:sm:text-xl [&>h3]:font-semibold [&>h3]:text-gray-950 [&>h3]:py-3 [&>h3]:px-4 [&>h3]:max-[485px]:px-2.5'>
                <h3>Wishlist</h3>
                <div className='grid grid-cols-12 bg-gray-100 py-3 px-4 max-[485px]:px-2.5 border-b border-t [&_p]:font-medium [&_p]:text-gray-700 [&_p]:text-sm [&_p]:sm:text-base [&_p]:max-[485px]:text-xs'>
                  <div className='lg:col-span-5 md:col-span-4 sm:text-base col-span-4 max-[780px]:col-span-3'>
                    <p>Products</p>
                  </div>
                  <div className='lg:col-span-2 md:col-span-2 col-span-2 max-[780px]:col-span-2'>
                    <p>Price</p>
                  </div>
                  <div className=' xl:col-span-3 lg:col-span-2 md:col-span-2 col-span-2 max-[780px]:col-span-3'>
                    <p>Stock Status</p>
                  </div>
                  <div className='xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-4 max-[780px]:col-span-4'>
                    <p>Actions</p>
                  </div>
                </div>

                <div className='grid grid-cols-12 py-3 px-4 max-[485px]:px-2.5 sm:items-center items-center border-b gap-y-3 max-lg:gap-x-3 max-[485px]:gap-x-0 '>
                  <div className='lg:col-span-5 md:col-span-4 col-span-6 max-[485px]:col-span-12 flex sm:items-center items-left gap-4 sm:flex-row [&_p]:text-gray-700 max-[425px]:col-span-8'>
                    <img
                      src='/images/jacket.webp'
                      alt='Product'
                      className='w-12 h-14 corner'
                    />
                    <p className='text-sm sm:text-base sm:leading-5 !leading-[18px]'>
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>

                  <div className='lg:col-span-2 md:col-span-2 col-span-3 max-[485px]:col-span-3 max-[425px]:col-span-4 flex gap-x-1'>
                    <span className='text-slate-500 line-through'>$1299</span>
                    <span>$999</span>
                  </div>

                  <div className='xl:col-span-3 lg:col-span-2 md:col-span-2 col-span-3 max-[485px]:col-span-3 max-[425px]:col-span-4 [&_span]:text-[#2db224] [&_span]:uppercase lg:[&_span]:text-base [&_span]:text-sm'>
                    <span>in stock</span>
                  </div>

                  <div className="xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-12 max-[485px]:col-span-6 max-[425px]:col-span-8 flex gap-x-4 [&_button]:bg-[url('/images/ShoppingCartSimple.webp')] [&_button]:bg-no-repeat lg:[&_button]:bg-[right_10px_center] [&_button]:bg-[right_10px_center] [&_button]:bg-[length:16px_16px] [&_button]:uppercase [&_button]:py-2.5 lg:[&_button]:text-[13px] [&_button]:text-xs [&_button]:tracking-wide [&_button]:px-4 [&_button]:pr-8">
                    <button
                      type='button'
                      className='bg-[#333333] text-white font-medium'
                    >
                      Add to card
                    </button>
                    <div className='[&_svg]:w-5 [&_svg]:h-5 pt-2 justify-items-center'>
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-12 py-3 px-4 max-[485px]:px-2.5 sm:items-center items-center border-b gap-y-3 max-lg:gap-x-3 max-[485px]:gap-x-0 '>
                  <div className='lg:col-span-5 md:col-span-4 col-span-6 max-[485px]:col-span-12 flex sm:items-center items-left gap-4 sm:flex-row [&_p]:text-gray-700 max-[425px]:col-span-8'>
                    <img
                      src='/images/jacket.webp'
                      alt='Product'
                      className='w-12 h-14 corner'
                    />
                    <p className='text-sm sm:text-base sm:leading-5 !leading-[18px]'>
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>

                  <div className='lg:col-span-2 md:col-span-2 col-span-3 max-[485px]:col-span-3 max-[425px]:col-span-4 flex gap-x-1'>
                    <span className='text-slate-500 line-through'>$1299</span>
                    <span>$999</span>
                  </div>

                  <div className='xl:col-span-3 lg:col-span-2 md:col-span-2 col-span-3 max-[485px]:col-span-3 max-[425px]:col-span-4 [&_span]:text-[#2db224] [&_span]:uppercase lg:[&_span]:text-base [&_span]:text-sm'>
                    <span>in stock</span>
                  </div>

                  <div className="xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-12 max-[485px]:col-span-6 max-[425px]:col-span-8 flex gap-x-4 [&_button]:bg-[url('/images/ShoppingCartSimple.webp')] [&_button]:bg-no-repeat lg:[&_button]:bg-[right_10px_center] [&_button]:bg-[right_10px_center] [&_button]:bg-[length:16px_16px] [&_button]:uppercase [&_button]:py-2.5 lg:[&_button]:text-[13px] [&_button]:text-xs [&_button]:tracking-wide [&_button]:px-4 [&_button]:pr-8">
                    <button
                      type='button'
                      className='bg-[#333333] text-white font-medium'
                    >
                      Add to card
                    </button>
                    <div className='[&_svg]:w-5 [&_svg]:h-5 pt-2 justify-items-center'>
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-12 py-3 px-4 max-[485px]:px-2.5 sm:items-center items-center border-b gap-y-3 max-lg:gap-x-3 max-[485px]:gap-x-0 '>
                  <div className='lg:col-span-5 md:col-span-4 col-span-6 max-[485px]:col-span-12 flex sm:items-center items-left gap-4 sm:flex-row [&_p]:text-gray-700 max-[425px]:col-span-8'>
                    <img
                      src='/images/jacket.webp'
                      alt='Product'
                      className='w-12 h-14 corner'
                    />
                    <p className='text-sm sm:text-base sm:leading-5 !leading-[18px]'>
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>

                  <div className='lg:col-span-2 md:col-span-2 col-span-3 max-[485px]:col-span-3 max-[425px]:col-span-4 flex gap-x-1'>
                    <span className='text-slate-500 line-through'>$1299</span>
                    <span>$999</span>
                  </div>

                  <div className='xl:col-span-3 lg:col-span-2 md:col-span-2 col-span-3 max-[485px]:col-span-3 max-[425px]:col-span-4 [&_span]:text-[#AB1E23] [&_span]:uppercase lg:[&_span]:text-base [&_span]:text-sm'>
                    <span>out of stock</span>
                  </div>

                  <div className="xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-12 max-[485px]:col-span-6 max-[425px]:col-span-8 flex gap-x-4 [&_button]:bg-[url('/images/ShoppingCartSimple.webp')] [&_button]:bg-no-repeat lg:[&_button]:bg-[right_10px_center] [&_button]:bg-[right_10px_center] [&_button]:bg-[length:16px_16px] [&_button]:uppercase [&_button]:py-2.5 lg:[&_button]:text-[13px] [&_button]:text-xs [&_button]:tracking-wide [&_button]:px-4 [&_button]:pr-8">
                    <button
                      type='button'
                      className='bg-[#333333] text-white font-medium'
                    >
                      Add to card
                    </button>
                    <div className='[&_svg]:w-5 [&_svg]:h-5 pt-2 justify-items-center'>
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-12 py-3 px-4 max-[485px]:px-2.5 sm:items-center items-center border-b gap-y-3 max-lg:gap-x-3 max-[485px]:gap-x-0 '>
                  <div className='lg:col-span-5 md:col-span-4 col-span-6 max-[485px]:col-span-12 flex sm:items-center items-left gap-4 sm:flex-row [&_p]:text-gray-700 max-[425px]:col-span-8'>
                    <img
                      src='/images/jacket.webp'
                      alt='Product'
                      className='w-12 h-14 corner'
                    />
                    <p className='text-sm sm:text-base sm:leading-5 !leading-[18px]'>
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>

                  <div className='lg:col-span-2 md:col-span-2 col-span-3 max-[485px]:col-span-3 max-[425px]:col-span-4 flex gap-x-1'>
                    <span className='text-slate-500 line-through'>$1299</span>
                    <span>$999</span>
                  </div>

                  <div className='xl:col-span-3 lg:col-span-2 md:col-span-2 col-span-3 max-[485px]:col-span-3 max-[425px]:col-span-4 [&_span]:text-[#2db224] [&_span]:uppercase lg:[&_span]:text-base [&_span]:text-sm'>
                    <span>in stock</span>
                  </div>

                  <div className="xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-12 max-[485px]:col-span-6 max-[425px]:col-span-8 flex gap-x-4 [&_button]:bg-[url('/images/ShoppingCartSimple.webp')] [&_button]:bg-no-repeat lg:[&_button]:bg-[right_10px_center] [&_button]:bg-[right_10px_center] [&_button]:bg-[length:16px_16px] [&_button]:uppercase [&_button]:py-2.5 lg:[&_button]:text-[13px] [&_button]:text-xs [&_button]:tracking-wide [&_button]:px-4 [&_button]:pr-8">
                    <button
                      type='button'
                      className='bg-[#333333] text-white font-medium'
                    >
                      Add to card
                    </button>
                    <div className='[&_svg]:w-5 [&_svg]:h-5 pt-2 justify-items-center'>
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

// "use client"

// const Animation = () => {
//   return (
//     <>
//       <div className="w-full h-[400px] flex pt-5">
//         <div className="w-1/2 h-full overflow-hidden relative">
//           <div className="absolute top-0 left-0 w-full h-[200%] animate-slide-up">
//             <img src="/images/image-6.webp" alt="Image 1" className="w-full h-1/2 object-cover"/>
//             <img src="/images/image-5.webp" alt="Image 2" className="w-full h-1/2 object-cover"/>
//           </div>
//         </div>

//         <div className="w-1/2 h-full overflow-hidden relative">
//           <div className="absolute top-[-100%] left-0 w-full h-[200%] animate-slide-down">
//             <img src="/images/image-7.webp" alt="Image 3" className="w-full h-1/2 object-cover"/>
//             <img src="/images/image-8.webp" alt="Image 4" className="w-full h-1/2 object-cover"/>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide-up {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-50%);
//           }
//         }
//         @keyframes slide-down {
//           0%,
//           100% {
//             transform: translateY(-50%);
//           }
//           50% {
//             transform: translateY(0);
//           }
//         }
//         .animate-slide-up {
//           animation: slide-up 7s infinite;
//         }
//         .animate-slide-down {
//           animation: slide-down 7s infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Animation;
