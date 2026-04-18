import "./globals.css";

import { type Metadata, type Viewport } from "next";

import { SuisseIntl, PPFraktionMono } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://motoniq.ai"),
  title: "Motoniq — Machine Intelligence. Built for Physics.",
  description:
    "A new class of machine intelligence for the physical world. One model across any robot, any task, any environment.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://motoniq.ai",
    siteName: "Motoniq",
    title: "Motoniq — Machine Intelligence. Built for Physics.",
    description:
      "A new class of machine intelligence for the physical world. One model across any robot, any task, any environment.",
    images: [
      {
        url: "/Opengraph.png",
        width: 1200,
        height: 630,
        alt: "Motoniq — A new class of machine intelligence. Built for physics, not pixels.",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motoniq — Machine Intelligence. Built for Physics.",
    description:
      "A new class of machine intelligence for the physical world. One model across any robot, any task, any environment.",
    images: ["/Opengraph.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#eff4f9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: "only light" }}>
      <head>
        {/* Stronger "only light" hint. Next.js Viewport type doesn't
            accept the "only light" value so we render it directly. */}
        <meta name="color-scheme" content="only light" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body className={`${SuisseIntl.variable} ${PPFraktionMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
