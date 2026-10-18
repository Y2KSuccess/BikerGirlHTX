import { LINKS, LOCATION } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-ink)] px-6 py-14 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl italic text-[var(--color-cream)]">
            Chelsea Marie
          </p>
          <p className="mt-2 text-sm text-[var(--color-cream)]/60">
            {LOCATION.footerCity}
          </p>
          <p className="mt-1 text-sm text-[var(--color-cream)]/60">
            {COPY.footer.role}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chelsea Marie on Instagram"
            className="text-[var(--color-cream)]/70 transition-opacity hover:opacity-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a
            href={LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chelsea Marie on TikTok"
            className="text-[var(--color-cream)]/70 transition-opacity hover:opacity-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M16.5 3c.3 2.1 1.7 3.7 4 4v3c-1.4 0-2.8-.4-4-1.2V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3.1a2.4 2.4 0 1 0 1.6 2.3V3h3Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href={`mailto:${LINKS.collabEmail}`}
            aria-label="Email Chelsea Marie"
            className="text-[var(--color-cream)]/70 transition-opacity hover:opacity-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-2 border-t border-[var(--color-cream)]/10 pt-6 text-xs text-[var(--color-cream)]/45 md:flex-row md:items-center md:justify-between">
        <span>{COPY.footer.tagline}</span>
        <span>&copy; {new Date().getFullYear()} Chelsea Marie</span>
      </div>
    </footer>
  );
}
