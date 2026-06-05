import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/lenis";
import Cursor from "@/components/layout/Cursor";
import { SITE_URL } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Display font — used for large statement headings (e.g. the service CTA)
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OUTR BUZZ — Design. Build. Buzz.",
    template: "%s | Outr Buzz",
  },
  description:
    "Outr Buzz is a design and development studio for brands that demand attention. UI/UX design, product strategy, brand identity, and development.",
  keywords: [
    "UI/UX design", "brand identity", "web design", "product strategy",
    "design studio", "branding agency", "development", "Lahore", "Dubai",
  ],
  authors: [{ name: "Outr Buzz", url: SITE_URL }],
  creator: "Outr Buzz",
  publisher: "Outr Buzz",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Outr Buzz",
    title: "OUTR BUZZ — Design. Build. Buzz.",
    description:
      "A studio for brands that demand attention. UI/UX design, product strategy, brand identity, and development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OUTR BUZZ — Design. Build. Buzz.",
    description:
      "A studio for brands that demand attention. UI/UX design, product strategy, brand identity, and development.",
    creator: "@outrbuzz",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${syne.variable}`}>
      <head>
        {/* Preconnect to external image CDNs used across the site */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* JSON-LD — Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "Outr Buzz",
                  url: SITE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/logo.png`,
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "hello@outrbuzz.com",
                    contactType: "customer support",
                  },
                  address: [
                    {
                      "@type": "PostalAddress",
                      addressLocality: "Lahore",
                      addressCountry: "PK",
                    },
                    {
                      "@type": "PostalAddress",
                      addressLocality: "Dubai",
                      addressCountry: "AE",
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/outerbuzz",
                    "https://www.linkedin.com/company/outerbuzz/",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "Outr Buzz",
                  publisher: { "@id": `${SITE_URL}/#organization` },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <Cursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
