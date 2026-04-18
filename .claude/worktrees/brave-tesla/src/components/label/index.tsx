"use client";

// Label — visually identical to Button/Secondary/Default.
// ⚠️  If Button/Secondary/Default styles change, update this component too.
//
// • No href → <span>, no interactions.
// • href provided → <a>, gains hover effect (same as Button/Secondary/Hover) + text decrypt.

import { type AnchorHTMLAttributes, type HTMLAttributes, useState } from "react";

import { useTextDecrypt } from "@/hooks/use-text-decrypt";
import { cn } from "@/utils/cn";

type BaseProps = { children: React.ReactNode; className?: string };

type SpanProps = BaseProps &
  Omit<HTMLAttributes<HTMLSpanElement>, keyof BaseProps> & { href?: undefined };

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type LabelProps = SpanProps | AnchorProps;

const baseClasses = [
  "inline-flex items-center justify-center gap-1",
  "rounded-2 border px-3 py-1",
  // D4 token — PP Fraktion Mono, 12px, 18px lh, -1%, uppercase
  "font-pp-fraktion-mono text-d4 uppercase",
  // Button/Secondary/Default colours
  "bg-mono-200 text-mono-600 border-mono-200",
  "select-none",
].join(" ");

const hoverClasses =
  "cursor-pointer transition-colors duration-150 hover:bg-mono-700 hover:text-mono-100 hover:border-mono-700";

export function Label({ children, className, href, ...props }: LabelProps & { href?: string }) {
  const [hovered, setHovered] = useState(false);
  const label = typeof children === "string" ? children : null;
  const decrypted = useTextDecrypt(label ?? "", hovered);

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={cn(baseClasses, hoverClasses, className)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {label !== null ? decrypted : children}
      </a>
    );
  }

  return (
    <span
      className={cn(baseClasses, className)}
      {...(props as HTMLAttributes<HTMLSpanElement>)}
    >
      {children}
    </span>
  );
}
