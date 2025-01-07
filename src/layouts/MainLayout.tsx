import React from "react";
import Navigation from "@/components/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">{children}</main>
    </div>
  );
}
