// File: /app/components/stripe-checkoutForm.tsx
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import BillingInformation from "../checkout/billingInformation";
import OrderSummary from "../checkout/orderSummary";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStripe } from "@fortawesome/free-brands-svg-icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import convertToSubCurreny from "@/lib/convetToSubCurrency";

const StripeCheckOutForm = ({amount}: {amount: number}) => {

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/stripe-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({amount: convertToSubCurreny(amount)})
    })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret))
  }, [amount])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }    

    const { error:submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message || "An unexpected error occurred.");
      setLoading(false);
      return
    }

    const {error} = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_HOST}/success?amount=${amount}`
      }
    })

    if(error){
      setErrorMessage(error.message)
    }else{

    }

    setLoading(false)
  };

  if(!clientSecret || !stripe || !elements){
    return(
      <>
        loading
      </>
    )
  }

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
                  {clientSecret && <PaymentElement />}
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