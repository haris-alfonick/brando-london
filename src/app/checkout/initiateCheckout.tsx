"use client";

import StripeCheckOut from "../components/stripe-checkout";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { updateCartAndCalculateTotals } from "@/utils/cartUtils";
import { Skeleton } from "@/components/ui/skeleton";
import SummaryLoading from "../cart/loading";
import { useRouter } from "next/navigation";

const InitiateCheckout = () => {
  const cartItemsData = useAppSelector((state) => state.cart.items);
  const billingInfo = useAppSelector((state) => state.order.billing)
  const shippingInfo = useAppSelector((state) => state.order.shipping)
  const [totals, setTotals] = useState({ subtotal: 0, shipping: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter()

  const data = {
    billing: billingInfo,
    shipping: shippingInfo,
    line_items: cartItemsData.map(({ id, quantity }) => ({ product_id: id, quantity })),
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "25.00"
      }
    ]
  }

  useEffect(() => {
    if(cartItemsData.length <= 0){
      router.push('/shop');
    }

    const fetchCartData = async () => {
      setLoading(true);
      setError("");

      try {
        const { subtotal, shipping, total } =
          await updateCartAndCalculateTotals(cartItemsData);
        setTotals({ subtotal, shipping, total });
      } catch (err) {
        setError("Failed to update cart. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, [cartItemsData]);

  if (cartItemsData.length <= 0) {
    return null; // Avoid rendering UI while redirecting
  }

  return (
    <>
      {loading && totals.total <= 0 ? (
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-12 md:gap-x-10 max-md:gap-y-6">
            <div className="col-span-12 lg:col-span-8 md:col-span-7 space-y-5">
              <div className="space-y-4">
                {/* 1st row: 3 columns with equal width */}
                <div className="flex gap-4">
                  <Skeleton className="w-1/3 h-6" />
                  <Skeleton className="w-1/3 h-6" />
                  <Skeleton className="w-1/3 h-6" />
                </div>

                {/* 2nd row: 1 column */}
                <div className="w-full">
                  <Skeleton className="w-full h-6" />
                </div>

                {/* 3rd row: 4 columns */}
                <div className="flex gap-4">
                  <Skeleton className="w-1/4 h-6" />
                  <Skeleton className="w-1/4 h-6" />
                  <Skeleton className="w-1/4 h-6" />
                  <Skeleton className="w-1/4 h-6" />
                </div>

                {/* 4th row: 1 column */}
                <div className="w-full">
                  <Skeleton className="w-full h-6" />
                </div>
              </div>
            </div>
            <div className='col-span-12 lg:col-span-4 md:col-span-5 space-y-6'>
              <SummaryLoading />
            </div>
          </div>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <StripeCheckOut total={totals.total} data={data} />
      )}
    </>
  );
};

export default InitiateCheckout;