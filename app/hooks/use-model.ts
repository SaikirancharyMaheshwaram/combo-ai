import { UseProContext } from "@/context/use-pro-model";
import { useContext } from "react";

export const useProModel = () => {
  const { isOpen, setIsOpen } = useContext(UseProContext);

  const close = () => {
    setIsOpen(false);
  };
  const res = {
    open: isOpen,
    close: close(),
  };
  return res;
};
