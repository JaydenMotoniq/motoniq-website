import { type ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center",
          "rounded-full px-5 py-3",
          "font-(family-name:--font-proto-mono) text-base font-medium uppercase",
          "cursor-pointer transition-colors duration-200",
          "bg-mono-800 text-mono-0",
          "hover:bg-primary hover:text-mono-800",
          "disabled:bg-mono-400 disabled:text-mono-400 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
