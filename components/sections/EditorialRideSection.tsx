"use client";

import { VideoScene } from "@/components/VideoScene";
import { MediaFrame } from "@/components/MediaFrame";
import { LocationPin } from "@/components/LocationPin";
import { LOCATION, VIDEOS } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

/**
 * "Chelsea in action" — return to light/cream. The source footage is
 * vertical, so rather than force it into a wide horizontal crop (which
 * punches in hard and looks pixelated), this keeps the video in its
 * natural portrait shape, generously sized, with editorial type running
 * alongside it — a size progression from location, to studio, to the
 * "your favorite instructor" payoff line.
 */
export function EditorialRideSection() {
  return (
    <section className="relative bg-[var(--color-bg)] px-6 py-24 md:px-10 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6 md:col-start-1">
            <MediaFrame aspect="aspect-[9/16]" className="mx-auto max-w-[420px] md:mx-0 md:max-w-none">
              <VideoScene
                src={VIDEOS.action.src}
                poster={VIDEOS.action.poster}
                className="h-full w-full"
                objectPosition="center 30%"
                ariaLabel="Chelsea leading class under warm red lighting"
              />
            </MediaFrame>
          </div>

          <div className="flex flex-col gap-4 md:col-span-5 md:col-start-8 md:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-lg font-medium tracking-wide text-[var(--color-muted)] md:text-xl">
                {COPY.action.location}
              </span>
              <LocationPin href={LOCATION.mapsUrl} label={LOCATION.studio} />
            </div>

            <span className="font-display text-3xl italic text-[var(--color-fg)] md:text-5xl">
              {COPY.action.studio}
            </span>

            <span className="font-display text-5xl italic leading-[1.05] text-[var(--color-fg)] md:text-7xl">
              {COPY.action.tagline} <span aria-hidden="true">✨</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
