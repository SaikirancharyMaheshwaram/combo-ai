import { auth, currentUser } from "@clerk/nextjs";

import { NextResponse } from "next/server";
import db from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!user || !userId) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }
    //checking that user is already subscriped
    const userSubsciption = await db.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    if (userSubsciption && userSubsciption.stripeCustomerId) {
      const striptSession = await stripe.billingPortal.sessions.create({
        customer: userSubsciption.stripeCustomerId,
        return_url: settingsUrl,
      });

      return NextResponse.json({ url: striptSession.url });
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "INR",
            product_data: {
              name: "Combo-ai",
              description: "Use the AI Generator to Fullest",
            },
            unit_amount: 2000,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return NextResponse.json({ url: stripeSession.url });
  } catch (error) {
    console.log("[STRIPE_ERROR]", error);
  }
}
