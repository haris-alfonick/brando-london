import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import BreadCrumbs from '../components/breadcrumbs'
import RelatedProductCard from '../components/RelatedProduct'
import CartTotal from './cartTotal'
import CartItem from './cartItems'
import Link from 'next/link'

const Cart = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Cart' />
      <div className='md:px-12 px-5 md:py-16 py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 lg:col-span-8'>
              <div className='border border-gray-300 rounded-lg'>
                <h5 className='text-lg sm:text-xl py-3 px-5 font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4'>
                  Shopping Cart
                </h5>
                <div className="grid grid-cols-12 bg-gray-100 py-3 px-5 border-b [&_p]:max-[485px]:text-xs">
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

                <CartItem />

                <div
                  className="flex flex-wrap gap-4 justify-between items-center pt-6 px-5 pb-5
                [&_a]:w-fit max-sm:[&_a]:m-auto [&_a]:sm:w-auto [&_a]:md:w-auto [&_a]:border-2 [&_a]:border-gray-600 [&_a]:hover:bg-gray-100 [&_a]:text-sm [&_a]:px-6 [&_a]:py-2 [&_a]:dark:bg-gray-800 [&_a]:dark:text-white [&_a]:corner-lg [&_a]:font-medium [&_a]:text-gray-900 [&_a]:bg-white [&_a:nth-child(1)]:pl-10 [&_a:nth-child(1)]:bg-[url('/images/ArrowLeft.webp')] 
                [&_a:nth-child(1)]:sm:bg-[left_18px_top_9px] [&_a:nth-child(1)]:bg-no-repeat [&_a:nth-child(1)]:bg-[length:18px_18px] 
                [&_a:nth-child(1)]:bg-[left_10px_center]"
                >
                  <Link href="/shop">Return to Shop</Link>

                  {/* <Link href="">Update Cart</Link> */}
                </div>
              </div>
            </div>
            <CartTotal cartPage={true} />
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart
