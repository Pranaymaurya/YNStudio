import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://RP.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RP Studio | Digital Agency for Social, Web, and SaaS",
    template: "%s | RP Studio",
  },
  description:
    "RP Studio builds growth systems for modern brands through social media management, web and app development, and SaaS product delivery.",
  keywords: [
    "digital agency",
    "social media management",
    "web development",
    "app development",
    "SaaS solutions",
    "freelancer portfolio",
  ],
  openGraph: {
    title: "RP Studio",
    description:
      "A conversion-focused digital agency delivering social strategy, premium websites, apps, and SaaS systems.",
    url: siteUrl,
    siteName: "RP Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RP Studio",
    description:
      "Social media management, app and web development, and SaaS solutions for ambitious brands.",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
