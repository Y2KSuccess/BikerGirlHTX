interface SectionLabelProps {
  children: string;
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Small tracked-out label used only where it does real wayfinding work
 * (e.g. naming the signature "Ride Experience" moment or the booking
 * location) — not stamped above every heading as decoration.
 */
export function SectionLabel({
  children,
  tone = "dark",
  className = "",
}: SectionLabelProps) {
  const color =
    tone === "dark" ? "text-[var(--color-muted)]" : "text-[var(--color-muted-light)]";
  return (
    <p
      className={`text-xs font-medium tracking-[0.2em] uppercase ${color} ${className}`}
    >
      {children}
    </p>
  );
}
