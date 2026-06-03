import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import WorkPage from "@/components/pages/work/WorkPage";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies from Outr Buzz — brand identity, UI/UX design, product strategy, and development projects.",
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: {
    url: `${SITE_URL}/work`,
    title: "Work | Outr Buzz",
    description:
      "Selected case studies — brand identity, UI/UX design, product strategy, and development.",
  },
};

export default function WorkRoute() {
  return <WorkPage />;
}
