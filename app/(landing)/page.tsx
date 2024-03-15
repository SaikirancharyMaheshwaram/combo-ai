"use client";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function LandingPage() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="flex items-center justify-between ">Hello world!</div>
      <Link href={"/sign-in"}>
        <Button>Login</Button>
      </Link>
    </main>
  );
}
