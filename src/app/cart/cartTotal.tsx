'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { updateCartAndCalculateTotals } from '@/utils/cartUtils'
import { useAppSelector } from '@/lib/hooks'
import { convertPrice, formatPrice } from '@/utils/price'

import SummaryLoading from './loading'

interface CartTotalProps {
  cartPage: boolean
}

interface CartItems {
  id: string
  name: string
  image: string
  price: number // GBP
  quantity: number
}

const CartTotal = ({ cartPage }: CartTotalProps) => {
  const [cart, setCart] = useState<CartItems[]>([])
  const [isVerified, setIsVerified] = useState(false)
  const [totals, setTotals] = useState({
    subtotal: 0,
    shipping: 0,
    total: 0,
  })

  // Cart items (GBP source of truth)
  const cartItemsData = useAppSelector((state) => state.cart.items)

  // Selected currency
  const currency = useAppSelector((state) => state.currency.current)

  /* ---------------- Verify & calculate (GBP only) ---------------- */
  useEffect(() => {
    const updateCart = async () => {
      try {
        if (!cartItemsData) return

        const { updatedCart, subtotal, shipping, total } =
          await updateCartAndCalculateTotals(cartItemsData)

        setCart(updatedCart)
        setTotals({ subtotal, shipping, total })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        setIsVerified(true)
      } catch (error) {
        console.error('Error updating cart:', error)
      }
    }

    updateCart()
  }, [cartItemsData])

  /* ---------------- Converted values (display only) ---------------- */
  const displaySubtotal = convertPrice(totals.subtotal, currency)
  const displayTotal = convertPrice(totals.total, currency)

  return (
    <div className='col-span-12 lg:col-span-4 space-y-6'>
      {!isVerified ? (
        <SummaryLoading />
      ) : (
        <div className='border border-gray-300 rounded-lg sm:p-6 p-4 shadow-sm'>
          <h5 className='text-lg sm:text-xl font-semibold tracking-tight text-gray-900 border-b pb-4'>
            {cartPage ? 'Cart Totals' : 'Order Summary'}
          </h5>

          {/* ---------- Mini summary (checkout page) ---------- */}
          {!cartPage && (
            <div className='py-3 space-y-3'>
              {cart.map((item) => {
                const gbpLineTotal = item.price * item.quantity
                const displayLineTotal = convertPrice(gbpLineTotal, currency)

                return (
                  <div key={item.id} className='flex items-center gap-x-3.5'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={55}
                      height={100}
                    />
                    <div>
                      <p className='text-sm'>{item.name}</p>
                      <span className='text-xs'>
                        {item.quantity} ×{' '}
                        {formatPrice(
                          convertPrice(item.price, currency),
                          currency
                        )}
                      </span>
                      <p className='text-sm font-medium'>
                        {formatPrice(displayLineTotal, currency)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* ---------- Totals ---------- */}
          <div className='space-y-3 text-sm sm:text-base'>
            <div className='flex justify-between border-t pt-3'>
              <p className='text-gray-700'>Sub-total</p>
              <p className='text-gray-700'>
                {formatPrice(displaySubtotal, currency)}
              </p>
            </div>

            <div className='flex justify-between'>
              <p className='text-gray-700'>Shipping</p>
              <p className='text-gray-700'>Free</p>
            </div>

            <div className='flex justify-between border-t pt-3'>
              <p className='text-gray-900 font-semibold'>Total</p>
              <p className='text-gray-900 font-semibold'>
                {formatPrice(displayTotal, currency)}
              </p>
            </div>
          </div>

          {/* ---------- CTA ---------- */}
          {cartPage && (
            <>
              {/* <p className='text-xs text-gray-500 mt-3'>
                Prices shown in selected currency. Checkout charged in GBP.
              </p> */}

              <Link
                className={`block text-center mt-5 ${
                  totals.total === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#333333] text-white hover:bg-gray-800'
                } rounded-lg px-6 py-3`}
                href={totals.total > 0 ? '/checkout' : '#'}
                aria-disabled={totals.total === 0}
              >
                Proceed to Checkout
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CartTotal

// 'use client';

// import { useEffect, useState } from "react";
// import { updateCartAndCalculateTotals } from "@/utils/cartUtils";
// import Link from "next/link";
// import Image from "next/image";
// import { useAppSelector } from "@/lib/hooks";
// import SummaryLoading from "./loading";

// interface CartTotalProps {
//   cartPage: boolean;
// }

// interface CartItems {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
//   quantity: number;
// }

// const CartTotal = ({ cartPage }: CartTotalProps) => {
//   const [cart, setCart] = useState<CartItems[]>([])
//   const [isVerified, setIsVerified] = useState(false);
//   const [totals, setTotals] = useState({ subtotal: 0, shipping: 0, total: 0 });
//   const cartItemsData = useAppSelector((state) => state.cart.items);

//   useEffect(() => {
//     const updateCart = async () => {
//       try {
//         const storedCart = cartItemsData;
//         if (!storedCart) return;

//         const { updatedCart, subtotal, shipping, total } =
//           await updateCartAndCalculateTotals(storedCart);

//         setCart(updatedCart);
//         setTotals({ subtotal, shipping, total });
//         localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
//         setIsVerified(true);
//       } catch (error) {
//         console.error("Error updating cart:", error);
//       }
//     };

//     updateCart();
//   }, [cartItemsData]);

//   return (
//     <div className="col-span-12 lg:col-span-4 space-y-6">
//       {!isVerified ? (
//         <SummaryLoading />
//       ) : (
//         <>
//           <div className="border border-gray-300 rounded-lg sm:p-6 p-4 shadow-sm">
//             <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4">
//               {cartPage ? "Cart Totals" : "Order Summary"}
//             </h5>
//             {!cartPage && (
//               <div className="py-3">
//                 {cart.map((item) => (
//                   <div key={item.id} className="flex items-center gap-x-3.5">
//                     <Image src={item.image} alt={item.name} width={55} height={100} />
//                     <div>
//                       <p>{item.name}</p>
//                       <span>{item.quantity} x</span>
//                       <span> £{item.price}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div className="space-y-3 text-sm sm:text-base">
//               <div className="flex justify-between border-t pt-3">
//                 <p className="text-gray-700">Sub-total</p>
//                 <p className="text-gray-700">£{totals.subtotal.toFixed(2)}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p className="text-gray-700">Shipping</p>
//                 {/* <p className="text-gray-700">£{totals.shipping.toFixed(2)}</p> */}
//                 <p className="text-gray-700">Free</p>
//               </div>
//               <div className="flex justify-between border-t pt-3">
//                 <p className="text-gray-900 font-semibold">Total</p>
//                 <p className="text-gray-900 font-semibold">£{totals.total.toFixed(2)}</p>
//               </div>
//             </div>
//             {cartPage ? (
//               <Link
//                 className={`block text-center mt-5 ${
//                   totals.total === 0
//                     ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                     : "bg-[#333333] text-white hover:bg-gray-800"
//                 } rounded-lg px-6 py-3`}
//                 href={totals.total > 0 ? `/checkout` : "#"}
//                 aria-disabled={totals.total === 0}
//               >
//                 Proceed to Checkout
//               </Link>
//             ) : (
//               <>
//               </>
//               // <PlaceOrder total={totals.total} />
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartTotal;