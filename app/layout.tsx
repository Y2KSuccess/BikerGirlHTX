import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  src: [
    { path: "../public/fonts/Fraunces-Variable.ttf", style: "normal" },
    { path: "../public/fonts/Fraunces-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/Inter-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
});

const caveat = localFont({
  src: "../public/fonts/Caveat-Variable.ttf",
  variable: "--font-script",
  display: "swap",
});

const TITLE = "Chelsea Marie | Instructor. Creator. Professional Hype Woman.";
const DESCRIPTION =
  "Welcome, friend. Ride indoor cycling with Chelsea Marie at Hughes Landing, The Woodlands, TX. Move. Connect. Ride.";

// NOTE: set `metadataBase` to the real domain once it's live (e.g.
// new URL("https://chelseamarieride.com")) -- without it, the og:image
// / twitter:image URLs below resolve relative to whatever origin the
// page happens to be served from, which is fine for local/preview but
// should be pinned once there's a real domain.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [{ url: "/posters/hero-blue.jpg", width: 1280, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/posters/hero-blue.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
