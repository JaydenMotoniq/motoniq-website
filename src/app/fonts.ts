import localFont from "next/font/local";

export const ProtoMono = localFont({
  src: [
    {
      path: "../../public/fonts/ProtoMono/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProtoMono/medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export const SFProDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/SFProDisplay/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay/medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay/semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay/bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
