import "./globals.css";

import { type Metadata } from "next";

import { SuisseIntl, PPFraktionMono } from "./fonts";

export const metadata: Metadata = {
  title: "Motoniq — Machine Intelligence. Built for Physics.",
  description:
    "A new class of machine intelligence for the physical world. One model across any robot, any task, any environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SuisseIntl.variable} ${PPFraktionMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
