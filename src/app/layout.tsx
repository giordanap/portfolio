import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://giordanap.github.io/portfolio/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Giordan Arredondo | Senior Backend Engineer",
    template: "%s | Giordan Arredondo",
  },
  description:
    "Senior Backend Engineer specialized in Node.js, NestJS, TypeScript, AWS, APIs, microservices, distributed systems and production reliability.",
  keywords: [
    "Giordan Arredondo",
    "Senior Backend Engineer",
    "Backend Engineer",
    "Node.js",
    "NestJS",
    "TypeScript",
    "AWS",
    "Microservices",
    "Distributed Systems",
    "APIs",
    "SQS",
    "DLQ",
    "Lambda",
    "CloudWatch",
    "Production Reliability",
  ],
  authors: [{ name: "Giordan Arredondo" }],
  creator: "Giordan Arredondo",
  publisher: "Giordan Arredondo",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Giordan Arredondo | Senior Backend Engineer",
    description:
      "Backend-focused portfolio highlighting Node.js, NestJS, TypeScript, AWS, microservices, distributed systems and production reliability.",
    siteName: "Giordan Arredondo Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giordan Arredondo | Senior Backend Engineer",
    description:
      "Senior Backend Engineer focused on resilient APIs, cloud workflows and production-grade distributed systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
