"use client";

import { useRef } from "react";
import { VideoScene } from "@/components/VideoScene";
import { MediaFrame } from "@/components/MediaFrame";
import { VIDEOS } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

export function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="relative bg-[var(--color-bg)] px-6 py-24 md:px-10 md:py-36 lg:py-44"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
        {/* Media — asymmetric editorial placement */}
        <div className="relative md:col-span-5 md:col-start-1">
          <MediaFrame aspect="aspect-[9/16] md:aspect-[4/5]" className="grayscale">
            <VideoScene
              src={VIDEOS.intro.src}
              poster={VIDEOS.intro.poster}
              className="h-full w-full"
              objectPosition="center 20%"
              ariaLabel="Black and white footage of Chelsea celebrating during class"
            />
          </MediaFrame>
        </div>

        {/* Copy */}
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="font-display text-4xl italic leading-[1.05] text-[var(--color-fg)] md:text-5xl lg:text-6xl">
            {COPY.introduction.headline}
          </h2>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-[var(--color-fg-soft)] md:text-xl">
            {COPY.introduction.body}
          </p>
          <p
            className="mt-8 text-2xl text-[var(--color-muted)] md:text-3xl"
            style={{ fontFamily: "var(--font-script), var(--font-script-fallback)" }}
          >
            {COPY.introduction.accent}
          </p>
        </div>
      </div>
    </section>
  );
}
