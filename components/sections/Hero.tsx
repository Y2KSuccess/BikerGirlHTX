"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CTAButton } from "@/components/CTAButton";
import { VideoScene } from "@/components/VideoScene";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { VIDEOS, LINKS } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

export function Hero() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLAnchorElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // No separate "mounted" gate needed here -- useEffect already only
  // runs client-side after mount, so it's an equivalent (and simpler)
  // guard than the old setState-in-an-effect "ready" flag was.
  useEffect(() => {
    if (reduced) return;
    const targets = [
      line1Ref.current,
      line2Ref.current,
      ctaRef.current,
      supportRef.current,
    ].filter(Boolean);

    gsap.set(targets, { y: 28, opacity: 0 });
    gsap.to(targets, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.16,
      delay: 0.3,
    });
  }, [reduced]);

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden"
    >
      <VideoScene
        src={VIDEOS.hero.src}
        poster={VIDEOS.hero.poster}
        priority
        className="absolute inset-0 h-full w-full"
        objectPosition="center 30%"
        ariaLabel="Chelsea teaching an indoor cycling class in a dark, blue-lit studio"
      />

      {/* Readability gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,12,0.35) 0%, rgba(10,10,12,0.05) 30%, rgba(10,10,12,0.55) 78%, rgba(10,10,12,0.75) 100%)",
        }}
        aria-hidden="true"
        suppressHydrationWarning
      />

      <div className="relative z-10 w-full px-6 pb-16 md:px-10 md:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-4 text-xs font-medium tracking-[0.25em] text-[var(--color-cream)]/80 md:mb-6">
            {COPY.hero.eyebrow}
          </p>

          <h1 className="font-display text-[15vw] leading-[0.95] text-[var(--color-cream)] italic md:text-[9vw] lg:text-[7.5rem]">
            <div ref={line1Ref} className="overflow-hidden">
              <span className="block">{COPY.hero.headlineTop}</span>
            </div>
            <div ref={line2Ref} className="overflow-hidden">
              <span className="block">{COPY.hero.headlineBottom}</span>
            </div>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-6 md:mt-10">
            <div ref={ctaRef}>
              <CTAButton href={LINKS.bookRide} external variant="light">
                {COPY.hero.ctaPrimary}
              </CTAButton>
            </div>
            <a
              href="#introduction"
              ref={supportRef}
              className="text-sm font-medium text-[var(--color-cream)]/85 transition-opacity hover:opacity-70"
            >
              {COPY.hero.ctaSecondary} &darr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
