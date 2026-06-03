import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceCategories, getCategoryBySlug, getServiceBySlug } from "@/lib/data/serviceCategories";
import { SITE_URL } from "@/lib/site";
import ServiceDetailPage from "@/components/pages/services/ServiceDetailPage";

export const dynamic = "force-static";

type Props = { params: Promise<{ category: string; service: string }> };

export async function generateStaticParams() {
  return serviceCategories.flatMap((cat) =>
    cat.items.map((item) => ({ category: cat.slug, service: item.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, service } = await params;
  const item = getServiceBySlug(category, service);
  if (!item) return {};
  return {
    title: item.label,
    description: item.description,
    alternates: { canonical: `${SITE_URL}/services/${category}/${service}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { category, service } = await params;
  const cat  = getCategoryBySlug(category);
  const item = getServiceBySlug(category, service);
  if (!cat || !item) notFound();
  return <ServiceDetailPage cat={cat} item={item} />;
}
