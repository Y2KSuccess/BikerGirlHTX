import { CTAButton } from "@/components/CTAButton";
import { VideoScene } from "@/components/VideoScene";
import { MediaFrame } from "@/components/MediaFrame";
import { LINKS, VIDEOS } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

/**
 * Community / outdoor — the site opens up visually here. Sunny, bright,
 * daytime footage in deliberate contrast to the dark indoor sections.
 * "See the community" links to Instagram, where the community actually lives.
 */
export function CommunitySection() {
  return (
    <section className="relative bg-[var(--color-bg)] px-6 py-24 md:px-10 md:py-36 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <MediaFrame aspect="aspect-[9/16] md:aspect-[3/4]">
            <VideoScene
              src={VIDEOS.community.src}
              poster={VIDEOS.community.poster}
              className="h-full w-full"
              objectPosition="center 45%"
              ariaLabel="Outdoor community cycling event at Hughes Landing"
            />
          </MediaFrame>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <h2 className="font-display text-4xl italic leading-[1.05] text-[var(--color-fg)] md:text-5xl">
            <span className="block">{COPY.community.headlineTop}</span>
            <span className="block">{COPY.community.headlineBottom}</span>
          </h2>
          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-[var(--color-fg-soft)]">
            {COPY.community.body}
          </p>
          <p
            className="mt-6 text-2xl text-[var(--color-muted)]"
            style={{ fontFamily: "var(--font-script), var(--font-script-fallback)" }}
          >
            {COPY.community.accent}
          </p>
          <div className="mt-8">
            <CTAButton href={LINKS.instagram} external variant="outline-dark">
              {COPY.community.link}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
