import "./globals.css";

import { type Metadata } from "next";

import { NeueHaasGroteskDisplay, PPFraktionMono } from "./fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DotPattern } from "@/components/dot-pattern";

export const metadata: Metadata = {
  title: "Motoniq: The Data Engine for Physical AI",
  description:
    "The only full-stack data system built for robots to perform in the real world.",
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
        <DotPattern />
        <main className="relative z-10 flex min-h-dvh flex-col">
          <Header />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
