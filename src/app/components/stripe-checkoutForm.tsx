// File: /app/components/stripe-checkoutForm.tsx
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import BillingInformation from "../checkout/billingInformation";
import OrderSummary from "../checkout/orderSummary";
import convertToSubCurreny from "@/lib/convetToSubCurrency";
import { Skeleton } from "@/components/ui/skeleton";
import SummaryLoading from "../cart/loading";
import { createOrder } from "@/utils/wooCommerceApi";

const StripeCheckOutForm = ({amount, data}: {amount: number, data: any}) => {

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("/api/stripe-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({amount: convertToSubCurreny(amount)})
  //   })
  //   .then((res) => res.json())
  //   .then((data) => setClientSecret(data.clientSecret))
  // }, [amount])

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(data);
  setLoading(true);

  if (!stripe || !elements) {
    return;
  }

  const { error: submitError } = await elements.submit();

  if (submitError) {
    setErrorMessage(submitError.message || "An unexpected error occurred.");
    setLoading(false);
    return;
  }

  try {
    const orderData = {
      ...data,
      payment_method: "stripe",
      payment_method_title: "Credit Card",
      set_paid: false
    };

    // Create the order in WooCommerce (or handle it on your backend)
    const addOrder = await createOrder(orderData);

    // Pass the WooCommerce order_id along with the amount to the payment intent API
    const response = await fetch("/api/stripe-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: convertToSubCurreny(amount), // Convert the amount to the smallest currency unit (cents)
        order_id: addOrder.id, // Send the WooCommerce order_id
      })
    });

    const result = await response.json();
    if (result.clientSecret) {
      setClientSecret(result.clientSecret);
    }

    // Process payment using Stripe
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: result.clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_HOST}/success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      // Payment successful logic
    }
  } catch (error) {
    console.log(error);
    setErrorMessage("An error occurred while creating the order.");
  }

  setLoading(false);
};
  

  // if(!clientSecret || !stripe || !elements){
  //   return(
  //     <>
  //       loading..
  //     </>
  //   )
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div className='lg:px-6 px-4 md:py-16 py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 md:gap-x-10 max-md:gap-y-6'>
            <div className='col-span-12 lg:col-span-8 md:col-span-7 space-y-5'>
              <BillingInformation />
              <div className='grid grid-cols-12 gap-x-5 gap-y-5 p-6 border rounded-xl [&_h3]:text-[#333333] [&_h3]:text-xl [&_h3]:font-medium [&>div>label]:block [&>div>label]:text-[#333333] [&>div>label]:mb-2.5'>
                <h3 className='col-span-12'>Payment Option</h3>
                <div className='col-span-12'>
                  <PaymentElement />
                </div>
              </div>         
            </div>
            
            <div className='col-span-12 lg:col-span-4 md:col-span-5 space-y-6'>
              <OrderSummary />
              <button 
                className="
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
                type="submit" disabled={!stripe || loading}>
                {loading ? "Processing..." : `Place Order`}
              </button>
              {errorMessage && <div>{errorMessage}</div>} 
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StripeCheckOutForm;