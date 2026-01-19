import Stripe from "stripe";
import { headers } from "next/headers";
import { updateWooOrderStatus } from "@/utils/wooCommerceApi";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia"
});

export async function POST(req: Request) {
  // Stripe requires RAW body
  const body = await req.text();

  // headers() returns a Promise in App Router
  const headerList = await headers();
  const sig = headerList.get("stripe-signature");

  if (!sig) {
    return new Response("Missing Stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Stripe webhook error:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  // PAYMENT SUCCESS
  if (event.type === "payment_intent.succeeded") {
    const intent = event.data.object as Stripe.PaymentIntent;

    const orderId = intent.metadata?.order_id;

    if (orderId) {
      await updateWooOrderStatus(orderId, intent.id);
    }
  }

  // PAYMENT FAILED
  if (event.type === "payment_intent.payment_failed") {
    const intent = event.data.object as Stripe.PaymentIntent;
    const orderId = intent.metadata?.wc_order_id;

    if (orderId) {
      // Optional: mark Woo order as failed
      // await api.put(`orders/${orderId}`, { status: "failed" });
    }
  }

  return new Response("OK", { status: 200 });
}