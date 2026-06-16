import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceCategories, getCategoryBySlug } from "@/lib/data/serviceCategories";
import { SITE_URL } from "@/lib/site";
import ServiceCategoryPage from "@/components/pages/services/ServiceCategoryPage";

export const dynamic = "force-static";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.title} Services in Lahore & Dubai | Outr Buzz`,
    description: cat.description,
    keywords: [
      `${cat.title.toLowerCase()} agency Lahore`,
      `${cat.title.toLowerCase()} services Dubai`,
      `${cat.title.toLowerCase()} company Pakistan`,
      ...cat.items.map((i) => i.label.toLowerCase()),
    ],
    alternates: { canonical: `${SITE_URL}/services/${cat.slug}` },
    openGraph: {
      url: `${SITE_URL}/services/${cat.slug}`,
      title: `${cat.title} Services in Lahore & Dubai | Outr Buzz`,
      description: cat.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceCategoryPage cat={cat} />
    </>
  );
}
