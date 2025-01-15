"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckOutForm from "./stripe-checkoutForm";
import convertToSubCurreny from "@/lib/convetToSubCurrency";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const StripeCheckOut = () => {
  const amount = 49.99

  return (
    <>
      <Elements 
        stripe={stripePromise} 
        options={{
          mode: "payment",
          amount: convertToSubCurreny(amount),
          currency: "usd",
        }}>
        
        <StripeCheckOutForm amount={amount} />
      </Elements>
    </>
  );
};

export default StripeCheckOut;