import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "dominiccashiola",
  description: "Made with nextjs and tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
