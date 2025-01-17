"use client";

import BreadCrumbs from "../components/breadcrumbs";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import StripeCheckOut from "../components/stripe-checkout";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { updateCartAndCalculateTotals } from "@/utils/cartUtils";

const Checkout = () => {
  const cartItemsData = useAppSelector((state) => state.cart.items);
  const [totals, setTotals] = useState({ subtotal: 0, shipping: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
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

  return (
    <div>
      <Navbar />
      <BreadCrumbs page="Checkout" />
      {loading ? (
        <p>Loading your cart...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <StripeCheckOut total={totals.total} />
      )}
      <Footer />
    </div>
  );
};

export default Checkout;