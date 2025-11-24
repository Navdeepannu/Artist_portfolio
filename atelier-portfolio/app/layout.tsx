import type { Metadata } from "next";
import {
  Playfair_Display as PlayfairDisplay,
  Space_Grotesk as SpaceGrotesk,
} from "next/font/google";
import "./globals.css";

const display = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const grotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Isabel Laurent Studio — Contemporary Painter & Educator",
  description:
    "Premium, minimal portfolio for Isabel Laurent: contemporary oil painter, exhibiting artist, and private painting mentor.",
  keywords: [
    "artist portfolio",
    "painting classes",
    "oil painter",
    "fine art",
    "atelier",
  ],
  openGraph: {
    title: "Isabel Laurent Studio — Contemporary Painter & Educator",
    description:
      "Explore signature collections, intimate ateliers, and bespoke commissions by Lisbon-based painter Isabel Laurent.",
    type: "website",
    url: "https://isabellaurent.studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Abstract oil painting in muted earthy tones",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${grotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
