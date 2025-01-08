'use client'

import { useAppSelector } from "@/lib/hooks"

const ShoppingBasket = () => {
  const items = useAppSelector(state => state.cart.items)
  return(
    <>
      <span>Basket: {items.length}</span>
    </>
  )
}

export default ShoppingBasket