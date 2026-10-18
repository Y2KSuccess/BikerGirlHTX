import { CTAButton } from "@/components/CTAButton";
import { SectionLabel } from "@/components/SectionLabel";
import { VideoScene } from "@/components/VideoScene";
import { MapPreview } from "@/components/MapPreview";
import { LINKS, LOCATION, VIDEOS } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

/**
 * Major conversion section — deep charcoal/black contrast against the
 * surrounding cream sections.
 */
export function BookingSection() {
  return (
    <section
      id="booking"
      className="relative bg-[var(--color-ink)] px-6 py-24 md:px-10 md:py-36 lg:py-44"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6">
          <SectionLabel tone="light">{COPY.booking.label}</SectionLabel>
          <h2 className="mt-4 font-display text-5xl italic leading-[0.98] text-[var(--color-cream)] md:text-6xl lg:text-7xl">
            <span className="block">{COPY.booking.headlineTop}</span>
            <span className="block">{COPY.booking.headlineBottom}</span>
          </h2>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2 text-[var(--color-cream)]/80">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-sm">
                {LOCATION.studio} &middot; {LOCATION.city}
              </span>
            </div>
          </div>

          <div className="mt-5">
            <MapPreview
              href={LOCATION.mapsUrl}
              embedSrc={LOCATION.mapEmbedSrc}
              label={LOCATION.studio}
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <CTAButton href={LINKS.bookRide} external variant="light">
              {COPY.booking.ctaPrimary}
            </CTAButton>
            <a
              href={LINKS.rideApp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-cream)]/80 transition-opacity hover:opacity-60"
            >
              {COPY.booking.ctaSecondary} &rarr;
            </a>
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <div className="relative aspect-[9/16] overflow-hidden">
            <VideoScene
              src={VIDEOS.ride.src}
              poster={VIDEOS.ride.poster}
              className="h-full w-full"
              objectPosition="center 60%"
              ariaLabel="Riders in a RIDE indoor cycling class"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
