// ============================================================
// SITE CONFIG — single source of truth for links, contact info,
// and video asset paths. Update here, not inline in components.
// ============================================================

export const LINKS = {
  bookRide: "https://ride-indoorcycling.com/hughes-landing-schedule/",
  rideApp: "https://apps.apple.com/us/app/ride-indoor-cycling/id1464207497",
  collabEmail: "hello@cmariecollabs.com",
  instagram: "https://www.instagram.com/cmarie_tx/",
  tiktok: "https://www.tiktok.com/@cmarie_tx",
} as const;

export const COLLAB_MAILTO = `mailto:${LINKS.collabEmail}`;

export const LOCATION = {
  studio: "RIDE Indoor Cycling",
  city: "The Woodlands, TX",
  footerCity: "Houston, TX",
  mapQuery: "RIDE Indoor Cycling, The Woodlands, TX",
  // The link the map box opens when clicked — Google Maps, since that's
  // what most people have installed/expect on their phone.
  mapsUrl:
    "https://www.google.com/maps/place/RIDE+Indoor+Cycling+(The+Woodlands)/@30.1703385,-95.4713853,17z/data=!3m1!4b1!4m6!3m5!1s0x864736ce6e556f89:0x32c0af34a62febdf!8m2!3d30.1703385!4d-95.4713853",
  // The visual preview embedded in the small map box — OpenStreetMap's
  // free, open-source, keyless embed (no account, no API key, no billing:
  // https://www.openstreetmap.org/export/embed.html). Requires attribution
  // per their terms — MapPreview renders a small credit line for this.
  mapEmbedSrc:
    "https://www.openstreetmap.org/export/embed.html?bbox=-95.4753853%2C30.1663385%2C-95.4673853%2C30.1743385&layer=mapnik&marker=30.1703385%2C-95.4713853",
} as const;

export const VIDEOS = {
  hero: {
    src: "/videos/hero-blue.mp4",
    poster: "/posters/hero-blue.jpg",
  },
  intro: {
    src: "/videos/intro-bw.mp4",
    poster: "/posters/intro-bw.jpg",
  },
  ride: {
    src: "/videos/ride-redblue.mp4",
    poster: "/posters/ride-redblue.jpg",
  },
  action: {
    src: "/videos/action-red.mp4",
    poster: "/posters/action-red.jpg",
  },
  connect: {
    src: "/videos/connect-blue.mp4",
    poster: "/posters/connect-blue.jpg",
  },
  community: {
    src: "/videos/community-outdoor.mp4",
    poster: "/posters/community-outdoor.jpg",
  },
} as const;

// Content for the swipeable carousel in the Collaboration section.
// Mixes photos and short video loops. Add/remove/reorder items here —
// no component changes needed. Each item needs a unique `id`.
export type CarouselItem =
  | { id: string; type: "image"; src: string; alt: string }
  | { id: string; type: "video"; src: string; poster: string; alt: string };

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: "storefront-portrait",
    type: "image",
    src: "/images/carousel/storefront-portrait.jpg",
    alt: "Chelsea posing outside the RIDE studio",
  },
  {
    id: "celebration",
    type: "video",
    src: "/videos/carousel/celebration.mp4",
    poster: "/posters/carousel/celebration.jpg",
    alt: "Chelsea celebrating a themed anniversary ride with glow sticks and balloons",
  },
  {
    id: "lifestyle-duo",
    type: "image",
    src: "/images/carousel/lifestyle-duo.jpg",
    alt: "Chelsea and a fellow RIDE instructor in studio branded apparel",
  },
  {
    id: "redclass",
    type: "video",
    src: "/videos/carousel/redclass.mp4",
    poster: "/posters/carousel/redclass.jpg",
    alt: "Chelsea leading a red-lit evening class",
  },
  {
    id: "blueclass",
    type: "video",
    src: "/videos/carousel/blueclass.mp4",
    poster: "/posters/carousel/blueclass.jpg",
    alt: "Chelsea leading a blue-lit morning class",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#introduction" },
  { label: "Ride", href: "#ride-experience" },
  { label: "Collab", href: "#collaboration" },
] as const;
