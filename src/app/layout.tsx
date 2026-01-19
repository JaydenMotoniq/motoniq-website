import "./globals.scss";
import type { Metadata } from "next";
import { ProtoMono, SFProDisplay } from "./fonts";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className={`${ProtoMono.className} ${SFProDisplay.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
