import { useAppSelector } from "@/lib/hooks";
import axios from "axios";
import { useState } from "react";
import getStripe from "@/utils/get-stripejs"; // Importing getStripe from its module

interface PlaceOrderProps {
  total: number;
}

const PlaceOrder = ({ total }: PlaceOrderProps) => {
  const [loading, setLoading] = useState(false);
  const billing = useAppSelector((state) => state.order.billing);
  const items = useAppSelector((state) => state.cart.items);
  
  const createStripeSession = async () => {
    try {
      setLoading(true);
  
      // Call your backend API to create a Stripe Checkout session
      const { data } = await axios.post('/api/checkout-sessions', {
        items,
        billing,
        total,
      });
  
      if (!data.sessionId) {
        throw new Error("Failed to retrieve sessionId.");
      }
  
      // Get the Stripe instance
      const stripe = await getStripe();
  
      if (!stripe) {
        throw new Error("Stripe failed to initialize.");
      }
  
      // Redirect to Stripe Checkout
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (error) {
      console.error("Error creating Stripe session:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <button
      onClick={createStripeSession}
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
      type="button"
      disabled={loading}
    >
      {loading ? "Processing..." : "Place Order"}
    </button>
  );
};

export default PlaceOrder;
