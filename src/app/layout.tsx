import "./globals.css";

import { type Metadata } from "next";

import { NeueHaasGroteskDisplay, PPFraktionMono } from "./fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Motoniq",
  description: "Motion intelligent machines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NeueHaasGroteskDisplay.variable} ${PPFraktionMono.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
