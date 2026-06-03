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
    title: `${cat.title} Services`,
    description: cat.description,
    alternates: { canonical: `${SITE_URL}/services/${cat.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();
  return <ServiceCategoryPage cat={cat} />;
}
