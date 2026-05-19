import type { Metadata } from "next";
import "./globals.css";

const heroImage = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1920";

export const metadata: Metadata = {
  title: "EDMA Restaurant — Obuasi's Finest Dining",
  description:
    "Authentic Ghanaian and continental dishes in the heart of Obuasi. Visit us or call +233 20 932 8888.",
  openGraph: {
    title: "EDMA Restaurant — Obuasi's Finest Dining",
    description:
      "Authentic Ghanaian and continental dishes in the heart of Obuasi. Visit us or call +233 20 932 8888.",
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
