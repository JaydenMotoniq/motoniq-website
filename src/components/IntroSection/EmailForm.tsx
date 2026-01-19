"use client";

import { useMemo, useRef } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import classes from "./IntroSection.module.scss";
import { useWaitlist } from "@/hooks/useWaitlist";
import clsx from "clsx";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getButtonText = ({
  isSubmitting,
  isSubmittedEmail,
  isEmailValid,
  currentEmail,
  variant,
}: {
  isSubmitting: boolean;
  isSubmittedEmail: boolean;
  isEmailValid: boolean;
  currentEmail: string;
  variant: "vertical" | "horizontal";
}) => {
  if (isSubmitting) return "Submitting...";
  if (isSubmittedEmail) return "Email Submitted";
  if (!currentEmail)
    return variant === "horizontal" ? "Get Early Access" : "Partner With Us";
  if (!isEmailValid) return "Enter Email Address";
  return "Partner with us";
};

interface EmailFormProps {
  variant: "horizontal" | "vertical";
}

export const EmailForm = ({ variant }: EmailFormProps) => {
  const {
    email,
    error,
    setEmail,
    setError,
    addEmailToWaitlist,
    submittedEmail,
    isSubmitting,
  } = useWaitlist();

  const inputRef = useRef<HTMLInputElement>(null);

  const isEmailValidDefault = useMemo(() => {
    if (!inputRef.current) return false;

    const isValid = inputRef.current?.checkValidity();

    return isValid;
  }, [inputRef, email]);

  const buttonText = useMemo(() => {
    return getButtonText({
      isSubmitting,
      isSubmittedEmail: Boolean(submittedEmail),
      isEmailValid: isEmailValidDefault,
      currentEmail: email,
      variant,
    });
  }, [isSubmitting, submittedEmail, isEmailValidDefault, variant, email]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;
    if (!email) return setError("Email is required");
    if (!isEmailValidDefault) {
      return setError("Email invalid, please enter a valid email address.");
    }
    if (!emailRegex.test(email)) {
      return setError("Email invalid, please enter a valid email address.");
    }

    if (submittedEmail) return;

    try {
      await addEmailToWaitlist(email);
    } catch (error) {
      console.error(error);
      setError("Failed to add email to waitlist");
    } finally {
    }
  };

  const isButtonDisabled = submittedEmail || (email && !isEmailValidDefault);

  return (
    <form
      className={clsx(classes.emailForm, classes[`emailForm_${variant}`])}
      onSubmit={handleSubmit}
    >
      {!submittedEmail && (
        <Input
          value={email}
          minLength={3}
          type="email"
          error={error}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder="Enter your email address"
          ref={inputRef}
        />
      )}

      {submittedEmail && (
        <div className={classes.submittedEmail}>
          <p className={""}>Submitted Email: </p>

          <div className={classes.submittedEmail_content}>
            <SuccessIcon />
            <span>
              {submittedEmail.length > 20
                ? submittedEmail.slice(0, 20) + "..."
                : submittedEmail}
            </span>
          </div>
        </div>
      )}
      <Button
        type="submit"
        variant={
          isButtonDisabled
            ? "darkDisabled"
            : variant === "horizontal"
            ? "dark"
            : "accent"
        }
        className={`${isButtonDisabled ? classes.button_disabled : ""} ${
          isSubmitting ? classes.button_loading : ""
        }`}
        isLoading={isSubmitting}
        text={buttonText}
        isDisabled={Boolean(isButtonDisabled)}
      />
    </form>
  );
};

const SuccessIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8725 4.08105L5.45585 10.4977L2.53918 7.58105"
        stroke="#171315"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
