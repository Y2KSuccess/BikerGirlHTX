"use client";

import { useEffect, useRef, useState } from "react";
import type { CarouselItem } from "@/lib/site-config";

interface ContentCarouselProps {
  items: CarouselItem[];
  className?: string;
}

/**
 * Horizontally swipeable carousel for a mix of photos and short video
 * loops. Native scroll-snap (no JS drag library needed) — works with
 * touch, trackpad, and scroll wheel out of the box. Video sources are
 * always present with preload="metadata" (cheap — the files are ~1.5MB),
 * and each video just plays/pauses based on visibility, so a long
 * carousel doesn't autoplay a dozen videos at once.
 */
export function ContentCarousel({ items, className = "" }: ContentCarouselProps) {
  return (
    <div
      className={`flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {items.map((item) => (
        <CarouselTile key={item.id} item={item} />
      ))}
    </div>
  );
}

function CarouselTile({ item }: { item: CarouselItem }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (item.type !== "video" || !wrapperRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.75 }
    );
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [item.type]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    if (inView) {
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          // Autoplay can be blocked (policy, or a pause() that raced this
          // play()) — that's fine, the poster frame stays visible.
        });
      }
    } else {
      // Wait a tick before pausing: if inView flips false->true->false
      // rapidly (common right at the scroll-snap boundary), this avoids
      // pausing a video whose play() is still in flight.
      const id = requestAnimationFrame(() => {
        if (!cancelled) video.pause();
      });
      return () => {
        cancelled = true;
        cancelAnimationFrame(id);
      };
    }

    return () => {
      cancelled = true;
    };
  }, [inView]);

  return (
    <div
      ref={wrapperRef}
      className="relative aspect-[9/16] w-[62vw] max-w-[240px] shrink-0 snap-center overflow-hidden md:w-[220px]"
    >
      {item.type === "image" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          poster={item.poster}
          preload="metadata"
          aria-label={item.alt}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
