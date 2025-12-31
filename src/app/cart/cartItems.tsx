'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { removeFromCart } from '@/lib/features/cart/cartSlice'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const CartItem = () => {
  const [loading, setLoading] = useState(false)
  const cartItemsData = useAppSelector(state => state.cart.items)
  const dispatch = useAppDispatch()
  useEffect(() => {
    setLoading(true)
  }, [])

  if (!loading) {
    return (
      <>
        <div className='space-y-2 m-3'>
          <Skeleton className='h-5 w-[9%] inline-block mr-[1%]' />
          <Skeleton className='h-5 w-[69%] inline-block mr-[1%]' />
          <Skeleton className='h-5 w-[20%] inline-block' />
        </div>
      </>
    )
  }

  if (cartItemsData.length === 0) {
    return (
      <div className='text-center text-gray-600 text-lg mt-5'>
        <p>Cart is empty</p>
      </div>
    )
  }

  return (
    <>
      {cartItemsData.map(item => (
        <div
          key={item.id}
          className='
          grid grid-cols-12 gap-y-2 gap-x-4
          px-4 pt-4 pb-2.5 border-b last:border-b-0
          items-start sm:items-center
          [&_p]:text-gray-700 [&_p]:text-sm'>
          {/* Product / Remove / Image / Name */}
          <div
            className='col-span-12 sm:col-span-6 flex items-start sm:items-center gap-4 relative'>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className='
              mt-1 sm:mt-0
              text-gray-400 hover:text-black
              [&_svg]:w-4 [&_svg]:h-5 sm:static absolute -right-1.5 -top-2.5'
            >
              <FontAwesomeIcon icon={faTrashCan} fontWeight={400} color='#333'/>
            </button>

            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className='w-16 h-24 object-cover rounded'
            />

            <div className='space-y-1 sm:pr-0 pr-4'>
              <p className='font-medium leading-4 sm:leading-5'>{item.name}</p>
              {/* <p className='text-base font-medium text-gray-700'>Size: </p> */}
            </div>
          </div>

          {/* Price */}
          <div
            className='
      col-span-12 sm:col-span-2
      flex justify-between sm:block
      border-t sm:border-t-0 pt-2 sm:pt-0
    '
          >
            <p className='text-sm font-semibold text-[#333] sm:hidden'>Price</p>
            <p className='sm:text-center'>£{item.price}</p>
          </div>

          {/* Quantity */}
          <div
            className='
      col-span-12 sm:col-span-2
      flex justify-between sm:block
      border-t sm:border-t-0 pt-2 sm:pt-0
    '
          >
            <p className='text-xs font-semibold text-[#333] sm:hidden'>Quantity</p>
            <p className='sm:text-center'>{item.quantity}</p>
          </div>

          {/* Subtotal */}
          <div
            className='
      col-span-12 sm:col-span-2
      flex justify-between sm:block
      border-t sm:border-t-0 pt-2 sm:pt-0
    '
          >
            <p className='text-xs font-semibold text-[#333] sm:hidden'>Subtotal</p>
            <p className='font-medium sm:text-right'>
              £{item.price * item.quantity}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default CartItem
