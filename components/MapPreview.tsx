interface MapPreviewProps {
  href: string;
  embedSrc: string;
  label: string;
  className?: string;
}

/**
 * Small square map visual — OpenStreetMap's free, open-source, keyless
 * embed (openstreetmap.org/export/embed.html — no account, no API key,
 * no billing, ever). The embed includes its own required attribution
 * watermark in-frame. Wrapped in a link out to Google Maps for turn-by-
 * turn directions on click, since that's what most people have on their
 * phone already.
 *
 * The pin itself now carries two looping accents instead of sitting flat
 * behind the embed: a slow radar-style sweep (a conic-gradient wedge
 * rotating continuously — the same mechanism as the site's signature
 * spoke-wheel transition in Ride Experience, scaled down into a quiet
 * "something's live here" cue) and a soft expanding ping ring that marks
 * the exact point, the way a map app marks your current location. Both
 * sit in their own layer above the iframe so the map tiles stay fully
 * legible. `prefers-reduced-motion` already freezes all animations
 * site-wide via globals.css, so no extra handling is needed here.
 */
export function MapPreview({ href, embedSrc, label, className = "" }: MapPreviewProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${label} in Google Maps for directions`}
      className={`group relative block h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-deep)] ${className}`}
    >
      <iframe
        src={embedSrc}
        title={`Map showing ${label}`}
        className="pointer-events-none relative h-full w-full grayscale-[15%] transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Point-of-interest marker: radar sweep + ping ring, centered on the pin */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        {/* Slow continuous radar sweep */}
        <div
          className="absolute inset-0 rounded-full opacity-70 mix-blend-multiply"
          style={{
            background:
              "conic-gradient(from 0deg, var(--color-ink) 0deg, transparent 50deg, transparent 360deg)",
            animation: "map-pin-sweep 3.6s linear infinite",
          }}
        />
        {/* Expanding ping ring */}
        <div
          className="absolute inset-0 rounded-full border border-[var(--color-ink)]"
          style={{ animation: "map-pin-ping 2.4s cubic-bezier(0,0,0.2,1) infinite" }}
        />
        {/* Static pin glyph at the center */}
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-ink)]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z"
              fill="var(--color-bg-deep)"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <circle cx="12" cy="9" r="2.3" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />

      <style>{`
        @keyframes map-pin-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes map-pin-ping {
          0% { transform: scale(0.6); opacity: 0.9; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
