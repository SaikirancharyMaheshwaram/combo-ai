import { auth } from "@clerk/nextjs";
import db from "./db";

const DAY_IN_MS = 86_400_000;

export const checkSubcription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId,
    },
  });

  if (!userSubscription) {
    return false;
  }
  const isExpired =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isExpired;
};
