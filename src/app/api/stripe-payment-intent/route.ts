import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export const POST = async (request: NextRequest) => {
  try {
    const { amount, order_id } = await request.json(); // Extract amount and order_id from request body

    // Create a PaymentIntent with order_id in metadata
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in the smallest currency unit (cents)
      currency: "gbp",
      automatic_payment_methods: { enabled: true },
      metadata: {
        order_id: order_id, // Add WooCommerce order ID to metadata
      },
      capture_method: 'automatic',
      confirm: false,
    });

    return NextResponse.json({ 
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id 
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'An unexpected error occurred' 
    }, { status: 500 });
  }
}