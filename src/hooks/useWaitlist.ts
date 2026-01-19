import { sendWaitlistData } from "@/app/actions";
import { useEffect, useState } from "react";

export const useWaitlist = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const syncSubmittedState = () => {
      try {
        const raw = localStorage.getItem("waitlist");
        if (!raw) return;
        const waitlist = JSON.parse(raw) as Record<
          string,
          { email: string; timestamp: number }
        >;
        const email = Object.keys(waitlist)[0] || "";
        if (email) setSubmittedEmail(email);
      } catch {}
    };

    syncSubmittedState();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "waitlist") {
        syncSubmittedState();
      }
    };

    const handleWaitlistUpdate = () => {
      syncSubmittedState();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("waitlist-updated", handleWaitlistUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("waitlist-updated", handleWaitlistUpdate);
    };
  }, []);

  const addEmailToWaitlist = async (email: string) => {
    if (isSubmitting) return;

    const waitlist = JSON.parse(localStorage.getItem("waitlist") || "{}");
    waitlist[email] = { email, timestamp: Date.now() };
    try {
      setError("");
      setIsSubmitting(true);

      const response = await sendWaitlistData(email);
      if (response === true) {
        localStorage.setItem("waitlist", JSON.stringify(waitlist));
        setSubmittedEmail(email);
        window.dispatchEvent(new CustomEvent("waitlist-updated"));
      } else {
        setError(response);
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail,
    error,
    setError,
    addEmailToWaitlist,
    submittedEmail,
    isSubmitting,
  };
};
