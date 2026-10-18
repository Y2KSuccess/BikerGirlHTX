# Chelsea Marie — V0

A cinematic personal-brand homepage for Chelsea Marie, built with Next.js (App Router), TypeScript, Tailwind CSS v4, and GSAP/ScrollTrigger.

## v0.7.1 changes

- **Map embed switched from Google to OpenStreetMap** — fully free, open-source, no account or API key ever required (`openstreetmap.org/export/embed.html`). The map box still links out to Google Maps on click for familiar turn-by-turn directions, but the visual preview itself has zero dependency on a Google account or billing.
- **See `HANDOFF-BRIEF.md`** (one level up, alongside this project folder) for the next round of work — a hand-drawn accent motif and a signature cycling-themed transition, handed off to Claude Cowork.

## v0.7 changes

- **Bigger header text** — "Chelsea Marie" and the About/Ride/Collab nav links are a size larger, on both desktop and mobile.
- **Real map preview added.** A small square live map (Google's free keyless embed — no API key, no billing) now sits in the "Your Bike Is Waiting" booking section, linking out to the exact studio location on click. The small pin icon next to "Houston, TX" in the Chelsea in Action section stays as-is (a full map box would crowd that tighter layout). Note: this embed loads `maps.google.com` at runtime, so it needs normal internet access to render — it could not be visually verified from this sandbox (network-restricted, same reason fonts/videos needed workarounds earlier), but the URL format matches Google's documented, still-active keyless embed pattern and should render correctly once deployed or viewed locally.
- **Fixed the stuck-frame video** in the Booking section — it was a static poster image standing in for video by design; now it's real autoplaying footage matching every other video section on the site.
- **Added custom icons** to the Beyond the Bike category list (Creator, Fitness, Brand, Lifestyle, Advocacy) — replacing the plain 01–05 numbers with hand-drawn line icons (camera, barbell, star, sun, heart) matching the site's existing icon style.
- **Beyond the Bike categories are now clickable**, each linking to Instagram for now. There's no dedicated page per category yet — swap these in `components/sections/BeyondBike.tsx` once there's a better destination per category.

## v0.6 changes

- **Added a real swipeable carousel** to the Collaboration section, replacing the old static 3-tile grid. Uses native horizontal scroll-snap (works with touch, trackpad, and scroll wheel — no drag library needed). Content and order live in `lib/site-config.ts` → `CAROUSEL_ITEMS`; add, remove, or reorder items there.
- **New assets added:** two lifestyle/brand photos (storefront portrait, a duo shot with another RIDE instructor) and three new video clips (a themed anniversary celebration, a red-lit class, a blue-lit class — all trimmed/compressed the same way as the rest of the site's footage).
- One uploaded asset — a phone screen recording of 5-star class reviews — was intentionally left out of the carousel. It's valuable social proof but doesn't fit the site's cinematic visual language as a video tile; worth considering as text testimonials somewhere if that's ever wanted.
- Hardened the carousel's video play/pause logic against a race condition where rapid visibility changes (right at the scroll-snap boundary) could cancel an in-flight `play()` call.
- **Still open:** higher-resolution source video/photos (current assets are 720×1280 / similar, since that's what's come through so far).

## v0.5 changes

- **Real studio address wired in.** The map pin in "Chelsea in Action" and the location line in "Book a Ride" now point to the exact RIDE Indoor Cycling location (The Woodlands) instead of the general Hughes Landing placeholder.
- Updated `LOCATION.studio` from "Hughes Landing" (the surrounding development) to "RIDE Indoor Cycling" (the actual studio name) for accuracy.
- **Still open:** higher-resolution source video (current footage is 720×1280 throughout), and additional Instagram photos/videos if the Collaboration section's tile grid should become a real swipeable carousel.

## v0.4 changes

- **"Chelsea in Action" text redesigned as a size pyramid**: "Houston, TX" (with a small map pin linking to Google Maps) → "RIDE Indoor Cycling" (larger) → "Your favorite instructor ✨" (largest, the payoff line).
- The map pin currently points at Hughes Landing generally (`lib/site-config.ts` → `LOCATION.mapsUrl`) — swap in the exact studio address once available.
- **Still needed from Chelsea/Sebastian:** exact studio address (for the pin), higher-resolution source video if available (current source is 720×1280 throughout, since that's what the uploaded files were), and additional Instagram photos/videos if the Collaboration section's 3-tile grid should become a real swipeable carousel — it currently just recycles stills from the same three videos already used elsewhere on the site.

## v0.3 changes

- **Fixed a real console error:** the Ride Experience section reused the same video file for two different beats (RIDE and MOVE both used `ride-redblue.mp4` with different crops), and the crossfade component was keying each layer by its file path — so React saw two identical keys and warned about it. Now keyed by position in the sequence instead, which is safe since that order never changes.
- **Suppressed a hydration warning** on the four gradient-overlay divs (Hero, Ride Experience, Final CTA) that was showing up for anyone using the Dark Reader browser extension — it injects `data-darkreader-*` attributes into the page after load, which React flags as a server/client mismatch. This isn't a bug in the site; `suppressHydrationWarning` is the standard fix for third-party extensions modifying the DOM post-hydration.

## v0.2 changes

- **"My why" and "See the community"** now link to Chelsea's Instagram as real, clearly-styled outline buttons — previously these were plain text with an arrow that looked clickable but went nowhere. Swap the `href` in `WhySheRides.tsx` / `CommunitySection.tsx` to something else once real destinations exist (an on-page anchor for "My why" once her personal statement is written, for instance).
- **Fixed the negative-space gap in "Chelsea in Action."** The text column (Houston, TX / RIDE Indoor Cycling / Instructor) was bottom-aligned against a tall portrait video, leaving empty space above it — it's now vertically centered instead.
- **"Instructor" is now the large, flashy italic word** in that same section, instead of "RIDE Indoor Cycling."
- **Added an exclamation point** to "See you on the bike!" in the Final CTA.

## v0.1 changes

- **Fixed video cropping.** All six source clips are portrait (720×1280). Several inset sections (Introduction, Chelsea in Action, Community, Booking, Collaboration tiles) were previously forcing that footage into wide horizontal crop boxes, which punched in hard and looked soft/pixelated even though the source files are full quality. Those sections now use portrait or near-portrait frames instead, matching the footage's real shape — sharp on both desktop and mobile.
- **Shortened the Ride Experience scroll length** from 400vh to 220vh, so the pinned RIDE/MOVE/PUSH/CONNECT sequence resolves in about one scroll instead of three or four.
- Full-bleed sections (Hero, Ride Experience background, Final CTA) are unchanged — those are meant to fill the whole screen and a light crop there is intentional, not a bug.

## Running the project

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. For a production build:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        — root layout, self-hosted fonts (Fraunces, Inter, Caveat)
  page.tsx           — assembles all sections in order
  globals.css        — theme tokens (Theme A active, Theme B stubbed)
components/
  Header.tsx          — nav, transitions from transparent to solid on scroll
  Footer.tsx
  CTAButton.tsx        — shared pill button (dark/light/outline variants)
  SectionLabel.tsx      — small tracked-out label, used only where it aids wayfinding
  AnimatedHeadline.tsx   — line-by-line reveal (currently unused directly; Hero has its own)
  VideoScene.tsx          — single autoplay/muted/loop video, lazy-loads off-screen, respects reduced motion
  ScrollFadeMedia.tsx      — stacked video cross-dissolve driven by scroll progress
  MediaFrame.tsx            — aspect-ratio-constrained crop container
  sections/
    Hero.tsx
    Introduction.tsx
    RideExperience.tsx       — the signature pinned desktop sequence / simplified mobile stack
    EditorialRideSection.tsx  — "Chelsea in Action"
    WhySheRides.tsx
    BookingSection.tsx
    CommunitySection.tsx
    BeyondBike.tsx
    CollaborationSection.tsx
    FinalCTA.tsx
lib/
  site-config.ts   — all external URLs + video asset paths, centralized
  copy.ts           — all on-page copy; PLACEHOLDER items are flagged in comments
hooks/
  useReducedMotion.ts
public/
  videos/    — 6 trimmed, compressed clips (~11MB total)
  posters/    — matching poster frames
  fonts/       — self-hosted Fraunces/Inter/Caveat variable fonts
```

## Which video was used where

All six source clips were portrait (720×1280) — this shaped the crop/framing decisions throughout, since the brief's guidance assumed landscape footage.

| File | Content | Used in |
|---|---|---|
| `hero-blue.mp4` | Dark, blue-lit studio, instructor visible | **Hero** |
| `intro-bw.mp4` | Black & white, celebratory, "this feeling" IG caption baked into source | **Introduction** |
| `ride-redblue.mp4` | Red/blue club lighting, most dynamic standing shots | **Ride Experience** — RIDE / MOVE beats |
| `action-red.mp4` | Close, warm red-toned, clearest face/personality shots | **Chelsea in Action** editorial section, and **Ride Experience** PUSH beat |
| `connect-blue.mp4` | Towel-throw, singing-together, celebratory | **Ride Experience** CONNECT beat, and **Final CTA** |
| `community-outdoor.mp4` | Daytime outdoor event at Hughes Landing (lakefront pavilion, confirmed via wide shots) | **Community / Outdoor** section |

## Sections complete

All 11 sections from the brief are built and wired up in order: Hero, Introduction, Ride Experience, Chelsea in Action, Why She Rides, Book a Ride, Community, Beyond the Bike, Collaboration, Final CTA, Footer.

## Placeholder copy still needing Chelsea's approval

Everything is centralized in `lib/copy.ts` with inline comments marking placeholder status. Specifically:

- **Introduction** — "Former teacher turned instructor..." bio line and the "More movement, a brighter you" handwritten accent
- **Why She Rides** — the entire body copy ("Movement. Community. Confidence...") is concept copy pending Chelsea's real personal statement
- **Community section** — body copy and handwritten accent are draft
- **Beyond the Bike** — category list and framing line are draft, not a full résumé
- Nothing else in the copy invents biography, quotes, or personal history beyond what the brief supplied.

## How to run the project

See "Running the project" above. Requires Node 18+.

## Where theme colors are stored

`app/globals.css` — `:root` block defines Theme A (Clean/Minimal/Cream) as CSS custom properties (`--color-bg`, `--color-fg`, `--color-muted`, etc.). Theme B (Girly Pop) values are written out in a commented block directly below, ready to activate later via a `data-theme` attribute — not wired to a live toggle in V0 since the brief asked for Theme A only.

## Where CTA URLs are stored

`lib/site-config.ts` — `LINKS` object holds the booking URL, RIDE app URL, collab email, and social links in one place. Nothing is hardcoded inline in components.

## How the scroll-fade system works (high level)

Two mechanisms handle the cinematic transitions:

1. **`VideoScene`** — a single video that lazy-loads via `IntersectionObserver` once it's ~400px from the viewport (except the hero, which loads immediately). Reduced-motion users get the poster image instead, no video element at all.
2. **`ScrollFadeMedia`** — stacks multiple `<video>` layers in the same container, absolutely positioned on top of each other. A GSAP timeline with `scrollTrigger.scrub` ties each layer's opacity (and a subtle 1.02→1.00 scale) directly to scroll progress through a tall trigger element, so layer N fades out exactly as layer N+1 fades in. This powers the Ride Experience section.

The Ride Experience section additionally uses a **pinned sticky container** (`position: sticky` inside a `400vh` tall wrapper) on desktop only — the video stays fixed full-screen while RIDE / MOVE / PUSH / CONNECT crossfade as text, driven by the same scrubbed timeline. On mobile (or with reduced motion), this collapses to four simple stacked full-height sections with no pin and no scroll-jacking, per the brief's mobile requirements.

## What I recommend improving in V0.1

1. **Source footage cleanup** — the `intro-bw.mp4` clip has "this feeling >" burned into the frame from its original Instagram export. Worth asking Chelsea for a clean re-export if she has the original, since it reads as an accidental UI artifact rather than intentional design.
2. **Chelsea's real copy** — swap in her actual personal statement for "Why She Rides," a real bio line for the Introduction, and decide whether "Beyond the Bike" needs real portfolio links per category.
3. **Theme B build-out** — the color tokens are ready; building the actual Girly Pop variant would mean deciding whether it's a toggle, a separate route, or a separate deployment.
4. **WebM versions** — brief asked for WebM+MP4 fallback; V0 ships MP4-only (H.264) for simplicity. Worth adding WebM transcodes for the file-size win on supporting browsers.
5. **First-paint layout flash** — the Ride Experience section briefly renders its mobile layout before detecting desktop viewport width on initial mount; could be resolved with a CSS-only approach (media-query-driven visibility) instead of a JS `matchMedia` check, avoiding the flash entirely.
6. **Real content for "My why" and "See the community"** — both currently render as inert labels since they have no destination yet; once Chelsea decides whether these become anchor links, modal content, or external links, wire them up properly.
