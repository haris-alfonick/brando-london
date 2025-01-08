'use client';

import { useEffect, useState } from "react";
import { fetchWooCommerceProduct } from "@/utils/wooCommerceApi";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";

interface CartTotalProps{
  cartPage: boolean
}

const CartTotal = ({cartPage}: CartTotalProps) => {
  const [cart, setCart] = useState<any[]>([]);
  const [isVerified, setIsVerified] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const cartItemsData = useAppSelector((state) => state.cart.items)

  useEffect(() => {
    const updateCartPrices = async () => {
      const storedCart = cartItemsData;
      if (!storedCart) return;

      try {
        const parsedCart = storedCart;
        const updatedCart = [];

        for (const item of parsedCart) {
          const product = await fetchWooCommerceProduct(item.id);
          updatedCart.push({
            ...item,
            price: product.price, // Always use the API price
          });
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
        setIsVerified(true);
        calculateSubtotal(updatedCart);
      } catch (error) {
        console.error("Error updating cart prices:", error);
      }
    };

    updateCartPrices();
  }, [cartItemsData]);

  const calculateSubtotal = (cartItems: any[]) => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  };

  const shipping = 0; // Free shipping
  const discount = 24; // Static discount
  const taxRate = 0.2; // Example tax rate (20%)
  const tax = parseFloat((subtotal * taxRate).toFixed(2));
  const total = parseFloat((subtotal + shipping + tax).toFixed(2));

  return (
    <div className="col-span-12 lg:col-span-4 space-y-6">
      {!isVerified ? (
        <p>loading...</p>
      ) : ( 
        <>
          <div
            className="border border-gray-300 rounded-lg sm:p-6 p-4 shadow-sm 
            [&_a]:bg-[url('/images/ArrowRight.webp')] 
            [&_a]:bg-no-repeat 
            [&_a]:pr-15 
            [&_a]:bg-[length:22px_22px]
            [&_a]:sm:bg-[right_139px_top_13px]
            [&_a]:md:bg-[right_196px_top_13px]
            [&_a]:lg:bg-[right_17px_top_14px]
            [&_a]:xl:bg-[right_74px_top_13px]
            [&_a]:max-sm:bg-[right_40px_top_13px]
            [&_a]:mt-6 [&_a]:w-full [&_a]:text-white [&_a]:bg-[#333333] [&_a]:hover:bg-gray-800 [&_a]:focus:outline-none [&[&_a]:font-medium
            [&_a]:corner-lg [&_a]:px-6 [&_a]:py-3"
          >
            <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4">
              {cartPage ? 'Cart Totals' : 'Order Summary'}
            </h5>
            {!cartPage && (
              <>
              <div className="py-3 pb-4 flex flex-col gap-y-2.5 [&>div]:flex [&>div]:justify-start [&>div]:items-center [&>div]:gap-x-3.5 [&_div>p]:text-sm [&_div>p]:leading-4 [&_div>p]:text-[#333333]  [&>div>div>span:nth-child(2)]:text-sm [&>div>div>span:nth-child(2)]:text-[#888888] [&>div>div>span:nth-child(3)]:text-sm [&>div>div>span:nth-child(3)]:text-[#333333] [&>div>div>span:nth-child(3)]:pl-1 [&>div>div>span]:font-medium">
                {cart.map((item) => (
                <div key={item.id}>
                  <Image src={item.image} alt={item.name} width={55} height={100} />
                  <div>
                    <p>{item.name}</p>
                    <span>{item.quantity} x</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              ))}
              </div>
              </>
            )}
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex justify-between border-t pt-3">
                <p className="text-gray-700">Sub-total</p>
                <p className="text-gray-700">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">Free</p>
              </div>
              {/* <div className="flex justify-between">
                <p className="text-gray-700">Discount</p>
                <p className="text-gray-700">-${discount.toFixed(2)}</p>
              </div> */}
              <div className="flex justify-between">
                <p className="text-gray-700">Tax</p>
                <p className="text-gray-700">${tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-t pt-3">
                <p className="text-gray-900 font-semibold">Total</p>
                <p className="text-gray-900 font-semibold">${total.toFixed(2)}</p>
              </div>
            </div>
            {cartPage ? 
              <>
                <Link
                className={`block text-center ${
                  total === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#333333] text-white hover:bg-gray-800"
                } rounded-lg px-6 py-3`}
                href={total > 0 ? `/checkout` : "#"}
                aria-disabled={total === 0}
              > Proceed to Checkout </Link>
              </> : 
              <>
                <button className="
                bg-[url('/images/ArrowRight.webp')] 
                bg-no-repeat 
                pr-15 
                bg-[length:22px_22px]
                sm:bg-[right_139px_top_13px]
                md:bg-[right_196px_top_13px]
                lg:bg-[right_17px_top_14px]
                xl:bg-[right_70px_top_13px]
                2xl:bg-[right_95px_top_13px]
                max-sm:bg-[right_40px_top_13px]
                mt-6 w-full text-white bg-[#333333] hover:bg-gray-800 uppercase tracking-wide focus:outline-none font-medium
                rounded px-6 py-3" 
                type="button">Place Order</button>
              </>  
            }
            
          </div>
        </>
      )}
    </div>
  );
};

export default CartTotal;