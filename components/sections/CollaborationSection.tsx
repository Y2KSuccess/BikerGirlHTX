import { CTAButton } from "@/components/CTAButton";
import { ContentCarousel } from "@/components/ContentCarousel";
import { CAROUSEL_ITEMS, COLLAB_MAILTO, LINKS } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

/**
 * Light editorial collaboration pitch. A swipeable carousel of Chelsea's
 * lifestyle/brand photos and short clips (not a services-page grid of
 * icons) plus a clear work-with-Chelsea CTA and visible email.
 */
export function CollaborationSection() {
  return (
    <section
      id="collaboration"
      className="relative bg-[var(--color-bg-soft)] px-6 py-24 md:px-10 md:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[640px]">
          <h2 className="font-display text-5xl italic leading-[0.98] text-[var(--color-fg)] md:text-6xl">
            <span className="block">{COPY.collaboration.headlineTop}</span>
            <span className="block">{COPY.collaboration.headlineBottom}</span>
          </h2>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {COPY.collaboration.categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-muted)]"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <CTAButton href={COLLAB_MAILTO} variant="dark">
              {COPY.collaboration.cta}
            </CTAButton>
          </div>

          <a
            href={COLLAB_MAILTO}
            className="mt-5 inline-block text-sm text-[var(--color-muted)] underline decoration-[var(--color-border)] underline-offset-4 transition-colors hover:text-[var(--color-fg)]"
          >
            {LINKS.collabEmail}
          </a>
        </div>

        <div className="mt-16">
          <ContentCarousel items={CAROUSEL_ITEMS} />
        </div>
      </div>
    </section>
  );
}
