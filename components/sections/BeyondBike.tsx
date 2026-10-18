import { CategoryIcon } from "@/components/CategoryIcon";
import { LINKS } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

/**
 * Simple, visually intriguing introduction to Chelsea's wider world —
 * not a resume, not five sub-pages. A horizontal category list plus
 * one line of framing copy.
 *
 * Each category links to Instagram for now — there's no dedicated page
 * per category yet. Swap these hrefs once there's a better destination
 * (a portfolio page, a highlight reel, etc.) per category.
 */
export function BeyondBike() {
  return (
    <section className="relative bg-[var(--color-bg)] px-6 py-24 md:px-10 md:py-36 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl italic leading-[1.05] text-[var(--color-fg)] md:text-5xl">
              {COPY.beyondBike.headline}
            </h2>
            <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-[var(--color-fg-soft)]">
              {COPY.beyondBike.body}
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ul className="flex flex-col divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
              {COPY.beyondBike.categories.map((cat) => (
                <li key={cat.label}>
                  <a
                    href={LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5 transition-opacity hover:opacity-70"
                  >
                    <span className="flex items-center gap-4">
                      <CategoryIcon
                        name={cat.icon as never}
                        className="text-[var(--color-muted)]"
                      />
                      <span className="font-display text-2xl italic text-[var(--color-fg)] md:text-3xl">
                        {cat.label}
                      </span>
                    </span>
                    <span
                      className="text-[var(--color-muted)] transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
