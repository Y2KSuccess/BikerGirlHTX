import { CTAButton } from "@/components/CTAButton";
import { VideoScene } from "@/components/VideoScene";
import { COLLAB_MAILTO, LINKS, VIDEOS } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

/**
 * The emotional ending — full-screen cinematic footage again, different
 * from the hero clip, dark and atmospheric. Both primary CTAs live here.
 */
export function FinalCTA() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden">
      <VideoScene
        src={VIDEOS.connect.src}
        poster={VIDEOS.connect.poster}
        className="absolute inset-0 h-full w-full"
        objectPosition="center 40%"
        ariaLabel="Riders celebrating together, silhouetted, at the end of class"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,12,0.55) 0%, rgba(10,10,12,0.35) 40%, rgba(10,10,12,0.75) 100%)",
        }}
        aria-hidden="true"
        suppressHydrationWarning
      />

      <div className="relative z-10 w-full px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-5xl italic leading-[0.98] text-[var(--color-cream)] md:text-7xl">
              {COPY.finalCta.headline}
            </h2>
            <p
              className="mt-5 text-2xl text-[var(--color-cream)]/85 md:text-3xl"
              style={{ fontFamily: "var(--font-script), var(--font-script-fallback)" }}
            >
              {COPY.finalCta.accent}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <CTAButton href={LINKS.bookRide} external variant="light">
              {COPY.finalCta.ctaPrimary}
            </CTAButton>
            <CTAButton href={COLLAB_MAILTO} variant="outline-light">
              {COPY.finalCta.ctaSecondary}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
