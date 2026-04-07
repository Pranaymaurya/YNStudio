import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const siteUrl = "https://lumenforge.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LumenForge Studio | Digital Agency for Social, Web, and SaaS",
    template: "%s | LumenForge Studio",
  },
  description:
    "LumenForge Studio builds growth systems for modern brands through social media management, web and app development, and SaaS product delivery.",
  keywords: [
    "digital agency",
    "social media management",
    "web development",
    "app development",
    "SaaS solutions",
    "freelancer portfolio",
  ],
  openGraph: {
    title: "LumenForge Studio",
    description:
      "A conversion-focused digital agency delivering social strategy, premium websites, apps, and SaaS systems.",
    url: siteUrl,
    siteName: "LumenForge Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LumenForge Studio",
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
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
