"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Scene {
  src: string;
  poster: string;
  ariaLabel?: string;
  objectPosition?: string;
}

interface ScrollFadeMediaProps {
  scenes: Scene[];
  /** Ref to the pinned/scroll container that drives progress. */
  triggerRef: React.RefObject<HTMLElement | null>;
  className?: string;
}

/**
 * Stacks multiple video scenes in the same container and cross-dissolves
 * between them as scroll progresses through the trigger element, using a
 * scrubbed GSAP timeline. Includes a subtle 1.02 -> 1.00 scale breathing
 * so it reads as a photographic dissolve rather than a hard cut.
 */
export function ScrollFadeMedia({
  scenes,
  triggerRef,
  className = "",
}: ScrollFadeMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !containerRef.current || !triggerRef.current) return;
    const layers = containerRef.current.querySelectorAll<HTMLElement>(
      "[data-scene]"
    );
    if (layers.length < 2) return;

    gsap.set(layers, { opacity: 0, scale: 1.02 });
    gsap.set(layers[0], { opacity: 1, scale: 1 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      const segment = 1 / (layers.length - 1);
      layers.forEach((layer, i) => {
        if (i === 0) return;
        const start = (i - 1) * segment;
        tl.to(
          layers[i - 1],
          { opacity: 0, scale: 1.0, ease: "none" },
          start
        ).to(layer, { opacity: 1, scale: 1.0, ease: "none" }, start);
      });
    });

    return () => ctx.revert();
  }, [reduced, triggerRef, scenes.length]);

  if (reduced) {
    // Reduced motion: show only the first (most representative) scene, static.
    const scene = scenes[0];
    return (
      <div className={`relative ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={scene.poster}
          alt={scene.ariaLabel ?? ""}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: scene.objectPosition ?? "center" }}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {scenes.map((scene, i) => (
        <div
          key={i}
          data-scene
          className="absolute inset-0 h-full w-full"
        >
          <video
            className="h-full w-full object-cover"
            style={{ objectPosition: scene.objectPosition ?? "center" }}
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
        </div>
      ))}
    </div>
  );
}
