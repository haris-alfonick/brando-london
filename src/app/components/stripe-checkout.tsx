"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import StripeCheckOutForm from "./stripe-checkoutForm";
import convertToSubCurreny from "@/lib/convetToSubCurrency";
import { useEffect, useState } from "react";
import { OrderData } from "@/utils/wooCommerceApi";

const StripeCheckOut = ({ total, data }: { total: number, data: OrderData }) => {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);

  useEffect(() => {
    setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!));
  }, []);

  if (!stripePromise) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubCurreny(total),
        currency: "usd",
      }}
    >
      <StripeCheckOutForm amount={total} data={data} />
    </Elements>
  );
};

export default StripeCheckOut;