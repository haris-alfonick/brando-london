import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import BreadCrumbs from '../components/breadcrumbs'
import CartTotal from './cartTotal'
import CartItem from './cartItems'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "Cart - Brando London"
}
const Cart = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Cart' />
      <div className='md:px-12 px-5 md:py-16 py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-6'>
            
          {/* test */}
            <div className="col-span-12 lg:col-span-8">
              <div className="border border-gray-300 rounded-lg bg-white">
                <h5 className="text-lg sm:text-xl p-4 font-semibold tracking-tight text-gray-900 border-b">
                  Shopping Cart
                </h5>

                {/* Table Head (Desktop only) */}
                <div className="hidden sm:grid grid-cols-12 bg-gray-100 py-3 px-5 border-b text-sm font-medium text-gray-700">
                  <div className="col-span-6">Products</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Sub-Total</div>
                </div>

                <CartItem />

                {/* Footer actions */}
                <div
                  className="flex flex-wrap justify-between items-center gap-4 p-4
                  [&_a]:border-2 [&_a]:border-gray-600 [&_a]:px-6 [&_a]:py-2
                  [&_a]:text-sm [&_a]:font-medium [&_a]:text-gray-900
                  [&_a]:bg-white [&_a]:hover:bg-gray-100"
                >
                  <Link
                    href="/shop"
                    className="!pl-9 bg-[url('/images/ArrowLeft.webp')] bg-no-repeat bg-[length:18px_18px] bg-[left_10px_center]"
                  >
                    Return to Shop
                  </Link>
                </div>
              </div>
            </div>

          {/* test end*/}
            <CartTotal cartPage={true} />
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart
