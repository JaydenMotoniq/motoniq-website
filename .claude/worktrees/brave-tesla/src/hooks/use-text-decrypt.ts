"use client";

import { useEffect, useRef, useState } from "react";

// Hex pool — cryptographic feel
const POOL = "0123456789ABCDEF";

function shuffled(arr: number[]): number[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/**
 * Scrambles `text` character-by-character, resolving in a randomised order
 * while `active` is true. Non-alphanumeric characters (spaces, @, ·, .) are
 * always kept in place so the shape of the text stays readable.
 *
 * @param text    The final string to decode into
 * @param active  Start/stop the effect
 * @param speed   Interval between frames in ms (default 30)
 */
export function useTextDecrypt(
  text: string,
  active: boolean,
  speed = 30,
): string {
  const [output, setOutput] = useState(text);
  const frame = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  // Pre-computed random resolve order for the current `text`
  const order = useRef<number[]>([]);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);

    if (!active) {
      setOutput(text);
      frame.current = 0;
      return;
    }

    // Build a shuffled list of indices for alphanumeric characters only
    const alphaIndices = text
      .split("")
      .map((c, i) => (/[a-zA-Z0-9]/.test(c) ? i : -1))
      .filter((i) => i !== -1);
    order.current = shuffled(alphaIndices);
    frame.current = 0;

    timer.current = setInterval(() => {
      frame.current++;
      // Resolve one character every 2 frames
      const resolvedCount = Math.floor(frame.current / 2);
      const resolvedSet = new Set(order.current.slice(0, resolvedCount));

      setOutput(
        text
          .split("")
          .map((char, i) => {
            if (!/[a-zA-Z0-9]/.test(char)) return char;
            if (resolvedSet.has(i)) return char;
            return POOL[Math.floor(Math.random() * POOL.length)];
          })
          .join(""),
      );

      if (resolvedCount >= alphaIndices.length) {
        clearInterval(timer.current!);
        setOutput(text);
      }
    }, speed);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [active, text, speed]);

  return output;
}
