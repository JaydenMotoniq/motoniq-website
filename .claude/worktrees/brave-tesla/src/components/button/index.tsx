"use client";

import { type ButtonHTMLAttributes, forwardRef, useState } from "react";

import { useTextDecrypt } from "@/hooks/use-text-decrypt";
import { cn } from "@/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, variant = "primary", onMouseEnter, onMouseLeave, ...props }, ref) => {
    const [hovered, setHovered] = useState(false);

    // Only decrypt string children; pass other nodes through as-is
    const label = typeof children === "string" ? children : null;
    const decrypted = useTextDecrypt(label ?? "", hovered && !disabled);

    return (
      <button
        ref={ref}
        disabled={disabled}
        onMouseEnter={(e) => { setHovered(true); onMouseEnter?.(e); }}
        onMouseLeave={(e) => { setHovered(false); onMouseLeave?.(e); }}
        className={cn(
          // Base layout
          "inline-flex items-center justify-center gap-1",
          "rounded-2 border px-3 py-1",
          // Base typography — D4 token (PP Fraktion Mono, 12px, 18px lh, -1%, uppercase)
          "font-pp-fraktion-mono text-d4 uppercase",
          // Interaction
          "cursor-pointer select-none transition-colors duration-150 outline-none",
          "disabled:cursor-not-allowed",

          // ── Primary ──────────────────────────────────────────────
          variant === "primary" && [
            // Default
            "bg-mono-700 text-mono-100 border-mono-700",
            // Hover
            "hover:bg-yellow-100 hover:text-mono-700 hover:border-mono-700",
            // Inactive
            "disabled:bg-mono-200 disabled:text-mono-400 disabled:border-mono-200",
          ],

          // ── Secondary ────────────────────────────────────────────
          variant === "secondary" && [
            // Default
            "bg-mono-200 text-mono-600 border-mono-200",
            // Hover
            "hover:bg-mono-700 hover:text-mono-100 hover:border-mono-700",
            // Inactive
            "disabled:bg-mono-200 disabled:text-mono-400 disabled:border-mono-200",
          ],

          className,
        )}
        {...props}
      >
        {label !== null ? decrypted : children}
      </button>
    );
  },
);

Button.displayName = "Button";
