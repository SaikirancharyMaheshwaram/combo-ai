"use client";
import React, { createContext, useState } from "react";

export const UseProContext = createContext<any>(false);

export const UseProProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <UseProContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </UseProContext.Provider>
  );
};
