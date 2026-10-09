import type { Metadata } from "next";
import "./globals.css";

const heroImage = "/images/jollof-hero.webp";

export const metadata: Metadata = {
  metadataBase: new URL("https://jollof-vibes-swedru.elishaafari0.chatgpt.site"),
  title: "Jollof Vibes — Ghanaian Jollof & Catering in Agona Swedru",
  description:
    "Made-with-love Ghanaian jollof packs, family trays and event catering in Agona Swedru. Order on WhatsApp or call 024 089 0049.",
  openGraph: {
    title: "Jollof Vibes — Good Food. Great Love.",
    description:
      "Ghanaian jollof packs, family trays and event catering in Agona Swedru.",
    images: [heroImage],
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Cormorant+Garamond:ital,wght@1,400;1,600&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
