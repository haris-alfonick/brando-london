import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

interface CartItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface RequestBody {
  items: CartItem[];
  email: string;
  billing: {
    name: string;
    address: string;
    country: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as RequestBody;
    const { items, email, billing } = body;

    if (!items || !email || !billing) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const lineItems = items.map((item: CartItem) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.floor(item.price * 100), // Ensure price is in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: Math.floor(25 * 100),
              currency: 'usd',
            },
            display_name: 'Shipping Charges',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 10,
              },
              maximum: {
                unit: 'business_day',
                value: 12,
              },
            },
          },
        }
      ],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      customer_email: email,
      metadata: {
        email,
        shipping_name: billing.name,
        shipping_address: billing.address,
        shipping_country: billing.country,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: unknown) {
    console.error("Error creating Stripe session:", error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
