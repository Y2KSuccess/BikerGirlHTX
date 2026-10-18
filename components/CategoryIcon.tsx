type CategoryIconName = "creator" | "fitness" | "brand" | "lifestyle" | "advocacy";

interface CategoryIconProps {
  name: CategoryIconName;
  className?: string;
}

/**
 * Small line-drawn icons for the "Beyond the Bike" category list.
 * Hand-picked per category rather than a generic icon-library import,
 * to match the site's restrained single-stroke visual language (same
 * weight/style as the map pin icon elsewhere on the site).
 */
export function CategoryIcon({ name, className = "" }: CategoryIconProps) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };
  const stroke = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (name) {
    case "creator":
      return (
        <svg {...common} className={className}>
          <rect x="3" y="7" width="14" height="11" rx="2" {...stroke} />
          <path d="M17 10.5 21 8v9l-4-2.5" {...stroke} />
        </svg>
      );
    case "fitness":
      return (
        <svg {...common} className={className}>
          <path d="M6 8v8M18 8v8" {...stroke} />
          <path d="M2 11v3M22 11v3" {...stroke} />
          <path d="M6 12h12" {...stroke} />
        </svg>
      );
    case "brand":
      return (
        <svg {...common} className={className}>
          <path
            d="m12 2.5 2.7 5.9 6.3.6-4.8 4.3 1.4 6.3L12 16.6l-5.6 3 1.4-6.3-4.8-4.3 6.3-.6L12 2.5Z"
            {...stroke}
          />
        </svg>
      );
    case "lifestyle":
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="12" r="4.5" {...stroke} />
          <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8" {...stroke} />
        </svg>
      );
    case "advocacy":
      return (
        <svg {...common} className={className}>
          <path
            d="M12 20s-7-4.4-9.2-9A5 5 0 0 1 12 6a5 5 0 0 1 9.2 5c-2.2 4.6-9.2 9-9.2 9Z"
            {...stroke}
          />
        </svg>
      );
  }
}
