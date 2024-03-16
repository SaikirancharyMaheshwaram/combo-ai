import { Heading } from "@/components/Heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubcription } from "@/lib/subsciption";
import { Settings, Zap, Bot } from "lucide-react";
const SettingsPage = async () => {
  const isSubscriped = await checkSubcription();

  return (
    <div>
      <Heading title="Settings" description="subscribe" icon={Settings} />
      <div className="flex flex-col items-center justify-center space-y-4 px-4 lg:px-8">
        <div className="">
          {isSubscriped ? (
            <div className="flex flex-col items-center justify-center">
              <Zap /> <p>Your are Pro</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Bot /> <p>You are in Bot plan</p>
            </div>
          )}
        </div>
        <SubscriptionButton isPro={isSubscriped} />
      </div>
    </div>
  );
};

export default SettingsPage;
