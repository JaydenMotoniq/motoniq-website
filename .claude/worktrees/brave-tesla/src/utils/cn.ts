import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge about our custom text-size tokens so they are
// treated as font-size utilities (not colour utilities) and never
// incorrectly dropped when used alongside text-{colour} classes.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-h1", "text-h2", "text-h3", "text-h4", "text-h5", "text-h6",
        "text-b1", "text-b2",
        "text-d1", "text-d2", "text-d3", "text-d4",
        "text-c1", "text-c2",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
