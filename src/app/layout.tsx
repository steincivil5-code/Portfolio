import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { contactInfo, seoConfig, personalInfo } from "@/lib/data";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = seoConfig.canonicalUrl ?? "https://arthurvega.dev";

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    title: seoConfig.title,
    description: seoConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  description: seoConfig.description,
  url: siteUrl,
  email: contactInfo.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: contactInfo.location,
  },
  sameAs: contactInfo.socialLinks.map((link) => link.url),
  knowsAbout: [
    "Large Language Models",
    "AI Agents",
    "RAG Systems",
    "Full-Stack Engineering",
    "Cloud Architecture",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
