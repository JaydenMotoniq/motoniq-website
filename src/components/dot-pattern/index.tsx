"use client";

import { useEffect, useRef } from "react";

export function DotPattern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create dots grid
    const spacing = 48; // spacing between dots
    const dotSize = 2; // dot size in pixels
    const offset = 24; // offset from screen edges
    const cols = Math.ceil((window.innerWidth - offset * 2) / spacing) + 1;
    const rows = Math.ceil((window.innerHeight - offset * 2) / spacing) + 1;

    dotsRef.current = [];
    container.innerHTML = "";

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const dot = document.createElement("div");
        dot.className =
          "absolute rounded-full bg-mono-450 transition-transform duration-300 ease-out";
        dot.style.width = `${dotSize}px`;
        dot.style.height = `${dotSize}px`;
        dot.style.left = `${offset + col * spacing}px`;
        dot.style.top = `${offset + row * spacing}px`;
        dot.style.transformStyle = "preserve-3d";

        container.appendChild(dot);
        dotsRef.current.push(dot);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const radius = 150; // radius of effect in pixels
      const maxLift = 40; // maximum lift in pixels

      dotsRef.current.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        const dotX = rect.left + rect.width / 2;
        const dotY = rect.top + rect.height / 2;

        // Calculate distance from cursor to dot
        const dx = clientX - dotX;
        const dy = clientY - dotY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          // Calculate lift amount based on distance (closer = more lift)
          const normalizedDistance = distance / radius;
          const lift = maxLift * (1 - normalizedDistance);

          // Apply 3D transform
          dot.style.transform = `translateZ(${lift}px) scale(${1 + lift / 100})`;
        } else {
          dot.style.transform = "translateZ(0px) scale(1)";
        }
      });
    };

    const handleMouseLeave = () => {
      dotsRef.current.forEach((dot) => {
        dot.style.transform = "translateZ(0px) scale(1)";
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{
          perspective: "1000px",
        }}
      />
    </div>
  );
}
