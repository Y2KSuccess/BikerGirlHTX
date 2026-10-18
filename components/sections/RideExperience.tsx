"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollFadeMedia } from "@/components/ScrollFadeMedia";
import { SectionLabel } from "@/components/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { VIDEOS } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const scenes = [
  {
    src: VIDEOS.ride.src,
    poster: VIDEOS.ride.poster,
    ariaLabel: "Chelsea standing on the bike under red and blue club lighting",
    objectPosition: "center 25%",
  },
  {
    src: VIDEOS.ride.src,
    poster: VIDEOS.ride.poster,
    ariaLabel: "Riders moving together in the studio",
    objectPosition: "center 40%",
  },
  {
    src: VIDEOS.action.src,
    poster: VIDEOS.action.poster,
    ariaLabel: "Close, energetic shot of Chelsea pushing through the ride",
    objectPosition: "center 30%",
  },
  {
    src: VIDEOS.connect.src,
    poster: VIDEOS.connect.poster,
    ariaLabel: "Riders celebrating together at the end of class",
    objectPosition: "center 35%",
  },
];

/**
 * The signature pinned sequence. Desktop: media stays fixed full-screen
 * inside a tall scroll container while RIDE / MOVE / PUSH / CONNECT
 * crossfade in as text, and the video stack dissolves beneath them.
 * Mobile: shorter, simpler stacked crossfades — no pin, no scroll-jacking.
 */
export function RideExperience() {
  const desktopTriggerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (reduced || !isDesktop || !desktopTriggerRef.current) return;

    const ctx = gsap.context(() => {
      const items = textRefs.current.filter(Boolean) as HTMLDivElement[];
      gsap.set(items, { opacity: 0, y: 16 });
      gsap.set(items[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: desktopTriggerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      const segment = 1 / items.length;
      items.forEach((item, i) => {
        const start = i * segment;
        if (i > 0) {
          tl.to(items[i - 1], { opacity: 0, y: -16, ease: "none" }, start - 0.05);
        }
        tl.to(item, { opacity: 1, y: 0, ease: "none" }, start);
        if (i < items.length - 1) {
          tl.to(item, { opacity: 1, y: 0, ease: "none" }, start + segment - 0.1);
        }
      });
    }, desktopTriggerRef);

    return () => ctx.revert();
  }, [reduced, isDesktop]);

  if (!isDesktop || reduced) {
    // Mobile / reduced-motion: simple stacked sections, no pin.
    return (
      <section id="ride-experience" className="relative bg-[var(--color-ink)]">
        <div className="px-6 pt-16 pb-8 text-center">
          <SectionLabel tone="light">{COPY.rideExperience.label}</SectionLabel>
        </div>
        {COPY.rideExperience.beats.map((beat, i) => {
          const scene = scenes[i];
          return (
            <div
              key={beat.word}
              className="relative flex h-[80vh] min-h-[420px] w-full items-end overflow-hidden"
            >
              {reduced ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={scene.poster}
                  alt={scene.ariaLabel}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: scene.objectPosition }}
                />
              ) : (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: scene.objectPosition }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={scene.poster}
                  preload={i === 0 ? "auto" : "metadata"}
                  aria-label={scene.ariaLabel}
                >
                  <source src={scene.src} type="video/mp4" />
                </video>
              )}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.65) 100%)",
                }}
                aria-hidden="true"
                suppressHydrationWarning
              />
              <div className="relative z-10 px-6 pb-14">
                <p className="font-display text-6xl italic text-[var(--color-cream)]">
                  {beat.word}
                </p>
                <p className="mt-2 text-sm font-medium tracking-wide text-[var(--color-cream)]/80">
                  {beat.sub}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    );
  }

  // Desktop pinned experience
  return (
    <section
      id="ride-experience"
      ref={desktopTriggerRef}
      className="relative bg-[var(--color-ink)]"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ScrollFadeMedia
          scenes={scenes}
          triggerRef={desktopTriggerRef}
          className="h-full w-full"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.6) 100%)",
          }}
          aria-hidden="true"
          suppressHydrationWarning
        />

        <div className="absolute left-0 right-0 top-10 z-10 text-center">
          <SectionLabel tone="light">{COPY.rideExperience.label}</SectionLabel>
        </div>

        <div className="relative z-10 flex h-full w-full items-end px-10 pb-20 lg:px-16 lg:pb-28">
          <div className="relative h-[10rem] w-full max-w-[1600px] mx-auto lg:h-[12rem]">
            {COPY.rideExperience.beats.map((beat, i) => (
              <div
                key={beat.word}
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
                className="absolute inset-0 flex flex-col justify-end"
              >
                <p className="font-display text-[13vw] italic leading-none text-[var(--color-cream)] lg:text-[8rem]">
                  {beat.word}
                </p>
                <p className="mt-3 text-base font-medium tracking-wide text-[var(--color-cream)]/80">
                  {beat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
