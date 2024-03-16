"use client";
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";
export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f31df520-0edd-41fd-bc48-41f305b79ab9");
  }, []);

  return null;
};
