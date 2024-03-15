"use client";
import React, { createContext, useState } from "react";

export const UseProContext = createContext<any>(null);

export const UseProProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <UseProContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </UseProContext.Provider>
  );
};
