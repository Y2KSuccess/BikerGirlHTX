"use client";

import Link from "next/link";
import { ReactNode, useRef } from "react";

type Variant = "dark" | "light" | "outline-dark" | "outline-light";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  showArrow?: boolean;
  external?: boolean;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  dark: "bg-[var(--color-ink)] text-[var(--color-cream)]",
  light: "bg-[var(--color-cream)] text-[var(--color-ink)]",
  "outline-dark":
    "bg-transparent text-[var(--color-ink)] border border-[var(--color-ink)]",
  "outline-light":
    "bg-transparent text-[var(--color-cream)] border border-[var(--color-cream)]",
};

/**
 * Premium pill CTA button. Hover uses a subtle scale + arrow shift —
 * never bounce, never glow. Touch devices get the same resting state
 * as the hover state's readability (no hover-dependent info).
 */
export function CTAButton({
  href,
  children,
  variant = "dark",
  showArrow = true,
  external = false,
  className = "",
}: CTAButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const baseClasses = `group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-transform duration-300 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.98] ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        >
          &rarr;
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {content}
    </Link>
  );
}
