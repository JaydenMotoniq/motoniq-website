import "./globals.css";

import { type Metadata } from "next";

import { SuisseIntl, PPFraktionMono } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://motoniq.ai"),
  title: "Motoniq Labs: Generalised Embodied Intelligence",
  description:
    "Motoniq Labs is building a new class of physical intelligence. Systems that understand the physical world the way humans do, learn from watching, reason through contact, generalise across any machine, and operate safely alongside other beings.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Motoniq Labs: Generalised Embodied Intelligence",
    description:
      "Motoniq Labs is building a new class of physical intelligence. Systems that understand the physical world the way humans do, learn from watching, reason through contact, generalise across any machine, and operate safely alongside other beings.",
    url: "https://motoniq.ai",
    siteName: "Motoniq Labs",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Motoniq Labs: Generalised Embodied Intelligence",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motoniq Labs: Generalised Embodied Intelligence",
    description:
      "Motoniq Labs is building a new class of physical intelligence. Systems that understand the physical world the way humans do, learn from watching, reason through contact, generalise across any machine, and operate safely alongside other beings.",
    images: ["/og.png"],
  },
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
