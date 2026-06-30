import { NextResponse } from "next/server";
import { products } from "@/lib/catalog";
import { getStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe checkout is not configured yet." },
      { status: 503 }
    );
  }

  const stripe = getStripe();
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: base + "/account/orders?checkout=success",
    cancel_url: base + "/cart?checkout=cancelled",
    line_items: products.slice(0, 1).map((product) => ({
      quantity: 1,
      price_data: {
        currency: "eur",
        unit_amount: product.price * 100,
        product_data: {
          name: product.name,
          description: product.description
        }
      }
    }))
  });

  return NextResponse.redirect(session.url ?? base + "/checkout", {
    status: 303
  });
}
