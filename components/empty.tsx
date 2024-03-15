import { UseProContext } from "@/context/use-pro-model";
import { RecycleIcon } from "lucide-react";
import Image from "next/image";

interface EmptyProps {
  label: string;
}
export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <div className="relative h-72 w-72">
        <Image alt="Empty" fill src={"/empty.png"} />
      </div>
      <p>{label}</p>
    </div>
  );
};
