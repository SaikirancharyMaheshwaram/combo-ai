"use client";

import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { useContext } from "react";
import { UseProContext } from "@/context/use-pro-model";
import { Badge } from "./ui/badge";

export const ProModal = () => {
  const { isOpen, setIsOpen } = useContext(UseProContext);

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-2 pb-4">
            <div className="flex items-center gap-x-2 font-bold ">
              Upgrade to ComboAI
              <Badge className="py-1 uppercase text-white" variant={"custom"}>
                Premium
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
