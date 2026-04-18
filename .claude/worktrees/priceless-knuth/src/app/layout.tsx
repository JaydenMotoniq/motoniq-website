import "./globals.css";

import { type Metadata } from "next";

import { SuisseIntl, PPFraktionMono } from "./fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DotPattern } from "@/components/dot-pattern";

export const metadata: Metadata = {
  metadataBase: new URL("https://motoniq.ai"),
  title: "Motoniq: Internet-Scale Intelligence for Physical AI",

  openGraph: {
    images: ["https://motoniq.ai/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://motoniq.ai/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SuisseIntl.variable} ${PPFraktionMono.variable}`}
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
