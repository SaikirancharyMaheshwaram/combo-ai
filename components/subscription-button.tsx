"use client";
import axios from "axios";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader } from "./loader";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      console.log(response);
      window.location.href = response.data.url;
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Button
          variant={isPro ? "destructive" : "custom"}
          onClick={handleClick}
        >
          {isPro ? "Manage Subscription" : "Get Subscription"}
        </Button>
      )}
    </div>
  );
};
