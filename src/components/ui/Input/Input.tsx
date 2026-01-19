import clsx from "clsx";
import classes from "./Input.module.scss";
import { RefObject } from "react";
import { motion, AnimatePresence } from "motion/react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  ref?: RefObject<HTMLInputElement | null>;
};

const Input = ({ error, ref, ...props }: Props) => {
  return (
    <div className={clsx(classes.input, error && classes.input_error)}>
      <input {...props} className={classes.input__field} ref={ref} />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={classes.input__error}
          >
            <InfoIcon />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const InfoIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_939_219)">
        <path
          d="M6.99959 4.66666V6.99999M6.99959 9.33332H7.00543M12.8329 6.99999C12.8329 10.2217 10.2213 12.8333 6.99959 12.8333C3.77793 12.8333 1.16626 10.2217 1.16626 6.99999C1.16626 3.77833 3.77793 1.16666 6.99959 1.16666C10.2213 1.16666 12.8329 3.77833 12.8329 6.99999Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_939_219">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(-0.000488281)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Input;
