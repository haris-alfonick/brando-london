"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { removeFromCart } from "@/lib/features/cart/cartSlice"

const CartItem = () => {
  const [loading, setLoading] = useState(false)
  const cartItemsData = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    setLoading(true)
  }, [])

  if(!loading){
    return(
      <>
        <div className="space-y-2 m-3">
          <Skeleton className="h-5 w-[9%] inline-block mr-[1%]" />
          <Skeleton className="h-5 w-[69%] inline-block mr-[1%]" />
          <Skeleton className="h-5 w-[20%] inline-block" />
        </div>
      </>
    )
  }
  
  if (cartItemsData.length === 0) {
    return (
      <div className="text-center text-gray-600 text-lg mt-5">
        <p>Cart is empty</p>
      </div>
    );
  }
  
  return(
    <>
      {cartItemsData.map((item) => (
        <div key={item.id} className="grid grid-cols-12 py-4 px-5 items-center border-b gap-x-5 [&_p]:text-gray-700 [&_p]:text-sm max-[485px]:gap-y-3">
        <div className="max-[640px]:col-span-12 sm:col-span-6 flex sm:items-center items-left gap-4 sm:flex-row max-[485px]:col-span-12 ">
          <div className="[&_svg]:w-5 [&_svg]:h-5" onClick={() => dispatch(removeFromCart(item.id))}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
          <Image
            src="/images/jacket.webp"
            alt="Product" 
            width={100}
            height={100}
            className="w-12 h-14 corner"/>
          <p className="text-sm sm:text-base sm:leading-5 !leading-4">{item.name}</p>
        </div>
        <div className="col-span-2 sm:col-span-2 text-center max-[485px]:flex-row flex-col max-[485px]:col-span-4">
          <p>£{item.price}</p>
        </div>
        <div className="col-span-3 sm:col-span-2 text-center max-[640px]:item-right flex items-center justify-center gap-2 max-[485px]:col-span-4">
            <p>{item.quantity}</p>
        </div>
        <div className="col-span-2 sm:col-span-2 text-right max-[485px]:col-span-4">
          <p>£{item.price * item.quantity}</p>
        </div>
      </div>
      ))}
    </>
  )
}

export default CartItem