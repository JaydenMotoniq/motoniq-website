"use client";

import clsx from "clsx";
import classes from "./Button.module.scss";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "dark" | "accent" | "light" | "darkDisabled";
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "light",
  isLoading = false,
  className = "",
  isDisabled = false,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        classes.button,
        classes[`button_${variant}`],
        isLoading && classes.loading,
        isDisabled && classes.disabled,
        className
      )}
    >
      {isLoading && (
        <LoadingIcon
          variant={isLoading && variant === "dark" ? "dark" : "green"}
        />
      )}
      <AnimatePresence mode="wait">
        <motion.p
          key={`${text}-${isLoading}-${isDisabled}-${variant}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          {text}
        </motion.p>
      </AnimatePresence>
    </button>
  );
};

export const LoadingIcon = ({ variant }: { variant: "dark" | "green" }) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.loadingIcon}
    >
      <g clipPath="url(#clip0_939_203)">
        <path
          d="M7.04793 1.16669V3.50002M9.49793 4.55002L11.1896 2.85835M10.5479 7.00002H12.8813M9.49793 9.45002L11.1896 11.1417M7.04793 10.5V12.8334M2.90627 11.1417L4.59793 9.45002M1.2146 7.00002H3.54793M2.90627 2.85835L4.59793 4.55002"
          stroke={variant === "dark" ? "#000000" : "#D5F959"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_939_203">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0.0478516)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Button;
