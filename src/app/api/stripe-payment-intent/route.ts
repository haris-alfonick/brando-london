import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const POST = async (request: NextRequest) => {
  try {
    const { amount } = await request.json(); // Extract amount from request body

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in the smallest currency unit
      currency: "usd",
      automatic_payment_methods: {enabled: true}
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}