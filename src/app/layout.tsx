import "./globals.css";

import { type Metadata } from "next";

import { NeueHaasGroteskDisplay, PPFraktionMono } from "./fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DotPattern } from "@/components/dot-pattern";

export const metadata: Metadata = {
  title: "Motoniq: The first company in the world",
  description: "The Data Engine for Physical AI",
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
