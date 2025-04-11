"use client"
import { clearCart } from '@/lib/features/cart/cartSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import BreadCrumbs from "../components/breadcrumbs"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar/Navbar"

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const clientSecret = searchParams.get('payment_intent_client_secret');
  // const amount = searchParams.get('amount');
  const router = useRouter();
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!clientSecret) {
      router.push('/');
    } else {
      dispatch(clearCart());
    }
  }, [clientSecret, router, dispatch]);

  if (!clientSecret) {
    return null; // Avoid rendering UI while redirecting
  }
  return(
    <>
    <Navbar />
    <BreadCrumbs page="Success" />
      <section>
        <div className="text-center items-center flex justify-center my-16">
          <div className=" lg:w-[500px] md:w-[450px] w-[320px] border border-gray-100 h-auto lg:p-10 md:p-10 p-5 bg-[url('/images/CheckCircle.png')] bg-no-repeat bg-[center_top_32px] rounded-[15px] lg:bg-[size:65px_65px] sm:bg-[size:60px_60px] bg-[size:50px_50px] ">

            <h3 className="lg:text-[28px] md:text-[26px] sm:text-[21px] text-[20px] lg:pt-[70px]  sm:pt-[65px] pt-[75px] font-medium">
              Your order is successfully place
            </h3>

            <p className=" mt-[8px] lg:text-[15px] md:text-[14px] text-[14px] lg:px-7 md:px-4 px-[4px] ">
              Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.
            </p>

            <button
              type="button"
              className="lg:text-[14px] text-[#333333] border rounded-[1px] border-[#333333] uppercase bg-[url('/images/Stack.png')] bg-no-repeat items-center  mt-5 lg:pr-3 lg:pl-8  py-2 lg:bg-[center_left_12px] bg-[size:15px_15px] md:text-[12px] sm:text-[10px] sm:pr-2 sm:bg-[center_left_8px] sm:pl-7 text-[10px] pl-7 bg-[center_left_8px] pr-2"
              onClick={() => router.push('/shop')}
            >
              Continue shopping
            </button>
            
            {/* <button
              type="button"
              className="lg:text-[14px] border rounded-[1px] border-[#333333] uppercase bg-[url('/images/ArrowRight.png')] bg-no-repeat items-center bg-[#333333] text-white lg:ml-3  ml-3   mt-5 lg:pl-3 pl-3 pr-8  py-2 bg-[center_right_10px] bg-[size:15px_15px] md:text-[12px] sm:text-[10px] sm:pl-2 text-[10px]">
            
              View Order
            </button> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

const InitiateSuccess = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
};

export default InitiateSuccess