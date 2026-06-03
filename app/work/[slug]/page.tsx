import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import CaseStudyPage from "@/components/pages/work/CaseStudyPage";
import { SITE_URL } from "@/lib/site";
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const url = `${SITE_URL}/work/${project.slug}`;
  return {
    title: `${project.title} — Case Study`,
    description: `${project.description} A case study by Outr Buzz.`,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${project.title} — Case Study | Outr Buzz`,
      description: project.description,
      images: [
        {
          url: project.coverImage,
          width: 1400,
          height: 930,
          alt: `${project.title} by Outr Buzz`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study | Outr Buzz`,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

export default async function CaseStudyRoute({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}/work/${project.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <CaseStudyPage project={project} />
    </>
  );
}
