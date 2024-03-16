"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent, { TypewriterClass } from "typewriter-effect";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function LandingPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  if (isSignedIn) {
    router.push("/dashboard");
  }
  return (
    <div className=" h-screen bg-gradient-to-r from-slate-900 to-slate-900">
      <div className="flex h-screen flex-col items-center justify-center px-8">
        <div className="m-5 flex flex-col items-center justify-center space-y-5">
          <Image alt="" src={"/logo.png"} height={100} width={100} />
          <p className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-5xl text-transparent">
            Combo-AI
          </p>
        </div>
        <h1 className="mb-8 text-4xl font-bold text-white">
          Unleash your Creativity with the Power of Ai
        </h1>
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-2xl text-transparent">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot",
                "Photo Generation",
                "Video Generation",
                "Music Generation",
                "Code Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button className="mt-8 text-white " variant={"custom"}>
            GetStarted
          </Button>
        </Link>
      </div>
    </div>
  );
}
