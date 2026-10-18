"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface VideoSceneProps {
  src: string;
  poster: string;
  className?: string;
  /** Load immediately (hero / above-the-fold) instead of lazy on intersection. */
  priority?: boolean;
  objectPosition?: string;
  ariaLabel?: string;
}

/**
 * A single autoplaying, muted, looping background video.
 * - priority videos load immediately (hero)
 * - non-priority videos only mount their <source> once scrolled near
 * - reduced-motion users get the poster frame, no video element at all
 */
export function VideoScene({
  src,
  poster,
  className = "",
  priority = false,
  objectPosition = "center",
  ariaLabel,
}: VideoSceneProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (priority || shouldLoad || reduced) return;
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, shouldLoad, reduced]);

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
      {reduced || !shouldLoad ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt={ariaLabel ?? ""}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          aria-label={ariaLabel}
          preload={priority ? "auto" : "metadata"}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
