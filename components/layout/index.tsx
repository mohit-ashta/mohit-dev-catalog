"use client";
import React, { FC, ReactNode } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen bg-transparent">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
