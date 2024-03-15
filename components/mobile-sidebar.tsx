"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { SideBar } from "./SideBar";
import { useEffect, useState } from "react";

export const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu className="md:hidden" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};
