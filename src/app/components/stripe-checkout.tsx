"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckOutForm from "./stripe-checkoutForm";
import convertToSubCurreny from "@/lib/convetToSubCurrency";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const StripeCheckOut = ({ total, data }: { total: number, data: any }) => {
  // Ensure total is greater than 0 before rendering Elements
  // if (total <= 0) {
  //   return <p>Loading payment details...</p>; // Or any loading indicator
  // }
  
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubCurreny(total), // Convert to subunits (cents)
        currency: "usd",
      }}
    >
      <StripeCheckOutForm amount={total} data={data} />
    </Elements>
  );
};

export default StripeCheckOut;