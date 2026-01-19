"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";

type AnimatedDecryptTextProps = {
  text?: string;
  texts?: string[];
  duration?: number;
  revealRate?: number;
  glyphs?: string;
  skipChars?: RegExp;
  className?: string;
  startOnView?: boolean;
  pauseBetweenMs?: number;
  preDecryptMs?: number;
  scrambleOutDuration?: number;
};

const DEFAULT_GLYPHS = "01<>[]{}()/-_=+*#|!#%^&~+";
const DEFAULT_SKIP_RE = /[\s\n]/;

export const AnimatedText = ({
  text,
  texts,
  duration = 1400,
  revealRate,
  glyphs = DEFAULT_GLYPHS,
  skipChars,
  className,
  startOnView = true,
  pauseBetweenMs = 400,
  preDecryptMs = 300,
}: AnimatedDecryptTextProps) => {
  const skipRe = useMemo(() => skipChars ?? DEFAULT_SKIP_RE, [skipChars]);

  const sequence = useMemo(() => {
    const arr = texts && texts.length ? texts : [text ?? ""];
    return arr;
  }, [texts, text]);
  const [outputLines, setOutputLines] = useState<string[]>(() =>
    (sequence[0] ?? "").split("\n")
  );
  const [fade, setFade] = useState<number>(1);

  const rafId = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const hasStartedRef = useRef(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const timeoutIdsRef = useRef<number[]>([]);

  const scheduleTimeout = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timeoutIdsRef.current.push(id);
    return id;
  }, []);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);

  const stop = useCallback(() => {
    if (rafId.current != null) cancelAnimationFrame(rafId.current);
    rafId.current = null;
    isAnimatingRef.current = false;
    if (timeoutIdsRef.current.length) {
      for (const id of timeoutIdsRef.current) clearTimeout(id);
      timeoutIdsRef.current = [];
    }
  }, []);

  const getLines = useCallback((t: string) => t.split("\n"), []);

  const startAtIndex = useCallback(
    (index: number, preScrambledLines?: string[]) => {
      if (prefersReducedMotion) {
        setOutputLines(getLines(sequence[index % sequence.length] ?? ""));
        return;
      }

      stop();
      isAnimatingRef.current = true;
      startTimeRef.current = null;

      const target = sequence[index % sequence.length] ?? "";
      const targetLines = getLines(target);
      const byLine = targetLines.map((ln) => ln.split(""));
      const revealableIndexes: Array<{ line: number; col: number }> = [];
      byLine.forEach((arr, line) => {
        arr.forEach((ch, col) => {
          if (!skipRe.test(ch)) revealableIndexes.push({ line, col });
        });
      });

      const work =
        preScrambledLines && preScrambledLines.length === targetLines.length
          ? preScrambledLines.map((ln) => ln.split(""))
          : byLine.map((ln) => [...ln]);
      const total = revealableIndexes.length;
      if (!preScrambledLines) {
        for (let i = 0; i < total; i++) {
          const { line, col } = revealableIndexes[i];
          work[line][col] = glyphs[Math.floor(Math.random() * glyphs.length)];
        }
      }
      setOutputLines(work.map((arr) => arr.join("")));

      const msPerChar =
        revealRate && revealRate > 0
          ? 1000 / revealRate
          : total > 0
          ? duration / total
          : duration;

      const tick: FrameRequestCallback = (ts) => {
        if (!isAnimatingRef.current) return;
        if (startTimeRef.current === null) startTimeRef.current = ts;
        const elapsed = ts - startTimeRef.current;

        const revealCount = Math.min(total, Math.floor(elapsed / msPerChar));

        for (let i = 0; i < revealCount; i++) {
          const { line, col } = revealableIndexes[i];
          work[line][col] = byLine[line][col];
        }

        setOutputLines(work.map((arr) => arr.join("")));

        if (revealCount >= total) {
          setOutputLines(targetLines);
          stop();

          scheduleTimeout(() => {
            // prepare next phrase scrambled (keep decrypt-in), but skip scramble-out
            const nextIndex = (index + 1) % sequence.length;
            const nextTarget = sequence[nextIndex] ?? "";
            const nextByLine = getLines(nextTarget).map((ln) => ln.split(""));
            const nextRevealable: Array<{ line: number; col: number }> = [];
            nextByLine.forEach((arr, line) => {
              arr.forEach((ch, col) => {
                if (!skipRe.test(ch)) nextRevealable.push({ line, col });
              });
            });
            const scrambledNext = nextByLine.map((ln) => [...ln]);
            for (let i = 0; i < nextRevealable.length; i++) {
              const { line, col } = nextRevealable[i];
              scrambledNext[line][col] =
                glyphs[Math.floor(Math.random() * glyphs.length)];
            }
            const scrambledNextLines = scrambledNext.map((arr) => arr.join(""));

            // Crossfade to the next scrambled phrase, then decrypt-in
            setFade(0);
            scheduleTimeout(() => {
              setOutputLines(scrambledNextLines);
              setFade(1);
            }, 180);

            scheduleTimeout(() => {
              startAtIndex(nextIndex, scrambledNextLines);
            }, preDecryptMs + 180);
          }, pauseBetweenMs);
        } else {
          rafId.current = requestAnimationFrame(tick);
        }
      };

      rafId.current = requestAnimationFrame(tick);
    },
    [
      prefersReducedMotion,
      getLines,
      sequence,
      stop,
      skipRe,
      glyphs,
      revealRate,
      duration,
      scheduleTimeout,
      pauseBetweenMs,
      preDecryptMs,
    ]
  );

  useEffect(() => {
    stop();
    if (prefersReducedMotion) {
      setOutputLines(getLines(sequence[0] ?? ""));
      return;
    }

    if (startOnView) {
      hasStartedRef.current = false;
      const node = containerRef.current;
      if (!node || typeof IntersectionObserver === "undefined") {
        const id = scheduleTimeout(() => startAtIndex(0), 0);
        return () => clearTimeout(id);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting && !hasStartedRef.current) {
            hasStartedRef.current = true;
            startAtIndex(0);
            observer.unobserve(node);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(node);

      return () => {
        observer.disconnect();
      };
    } else {
      const id = scheduleTimeout(() => startAtIndex(0), 0);
      return () => {
        clearTimeout(id);
        stop();
      };
    }
  }, [
    prefersReducedMotion,
    startOnView,
    startAtIndex,
    stop,
    getLines,
    sequence,
    scheduleTimeout,
  ]);

  return (
    <motion.span
      ref={containerRef}
      className={className}
      aria-label={(sequence[0] ?? "").toString()}
      role="text"
      style={{ display: "inline-block", whiteSpace: "pre-line" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: fade }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {outputLines.map((ln, i) => (
        <span key={i}>
          {ln}
          {i < outputLines.length - 1 ? <br className="br-hidden" /> : null}
        </span>
      ))}
    </motion.span>
  );
};
