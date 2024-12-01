import type { Metadata } from "next";
import "../globals.css";
import { Cairo } from "next/font/google";
import React from "react";
import { Provider } from "../provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/index.component";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const className = cairo.className;

  // Ensure children is serializable (plain object or React nodes)
  const isValidChildren = React.isValidElement(children) ? children : null;

  return (
    <Provider>
      <SidebarProvider>
        <AppSidebar />
        <main className={`flex flex-col min-h-screen w-full `}>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </Provider>
  );
}
