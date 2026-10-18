import { CTAButton } from "@/components/CTAButton";
import { LINKS } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

/**
 * Deliberately quiet section — pure typography on cream, no video.
 * A visual "pause" between the high-energy Ride Experience and the
 * next cinematic moment, per the brief's negative-space emphasis.
 *
 * "My why" links out to Instagram for now, since Chelsea's full
 * personal statement isn't written yet — swap this href for an
 * on-page anchor once that copy exists.
 */
export function WhySheRides() {
  return (
    <section className="relative bg-[var(--color-bg)] px-6 py-28 md:px-10 md:py-44 lg:py-52">
      <div className="mx-auto max-w-[900px] text-center">
        <h2 className="font-display text-4xl italic leading-tight text-[var(--color-fg)] md:text-6xl">
          {COPY.whySheRides.headline}
        </h2>
        <p className="mx-auto mt-8 max-w-[50ch] text-lg leading-relaxed text-[var(--color-fg-soft)] md:text-xl">
          {COPY.whySheRides.body}
        </p>
        <div className="mt-8">
          <CTAButton href={LINKS.instagram} external variant="outline-dark">
            {COPY.whySheRides.link}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
