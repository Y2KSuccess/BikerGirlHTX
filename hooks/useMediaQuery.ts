"use client";

import { useSyncExternalStore } from "react";

/**
 * Subscribes to a CSS media query via the browser's native
 * matchMedia/useSyncExternalStore pair -- the React-recommended way to
 * read external (non-React) state like this. Compared to the old
 * "useState(false) + useEffect(() => setState(mq.matches))" pattern it
 * replaces here:
 *  - no setState-inside-an-effect (what the project's lint warnings
 *    were flagging in useReducedMotion and RideExperience's isDesktop)
 *  - no first-paint flash -- the previous pattern always rendered the
 *    `false` default for one frame before the effect corrected it,
 *    which is exactly the "RideExperience briefly renders its mobile
 *    layout on desktop" flash the README listed as a known follow-up
 *  - SSR-safe: `serverSnapshot` is what gets used during server
 *    rendering (no `window` there), matching the previous behavior.
 */
export function useMediaQuery(query: string, serverSnapshot = false): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => serverSnapshot
  );
}
