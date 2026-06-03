import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import AboutPage from "@/components/pages/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Outr Buzz approaches strategy, design, and delivery for brands that need clarity and execution.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About | Outr Buzz",
    description:
      "Learn how Outr Buzz approaches strategy, design, and delivery for brands that need clarity and execution.",
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
