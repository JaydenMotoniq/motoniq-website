import "./globals.css";

import { type Metadata } from "next";

import { ProtoMono, SFProDisplay } from "./fonts";

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
      <body className={`${ProtoMono.variable} ${SFProDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
