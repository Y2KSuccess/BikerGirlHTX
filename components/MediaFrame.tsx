import { ReactNode } from "react";

interface MediaFrameProps {
  children: ReactNode;
  aspect?: string;
  className?: string;
}

/**
 * A simple aspect-ratio-constrained frame for editorial media placements
 * (portrait crops, asymmetric grid tiles). Keeps object-fit/crop logic
 * consistent across sections without introducing a card system.
 */
export function MediaFrame({
  children,
  aspect = "aspect-[3/4]",
  className = "",
}: MediaFrameProps) {
  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      {children}
    </div>
  );
}
