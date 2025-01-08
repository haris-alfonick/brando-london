'use client'

import { addToCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation";

type AddtoCardButtonParams = {
  productId: any,
  name: string,
  image: string,
  price: string,
  text: string,
  size: string | null
  quantity: number
}

const AddToCartButton = ({productId, name, image, price, text, size, quantity}: AddtoCardButtonParams) => {

  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast()
  const router = useRouter()

  // Set isClient to true after component is mounted on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const dispatch = useAppDispatch();

  const HandleAddTocart = (productId: string) => {
    if(!size){
      toast({
        variant: "destructive",
        title: "Please Select size first",
      })
      return
    }
    const item = {
      id: productId,
      name: name,
      price: parseFloat(price),
      quantity: quantity,
      image: image,
    };
    dispatch(addToCart(item));

    router.push('/cart')
  }

  return(
    <>
      <button onClick={() => HandleAddTocart(productId)} className='cardIcons text-black hover:!bg-gray-300'>
        {text ? (
          text
        ) : (
          <FontAwesomeIcon width={24} icon={faCartShopping} className='w-6 h-6' />
        )}
      </button>
    </>
  )
}

export default AddToCartButton