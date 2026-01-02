'use client'

import { addToCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation";

type AddtoCardButtonParams = {
  productId: number,
  name: string,
  image: string,
  price: string,
  text: string,
  size: string | null
  quantity: number
}

const AddToCartButton = ({productId, name, image, price, text, size, quantity}: AddtoCardButtonParams) => {

  // const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const { toast } = useToast()
  const router = useRouter()

  // Set isClient to true after component is mounted on the client side
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if the screen width is less than 768px
    };

    const handleScroll = () => {
      if (isMobile) {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 200); // Show button only after 200px scroll on mobile
      } else {
        setIsVisible(true); // Always visible on larger screens
      }
    };

    handleResize(); // Set the initial screen size
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  if (!isVisible) return null;

  const HandleAddTocart = (productId: number, isBuyNow:boolean) => {
    if(!size){
      toast({
        variant: "destructive",
        title: "Please Select size first",
      })
      return
    }
    const item = {
      id: String(productId),
      name: name,
      price: parseFloat(price),
      quantity: quantity,
      image: image,
    };
    dispatch(addToCart(item));
    if(isBuyNow){
      router.push('/checkout')
    }else{
      router.push('/cart')
    }
  }


  return(
    <>
      {text ? (
        <div
          className={`${
            isMobile
              ? "fixed bg-white shadow-inner bottom-0 left-0 right-0 m-auto p-3 gap-x-2"
              : "relative"
          } md:mt-6 flex justify-between items-center md:gap-x-6 z-[99999] w-[100%] md:w-full [&>button]:bg-[#333333] [&>button]:text-white [&>button]:w-full md:[&>button]:py-2 [&>button]:py-2.5 md:[&>button]:rounded [&_.buyNow]:bg-white [&_.buyNow]:text-[#333] [&_.buyNow]:border [&_button]:font-medium [&_.buyNow]:border-[#333] [&_.cart]:border [&_.cart]:border-[#333]`}
        >
          <button className="buyNow hover:!bg-[#eae645] hover:!text-[#333] hover:!border-transparent transition-all" onClick={() => HandleAddTocart(productId, true)}>Buy Now</button>
          <button className="cart hover:!bg-[#eae645] hover:!text-[#333] hover:!border-transparent transition-all" onClick={() => HandleAddTocart(productId, false)}>Add to Cart</button>
        </div>
      ) : (
        <button onClick={() => HandleAddTocart(productId, false)} className='cardIcons text-black hover:!bg-gray-300'>
          <FontAwesomeIcon width={24} icon={faCartShopping} className='w-6 h-6' />
        </button>
      )}
    </>
  )
}

export default AddToCartButton