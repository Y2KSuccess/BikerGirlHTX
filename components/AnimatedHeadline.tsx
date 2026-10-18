"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedHeadlineProps {
  lines: string[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "div";
}

/**
 * Refined line-by-line reveal: each line masks in with a soft
 * translate + opacity, staggered. No bounce, no dramatic overshoot —
 * a quiet editorial reveal that feels alive without announcing itself.
 */
export function AnimatedHeadline({
  lines,
  className = "",
  delay = 0,
  as = "div",
}: AnimatedHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !containerRef.current) return;
    const items = containerRef.current.querySelectorAll("[data-line]");
    gsap.set(items, { y: "100%", opacity: 0 });
    gsap.to(items, {
      y: "0%",
      opacity: 1,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.14,
      delay,
    });
  }, [reduced, delay]);

  const Tag = as === "div" ? "div" : as;

  return (
    <Tag ref={containerRef as never} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          style={{ lineHeight: 1.05 }}
        >
          <span data-line className="block">
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
