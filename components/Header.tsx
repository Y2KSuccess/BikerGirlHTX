"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CTAButton } from "./CTAButton";
import { NAV_LINKS, LINKS } from "@/lib/site-config";

/**
 * Minimal header. Transparent/light-text over the hero video, then
 * transitions to a solid cream bar with dark text once the visitor
 * scrolls past the hero. Mobile keeps just the wordmark + Book a Ride
 * plus a small menu toggle for the three nav links.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textTone = scrolled ? "text-[var(--color-ink)]" : "text-[var(--color-cream)]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[var(--color-cream)]/95 backdrop-blur-sm border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="#top"
          className={`font-display text-lg font-medium tracking-wide ${textTone}`}
        >
          Chelsea Marie
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium tracking-wide transition-opacity hover:opacity-60 ${textTone}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton
            href={LINKS.bookRide}
            external
            variant={scrolled ? "dark" : "light"}
          >
            Book a ride
          </CTAButton>
        </div>

        {/* Mobile: compact — wordmark (above) + menu toggle + always-visible booking */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={LINKS.bookRide}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-4 py-2 text-xs font-medium ${
              scrolled
                ? "bg-[var(--color-ink)] text-[var(--color-cream)]"
                : "bg-[var(--color-cream)] text-[var(--color-ink)]"
            }`}
          >
            Book a ride
          </a>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`flex h-9 w-9 flex-col items-center justify-center gap-1.5 ${textTone}`}
          >
            <span
              className={`h-px w-5 bg-current transition-transform ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-current transition-transform ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[var(--color-cream)] border-t border-[var(--color-border)] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
