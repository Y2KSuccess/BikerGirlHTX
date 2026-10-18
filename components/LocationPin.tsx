interface LocationPinProps {
  href: string;
  label: string;
  className?: string;
}

/**
 * Small inline map-pin link — not a full embedded map, just a compact
 * visual anchor next to a place name that opens Google Maps on click/tap.
 */
export function LocationPin({ href, label, className = "" }: LocationPinProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${label} in Google Maps`}
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-fg)] hover:text-[var(--color-fg)] ${className}`}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </a>
  );
}
