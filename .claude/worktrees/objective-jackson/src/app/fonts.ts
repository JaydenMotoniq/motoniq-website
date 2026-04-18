import localFont from "next/font/local";

export const NeueHaasGroteskDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasGroteskDisplay/thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasGroteskDisplay/light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasGroteskDisplay/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasGroteskDisplay/roman.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasGroteskDisplay/bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas-grotesk-display",
  display: "swap",
  preload: true,
});

export const PPFraktionMono = localFont({
  src: [
    {
      path: "../../public/fonts/PPFraktionMono/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPFraktionMono/bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pp-fraktion-mono",
  display: "swap",
  preload: true,
});
