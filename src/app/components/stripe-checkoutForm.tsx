// File: /app/components/stripe-checkoutForm.tsx
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import BillingInformation from "../checkout/billingInformation";
import OrderSummary from "../checkout/orderSummary";
import convertToSubCurreny from "@/lib/convetToSubCurrency";
import { createOrder } from "@/utils/wooCommerceApi";

interface Address {
  first_name: string;
  last_name: string;
  email?: string;
  phone: string;
  address_1: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface LineItem {
  product_id: number;
  quantity: number;
}

interface ShippingLine {
  method_id: string;
  method_title: string;
  total: string;
}

interface OrderData {
  billing: Address;
  shipping: Address;
  line_items: LineItem[];
  shipping_lines: ShippingLine[];
}

const StripeCheckOutForm = ({amount, data}: {amount: number, data: OrderData}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setErrorMessage("Stripe has not been initialized.");
      setLoading(false);
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message || "An unexpected error occurred.");
      setLoading(false);
      return;
    }

    try {
      // Create the order in WooCommerce first
      const orderData = {
        ...data,
        payment_method: "stripe",
        payment_method_title: "Credit Card",
        set_paid: false
      };

      const addOrder = await createOrder(orderData);

      // Get the payment intent from your backend
      const response = await fetch("/api/stripe-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: convertToSubCurreny(amount),
          order_id: addOrder.id,
        })
      });

      const result = await response.json();
      
      if (!result.clientSecret) {
        throw new Error("Failed to get client secret from server");
      }

      // Confirm the payment with the client secret
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret: result.clientSecret,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_HOST}/success?payment_intent_client_secret=${result.clientSecret}`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
      }
    } catch (error) {
      console.error("Payment error:", error);
      setErrorMessage("An error occurred while processing your payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };
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
                type="submit" 
                disabled={!stripe || loading}
              >
                {loading ? "Processing..." : `Place Order`}
              </button>
              {errorMessage && (
                <div className="text-red-600 mt-2 text-sm">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StripeCheckOutForm;