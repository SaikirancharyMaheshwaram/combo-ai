import { MAX_FREE_COUNTS } from "@/constants";
import { Card, CardContent } from "./ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

interface FreecounterProps {
  apiLimitCount: number;
}
export const FreeCounter = ({ apiLimitCount }: FreecounterProps) => {
  return (
    <div className="px-3">
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6">
          <div className="mb-4 space-y-4 text-center text-sm text-white">
            <p>
              {apiLimitCount}/{MAX_FREE_COUNTS} Free Prompts
            </p>

            <Progress
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
              className=" h-3 "
            />
          </div>
          <Button className="w-full  text-white" variant={"custom"}>
            Upgrade
            <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
