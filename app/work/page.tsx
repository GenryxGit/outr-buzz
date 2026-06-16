import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import WorkPage from "@/components/pages/work/WorkPage";

export const metadata: Metadata = {
  title: "Our Work — Portfolio & Case Studies | Outr Buzz",
  description:
    "Explore Outr Buzz's portfolio of brand identity, web design, UI/UX, and social media projects for clients across Pakistan, Dubai, and beyond. Real results, real work.",
  keywords: [
    "design portfolio Pakistan", "branding case studies", "web design portfolio Lahore",
    "UI/UX case studies", "social media portfolio Dubai", "creative agency work",
  ],
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: {
    url: `${SITE_URL}/work`,
    siteName: "Outr Buzz",
    title: "Our Work — Portfolio & Case Studies | Outr Buzz",
    description:
      "Brand identity, web design, UI/UX, and social media portfolio for clients across Pakistan, Dubai, and beyond.",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Outr Buzz Portfolio" }],
  },
};

export default function WorkRoute() {
  return <WorkPage />;
}
