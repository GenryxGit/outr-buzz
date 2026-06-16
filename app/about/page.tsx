import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import AboutPage from "@/components/pages/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us — Design Studio in Lahore & Dubai | Outr Buzz",
  description:
    "Outr Buzz is a creative design and development studio based in Lahore and Dubai. Meet our team of designers, developers, and brand strategists who build brands that demand attention.",
  keywords: [
    "design studio Lahore", "creative agency Dubai", "branding team Pakistan",
    "UI/UX designers Lahore", "web development team Dubai", "about Outr Buzz",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About Us — Design Studio in Lahore & Dubai | Outr Buzz",
    description:
      "Meet the team behind Outr Buzz — designers, developers, and strategists based in Lahore and Dubai building brands that demand attention.",
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
